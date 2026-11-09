/* ================================================================
   STRUCTURED DATA - schema.org Person record (JSON-LD)
   ================================================================
   This file holds ONLY data: the schema.org description of
   Svitlana Chukut that search engines read. It used to sit in
   index.html as an inline JSON-LD block; it is injected from
   here so that index.html carries no inline scripts at all.
   Edit the values below to update it.
   ================================================================ */
(function () {
  "use strict";
  var data = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Svitlana Chukut",
  "url": "https://muse.ai/s/space-xgxc5xqkawxqxva0/6vYRPfWyZ5fXahKTSGf4CbT1NM2_T1LVDVXX5qSiVEA",
  "image": "https://muse.ai/s/space-xgxc5xqkawxqxva0/6vYRPfWyZ5fXahKTSGf4CbT1NM2_T1LVDVXX5qSiVEA/assets/hero.jpg",
  "jobTitle": "Professor",
  "description": "The first woman in Ukraine to earn a Doctor of Sciences degree in Public Administration. Specialises in communication strategy, information policy and digital governance.",
  "email": "mailto:svchukut@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kingston",
    "addressRegion": "Ontario",
    "addressCountry": "CA"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "George Brown Polytechnic"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Taras Shevchenko National University of Kyiv"
  },
  "sameAs": [
    "https://www.linkedin.com/in/svitlana-chukut",
    "https://scholar.google.com/citations?user=PUKuQ8QAAAAJ",
    "https://orcid.org/0000-0001-9829-0218",
    "https://www.youtube.com/@electronic_governance",
    "https://www.facebook.com/sv.ch.391"
  ]
};
  var el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
})();
