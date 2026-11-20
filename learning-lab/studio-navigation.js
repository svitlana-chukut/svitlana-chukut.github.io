(function () {
  "use strict";
  var back = document.getElementById("studio-return");
  function sync() {
    var french = document.documentElement.lang === "fr";
    if (back) {
      back.href = "../" + (french ? "fr/" : "") + (location.protocol === "file:" ? "index.html" : "");
      back.textContent = (french ? "Laboratoire d’apprentissage" : "Learning Lab") + " · Prof. Svitlana Chukut";
      back.parentElement.setAttribute("aria-label", french ? "Retour au catalogue des simulations" : "Return to the simulation catalogue");
    }
    var url = new URL(location.href);
    url.searchParams.set("lang", french ? "fr" : "en");
    try { history.replaceState(history.state, "", url.href); } catch (e) {}
  }
  var requested = new URLSearchParams(location.search).get("lang");
  if (requested === "fr" || requested === "en") {
    var toggle = document.querySelector('[data-lang="' + requested + '"], [data-action="lang"][data-value="' + requested + '"], button#' + requested);
    if (toggle) toggle.click();
  }
  sync();
  new MutationObserver(sync).observe(document.documentElement, {attributes:true, attributeFilter:["lang"]});
})();
