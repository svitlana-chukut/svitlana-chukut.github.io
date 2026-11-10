/* ================================================================
   SITE CONTENT — LONG TEXTS OF THE MEDIA page
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
    ["page-media-01", "Vidéos et conférences publiques", "Videos & public lectures"],
    ["page-media-02", "Chronologie des événements", "Event chronology"],
    ["page-media-03", "Galerie photo", "Photo gallery"],
    ["page-media-04", "Journées de l'administration électronique 2008–2011", "E-Governance Days 2008–2011"],
    ["media-talks-01", "Intervention à une table ronde, aux côtés de Radmila Voitovych", "Speaking at a round table, with Radmila Voitovych"],
    ["media-talks-02", "&#9654; Lancer vid&#233;o + sous-titres", "&#9654; Start video + subtitles"],
    ["media-talks-03", "Publication · IPAC · 2026", "Publication · IPAC · 2026"],
    ["media-talks-04", "« Des questions familières dans un pays nouveau »", "“Finding Familiar Questions in a New Country”"],
    ["media-talks-05", "Au Symposium national de la fonction publique 2026 de l'IPAC, à Ottawa, Svitlana Chukut a livré sa réflexion aux côtés de deux autres professionnels ukrainiens sur l'art de gouverner dans un pays nouveau. Son texte s'ouvre sur une question qui traverse plus de 25 ans de travail au croisement de l'administration publique, de la recherche et de l'enseignement supérieur : « Que faire lorsque la technologie avance plus vite que le gouvernement ? » Elle y rappelle sa contribution au Concept national d'administration électronique de l'Ukraine, adopté en 2010, et les Journées de l'administration électronique qu'elle a lancées en 2008–2011, passées d'environ 300 à plus de 2 000 participants. Ses recherches actuelles portent sur les compétences en intelligence artificielle des fonctionnaires, l'inclusion numérique et les services numériques en temps de guerre, tandis qu'à George Brown Polytechnic, son travail de conception de programmes et de pédagogie couvre 17 initiatives de cours et plus de 50 modules d'apprentissage pratiques — et depuis 2024, les programmes de formation en IA de l'IPAC la relient à la communauté canadienne de l'administration publique. Sa conclusion : les gouvernements n'ont pas à courir après chaque avancée technologique ; ils doivent préparer les gens, bâtir la confiance et décider avec discernement quand les réponses sont incertaines.", "At IPAC's 2026 National Public Service Symposium in Ottawa, Svitlana Chukut reflected alongside two fellow Ukrainian professionals on governing in a new country. Her piece opens with a question that runs through more than 25 years of her work where public administration, research and higher education meet: “What do we do when technology moves faster than government?” She recalls contributing to Ukraine's National E-Governance Concept, adopted in 2010, and initiating the E-Governance Days of 2008–2011, which grew from around 300 to more than 2,000 participants. Her current research addresses AI skills among public servants, digital inclusion and digital services during wartime, while at George Brown Polytechnic her curriculum and instructional-design work spans 17 course initiatives and more than 50 practical learning modules — and since 2024, IPAC's own AI training programs have connected her to Canada's public administration community. Her conclusion: governments do not need to chase every technological advance; they need to prepare people, build trust, and make thoughtful decisions when answers are uncertain."],
    ["media-talks-06", "Lire sur ipac.ca →", "Read on ipac.ca →"],
    ["media-talks-07", "Chaîne YouTube", "YouTube channel"],
    ["media-talks-08", "« IA et administration électronique »", "“AI and Electronic Governance”"],
    ["media-talks-09", "La chaîne vidéo de Svitlana Chukut : conférences et formations sur l'administration électronique, l'intelligence artificielle générative et les villes intelligentes (en ukrainien).", "Svitlana Chukut's video channel: lectures and trainings on e-governance, generative artificial intelligence and smart cities (in Ukrainian)."],
    ["media-talks-10", "Ouvrir la chaîne →", "Open the channel →"],
    ["media-talks-11", "Conférences invitées et formations sur l'intelligence artificielle", "Invited talks &amp; AI trainings"],
    ["media-talks-12", "Atelier · 2025", "Workshop · 2025"],
    ["media-talks-13", "Atelier : développement du GPT personnalisé « AI Compliance Advisor » (23 février 2025).", "Workshop: development of the custom GPT “AI Compliance Advisor” (23 February 2025)."],
    ["media-talks-14", "Regarder →", "Watch →"],
    ["media-talks-15", "Atelier · 2025", "Workshop · 2025"],
    ["media-talks-16", "Atelier : test de l'application GPT développée (21 février 2025).", "Workshop: testing the developed GPT application (21 February 2025)."],
    ["media-talks-17", "Regarder →", "Watch →"],
    ["media-talks-18", "Atelier · 2025", "Workshop · 2025"],
    ["media-talks-19", "Premier volet de l'atelier sur le développement d'agents GPT avec l'intelligence artificielle générative (16 février 2025).", "First part of the workshop on developing GPT agents with generative artificial intelligence (16 February 2025)."],
    ["media-talks-20", "Regarder →", "Watch →"],
    ["media-talks-21", "Formation · 2024", "Training · 2024"],
    ["media-talks-22", "Troisième volet de la formation sur l'intelligence artificielle générative et les possibilités de son utilisation (8 juin 2024).", "Third part of the training on generative artificial intelligence and the possibilities of its use (8 June 2024)."],
    ["media-talks-23", "Regarder →", "Watch →"],
    ["media-talks-24", "Formation · 2024", "Training · 2024"],
    ["media-talks-25", "Deuxième volet de la formation sur l'intelligence artificielle générative et les possibilités de son utilisation (27 mai 2024).", "Second part of the training on generative artificial intelligence and the possibilities of its use (27 May 2024)."],
    ["media-talks-26", "Regarder →", "Watch →"],
    ["media-talks-27", "Formation · 2024", "Training · 2024"],
    ["media-talks-28", "Premier volet de la formation au développement d'agents GPT personnalisés ; présentation du GPT personnalisé « Expert in the Development of E-Governance ».", "First GPTs development training; presentation of the custom GPT “Expert in the Development of E-Governance”."],
    ["media-talks-29", "Regarder →", "Watch →"],
    ["media-talks-30", "Formation · 2024", "Training · 2024"],
    ["media-talks-31", "Deuxième volet ; présentation du GPT personnalisé « Bachelor's Thesis Writing Advisor ».", "Second training; presentation of the custom GPT “Bachelor's Thesis Writing Advisor”."],
    ["media-talks-32", "Regarder →", "Watch →"],
    ["media-talks-33", "Formation · 2024", "Training · 2024"],
    ["media-talks-34", "Troisième volet ; présentation du GPT personnalisé « Curriculum Development Consultant ».", "Third training; presentation of the custom GPT “Curriculum Development Consultant”."],
    ["media-talks-35", "Regarder →", "Watch →"],
    ["media-talks-36", "Formation invitée · 2024", "Invited training · 2024"],
    ["media-talks-37", "Formation invitée sur l'intelligence artificielle générative et ses applications pratiques.", "Invited training on generative artificial intelligence and its practical applications."],
    ["media-talks-38", "Regarder →", "Watch →"],
    ["media-talks-39", "Conférence · 2023", "Conference talk · 2023"],
    ["media-talks-40", "« L’intelligence artificielle dans l’administration publique : possibilités et menaces »", "“Artificial Intelligence in Public Administration: Opportunities and Threats”"],
    ["media-talks-41", "Communication à la XIIe conférence scientifique et pratique internationale « La voie vers une paix durable après la guerre : État, entreprises, innovations », Kyiv, 24 novembre 2023 : les possibilités qu'ouvre l'intelligence artificielle pour l'administration publique, et les menaces qu'elle y fait peser.", "Talk at the XII International Scientific and Practical Conference “The Path to Sustainable Peace After War: State, Business, Innovations”, Kyiv, 24 November 2023: the opportunities artificial intelligence opens for public administration, and the threats it brings to it."],
    ["media-talks-42", "Regarder →", "Watch →"],
    ["media-talks-43", "Formation · 2023", "Training · 2023"],
    ["media-talks-44", "Formation aux compétences professionnelles : recherche d'emploi et intelligence artificielle.", "Professional skills training: job search and artificial intelligence."],
    ["media-talks-45", "Regarder →", "Watch →"],
    ["media-talks-46", "Conférences et mini-conférences vidéo", "Video lectures &amp; mini-lectures"],
    ["media-talks-47", "Conférence · 2024", "Conference talk · 2024"],
    ["media-talks-48", "« Gouvernement électronique, administration électronique, gouvernance mobile : définitions, défis, tendances actuelles »", "“E-Government, E-Governance, Mobile Governance: Definitions, Challenges, Current Trends”"],
    ["media-talks-49", "Communication à la conférence scientifique et pratique internationale « Problèmes contemporains de management » (novembre 2024) : définitions, défis et tendances actuelles du gouvernement électronique, de l'administration électronique et de l'administration mobile.", "Talk at the International Scientific and Practical Conference “Modern Problems of Management” (November 2024): definitions, challenges and current trends of e-government, e-governance and mobile governance."],
    ["media-talks-50", "Regarder →", "Watch →"],
    ["media-talks-51", "Conférence · 2024", "Lecture · 2024"],
    ["media-talks-52", "« La gouvernance mobile — approches actuelles, défis et avantages »", "“Mobile Governance — Modern Approaches, Challenges and Advantages”"],
    ["media-talks-53", "Conférence sur l'administration mobile : approches contemporaines, défis et avantages (septembre 2024).", "Lecture on mobile governance: current approaches, challenges and advantages (September 2024)."],
    ["media-talks-54", "Regarder →", "Watch →"],
    ["media-talks-55", "Mini-conférence · 2021", "Mini-lecture · 2021"],
    ["media-talks-56", "« En bref : administration électronique, gouvernement électronique et démocratie électronique »", "“Briefly on E-Governance, E-Government and E-Democracy”"],
    ["media-talks-57", "Mini-conférence du cycle sur l'administration électronique : en bref, l'administration électronique, le gouvernement électronique et la démocratie électronique.", "Mini-lecture from the e-governance cycle: in brief — e-governance, e-government and e-democracy."],
    ["media-talks-58", "Regarder →", "Watch →"],
    ["media-talks-59", "Mini-conférence · 2021", "Mini-lecture · 2021"],
    ["media-talks-60", "« La compréhension actuelle de la nature de l’administration électronique »", "“The Modern Understanding of the Essence of E-Governance”"],
    ["media-talks-61", "Mini-conférence : la compréhension contemporaine de la nature de l'administration électronique.", "Mini-lecture: the contemporary understanding of the essence of e-governance."],
    ["media-talks-62", "Regarder →", "Watch →"],
    ["media-talks-63", "Mini-conférence · 2021", "Mini-lecture · 2021"],
    ["media-talks-64", "« La déclaration de l’UE de 1999 sur la société de l’information et l’administration électronique »", "“The 1999 EU Declaration on the Information Society and E-Governance”"],
    ["media-talks-65", "Mini-conférence : la déclaration de l'UE de 1999 sur la société de l'information et l'administration électronique.", "Mini-lecture: the 1999 EU declaration on the information society and e-governance."],
    ["media-talks-66", "Regarder →", "Watch →"],
    ["media-talks-67", "Mini-conférence · 2021", "Mini-lecture · 2021"],
    ["media-talks-68", "« Les rapports de l’ONU sur le développement de l’administration électronique, 2001–2018 »", "“UN Reports on E-Governance Development, 2001–2018”"],
    ["media-talks-69", "Mini-conférence : les rapports de l'ONU sur le développement de l'administration électronique, 2001–2018.", "Mini-lecture: UN reports on e-government development, 2001–2018."],
    ["media-talks-70", "Regarder →", "Watch →"],
    ["media-talks-71", "Mini-conférence · 2021", "Mini-lecture · 2021"],
    ["media-talks-72", "« En bref : les principes fondamentaux de l’expérience étrangère de mise en œuvre de l’administration électronique »", "“Briefly on the Key Principles of Foreign Experience in Implementing E-Governance”"],
    ["media-talks-73", "Mini-conférence : en bref, les principes clés de l'expérience étrangère de mise en œuvre de l'administration électronique.", "Mini-lecture: in brief, the key principles of foreign experience in implementing e-governance."],
    ["media-talks-74", "Regarder →", "Watch →"],
    ["media-talks-75", "Mini-conférence · 2021", "Mini-lecture · 2021"],
    ["media-talks-76", "« La base de données de l’ONU sur le développement de l’administration électronique et le rapport de l’ONU 2020 sur le développement de l’administration électronique »", "“The UN Database on E-Governance Development and the UN Report on E-Governance Development for 2020”"],
    ["media-talks-77", "Mini-conférence : la base de données de l'ONU sur le développement de l'administration électronique et le rapport de l'ONU de 2020.", "Mini-lecture: the UN e-government development database and the UN 2020 e-government report."],
    ["media-talks-78", "Regarder →", "Watch →"],
    ["media-talks-79", "Communications confirmées — programmes et annonces", "Confirmed talks — programmes &amp; announcements"],
    ["media-talks-80", "Symposium international · 2023", "International symposium · 2023"],
    ["media-talks-81", "Communication au symposium international de recherche GISU 2023 (Alliance des universités des villes jumelées de Guangzhou, Université Western Sydney), 14 novembre 2023. L'annonce de la faculté de KPI précise que la communication est présentée par Svitlana Chukut.", "Talk at the GISU 2023 International Research Symposium (Alliance of Guangzhou International Sister-City Universities, Western Sydney University), 14 November 2023. The KPI faculty announcement states that the talk is presented by Svitlana Chukut."],
    ["media-talks-82", "Lire l'annonce →", "Read the announcement →"],
    ["media-talks-83", "Communication plénière · 2023", "Plenary talk · 2023"],
    ["media-talks-84", "« L’utilisation de l’IA dans l’administration publique : tendances et défis »", "“The Use of AI in Public Administration: Trends and Challenges”"],
    ["media-talks-85", "Ve conférence scientifique et pratique internationale « L'administration publique pour le développement durable : défis et perspectives aux niveaux national et local », Kyiv, 26 octobre 2023 — communication n° 12 du programme de la session plénière.", "V International Scientific and Practical Conference “Public Administration for Sustainable Development: Challenges and Prospects at the National and Local Levels”, Kyiv, 26 October 2023 — talk No. 12 in the plenary-session programme."],
    ["media-talks-86", "Programme (PDF) →", "Programme (PDF) →"],
    ["media-talks-87", "Table ronde · 2023", "Round table · 2023"],
    ["media-talks-88", "« L’utilisation de l’IA dans l’enseignement supérieur : tendances, défis et menaces »", "“The Use of AI in Higher Education: Trends, Challenges and Threats”"],
    ["media-talks-89", "Table ronde sur l'intelligence artificielle dans l'éducation (UkrINTEI, Conseil des jeunes chercheurs du ministère de l'Éducation et des Sciences de l'Ukraine), 14 juin 2023 — communication en session 3 du programme.", "Round table on artificial intelligence in education (UkrINTEI, Council of Young Scientists at the Ministry of Education and Science of Ukraine), 14 June 2023 — talk in Session 3 of the programme."],
    ["media-talks-90", "Programme (PDF) →", "Programme (PDF) →"],
    ["media-talks-91", "Conférence internationale · 2024", "International conference · 2024"],
    ["media-talks-92", "« Challenges and Adaptations in University Education Amidst War: An In-depth Analysis of the 'Smart Cities' Syllabus Modifications Under Wartime Conditions in Ukraine »", "“Challenges and Adaptations in University Education Amidst War: An In-depth Analysis of the 'Smart Cities' Syllabus Modifications Under Wartime Conditions in Ukraine”"],
    ["media-talks-93", "Communication conjointe de Svitlana Chukut, professeure, docteure ès sciences en administration publique, Département de théorie et de pratique du management, Université technique nationale d'Ukraine « Institut polytechnique de Kyiv Igor Sikorsky » (Ukraine), et d'Olha Zahvoiska, PhD en administration publique, consultante en revues fonctionnelles, Programme postuniversitaire en administration publique, Institut des affaires publiques, Université Jagellonne (Pologne), à la German and Slavic Studies II International Multidisciplinary Conference « Main Challenges and Issues of University Education in War Conditions: Ukraine – 2022-2024 », University of Manitoba, Winnipeg, 25–26 avril 2024. Certificat de participation à l'appui.", "Joint presentation by Svitlana Chukut, Professor, DSc (Public Administration), Department of Theory and Practice of Management, National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute” (Ukraine), and Olha Zahvoiska, PhD (Public Administration), Functional Reviews Consultant, Postgraduate Program in Public Administration, Institute of Public Affairs, Jagiellonian University (Poland), at the German and Slavic Studies II International Multidisciplinary Conference “Main Challenges and Issues of University Education in War Conditions: Ukraine – 2022-2024”, University of Manitoba, Winnipeg, 25–26 April 2024. Supported by the certificate of participation."],
    ["media-events-01", "Chronologie distincte", "Dedicated chronology"],
    ["media-events-02", "Tous les événements — <span class=\"grad\">sur une page distincte</span>", "Every event, <span class=\"grad\">now on its own page</span>"],
    ["media-events-03", "26 enregistrements vérifiés : date, rôle et lieu.", "Twenty-six verified records, each with its date, role and venue."],
    ["media-events-04", "Ouvrir la chronologie des événements", "Open the events chronology"],
  ];
  for (var i = 0; i < L.length; i++) { PAGE.fr[L[i][0]] = L[i][1]; PAGE.en[L[i][0]] = L[i][2]; }
})();
