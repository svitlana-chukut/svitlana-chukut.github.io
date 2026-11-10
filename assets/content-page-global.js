/* ================================================================
   SITE CONTENT — LONG TEXTS OF THE GLOBAL — header, footer, search and viewer overlays (shown on every page)
   ================================================================
   This file holds ONLY text data — no behaviour, no layout.
   Every entry is one passage of the page, in the order it
   appears on the page:

     [ "key", "French text", "English text" ]

   The key is the data-i18n attribute of the passage's <span>
   in index.html; the renderer (assets/app.js) fills that span
   from this file on every language switch. The span in index.html
   carries only its key as text — <span data-i18n="key">key</span> —
   and the renderer replaces that key with this file's text, in the
   language currently selected. No element in index.html is ever
   left empty: an XML-style formatter would collapse an empty tag
   into a self-closing one and break the page.

   HOW TO EDIT
     - Change a text: edit BOTH language strings of its entry
       here. Never edit the copy inside index.html — it is
       only a key placeholder that the renderer replaces.
     - Add a passage: add an entry with a fresh key, then put
       <span data-i18n="your-key">your-key</span> where
       the passage belongs in index.html.
     - Inline markup (<span class="grad">, <a>, <b>…) inside a
       string is intentional: keep the tags, edit the words.
   ================================================================ */
(function(){
  var L = [
    ["global-01", "Aller au contenu", "Skip to content"],
    ["global-02", "Parcours professionnel", "Professional journey"],
    ["global-03", "Formation", "Education"],
    ["global-04", "Carrière et postes", "Career &amp; positions"],
    ["global-05", "Distinctions et prix", "Awards &amp; honours"],
    ["global-06", "Certificats et formations", "Certificates &amp; training"],
    ["global-07", "Projets", "Projects"],
    ["global-08", "Recherche", "Research"],
    ["global-09", "Encadrement", "Supervision"],
    ["global-10", "Rôles d'experte", "Expert appointments"],
    ["global-11", "Édition et évaluation", "Editorial &amp; peer review"],
    ["global-12", "Bénévolat", "Volunteering"],
    ["global-13", "Collaboration professionnelle", "Professional collaboration"],
    ["global-14", "Compétences et brevets", "Skills &amp; patents"],
    ["global-15", "Recommandations et affiliations", "Recommendations &amp; memberships"],
    ["global-16", "Fondations et initiatives", "Founded &amp; initiated"],
    ["global-17", "travaux", "works"],
    ["global-18", "1 954", "1,954"],
    ["global-19", "indice h", "h-index"],
    ["global-20", "indice i10", "i10-index"],
    ["global-21", "EN DATE DE NOVEMBRE 2026", "AS OF NOVEMBER 2026"],
    ["global-22", "Plus", "More"],
    ["global-23", "Événements", "Events"],
    ["global-24", "Galerie photo", "Photo gallery"],
    ["global-25", "Journées de l'administration électronique", "E-Governance Days"],
    ["global-26", "Documents et fichiers", "Documents &amp; files"],
    ["global-27", "Archive pour analyse", "Analysis archive"],
    ["global-28", "Fichiers du site et guide", "Website files &amp; guide"],
    ["global-29", "CV complet sur demande", "Full résumé, on request"],
    ["global-30", "Recherche", "Search"],
    ["global-31", "Claire", "Light"],
    ["global-32", "Sombre", "Dark"],
  ];
  for (var i = 0; i < L.length; i++) { PAGE.fr[L[i][0]] = L[i][1]; PAGE.en[L[i][0]] = L[i][2]; }
})();

/* The search-engine / social-card description follows the page
   language; its wording is content too, so it lives here as the
   PAGE key "metaDesc" (used by PAGE_AFTER in index.html). */
PAGE.fr.metaDesc = "Première femme docteure en administration publique en Ukraine. Experte en stratégies de communication, en politique d'information et en gouvernance numérique.";
PAGE.en.metaDesc = "The first woman in Ukraine to earn a Doctor of Sciences degree in Public Administration. Specialises in communication strategy, information policy and digital governance.";
