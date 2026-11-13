/* YouTube playback and timed transcripts for the Media page. */
window.SC_canEmbedYouTube = function () {
  return /^https?:$/.test(window.location.protocol) && window.origin !== "null";
};

// The iframe's native controls remain available when autoplay is blocked.
window.SC_loadYouTubeFrame = function (frame, id, end) {
  var url = new URL("https://www.youtube.com/embed/" + id);
  url.search = new URLSearchParams({
    enablejsapi: "1", origin: window.location.origin, autoplay: "1",
    playsinline: "1", rel: "0", hl: document.documentElement.lang === "fr" ? "fr" : "en"
  });
  if (end) url.searchParams.set("end", end);
  frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
  frame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
  frame.setAttribute("allowfullscreen", "");
  frame.src = url.href;
};

(function () {
  "use strict";
  var api;
  function loadApi() {
    if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
    if (!api) {
      api = new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        var timeout = setTimeout(reject, 12000);
        window.onYouTubeIframeAPIReady = function () {
          clearTimeout(timeout);
          resolve(window.YT);
        };
        script.src = "https://www.youtube.com/iframe_api";
        script.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        script.onerror = function () { clearTimeout(timeout); reject(); };
        document.head.appendChild(script);
      });
    }
    return api;
  }

  var messages = {
    local: [
      "Open the published site or use the local HTTP preview to play this video here.",
      "Pour lire la vidéo ici, ouvrez le site publié ou lancez l’aperçu HTTP local."
    ],
    blocked: [
      "Select Play inside the video player to begin.",
      "Pour démarrer la vidéo, appuyez sur Lecture dans le lecteur."
    ],
    identity: [
      "YouTube could not verify this page. Open the published site directly in your browser.",
      "YouTube n’a pas pu vérifier cette page. Ouvrez le site publié directement dans votre navigateur."
    ],
    error: [
      "YouTube could not play this video here.",
      "YouTube n’a pas pu lire cette vidéo sur cette page."
    ],
    controls: [
      "Use the controls inside the video player.",
      "Utilisez les commandes dans le lecteur vidéo."
    ]
  };

  window.SC_videoNotice = function (container, status) {
    var notice = container.querySelector(".video-notice");
    if (!notice) {
      if (!status) return;
      notice = document.createElement("p");
      notice.className = "video-notice";
      notice.setAttribute("role", "status");
      container.prepend(notice);
    }
    notice.hidden = !status;
    if (status) notice.innerHTML = '<span class="lang-en">' + messages[status][0] +
      '</span><span class="lang-fr">' + messages[status][1] + '</span>';
  };

  window.SC_connectYouTube = function (frame, actions, controls, onPlaybackError) {
    function unavailable() {
      if (controls) controls.unavailable();
      window.SC_videoNotice(actions, "controls");
    }
    loadApi().then(function (YT) {
      var readyTimeout = setTimeout(unavailable, 12000);
      new YT.Player(frame, {
        events: {
          onReady: function (event) {
            clearTimeout(readyTimeout);
            if (controls) controls.ready(event.target);
          },
          onStateChange: function (event) {
            if (event.data === YT.PlayerState.PLAYING) window.SC_videoNotice(actions);
            if (controls) controls.state(event.data === YT.PlayerState.PLAYING);
          },
          onAutoplayBlocked: function () {
            window.SC_videoNotice(actions, "blocked");
          },
          onError: function (event) {
            clearTimeout(readyTimeout);
            if (controls) controls.unavailable();
            if (onPlaybackError) onPlaybackError(event.data);
            else window.SC_videoNotice(actions, event.data === 153 ? "identity" : "error");
          }
        }
      });
    }).catch(unavailable);
  };
})();

