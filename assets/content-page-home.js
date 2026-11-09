/* ================================================================
   SITE CONTENT — LONG TEXTS OF THE HOME page
   ================================================================
   This file holds ONLY text data — no behaviour, no layout.
   Every entry is one passage of the page, in the order it
   appears on the page:

     [ "key", "French text", "English text" ]

   The key is the data-i18n attribute of the passage's <span>
   in index.html; the renderer (assets/app.js) fills that span
   from this file on every language switch. The span in index.html is an EMPTY placeholder:
   the renderer fills it from this file, in the language
   currently selected.

   HOW TO EDIT
     - Change a text: edit BOTH language strings of its entry
       here. Never edit the copy inside index.html — it is
       an EMPTY placeholder that the renderer fills.
     - Add a passage: add an entry with a fresh key, then put
       <span data-i18n="your-key"></span> (left empty) where
       the passage belongs in index.html.
     - Inline markup (<span class="grad">, <a>, <b>…) inside a
       string is intentional: keep the tags, edit the words.
   ================================================================ */
(function(){
  var L = [
    ["page-home-01", "années d'expérience professionnelle", "years of professional experience"],
    ["page-home-02", "publications", "publications"],
    ["page-home-03", "licences et certifications", "licenses &amp; certifications"],
    ["page-home-04", "distinctions et prix", "awards &amp; honours"],
    ["home-download-01", "CV complet · un seul document", "Full résumé · one document"],
    ["home-download-02", "Le CV complet, <span class=\"grad\">sur demande</span>", "The full résumé, <span class=\"grad\">on request</span>"],
    ["home-download-03", "Le CV complet — coordonnées, formation, postes, publications, distinctions et certificats, dans un seul document — est fourni sur demande, en anglais ou en français. Écrivez un courriel ou passez par LinkedIn, et le document vous sera envoyé directement.", "The full résumé — contacts, education, positions, publications, awards and certificates in one document — is provided on request, in English or French. Send an email or reach out on LinkedIn, and the document will be sent to you directly."],
    ["home-download-04", "CV académique mis à jour le 18 octobre 2026.", "Academic CV updated 18 October 2026."],
    ["home-download-05", "Ouvrir l'archive de documents →", "Open the document archive →"],
    ["home-download-06", "Demander le CV complet", "Request the full résumé"],
    ["home-download-07", "Écrire un courriel", "Write an email"],
    ["home-quick-01", "Accès rapide", "Quick access"],
    ["home-quick-02", "Tout le site, <span class=\"grad\">en un coup d'œil</span>", "The whole site, <span class=\"grad\">at a glance</span>"],
    ["home-quick-03", "Chaque grande section, ce qu'elle contient et combien d'enregistrements s'y trouvent — un clic mène directement au bon endroit.", "Every main section, what it holds and how many records are in it — one click takes you straight to the right place."],
    ["home-quick-04", "Biographie", "Biography"],
    ["home-quick-05", "Formation, postes, distinctions, projets et rôles d'experte — tout le parcours au même endroit.", "Education, positions, awards, projects and expert roles — the whole record in one place."],
    ["home-quick-06", "rubriques du parcours", "sections of the record"],
    ["home-quick-07", "Bibliothèque des publications", "Publication library"],
    ["home-quick-08", "Toutes les publications, des articles de 1998 aux travaux de 2025, avec recherche par titre et filtres par type et par période.", "Every publication, from the 1998 articles to the 2025 works, searchable by title with type and period filters."],
    ["home-quick-09", "enregistrements, des plus récents aux plus anciens", "records, newest first"],
    ["home-quick-10", "Certificats et formations", "Certificates &amp; training"],
    ["home-quick-11", "Les qualifications documentées, du programme de la Banque mondiale (2001) au certificat de l'Université d'Oxford et de l'UNESCO (2026).", "The documented qualifications, from the World Bank programme (2001) to the University of Oxford and UNESCO certificate (2026)."],
    ["home-quick-12", "licences et certifications", "licenses &amp; certifications"],
    ["home-quick-13", "Distinctions et prix", "Awards &amp; honours"],
    ["home-quick-14", "Le registre complet des distinctions et remerciements, les plus récentes en premier.", "The complete register of awards and honours, newest first."],
    ["home-quick-15", "distinctions documentées", "documented distinctions"],
    ["home-quick-16", "Cours", "Courses"],
    ["home-quick-17", "Tous les cours et disciplines de cette liste sont des cours d'auteure, élaborés par Svitlana Chukut, avec le contenu de chaque programme.", "Every course and discipline in this list is an author course developed by Svitlana Chukut, with the content of each programme."],
    ["home-quick-18", "cours et modules — le catalogue complet de l'auteure", "courses &amp; modules — the author's full catalogue"],
    ["home-quick-19", "Événements", "Events"],
    ["home-quick-20", "Conférences, conférences publiques et forums de 1998 à 2025, chacun avec sa date et son rôle.", "Conferences, public lectures and forums from 1998 to 2025, each with its date and role."],
    ["home-quick-21", "événements vérifiés", "verified events"],
    ["home-quick-22", "Journées de l'administration électronique", "E-Governance Days"],
    ["home-quick-23", "Les quatre éditions du forum (2008–2011) : programmes, participants, sponsors et photographies d'archives.", "The four forum editions (2008–2011): programmes, participants, sponsors and archival photographs."],
    ["home-quick-24", "éditions · 21 photographies d'archives", "editions · 21 archival photographs"],
    ["home-quick-25", "Médias", "Media"],
    ["home-quick-26", "Vidéos d'interventions, conférences publiques et formations sur l'intelligence artificielle.", "Talk videos, public lectures and artificial-intelligence trainings."],
    ["home-quick-27", "interventions et formations", "talks &amp; trainings"],
    ["home-quick-28", "Partenaires", "Partners"],
    ["home-quick-29", "Universités, fondations et programmes internationaux avec lesquels elle a travaillé.", "Universities, foundations and international programmes she has worked with."],
    ["home-quick-30", "organisations partenaires", "partner organisations"],
    ["home-quick-31", "Documents et fichiers", "Documents &amp; files"],
    ["home-quick-32", "Le CV complet, sur demande, et l'archive : certificats, diplômes, articles et pages de titre des livres.", "The full résumé, available on request, plus the archive: certificates, diplomas, articles and book title pages."],
    ["home-quick-33", "documents dans l'archive · CV complet sur demande", "documents in the archive · full résumé on request"],
    ["home-quick-34", "Contacts", "Contact"],
    ["home-quick-35", "Deux adresses courriel, un numéro de téléphone à Kingston et les profils LinkedIn, Facebook, Google Scholar, ORCID et Web of Science.", "Two email addresses, a Kingston phone number, and the LinkedIn, Facebook, Google Scholar, ORCID and Web of Science profiles."],
    ["home-quick-36", "moyens de contact", "ways to get in touch"],
    ["home-quick-37", "Commander une formation ou une consultation", "Book a training or consultation"],
    ["home-quick-38", "Pour la communauté académique", "For the academic community"],
    ["home-quick-39", "Ouvrir la bibliothèque", "Open the library"],
    ["home-quick-40", "Chronologie", "Chronology"],
    ["home-quick-41", "Événements", "Events"],
    ["home-quick-42", "26 conférences, conférences publiques, forums et événements institutionnels vérifiés.", "Twenty-six verified conferences, lectures, forums and institutional engagements."],
    ["home-quick-43", "Héritage national", "National legacy"],
    ["home-quick-44", "Journées de l'administration électronique", "E-Governance Days"],
    ["home-quick-45", "L'histoire documentée de quatre forums, 2008–2011 : participants, programmes, partenariats avec Microsoft, ESET et Softkey, et 21 photographies d'archives.", "The documented record of four forums held from 2008 to 2011: participants, programmes, Microsoft, ESET and Softkey partnerships, and 21 archival photographs."],
    ["home-quick-46", "Pour les partenaires et les médias", "For partners &amp; media"],
  ];
  for (var i = 0; i < L.length; i++) { PAGE.fr[L[i][0]] = L[i][1]; PAGE.en[L[i][0]] = L[i][2]; }
})();
