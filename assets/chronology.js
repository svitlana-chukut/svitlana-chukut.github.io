(function () {
  "use strict";
  var controls = document.getElementById("chronology-controls");
  if (!controls) return;
  var query = document.getElementById("chronology-query");
  var year = document.getElementById("chronology-year");
  var titled = document.getElementById("chronology-titled");
  var count = document.getElementById("chronology-count");
  var empty = document.getElementById("chronology-empty");
  var groups = document.querySelectorAll("#chronology-results .chronology-year");

  function normalise(value) {
    return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "'");
  }

  function showMatches() {
    var terms = normalise(query.value.trim()).split(/\s+/).filter(Boolean);
    var total = 0;
    groups.forEach(function (group) {
      var matchYear = !year.value || group.querySelector("h3").textContent === year.value;
      var visible = 0;
      group.querySelectorAll(".event-record").forEach(function (record) {
        var content = normalise(record.textContent);
        record.hidden = !matchYear || (titled.checked && !record.hasAttribute("data-contribution")) ||
          !terms.every(function (term) { return content.includes(term); });
        if (!record.hidden) visible++;
      });
      group.hidden = visible === 0;
      total += visible;
    });
    var lang = document.documentElement.lang === "fr" ? "fr" : "en";
    var label = PAGE[lang][total === 1 ? "chronology-results-one" : "chronology-results-many"];
    count.textContent = label.replace("{count}", total);
    empty.hidden = total !== 0;
  }

  function clearFilters() {
    query.value = "";
    year.value = "";
    titled.checked = false;
    showMatches();
  }

  document.getElementById("chronology-reset").addEventListener("click", function () {
    clearFilters();
    query.focus({preventScroll:true});
  });
  query.addEventListener("input", showMatches);
  year.addEventListener("change", showMatches);
  titled.addEventListener("change", showMatches);
  new MutationObserver(showMatches).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });
  window.SC_revealChronology = function (element) {
    var record = element.closest("#chronology-results .event-record");
    if (record && record.hidden) {
      clearFilters();
    }
  };
  controls.hidden = false;
  count.hidden = false;
  showMatches();
})();
