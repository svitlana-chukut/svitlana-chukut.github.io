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
    ["contact-cards-01", "Le quartier financier de Toronto, août 2017", "Toronto’s Financial District, August 2017"],
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
    ["contact-tags-03", "#SvitlanaChukut #GouvernanceNumérique #AdministrationÉlectronique #AdministrationPublique #PolitiqueDeLinformation #StratégieDeCommunication #VillesIntelligentes #DémocratieNumérique #TransformationNumérique #IADansLeGouvernement #ConceptionDeProgrammes #ConceptionPédagogique #ApprentissageNumérique #AssuranceQualitéAcadémique #PolitiquesDeLÉducation #PolitiquesDeGouvernementNumérique #OlympiadeAdministrationÉlectronique #StratégieDeProgrammes", "#SvitlanaChukut #EGovernance #DigitalGovernance #PublicAdministration #InformationPolicy #CommunicationStrategy #SmartCities #EDemocracy #DigitalTransformation #AIinGovernment #CurriculumDeveloper #InstructionalDesigner #DigitalLearningProducer #AcademicQualityAssurance #EducationPolicyAnalyst #DigitalGovernmentPolicyAnalyst #EGovernanceOlympiad #CurriculumStrategy"],
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
    ["target-curriculum-consultant", "Consultante en conception de programmes et en ingénierie pédagogique", "Curriculum and Instructional Design Consultant"],
    ["target-accreditation-consultant", "Consultante en agrément et en assurance qualité dans l’enseignement supérieur", "Higher Education Accreditation and Quality Assurance Consultant"],
    ["target-digital-government-consultant", "Consultante en gouvernement numérique et en transformation du secteur public", "Digital Government and Public Sector Transformation Consultant"],
    ["target-academic-program-lead", "Responsable du développement de programmes d’études", "Academic Program Development Lead"],
    ["target-public-administration-professor", "Professeure en administration publique", "Public Administration Professor"],
    ["target-area-quality-assurance", "Assurance qualité et agrément dans l’enseignement supérieur", "Higher education quality assurance & accreditation"],
    ["target-area-quality-assurance-description", "A participé à l’élaboration des normes ukrainiennes de formation en administration et gestion publiques aux cycles du baccalauréat, de la maîtrise et du doctorat. A contribué à l’autorisation et à l’agrément de programmes et a été vice-présidente du conseil d’experts sectoriel de la discipline.", "Co-developed Ukraine’s national higher education standards in Public Governance and Administration for bachelor’s, master’s and PhD programs. Contributed to program licensing and accreditation and served as deputy chair of the sectoral expert council for the discipline."],
    ["target-area-program-leadership", "Direction de programmes et formation aux cycles supérieurs", "Academic program leadership & graduate education"],
    ["target-area-program-leadership-description", "A dirigé le Département de théorie et de pratique de la gestion à l’Institut polytechnique de Kyiv Igor Sikorsky et assuré la responsabilité académique du doctorat en administration et gestion publiques (2018–2025). A coordonné les équipes enseignantes et la mise en œuvre des programmes, et encadré des mémoires et des thèses.", "Led the Department of Theory and Practice of Management at Igor Sikorsky Kyiv Polytechnic Institute and served as academic lead for its PhD program in Public Governance and Administration (2018–2025). Coordinated faculty and program delivery and supervised graduate and doctoral research."],
    ["target-area-research-review", "Évaluation de demandes de financement et évaluation par les pairs", "Research funding & peer review"],
    ["target-area-research-review-description", "A évalué des projets soumis à des concours de financement du Fonds national de la recherche de l’Ukraine (2021 et 2024) et du ministère ukrainien de l’Éducation et de la Science (2019–2022). A également évalué des manuscrits scientifiques et siégé à des conseils de soutenance de thèse.", "Assessed competitive research proposals for the National Research Foundation of Ukraine (2021 and 2024) and Ukraine’s Ministry of Education and Science (2019–2022). Also reviewed journal manuscripts and served on dissertation defence councils."],
    ["target-area-public-service-training", "Formation et perfectionnement professionnel dans la fonction publique", "Public service training & professional development"],
    ["target-area-public-service-training-description", "A conçu et animé des formations pour les fonctionnaires et le personnel des administrations locales sur les services publics numériques, la communication avec la population et la mise en œuvre de l’administration électronique. L’Agence nationale de la fonction publique de l’Ukraine a récompensé ses pratiques novatrices de formation en 2020 et en 2021.", "Designed and delivered professional training for civil servants and local-government officials on digital public services, communication with residents and e-governance implementation. Received Ukraine’s National Agency on Civil Service awards for innovation in professional training in 2020 and 2021."],
  ];
  for (var i = 0; i < L.length; i++) { PAGE.fr[L[i][0]] = L[i][1]; PAGE.en[L[i][0]] = L[i][2]; }
})();
