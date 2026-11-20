(function () {
  "use strict";
  function updateLab() {
    var lang = document.documentElement.lang === "fr" ? "fr" : "en";
    document.querySelectorAll("[data-lab-launch]").forEach(function (link) {
      link.href = "learning-lab/" + link.dataset.labLaunch + "/index.html?lang=" + lang;
    });
    document.querySelectorAll("[data-lab-cover-fr]").forEach(function (source) {
      source.media = lang === "fr" ? "all" : "not all";
      var image = source.parentElement.querySelector("img");
      var card = image.closest(".lab-card");
      image.alt = card.querySelector("h3").textContent;
    });
    var topic = document.getElementById("lib-topic");
    if (topic) {
      var labels = lang === "fr" ?
        ["Tous les sujets", "IA", "Gouvernance numérique", "Enseignement et programmes", "Villes intelligentes"] :
        ["All topics", "AI", "Digital governance", "Teaching & curriculum", "Smart cities"];
      Array.from(topic.options).forEach(function (option, i) { option.textContent = labels[i]; });
      document.getElementById("lib-language").options[0].textContent = lang === "fr" ? "Tous les documents" : "All records";
    }
  }
  new MutationObserver(updateLab).observe(document.documentElement, {attributes:true,attributeFilter:["lang"]});
  updateLab();
})();
