/* ================================================================
   HASHTAG CHIPS — discoverability layer.
   Every .tag-chip is a button: clicking it opens the site search
   (assets/app.js) pre-filled with the chip's topic (its data-tag-q
   attribute), so a hashtag is also a working way into the content.
   The Contact page's copy button copies the full hashtag line
   (#tagLine) to the clipboard and confirms with the #tagCopied
   note; without clipboard access it selects the line instead.
   Chip texts themselves are content and live in the data files
   (keys hashtags-01…10 in assets/content-page-global.js).
   ================================================================ */
(function () {
  "use strict";
  function openSearch(q) {
    var toggle = document.getElementById("ssToggle");
    var panel = document.getElementById("siteSearch");
    var input = document.getElementById("ssInput");
    if (!toggle || !panel || !input || !q) return;
    if (panel.hidden) toggle.click();
    setTimeout(function () {
      input.value = q;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      try { input.focus({ preventScroll: true }); } catch (e) { input.focus(); }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 60);
  }
  document.querySelectorAll(".tag-chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      var q = chip.getAttribute("data-tag-q") || chip.textContent.replace(/^#/, "").trim();
      openSearch(q);
    });
  });
  var copyBtn = document.getElementById("tagCopy");
  var line = document.getElementById("tagLine");
  var done = document.getElementById("tagCopied");
  if (copyBtn && line) {
    copyBtn.addEventListener("click", function () {
      var text = line.textContent.replace(/\s+/g, " ").trim();
      function show() {
        if (!done) return;
        done.hidden = false;
        setTimeout(function () { done.hidden = true; }, 2400);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(show, show);
      } else {
        var range = document.createRange();
        range.selectNodeContents(line);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        try { document.execCommand("copy"); } catch (e) {}
        show();
      }
    });
  }
})();
