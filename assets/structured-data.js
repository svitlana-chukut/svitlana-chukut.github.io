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
  "alternateName": [
    "Svitlana Anatoliivna Chukut",
    "Chukut, Svitlana",
    "S. Chukut",
    "S. A. Chukut",
    "Світлана Чукут",
    "Чукут Світлана Анатоліївна"
  ],
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "ORCID",
    "value": "0000-0001-9829-0218",
    "url": "https://orcid.org/0000-0001-9829-0218"
  },
  "knowsAbout": [
    "E-governance",
    "E-democracy",
    "Digital governance",
    "Public administration",
    "Information policy",
    "Communication strategy",
    "Smart cities",
    "Digital transformation",
    "Artificial intelligence in government",
    "Curriculum development",
    "Instructional design",
    "Digital learning production",
    "Academic quality assurance",
    "Education policy analysis",
    "Digital government policy analysis"
  ],
  "jobTitle": "Professor",
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Curriculum Developer",
    "occupationalCategory": {
      "@type": "CategoryCode",
      "codeValue": "41405",
      "inCodeSet": {
        "@type": "CategoryCodeSet",
        "name": "National Occupational Classification (Canada), 2021"
      },
      "url": "https://noc.esdc.gc.ca/Structure/NocProfile?GocTemplateCulture=en-CA&code=41405&version=2021.0"
    }
  },
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
  if (location.protocol === "https:" || location.protocol === "http:") {
    data.url = new URL(".", location.href).href;
    data.image = new URL("assets/hero.jpg", data.url).href;
  }
  var el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
})();