window.SC_subtitledPlayer = function (cfg) {
  "use strict";
  var row = cfg.row, txt = cfg.txt,
      playBtn = cfg.playBtn, playLabel = cfg.playLabel,
      backBtn = cfg.backBtn, fwdBtn = cfg.fwdBtn,
      restartBtn = cfg.restartBtn, langsBox = cfg.langs,
      tracks = cfg.tracks;
  var player, playing = false, timer, shown = null;
  var manual = false, sel, langBtns = {};
  var LANGS = Object.keys(tracks).concat("off");
  var LABELS = { en: "English", fr: "Français" };
  var buttons = [playBtn, backBtn, fwdBtn, restartBtn].filter(Boolean);
  buttons.forEach(function (button) { button.disabled = true; });
  function pageLang() { return (window.SC_lang ? window.SC_lang() : "en") === "fr" ? "fr" : "en"; }
  function offLabel() { return pageLang() === "fr" ? "Désactivés" : "Off"; }
  function missingNote() {
    return pageLang() === "fr"
      ? "La transcription dans cette langue n'est pas encore disponible sur ce site."
      : "The transcript in this language is not available on this site yet.";
  }
  function subsOn() { return sel !== "off"; }
  function segs() { return sel && tracks[sel] ? tracks[sel] : null; }
  /* binary search: index of the last segment with start <= t, kept
     only when t also falls before its end; -1 during silence/music */
  function findIdx(s, t) {
    var lo = 0, hi = s.length - 1, ans = -1;
    while (lo <= hi) { var mid = (lo + hi) >> 1; if (s[mid].start <= t) { ans = mid; lo = mid + 1; } else { hi = mid - 1; } }
    return (ans >= 0 && t < s[ans].end) ? ans : -1;
  }
  function render() {
    if (!subsOn() || !player) { shown = null; txt.textContent = ""; return; }
    var s = segs(), want;
    if (!s) { want = missingNote(); }
    else { var t = player.getCurrentTime() || 0, i = findIdx(s, t); want = i >= 0 ? s[i].text : ""; }
    if (want !== shown) { shown = want; txt.textContent = want; }
  }
  function setLabel() {
    var fr, en;
    if (playing) { fr = "⏸ Mettre en pause"; en = "⏸ Pause video"; }
    else { fr = "▶ Lire la vidéo"; en = "▶ Play video"; }
    var sp = playLabel ? (playLabel.querySelector("span") || playLabel) : null;
    if (sp) sp.textContent = pageLang() === "fr" ? fr : en;
    playBtn.setAttribute("aria-pressed", playing ? "true" : "false");
  }
  function paintLangs() {
    for (var i = 0; i < LANGS.length; i++) {
      var k = LANGS[i], b = langBtns[k];
      if (!b) continue;
      b.setAttribute("aria-pressed", sel === k ? "true" : "false");
      if (k === "off") b.textContent = offLabel();
    }
    row.classList.toggle("subs-off", !subsOn());
  }
  function choose(k, isManual) {
    sel = k;
    if (isManual) manual = true;
    paintLangs();
    shown = null;
    render();
  }
  /* build the language selector buttons */
  for (var li = 0; li < LANGS.length; li++) {
    (function (k) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "sub-btn sub-lang";
      b.textContent = k === "off" ? offLabel() : LABELS[k];
      b.setAttribute("aria-pressed", "false");
      b.setAttribute("aria-label", (k === "off" ? "Subtitles off / Sous-titres désactivés" : "Subtitles: " + LABELS[k] + " / Sous-titres : " + LABELS[k]));
      b.addEventListener("click", function () { choose(k, true); });
      langBtns[k] = b;
      langsBox.appendChild(b);
    })(LANGS[li]);
  }
  choose(pageLang() === "fr" ? "fr" : "en", false);
  playBtn.addEventListener("click", function () {
    if (playing) player.pauseVideo();
    else player.playVideo();
  });
  function seekBy(seconds) {
    var limit = cfg.end || player.getDuration() || Infinity;
    var next = Math.min(limit, Math.max(0, player.getCurrentTime() + seconds));
    player.seekTo(next, true);
    render();
  }
  backBtn.addEventListener("click", function () { seekBy(-10); });
  fwdBtn.addEventListener("click", function () { seekBy(10); });
  restartBtn.addEventListener("click", function () {
    player.seekTo(0, true);
    player.playVideo();
  });
  window.addEventListener("hashchange", function () {
    setTimeout(function () {
      if (playing && !document.getElementById("page-media").classList.contains("on")) {
        player.pauseVideo();
      }
    }, 80);
  });
  setLabel();
  /* A page-language switch: re-apply the state label, refresh the
     Off button, and - unless the visitor chose a subtitle language
     manually - move the default to the new page language. */
  if (window.MutationObserver) {
    new MutationObserver(function () {
      setLabel();
      if (!manual) { choose(pageLang() === "fr" ? "fr" : "en", false); }
      else { paintLangs(); shown = null; render(); }
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  }
  function state(isPlaying) {
    playing = isPlaying;
    clearInterval(timer);
    if (playing) timer = setInterval(render, 250);
    render();
    setLabel();
  }
  return {
    ready: function (connectedPlayer) {
      player = connectedPlayer;
      buttons.forEach(function (button) { button.disabled = false; });
      state(player.getPlayerState() === window.YT.PlayerState.PLAYING);
    },
    state: state,
    unavailable: function () {
      player = null;
      buttons.forEach(function (button) { button.disabled = true; });
      state(false);
    }
  };
};

/* ---- Olympiad video wiring (static markup in index.html) ---- */
(function () {
  "use strict";
  var row = document.getElementById("subRow"),
      txt = document.getElementById("subText"),
      frame = document.getElementById("olympiad-video"),
      playBtn = document.getElementById("subPlay"),
      playLabel = document.getElementById("subPlayLabel"),
      backBtn = document.getElementById("subBack"),
      fwdBtn = document.getElementById("subFwd"),
      restartBtn = document.getElementById("subRestart"),
      langsBox = document.getElementById("subLangs");
  if (!row || !txt || !frame || !playBtn || !langsBox ||
      typeof SUBTITLES_EN === "undefined" || typeof SUBTITLES_FR === "undefined") return;
  var poster = document.getElementById("olympiad-poster"),
      actions = document.getElementById("olympiad-actions"),
      note = document.getElementById("olympiad-sub-note");
  if (!poster || !actions || !note) return;
  var watch = document.getElementById("olympiad-watch");
  var posterLabel = document.getElementById("olympiad-inline-label");
  var transcript = document.getElementById("olympiad-transcript");
  var transcriptCues = document.getElementById("olympiad-transcript-cues");
  var tracks = { en: SUBTITLES_EN, fr: SUBTITLES_FR };
  var renderedLanguage;
  function renderTranscript() {
    var lang = document.documentElement.lang === "fr" ? "fr" : "en";
    if (!transcript.open || renderedLanguage === lang) return;
    renderedLanguage = lang;
    var fragment = document.createDocumentFragment();
    var bucket = -1, paragraph;
    tracks[lang].forEach(function (cue) {
      var next = Math.floor(cue.start / 30);
      if (next !== bucket) {
        bucket = next;
        paragraph = document.createElement("p");
        var stamp = document.createElement("span");
        stamp.className = "transcript-time";
        var seconds = bucket * 30;
        stamp.textContent = Math.floor(seconds / 60) + ":" + String(seconds % 60).padStart(2, "0");
        paragraph.appendChild(stamp);
        fragment.appendChild(paragraph);
      }
      paragraph.appendChild(document.createTextNode(" " + cue.text));
    });
    transcriptCues.replaceChildren(fragment);
  }
  transcript.hidden = false;
  transcript.addEventListener("toggle", renderTranscript);
  new MutationObserver(renderTranscript).observe(document.documentElement, {
    attributes: true, attributeFilter: ["lang"]
  });

  function setPosterLabel(key) {
    posterLabel.dataset.i18n = key;
    posterLabel.textContent = PAGE[document.documentElement.lang === "fr" ? "fr" : "en"][key];
  }
  // A regular hyperlink works from a local copy and with scripts disabled.
  // Keep the website open when a hosted copy sends a visitor to YouTube.
  if (window.SC_canEmbedYouTube() || window.top !== window.self) {
    watch.target = poster.target = "_blank";
    watch.rel = poster.rel = "noopener";
  }
  if (!window.SC_canEmbedYouTube()) return;

  setPosterLabel("media-talks-95");
  var embedFailed = false;
  poster.addEventListener("click", function (event) {
    if (embedFailed || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    var end = 3000;
    var controls = window.SC_subtitledPlayer({
      row: row, txt: txt,
      playBtn: playBtn, playLabel: playLabel,
      backBtn: backBtn, fwdBtn: fwdBtn, restartBtn: restartBtn,
      langs: langsBox, end: end,
      tracks: tracks
    });
    window.SC_loadYouTubeFrame(frame, "KBpZt8X0Pw0", end);
    poster.hidden = true;
    frame.hidden = false;
    row.hidden = false;
    note.hidden = false;
    window.SC_connectYouTube(frame, actions, controls, function (code) {
      embedFailed = true;
      frame.hidden = row.hidden = note.hidden = true;
      frame.removeAttribute("src");
      poster.hidden = false;
      setPosterLabel("media-talks-94");
      window.SC_videoNotice(actions, code === 153 ? "identity" : "error");
      poster.focus();
    });
    frame.focus();
  });
})();
