/* ================================================================
   SITE CONTENT — GOOGLE SCHOLAR METRICS
   ================================================================
   This file holds ONLY data: SCHOLAR, the Google Scholar figures
   shown across the site — the header Scholar card, the Library
   Scholar panel, the home impact metrics and the Contact row.
   assets/app.js stamps these values onto every [data-scholar]
   element on each language switch, so the figures exist exactly
   once, here.

   HOW TO UPDATE (e.g. after checking the live Scholar profile):
     works      number of works listed on the profile
     citations  total citations — French format first ("1 956",
                with a narrow space), then English ("1,956")
     hIndex     h-index (same in both languages)
     i10        i10-index (same in both languages)
     asOf       the "as of" line, French first, then English
   ================================================================ */
var SCHOLAR = {
  works: 94,
  citations: { fr: "1 956", en: "1,956" },
  hIndex: 20,
  i10: 40,
  asOf: { fr: "EN DATE DE NOVEMBRE 2026", en: "AS OF NOVEMBER 2026" },
  profileUrl: "https://scholar.google.com/citations?user=PUKuQ8QAAAAJ"
};
