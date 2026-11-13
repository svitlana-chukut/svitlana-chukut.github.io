/* ================================================================
   SITE CONTENT — LONG TEXTS OF THE CONTACT page
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
    ["contact-cards-01", "Le front de mer de Kingston (Ontario) — le parc de la Confédération, la marina et le port, avec le Collège militaire royal du Canada sur l'autre rive", "The Kingston, Ontario waterfront — Confederation Park, the marina and the harbour, with the Royal Military College of Canada across the water"],
    ["contact-cards-02", "téléphone · Kingston, Ontario, Canada", "phone · Kingston, Ontario, Canada"],
    ["contact-cards-03", "lieu de résidence et de travail actuel", "current place of residence and work"],
    ["contact-cards-04", "755 abonnés · 500+ relations", "755 followers · 500+ connections"],
    ["contact-cards-05", "« IA et administration électronique » · @electronic_governance", "“AI and Electronic Governance” · @electronic_governance"],
    ["contact-cards-06", "fiche d'auteure", "author record"],
    ["contact-cards-07", "Coordonnées et profils", "Contact details &amp; profiles"],
    ["contact-download-01", "CV complet · un seul document", "Full résumé · one document"],
    ["contact-download-02", "Le CV complet, <span class=\"grad\">en un seul PDF</span>", "The full résumé, <span class=\"grad\">in one PDF</span>"],
    ["contact-download-03", "Le CV académique présente la formation, le parcours professionnel, les publications, les distinctions et les certificats. Les deux versions sont téléchargeables en PDF.", "The academic CV covers education, appointments, publications, awards and certificates. Both language editions are available as PDFs."],
    ["contact-download-04", "CV académique mis à jour le 18 octobre 2026.", "Academic CV updated 18 October 2026."],
    ["contact-download-05", "Parcourir l'archive de documents →", "Browse the document archive →"],
    ["contact-download-06", "Télécharger le CV", "Download the résumé"],
    ["contact-download-07", "Écrire un courriel", "Write an email"],
    ["cv-download-btn", "Télécharger le CV (PDF)", "Download CV (PDF)"],
    ["cv-download-meta", "PDF · CV académique · en français", "PDF · Academic CV · in English"],
    ["contact-ontario-01", "Kingston · Ontario · Canada", "Kingston · Ontario · Canada"],
    ["contact-ontario-02", "Collaboration en Ontario", "Collaboration in Ontario"],
    ["contact-ontario-03", "Basée à Kingston, en Ontario, au Canada, Svitlana Chukut est ouverte à des collaborations avec les collèges, les universités, les organisations du secteur public et les communautés professionnelles de l'Ontario, dans les domaines que son parcours démontre :", "Based in Kingston, Ontario, Canada, Svitlana Chukut is open to collaboration with colleges, universities, public-sector organisations and professional communities across Ontario, in the areas her profile demonstrates:"],
    ["contact-ontario-04", "Conception pédagogique et élaboration de programmes", "Instructional design &amp; curriculum development"],
    ["contact-ontario-05", "Programmes fondés sur les compétences, cours en ligne et hybrides, évaluation authentique et accessibilité AODA/WCAG — 17 initiatives de cours et plus de 50 modules développés à George Brown Polytechnic, à Toronto.", "Competency-based programmes, online and blended courses, authentic assessment and AODA/WCAG accessibility — 17 course initiatives and 50+ modules developed at George Brown Polytechnic in Toronto."],
    ["contact-ontario-06", "Production de contenus d'apprentissage numérique", "Digital learning production"],
    ["contact-ontario-07", "Production de contenus d'apprentissage numériques et de ressources de cours interactives pour l'enseignement postsecondaire en ligne et hybride, dans Brightspace (D2L) et H5P.", "Production of digital learning content and interactive course resources for online and blended post-secondary delivery, in Brightspace (D2L) and H5P."],
    ["contact-ontario-08", "Expertise et conseil en gouvernance numérique", "Digital-governance expertise &amp; consulting"],
    ["contact-ontario-09", "Politique d'information, administration électronique, démocratie électronique et intelligence artificielle dans l'administration publique — co-autrice du Concept national de développement de l'administration électronique de l'Ukraine (2010).", "Information policy, e-governance, e-democracy and artificial intelligence in public administration — co-author of Ukraine's national Concept for the Development of E-Governance (2010)."],
    ["contact-ontario-10", "Enseignement invité et conférences", "Guest teaching &amp; lectures"],
    ["contact-ontario-11", "Cours et conférences invités en administration publique, gouvernance numérique et communication, à partir de plus de 25 ans d'enseignement universitaire en Ukraine et au Canada.", "Guest courses and lectures in public administration, digital governance and communication, drawing on 25+ years of university teaching in Ukraine and Canada."],
    ["contact-ontario-12", "Pour discuter d'un poste, d'un projet ou d'une invitation, veuillez utiliser les coordonnées ci-dessus — courriel ou LinkedIn.", "To discuss a role, a project or an invitation, please use the contact channels above — email or LinkedIn."],
    ["contact-tags-01", "Partager ce profil", "Share this profile"],
    ["contact-tags-02", "Utilisez ces mots-clics lorsque vous partagez ce profil", "Use these hashtags when sharing this profile"],
    ["contact-tags-03", "#SvitlanaChukut #GouvernanceNumérique #AdministrationÉlectronique #AdministrationPublique #PolitiqueDeLinformation #StratégieDeCommunication #VillesIntelligentes #DémocratieNumérique #TransformationNumérique #IADansLeGouvernement #ConceptionDeProgrammes #ConceptionPédagogique #ApprentissageNumérique #AssuranceQualitéAcadémique #PolitiquesDeLÉducation #PolitiquesDeGouvernementNumérique", "#SvitlanaChukut #EGovernance #DigitalGovernance #PublicAdministration #InformationPolicy #CommunicationStrategy #SmartCities #EDemocracy #DigitalTransformation #AIinGovernment #CurriculumDeveloper #InstructionalDesigner #DigitalLearningProducer #AcademicQualityAssurance #EducationPolicyAnalyst #DigitalGovernmentPolicyAnalyst"],
    ["contact-tags-04", "Copier les mots-clics", "Copy the hashtags"],
    ["contact-tags-05", "Copié !", "Copied!"],
    ["contact-target-roles", "Postes ciblés au Canada", "Target roles in Canada"],
    ["cv-download-en", "Télécharger le CV en anglais", "Download English CV"],
    ["cv-download-fr", "Télécharger le CV en français", "Download French CV"],
    ["target-curriculum-developer", "Conceptrice de programmes d’études", "Curriculum Developer"],
    ["target-instructional-designer", "Conceptrice pédagogique", "Instructional Designer"],
    ["target-digital-learning-producer", "Productrice de contenus d’apprentissage numérique", "Digital Learning Producer"],
    ["target-academic-quality-assurance", "Spécialiste de l’assurance qualité dans l’enseignement supérieur", "Academic Quality Assurance Specialist"],
    ["target-education-policy-analyst", "Analyste des politiques de l’éducation", "Education Policy Analyst"],
    ["target-digital-government-policy-analyst", "Analyste des politiques de gouvernement numérique", "Digital Government Policy Analyst"],
  ];
  for (var i = 0; i < L.length; i++) { PAGE.fr[L[i][0]] = L[i][1]; PAGE.en[L[i][0]] = L[i][2]; }
})();
