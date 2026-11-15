/* ================================================================
   HASHTAG CHIPS — discoverability layer.
   Topic buttons open site search with their data-tag-q query.
   Hashtag links use the existing site router. The Contact copy button
   copies the localized labels displayed in its hashtag group.
   ================================================================ */
(function () {
  "use strict";
  function openSearch(q) {
    var toggle = document.getElementById("ssToggle");
    var panel = document.getElementById("siteSearch");
    var input = document.getElementById("ssInput");
    if (!toggle || !panel || !input || !q) return;
    if (panel.hidden) toggle.click();
    else input.focus({ preventScroll: true });
    input.value = q;
    input.dispatchEvent(new Event("input", { bubbles: true }));
  }
  document.querySelectorAll("button[data-tag-q]").forEach(function (chip) {
    chip.addEventListener("click", function () {
      var q = chip.getAttribute("data-tag-q");
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
      function copySelection() {
        var range = document.createRange();
        range.selectNodeContents(line);
        var selection = window.getSelection();
        if (!selection) return;
        selection.removeAllRanges();
        selection.addRange(range);
        try {
          if (document.execCommand("copy")) show();
        } catch (e) {}
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(show, copySelection);
      } else {
        copySelection();
      }
    });
  }
})();
