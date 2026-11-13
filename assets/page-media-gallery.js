/* ================================================================
   MEDIA PAGE - gallery video framework
   ================================================================
   On a web origin, each eligible thumbnail opens its player inline.
   The separate Watch link always opens YouTube directly.

   Where subtitle data exists for the video (assets/
   subtitles-gallery.js, GALLERY_SUBTITLES keyed by video ID), a
   subtitle block is built under the player - subtitle bar, the
   same Start/Pause/-10s/+10s/Restart sync controls and the
   English / French / Off selector as the Olympiad block, driven
   by the shared engine (window.SC_subtitledPlayer). Ukrainian
   subtitle tracks were removed site-wide on 2026-11-12 at the
   site owner's request; gallery tracks are EN/FR only.
   Cards without subtitle data get the player + fallback only and
   show no subtitle selector.
   ================================================================ */
(function () {
  "use strict";
  if (!window.SC_canEmbedYouTube) return;

  function buildSubRow(vidBox, tracks) {
    var row = document.createElement("div");
    row.className = "sub-row gal-sub-row";
    var bar = document.createElement("div");
    bar.className = "sub-bar";
    var txt = document.createElement("span");
    txt.textContent = "";
    bar.appendChild(txt);
    row.appendChild(bar);
    var sync = document.createElement("div");
    sync.className = "sub-sync";
    sync.setAttribute("role", "group");
    sync.setAttribute("aria-label", "Subtitle synchronisation / Synchronisation des sous-titres");
    var playBtn = document.createElement("button");
    playBtn.type = "button";
    playBtn.className = "sub-btn sub-play";
    playBtn.setAttribute("aria-pressed", "false");
    var playLabel = document.createElement("span");
    var playInner = document.createElement("span");
    playInner.textContent = "▶ Start video + subtitles";
    playLabel.appendChild(playInner);
    playBtn.appendChild(playLabel);
    sync.appendChild(playBtn);
    function mkBtn(label, aria) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "sub-btn";
      b.textContent = label;
      b.setAttribute("aria-label", aria);
      sync.appendChild(b);
      return b;
    }
    var backBtn = mkBtn("−10s", "Subtitles back 10 seconds / Sous-titres : reculer de 10 secondes");
    var fwdBtn = mkBtn("+10s", "Subtitles forward 10 seconds / Sous-titres : avancer de 10 secondes");
    var restartBtn = mkBtn("↺", "Restart video and subtitles / Recommencer la vidéo et les sous-titres");
    row.appendChild(sync);
    var langs = document.createElement("div");
    langs.className = "sub-langs";
    langs.setAttribute("role", "group");
    langs.setAttribute("aria-label", "Subtitle language / Langue des sous-titres");
    row.appendChild(langs);
    vidBox.parentNode.insertBefore(row, vidBox.nextSibling);
    return window.SC_subtitledPlayer({
      row: row, txt: txt,
      playBtn: playBtn, playLabel: playLabel,
      backBtn: backBtn, fwdBtn: fwdBtn, restartBtn: restartBtn,
      langs: langs, tracks: tracks
    });
  }

  document.querySelectorAll(".media-it .video-trigger").forEach(function (button) {
    button.addEventListener("click", function () {
      var card = button.closest(".media-it");
      var actions = card.querySelector(".text-link").parentElement;
      if (!window.SC_canEmbedYouTube()) {
        window.SC_videoNotice(actions, "local");
        return;
      }
      var id = button.dataset.youtubeId;
      var vidBox = document.createElement("div");
      vidBox.className = "vid gal-vid";
      var frame = document.createElement("iframe");
      frame.title = card.querySelector("h3").textContent.trim();
      window.SC_loadYouTubeFrame(frame, id);
      vidBox.appendChild(frame);
      button.replaceWith(vidBox);

      var tracks = typeof GALLERY_SUBTITLES === "undefined" ? null : GALLERY_SUBTITLES[id];
      var controls = tracks ? buildSubRow(vidBox, tracks) : null;
      window.SC_connectYouTube(frame, actions, controls);
      frame.focus();
    });
  });
})();
