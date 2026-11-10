/* ================================================================
   SITE CONTENT — LONG TEXTS OF THE PARTNERS page
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
    ["partners-grid-01", "Collaborations", "Collaborations"],
    ["partners-grid-02", "26 organisations <span class=\"grad\">partenaires</span>", "26 partner <span class=\"grad\">organisations</span>"],
    ["partners-grid-03", "Universités, fondations et programmes internationaux avec lesquels elle a travaillé.", "Universities, foundations and international programmes she has worked with."],
    ["partners-grid-04", "Université nationale « Académie Mohyla de Kyiv »", "National University of Kyiv-Mohyla Academy"],
    ["partners-grid-05", "En 2011, formation à la modernisation du secteur public par l'administration électronique, avec la participation de l'Université nationale « Académie Mohyla de Kyiv ».", "In 2011, completed training in public-sector modernisation through e-government with National University of Kyiv-Mohyla Academy."],
    ["partners-grid-06", "Participation à la formation de 2011 sur la modernisation du secteur public, dont Telenor / European Competence Ltd. était partenaire.", "Attended the 2011 public-sector modernisation training partnered by Telenor / European Competence Ltd."],
    ["partners-grid-07", "Western Sydney University · GISU", "Western Sydney University · GISU"],
    ["partners-grid-08", "Participation au symposium GISU (2023) et au partenariat avec l'Université technique nationale d'Ukraine « Institut polytechnique de Kyiv Igor Sikorsky » ; Western Sydney University était co-organisatrice", "Participated in the 2023 GISU symposium and National Technical University of Ukraine «Igor Sikorsky Kyiv Polytechnic Institute» partnership; WSU was a co-organiser"],
    ["partners-grid-09", "Partenaire des Journées de l'administration électronique (2008, 2010, 2011) : contribution d'expertise, exposition technologique, session d'ouverture et formations pour les enseignants.", "Partner of the E-Governance Days (2008, 2010, 2011): expert contribution, technology exhibition, opening session and training for teachers."],
    ["partners-grid-10", "Partenaire officiel de la Journée de l'administration électronique 2010.", "Official partner of the 2010 E-Governance Day."],
    ["partners-grid-11", "Sponsor de l'exposition technologique des Journées de l'administration électronique, en 2010.", "Sponsor of the technology exhibition at the E-Governance Days, in 2010."],
    ["partners-grid-12", "Programme des Nations Unies pour le développement", "United Nations Development Programme"],
    ["partners-grid-13", "Mot de bienvenue publié dans les actes officiels de la première Journée de l'administration électronique (2008) ; des représentants du Programme ont participé aux éditions de 2009 et de 2011.", "Welcoming address published in the official proceedings of the first E-Governance Day (2008); representatives of the Programme took part in the 2009 and 2011 editions."],
    ["partners-grid-14", "Direction principale de la fonction publique de l'Ukraine", "Main Department of Civil Service of Ukraine"],
    ["partners-grid-15", "Soutien institutionnel aux Journées de l'administration électronique (2009) ; co-organisateur de la formation de 2011 sur la modernisation du secteur public par l'administration électronique.", "Institutional backing for the E-Governance Days (2009); co-organiser of the 2011 training on public-sector modernisation through e-government."],
    ["partners-grid-16", "Comité d'État de l'Ukraine pour l'informatisation", "State Committee of Ukraine on Informatization"],
    ["partners-grid-17", "Soutien institutionnel aux Journées de l'administration électronique (2009).", "Institutional backing for the E-Governance Days (2009)."],
    ["partners-grid-18", "Secrétariat du Conseil des ministres de l'Ukraine", "Secretariat of the Cabinet of Ministers of Ukraine"],
    ["partners-grid-19", "Soutien institutionnel de la série des Journées de l'administration électronique ; représenté dès la première édition, en 2008.", "Institutional backing for the E-Governance Days series; represented from the first edition, in 2008."],
  ];
  for (var i = 0; i < L.length; i++) { PAGE.fr[L[i][0]] = L[i][1]; PAGE.en[L[i][0]] = L[i][2]; }
})();
