/* ================================================================
   SITE CONTENT — CERTIFICATE & DOCUMENT VIEWER REGISTRY
   ================================================================
   This file holds ONLY data: CERTVIEW, the registry the
   certificate / document viewer (in assets/app.js) reads.
   One entry per document or gallery photo, keyed by the
   data-cert="…" slug of its button in index.html:

     "slug": {
       "pages": ["assets/cert-pages/slug-1.jpg", …],  // full pages, in order
       "sum":   {"fr": "…", "en": "…"},   // optional: what the document says
       "title": {"fr": "…", "en": "…"}    // optional: gallery caption shown
                                          // as the viewer title
     }

   TO ADD A DOCUMENT: put its page images under
   assets/cert-pages/ (card image under assets/certificates/),
   add one entry here, and add a card in index.html whose
   button carries data-cert="slug". Nothing else changes.
   ================================================================ */
var CERTVIEW = {
 "photo-podium-blue-1": {
  "pages": [
   "assets/photos/event-podium-blue-1.jpg"
  ],
  "title": {
   "fr": "Communication « L’administration publique et la COVID-19 » à la XIe Conférence internationale « Problèmes modernes de gestion » (18–19 novembre 2021), à l’Institut polytechnique de Kyiv Igor Sikorsky",
   "en": "Presentation “Public Administration and COVID-19” at the XI International Conference “Modern Problems of Management” (18–19 November 2021), at Igor Sikorsky Kyiv Polytechnic Institute"
  }
 },
 "photo-podium-blue-2": {
  "pages": [
   "assets/photos/photo-02-upgraded.jpg"
  ],
  "title": {
   "fr": "Communication « L’administration publique et la COVID-19 » à la XIe Conférence internationale « Problèmes modernes de gestion » (18–19 novembre 2021), à l’Institut polytechnique de Kyiv Igor Sikorsky",
   "en": "Presentation “Public Administration and COVID-19” at the XI International Conference “Modern Problems of Management” (18–19 November 2021), at Igor Sikorsky Kyiv Polytechnic Institute"
  }
 },
 "photo-podium-closeup": {
  "pages": [
   "assets/photos/photo-03-upgraded.jpg"
  ],
  "title": {
   "fr": "Intervention « La gouvernance électronique — défis et possibilités actuels » devant les participants de l’Olympiade étudiante panukrainienne d’administration publique, événement dont elle a participé à l’organisation, dans la salle du Conseil académique de KPI",
   "en": "Talk “E-Governance — Current Challenges and Opportunities” to participants of the All-Ukrainian Student Olympiad in Public Administration, an event she helped organise, in the Academic Council hall of KPI"
  }
 },
 "photo-podium-emblem": {
  "pages": [
   "assets/photos/photo-04-upgraded.jpg"
  ],
  "title": {
   "fr": "Communication à la séance plénière de la Journée de la gouvernance électronique en 2011",
   "en": "Presentation at the plenary session of E-Governance Day in 2011"
  }
 },
 "photo-rada-2017": {
  "pages": [
   "assets/photos/photo-05-upgraded.jpg"
  ],
  "title": {
   "fr": "Communication « De l’Internet des objets à la ville intelligente (Smart City) : problèmes et perspectives » à la première conférence scientifique et pratique « L’Internet des objets : problèmes de régulation juridique et de mise en œuvre » (Verkhovna Rada d’Ukraine, 24 octobre 2017 ; organisée par la Commission de l’informatisation et des communications, l’Institut de recherche en informatique et en droit de l’Académie nationale des sciences juridiques d’Ukraine et la Faculté de sociologie et de droit de l’Institut polytechnique de Kyiv Igor Sikorsky)",
   "en": "Presentation “From the Internet of Things to Smart City: Problems and Prospects” at the first scientific and practical conference “The Internet of Things: Problems of Legal Regulation and Implementation” (Verkhovna Rada of Ukraine, 24 October 2017; organised by the Committee on Informatisation and Communications, the Research Institute of Informatics and Law of the National Academy of Legal Sciences of Ukraine, and the Faculty of Sociology and Law of Igor Sikorsky Kyiv Polytechnic Institute)"
  }
 },
 "photo-meeting-pryimak": {
  "pages": [
   "assets/photos/photo-06-upgraded.jpg"
  ],
  "title": {
   "fr": "Participation à une table ronde de l’Agence d’État pour la gouvernance électronique d’Ukraine et d’autres administrations concernées sur la réforme du secteur des TI et du système de la commande publique, 2015",
   "en": "Participation in a round table of the State Agency for E-Governance of Ukraine and other relevant agencies on reforming the IT sector and the public procurement system, 2015"
  }
 },
 "photo-jury-desk": {
  "pages": [
   "assets/photos/event-jury-desk.jpg"
  ],
  "title": {
   "fr": "Membre du jury du Concours pan-ukrainien des travaux de recherche étudiants en administration publique, 2019",
   "en": "Member of the jury of the All-Ukrainian Competition of Student Research Papers in Public Administration, 2019"
  }
 },
 "photo-knutd-meeting": {
  "pages": [
   "assets/photos/event-knutd-meeting.jpg"
  ],
  "title": {
   "fr": "Participation à une formation de l’Agence nationale d’assurance qualité de l’enseignement supérieur, en qualité de vice-présidente du Conseil d’experts sectoriel n° 28 « Administration publique », décembre 2019",
   "en": "Participation in a training of the National Agency for Higher Education Quality Assurance, as deputy chair of Sectoral Expert Council No. 28 “Public Administration”, December 2019"
  }
 },
 "photo-round-table": {
  "pages": [
   "assets/photos/photo-09-fine.jpg"
  ],
  "title": {
   "fr": "Participation à la réunion pan-ukrainienne des établissements d’enseignement supérieur formant des spécialistes en administration publique, en qualité de présidente de la sous-commission de la spécialité « Administration publique » du Conseil scientifique et méthodologique du ministère de l’Éducation et des Sciences d’Ukraine, 2017",
   "en": "Participation in the All-Ukrainian meeting of higher education institutions training specialists in public administration, as chair of the subcommission for the specialty “Public Administration” of the Scientific and Methodological Council of the Ministry of Education and Science of Ukraine, 2017"
  }
 },
 "photo-round-table-group": {
  "pages": [
   "assets/photos/event-round-table-group.jpg"
  ],
  "title": {
   "fr": "Photographie de groupe du jury et des participants du Concours pan-ukrainien des travaux de recherche en administration publique, 2019",
   "en": "Group photograph of the jury and participants of the All-Ukrainian Competition of Research Papers in Public Administration, 2019"
  }
 },
 "photo-hall-group": {
  "pages": [
   "assets/photos/event-hall-group.jpg"
  ],
  "title": {
   "fr": "Participation à une table ronde sur l’échange d’expériences dans l’enseignement de la spécialité « Administration publique » dans les universités d’Ukraine, Université nationale Taras Chevtchenko de Kyiv, 2019",
   "en": "Participation in a round table on sharing experience in teaching the “Public Administration” specialty at Ukrainian universities, Taras Shevchenko National University of Kyiv, 2019"
  }
 },
 "photo-classroom-group": {
  "pages": [
   "assets/photos/event-classroom-group.jpg"
  ],
  "title": {
   "fr": "En tant que membre du jury du Concours pan-ukrainien des travaux de recherche étudiants en administration publique, 2019",
   "en": "As a member of the jury of the All-Ukrainian Competition of Student Research Papers in Public Administration, 2019"
  }
 },
 "photo-group-nmc": {
  "pages": [
   "assets/photos/event-group-nmc.jpg"
  ],
  "title": {
   "fr": "Réunion au ministère de l’Éducation et des Sciences d’Ukraine : la sous-commission « Administration publique » du Conseil scientifique et méthodologique du ministère (S. Tchoukout — présidente de la sous-commission), avec Oleh Sharov, directeur général de la Direction de l’enseignement supérieur et de l’éducation des adultes, le 14 décembre 2016",
   "en": "Meeting at the Ministry of Education and Science of Ukraine: the “Public Administration” subcommission of the Scientific and Methodological Council of the Ministry (S. Chukut — chair of the subcommission), with Oleh Sharov, Director General of the Directorate of Higher Education and Adult Education, 14 December 2016"
  }
 },
 "photo-gloria-honours": {
  "pages": [
   "assets/photos/event-gloria-honours.jpg"
  ],
  "title": {
   "fr": "Organisateurs et membres du jury de l’Olympiade étudiante pan-ukrainienne dans la spécialité « Administration publique » à l’Université technique nationale d’Ukraine « Institut polytechnique de Kyiv Igor Sikorsky » (Svitlana Tchoukout — vice-présidente du jury), 28–30 mars 2018",
   "en": "Organisers and jury members of the All-Ukrainian Student Olympiad in the specialty “Public Administration” at the National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute” (Svitlana Chukut — deputy chair of the jury), 28–30 March 2018"
  }
 },
 "photo-gloria-graduation": {
  "pages": [
   "assets/photos/event-gloria-graduation.jpg"
  ],
  "title": {
   "fr": "Séance solennelle à l’occasion de la remise des diplômes de master, Faculté de sociologie et de droit, Université technique nationale d’Ukraine « Institut polytechnique de Kyiv Igor Sikorsky », 2017",
   "en": "Ceremonial meeting on the occasion of the master’s graduation, Faculty of Sociology and Law, National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”, 2017"
  }
 },
 "photo-students-flag": {
  "pages": [
   "assets/photos/photo-16-fine.jpg"
  ],
  "title": {
   "fr": "Avec ses étudiants — lauréats du Concours pan-ukrainien des travaux de recherche étudiants dans la spécialité « Administration publique », 2019 (elle a dirigé leurs travaux : les trois travaux présentés au concours ont tous été primés — diplômes des Ier, IIe et IIIe degrés)",
   "en": "Together with her students — winners of the All-Ukrainian Competition of Student Research Papers in the specialty “Public Administration”, 2019 (she supervised their papers: all three papers submitted to the competition won — first-, second- and third-degree diplomas)"
  }
 },
 "photo-students-hall-1": {
  "pages": [
   "assets/photos/photo-17-fine.jpg"
  ],
  "title": {
   "fr": "Cours hors les murs avec les étudiants du programme d’études « Gouvernance électronique » (niveau master) : participation au Smart City Forum dans le cadre du cours « Ville intelligente », 2020",
   "en": "Field class with students of the “E-Governance” educational programme (master’s level): participation in the Smart City Forum as part of the “Smart City” course, 2020"
  }
 },
 "photo-olympiada-opening-2019": {
  "pages": [
   "assets/photos/event-olympiada-2019.jpg"
  ],
  "title": {
   "fr": "Ouverture de l’Olympiade — vice-présidente du jury de l’Olympiade étudiante pan-ukrainienne dans la spécialité « Administration publique », 2019",
   "en": "Opening of the Olympiad — deputy chair of the jury of the All-Ukrainian Student Olympiad in the specialty “Public Administration”, 2019"
  }
 },
 "photo-online-conference": {
  "pages": [
   "assets/photos/event-online-conference.jpg"
  ],
  "title": {
   "fr": "Organisatrice et présidente du jury de la Première Olympiade étudiante universitaire ouverte en gouvernance électronique, tenue les 18–19 mai 2021 à la Faculté de sociologie et de droit de l’Institut polytechnique de Kyiv Igor Sikorsky — un événement pan-ukrainien qui a réuni une jeunesse talentueuse, d’éminents scientifiques, des leaders du marché informatique et des responsables clés de la transformation numérique de l’État",
   "en": "Organiser and chair of the jury of the First Open University Student Olympiad in E-Governance, held on 18–19 May 2021 at the Faculty of Sociology and Law of Igor Sikorsky Kyiv Polytechnic Institute — an all-Ukrainian event that brought together talented young people, leading scholars, IT-market leaders and key officials of the state’s digital transformation"
  }
 },
 "photo-rotary-2023": {
  "pages": [
   "assets/photos/rotary.jpg"
  ]
 },
 "photo-award-coe": {
  "pages": [
   "assets/photos/event-award-coe.jpg"
  ],
  "title": {
   "fr": "Cérémonie de remise des prix du concours pan-ukrainien de l’Agence nationale d’Ukraine pour la fonction publique (NADS) « Meilleures pratiques de mise en œuvre des innovations éducatives dans le système de formation professionnelle des fonctionnaires, des chefs des administrations d’État locales, de leurs premiers adjoints et adjoints, des responsables des collectivités locales et des députés des conseils locaux », 2020. Catégorie « Formation des étudiants en master dans la spécialité 281 “Administration publique” » : la pratique éducative innovante « Maîtrise, explore, mets en œuvre ! » (auteure — Svitlana Anatoliivna Tchoukout, docteure ès sciences en administration publique, professeure)",
   "en": "Award ceremony of the All-Ukrainian competition of the National Agency of Ukraine on Civil Service (NADS) “Best Practices in Implementing Educational Innovations in the System of Professional Training of Civil Servants, Heads of Local State Administrations, Their First Deputies and Deputies, Local Self-Government Officials and Deputies of Local Councils”, 2020. Nomination “Training of Master’s Students in Specialty 281 ‘Public Administration and Administration’”: the educational innovative practice “Master It, Research It, Implement It!” (author — Svitlana Anatoliivna Chukut, Doctor of Sciences in Public Administration, Professor)"
  }
 },
 "photo-round-table-voitovych": {
  "pages": [
   "assets/photos/event-round-table-voitovych.jpg"
  ],
  "title": {
   "fr": "Animation du séminaire-réunion pan-ukrainien consacré à la discussion du projet de norme de l’enseignement supérieur en administration publique (niveau master), 2018",
   "en": "Conducting the All-Ukrainian seminar-meeting to discuss the draft standard of higher education in Public Administration and Administration (master’s level), 2018"
  }
 },
 "photo-sikorsky": {
  "pages": [
   "assets/photos/photo-22-upgraded.jpg"
  ],
  "title": {
   "fr": "Xe Conférence scientifique et pratique internationale « Problèmes actuels de management 2019 ». Communication « Du gouvernement électronique à la gouvernance intelligente : défis et menaces actuels ». Svitlana Tchoukout — vice-présidente du comité d’organisation de la conférence, cheffe par intérim du Département de théorie et de pratique du management de l’Institut polytechnique de Kyiv Igor Sikorsky, vice-présidente du Conseil d’experts sectoriel n° 28 « Administration publique » de l’Agence nationale d’assurance qualité de l’enseignement supérieur",
   "en": "The X International Scientific and Practical Conference “Modern Problems of Management 2019”. Talk “From E-Government to Smart Governance: Current Challenges and Threats”. Svitlana Chukut — deputy chair of the conference organising committee, acting head of the Department of Theory and Practice of Management at Igor Sikorsky Kyiv Polytechnic Institute, deputy chair of Sectoral Expert Council No. 28 “Public Administration and Administration” of the National Agency for Higher Education Quality Assurance"
  }
 },
 "photo-meeting-lavra": {
  "pages": [
   "assets/photos/event-meeting-lavra.jpg"
  ],
  "title": {
   "fr": "Animation d’une table ronde avec les directeurs des départements concernés du gouvernement ukrainien, dans le cadre de la Journée de la gouvernance électronique 2010, Académie nationale d’administration publique auprès du Président de l’Ukraine",
   "en": "Conducting a round table with the heads of the relevant departments of the Government of Ukraine, within the E-Governance Day 2010, National Academy of Public Administration under the President of Ukraine"
  }
 },
 "photo-subcommission-281-2017": {
  "pages": [
   "assets/photos/event-subcommission-2017.jpg"
  ],
  "title": {
   "fr": "Réunion élargie de la sous-commission de la Commission scientifique et méthodique pour la spécialité 281 « Administration publique » sur la norme de l’enseignement supérieur du troisième niveau (éducatif et scientifique) — le grade de docteur en philosophie, salle des réunions administratives de l’Institut polytechnique de Kyiv Igor Sikorsky, 12 octobre 2017 (plus de 60 participants : fonctionnaires, dirigeants d’établissements d’enseignement supérieur, scientifiques de différentes régions d’Ukraine)",
   "en": "Extended meeting of the subcommission of the Scientific-Methodical Commission for specialty 281 “Public Administration and Administration” on the standard of higher education of the third (educational-scientific) level — the Doctor of Philosophy degree, Hall of Administrative Meetings of Igor Sikorsky Kyiv Polytechnic Institute, 12 October 2017 (over 60 participants: state officials, heads of higher education institutions, scholars from different regions of Ukraine)"
  }
 },
 "photo-egov-banner-meeting": {
  "pages": [
   "assets/photos/event-egov-banner-meeting.jpg"
  ],
  "title": {
   "fr": "Animation d’une table ronde avec les directeurs des départements concernés du gouvernement ukrainien, dans le cadre de la Journée de la gouvernance électronique 2010, Académie nationale d’administration publique auprès du Président de l’Ukraine",
   "en": "Conducting a round table with the heads of the relevant departments of the Government of Ukraine, within the E-Governance Day 2010, National Academy of Public Administration under the President of Ukraine"
  }
 },
 "photo-egov-day-table": {
  "pages": [
   "assets/photos/event-egov-day-table.jpg"
  ],
  "title": {
   "fr": "Animation d’une table ronde avec les directeurs des départements concernés du gouvernement ukrainien, dans le cadre de la Journée de la gouvernance électronique 2010, Académie nationale d’administration publique auprès du Président de l’Ukraine",
   "en": "Conducting a round table with the heads of the relevant departments of the Government of Ukraine, within the E-Governance Day 2010, National Academy of Public Administration under the President of Ukraine"
  }
 },
 "photo-seminar-zoom-2021": {
  "pages": [
   "assets/photos/event-seminar-2021.jpg"
  ],
  "title": {
   "fr": "Séminaire-réunion pan-ukrainien sur la modification de la liste des domaines de connaissance et des spécialités (en ligne, Zoom), 27 août 2021, à l’initiative de l’Institut polytechnique de Kyiv Igor Sikorsky. Modératrice — Svitlana Tchoukout, présidente de la sous-commission 281 du Conseil scientifique et méthodique du ministère de l’Éducation et des Sciences de l’Ukraine (2016–2019), vice-présidente du Conseil d’experts sectoriel 28 de l’Agence nationale d’assurance qualité de l’enseignement supérieur (2019–2020) ; des experts, scientifiques et enseignants formant des spécialistes en administration publique ont analysé le projet de résolution du Cabinet des ministres de l’Ukraine modifiant la Liste des domaines et spécialités ainsi que la Classification internationale type de l’éducation ISCED-F 2013",
   "en": "All-Ukrainian seminar-meeting on amending the list of fields of knowledge and specialties (online, Zoom), 27 August 2021, initiated by Igor Sikorsky Kyiv Polytechnic Institute. Moderator — Svitlana Chukut, chair of subcommission 281 of the Scientific-Methodical Council of the Ministry of Education and Science of Ukraine (2016–2019), deputy chair of Sectoral Expert Council 28 of the National Agency for Higher Education Quality Assurance (2019–2020); experts, scholars and educators training specialists in public administration analysed the draft resolution of the Cabinet of Ministers of Ukraine on amendments to the List of Fields and Specialties and the International Standard Classification of Education ISCED-F 2013"
  }
 },
 "photo-egov-for-all": {
  "pages": [
   "assets/photos/event-egov-for-all.jpg"
  ],
  "title": {
   "fr": "Animation d’une table ronde avec les directeurs des départements concernés du gouvernement ukrainien, dans le cadre de la Journée de la gouvernance électronique 2010, Académie nationale d’administration publique auprès du Président de l’Ukraine",
   "en": "Conducting a round table with the heads of the relevant departments of the Government of Ukraine, within the E-Governance Day 2010, National Academy of Public Administration under the President of Ukraine"
  }
 },
 "photo-panel-chukut": {
  "pages": [
   "assets/photos/event-panel-chukut.jpg"
  ],
  "title": {
   "fr": "Participation en qualité d’experte à une réunion avec des responsables gouvernementaux, des scientifiques, des représentants des médias et des experts internationaux sur la mise en place d’une interaction efficace entre les autorités et les médias, 2011, Cabinet des ministres de l’Ukraine",
   "en": "Expert participation in a meeting with government officials, scholars, media representatives and international experts on establishing effective interaction between the authorities and the mass media, 2011, Cabinet of Ministers of Ukraine"
  }
 },
 "photo-panel-chukut-wide": {
  "pages": [
   "assets/photos/event-panel-chukut-wide.jpg"
  ],
  "title": {
   "fr": "Participation en qualité d’experte à une réunion avec des responsables gouvernementaux, des scientifiques, des représentants des médias et des experts internationaux sur la mise en place d’une interaction efficace entre les autorités et les médias, 2011, Cabinet des ministres de l’Ukraine",
   "en": "Expert participation in a meeting with government officials, scholars, media representatives and international experts on establishing effective interaction between the authorities and the mass media, 2011, Cabinet of Ministers of Ukraine"
  }
 },
 "photo-colleagues-hall": {
  "pages": [
   "assets/photos/event-colleagues-hall.jpg"
  ],
  "title": {
   "fr": "Échange de vues avec des collègues pendant la pause-café de la réunion sur la mise en place d’une interaction efficace entre les autorités et les médias, Cabinet des ministres de l’Ukraine, 2011",
   "en": "Exchanging views with colleagues during the coffee break of the meeting on establishing effective interaction between the authorities and the mass media, Cabinet of Ministers of Ukraine, 2011"
  }
 },
 "photo-hall-wide": {
  "pages": [
   "assets/photos/event-hall-wide.jpg"
  ],
  "title": {
   "fr": "Participation en qualité d’experte à une réunion avec des responsables gouvernementaux, des scientifiques, des représentants des médias et des experts internationaux sur la mise en place d’une interaction efficace entre les autorités et les médias, 2011, Cabinet des ministres de l’Ukraine",
   "en": "Expert participation in a meeting with government officials, scholars, media representatives and international experts on establishing effective interaction between the authorities and the mass media, 2011, Cabinet of Ministers of Ukraine"
  }
 },
 "photo-egov-day-stage": {
  "pages": [
   "assets/photos/event-egov-day-stage.jpg"
  ],
  "title": {
   "fr": "Présidence de la séance plénière de la Journée de la gouvernance électronique, 2011",
   "en": "Chairing the plenary session of the E-Governance Day, 2011"
  }
 },
 "photo-egov-group-banner": {
  "pages": [
   "assets/photos/event-egov-group-banner.jpg"
  ],
  "title": {
   "fr": "Avec des collègues et des étudiants — la première promotion du programme de master en gouvernance électronique, classe de gouvernance électronique, Académie nationale d’administration publique auprès du Président de l’Ukraine, 2009",
   "en": "Together with colleagues and students — the first intake of the master’s programme in e-governance, e-governance classroom, National Academy of Public Administration under the President of Ukraine, 2009"
  }
 },
 "microsoft-ai-skills": {
  "pages": [
   "assets/photos/microsoft-ai-skills-badge.jpg"
  ]
 },
 "book-2007": {
  "pages": [
   "assets/books/info-policy.jpg"
  ]
 },
 "book-2008": {
  "pages": [
   "assets/books/egov-2008.jpg"
  ]
 },
 "book-2022": {
  "pages": [
   "assets/books/osnovy-egu-2022-titlepage.jpg"
  ]
 },
 "proc-2008": {
  "pages": [
   "assets/books/egov-2008.jpg"
  ]
 },
 "oxford-unesco-ai-gov-2026": {
  "pages": [
   "assets/cert-pages/oxford-unesco-ai-gov-2026-1.jpg"
  ]
 },
 "ipac-ai-agents-2026": {
  "pages": [
   "assets/cert-pages/ipac-ai-agents-2026-1.jpg"
  ]
 },
 "ipac-navigating-ai-2026": {
  "pages": [
   "assets/cert-pages/ipac-navigating-ai-2026-1.jpg"
  ]
 },
 "ipac-practical-guide-2025": {
  "pages": [
   "assets/cert-pages/ipac-practical-guide-2025-1.jpg"
  ]
 },
 "ipac-practical-guide-2024": {
  "pages": [
   "assets/cert-pages/ipac-practical-guide-2024-1.jpg"
  ]
 },
 "gbc-ai-gamification": {
  "pages": [
   "assets/cert-pages/gbc-ai-gamification-1.jpg"
  ]
 },
 "gbc-training-programs": {
  "pages": [
   "assets/cert-pages/gbc-training-programs-1.jpg"
  ]
 },
 "gbc-ai-creativity": {
  "pages": [
   "assets/cert-pages/gbc-ai-creativity-1.jpg"
  ]
 },
 "gbc-digital-confidence": {
  "pages": [
   "assets/cert-pages/gbc-digital-confidence-1.jpg"
  ]
 },
 "gbc-excel": {
  "pages": [
   "assets/cert-pages/gbc-excel-1.jpg"
  ]
 },
 "gbc-code-and-aoda": {
  "pages": [
   "assets/cert-pages/gbc-code-and-aoda-1.jpg"
  ]
 },
 "gbc-anti-racism": {
  "pages": [
   "assets/cert-pages/gbc-anti-racism-1.jpg"
  ]
 },
 "gbc-respect-workplace": {
  "pages": [
   "assets/cert-pages/gbc-respect-workplace-1.jpg"
  ]
 },
 "gbc-aoda-general-requirements": {
  "pages": [
   "assets/cert-pages/gbc-aoda-general-requirements-1.jpg"
  ]
 },
 "gbc-aoda-info-communication": {
  "pages": [
   "assets/cert-pages/gbc-aoda-info-communication-1.jpg"
  ]
 },
 "gbc-aoda-customer-service": {
  "pages": [
   "assets/cert-pages/gbc-aoda-customer-service-1.jpg"
  ]
 },
 "acadia-ai-literacy": {
  "pages": [
   "assets/cert-pages/acadia-ai-literacy-1.jpg"
  ]
 },
 "umanitoba-conference-2024": {
  "pages": [
   "assets/cert-pages/umanitoba-conference-2024-1.jpg"
  ]
 },
 "coursera-pe-educators-spec": {
  "pages": [
   "assets/cert-pages/coursera-pe-educators-spec-1.jpg"
  ]
 },
 "coursera-pe-spec": {
  "pages": [
   "assets/cert-pages/coursera-pe-spec-1.jpg"
  ]
 },
 "coursera-genai-educators-spec": {
  "pages": [
   "assets/cert-pages/coursera-genai-educators-spec-1.jpg"
  ]
 },
 "coursera-genai-assistants-spec": {
  "pages": [
   "assets/cert-pages/coursera-genai-assistants-spec-1.jpg"
  ]
 },
 "coursera-gpt-vision": {
  "pages": [
   "assets/cert-pages/coursera-gpt-vision-1.jpg"
  ]
 },
 "coursera-openai-gpts": {
  "pages": [
   "assets/cert-pages/coursera-openai-gpts-1.jpg"
  ]
 },
 "coursera-trustworthy-ai": {
  "pages": [
   "assets/cert-pages/coursera-trustworthy-ai-1.jpg"
  ]
 },
 "coursera-pe-for-chatgpt": {
  "pages": [
   "assets/cert-pages/coursera-pe-for-chatgpt-1.jpg"
  ]
 },
 "coursera-genai-leaders": {
  "pages": [
   "assets/cert-pages/coursera-genai-leaders-1.jpg"
  ]
 },
 "coursera-chatgpt-ada": {
  "pages": [
   "assets/cert-pages/coursera-chatgpt-ada-1.jpg"
  ]
 },
 "coursera-genai-everyone": {
  "pages": [
   "assets/cert-pages/coursera-genai-everyone-1.jpg"
  ]
 },
 "coursera-ai-foundations-asu": {
  "pages": [
   "assets/cert-pages/coursera-ai-foundations-asu-1.jpg"
  ]
 },
 "coursera-innovative-teaching": {
  "pages": [
   "assets/cert-pages/coursera-innovative-teaching-1.jpg"
  ]
 },
 "curriculum-development-2023": {
  "pages": [
   "assets/cert-pages/curriculum-development-2023-1.jpg"
  ]
 },
 "tcps2-core": {
  "pages": [
   "assets/cert-pages/tcps2-core-1.jpg"
  ]
 },
 "wes-eca-2023": {
  "pages": [
   "assets/certificates/wes-eca-2023.jpg"
  ]
 },
 "gisu-appreciation-2023": {
  "pages": [
   "assets/cert-pages/gisu-appreciation-2023-1.jpg"
  ]
 },
 "costi-elt-2023": {
  "pages": [
   "assets/cert-pages/costi-elt-2023-1.jpg"
  ]
 },
 "prometheus-naqa-2019": {
  "pages": [
   "assets/cert-pages/prometheus-naqa-2019-1.jpg"
  ],
  "sum": {
   "fr": "Ce que dit le document (original en ukrainien) : l'Agence nationale d'assurance qualité de l'enseignement supérieur de l'Ukraine, par l'intermédiaire de la plateforme d'apprentissage en ligne Prometheus, certifie que Svitlana Anatoliivna Chukut a réussi le cours « Experte en accréditation des programmes d'enseignement : formation en ligne ». Délivré le 19 octobre 2019.",
   "en": "What the document says (original in Ukrainian): the National Agency for Higher Education Quality Assurance of Ukraine, through the Prometheus online learning platform, certifies that Svitlana Anatoliivna Chukut successfully completed the course “Expert on Accreditation of Educational Programs: Online Training”. Issued 19 October 2019."
  }
 },
 "award-podjaka-ifntuog-2023": {
  "pages": [
   "assets/photos/podjaka-ifntuog-2023.jpg"
  ],
  "sum": {
   "fr": "Ce que dit le document (original en ukrainien) : Remerciement (Podjaka) — le Ministère de l'Éducation et des Sciences de l'Ukraine et l'Université technique nationale du pétrole et du gaz d'Ivano-Frankivsk remercient Svitlana Anatoliivna Chukut pour son haut niveau de professionnalisme, son travail scientifique fructueux et la préparation du lauréat (1re place) du concours international de travaux scientifiques étudiants « Sciences managériales, sociales et comportementales dans la mise en œuvre des principes du développement durable » pour l'année universitaire 2022/2023. Arrêté n° 102 du 10 mai 2023 ; signé par le vice-recteur à la recherche, Ihor Chudyk.",
   "en": "What the document says (original in Ukrainian): Certificate of Gratitude (Podjaka) — the Ministry of Education and Science of Ukraine and the Ivano-Frankivsk National Technical University of Oil and Gas thank Svitlana Anatoliivna Chukut for her high level of professionalism, fruitful scientific work and preparation of the winner (1st place) of the International Competition of Student Scientific Works “Managerial, Social and Behavioural Sciences in Implementing the Principles of Sustainable Development” in the 2022/2023 academic year. Order No. 102 of 10 May 2023; signed by the Vice-Rector for Research, Ihor Chudyk."
  }
 },
 "award-podjaka-kneu-2021": {
  "pages": [
   "assets/photos/podjaka-kneu-2021.jpg"
  ],
  "sum": {
   "fr": "Ce que dit le document (original en ukrainien) : Remerciement — l'Université nationale d'économie de Kyiv nommée d'après Vadym Hetman remercie Svitlana Anatoliivna Chukut pour la préparation des lauréats du IIe tour du concours panukrainien de travaux scientifiques étudiants en « Administration et gestion publiques » pour l'année universitaire 2020/2021. Kyiv, le 8 avril 2021 ; signé par L. L. Antoniuk, présidente de la commission sectorielle du concours.",
   "en": "What the document says (original in Ukrainian): Certificate of Gratitude — the Kyiv National Economic University named after Vadym Hetman thanks Svitlana Anatoliivna Chukut for preparing the winners of the second round of the All-Ukrainian Competition of Student Scientific Works in “Public Administration and Management” in the 2020/2021 academic year. Kyiv, 8 April 2021; signed by L. L. Antoniuk, head of the field competition commission."
  }
 },
 "award-podjaka-mes": {
  "pages": [
   "assets/photos/podjaka-mes.jpg"
  ],
  "sum": {
   "fr": "Ce que dit le document (original en ukrainien) : Remerciement (Podjaka) du Ministère de l'Éducation et des Sciences de l'Ukraine, décerné à Svitlana Anatoliivna Chukut, directrice par intérim de la chaire de théorie et de pratique de l'administration de l'Université technique nationale d'Ukraine « Institut polytechnique de Kyiv Igor Sikorsky », pour un apport important au développement de l'éducation et des sciences, un grand professionnalisme, un soutien efficace à l'élaboration et à la mise en œuvre de la politique publique d'éducation et de science, ainsi qu'une participation à l'élaboration de normes d'enseignement supérieur fondées sur les compétences. Signé par la ministre, Liliia Hrynevych, Kyiv.",
   "en": "What the document says (original in Ukrainian): Certificate of Gratitude (Podjaka) of the Ministry of Education and Science of Ukraine, awarded to Svitlana Anatoliivna Chukut, acting head of the Department of Theory and Practice of Management of the National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”, for a significant contribution to the development of education and science, high professionalism, effective support for shaping and implementing state policy in education and science, and participation in developing higher-education standards on a competency basis. Signed by the Minister, Liliia Hrynevych, Kyiv."
  }
 },
 "award-nads-diploma-2020": {
  "pages": [
   "assets/photos/nads-diploma-2020.jpg"
  ],
  "sum": {
   "fr": "Ce que dit le document (original en ukrainien) : Diplôme — IIIe place, décerné à l'Université technique nationale d'Ukraine « Institut polytechnique de Kyiv Igor Sikorsky » dans la catégorie « Formation des masters de la spécialité 281 « Administration et gestion publiques » » du concours « Meilleures pratiques de mise en œuvre des innovations pédagogiques dans le système de formation professionnelle des fonctionnaires, des chefs d'administrations locales d'État, de leurs premiers adjoints et adjoints, des agents des collectivités locales et des députés des conseils locaux ». Agence nationale d'Ukraine de la fonction publique ; signé par sa présidente, Nataliia Aliushyna, octobre 2020.",
   "en": "What the document says (original in Ukrainian): Diploma — third place, awarded to the National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute” in the category “Training of Masters in Specialty 281 ‘Public Administration and Management’” of the competition “Best Practices in Implementing Educational Innovations in the System of Professional Training of Civil Servants, Heads of Local State Administrations, Their First Deputies and Deputies, Local Self-Government Officials and Deputies of Local Councils”. National Agency of Ukraine on Civil Service; signed by its Head, Nataliia Aliushyna, October 2020."
  }
 },
 "award-gramota-kpi": {
  "pages": [
   "assets/photos/gramota-kpi.jpg"
  ],
  "sum": {
   "fr": "Ce que dit le document (original en ukrainien) : Diplôme d'honneur — « Décerné à Svitlana Anatoliivna Chukut — pour un apport important au développement de l'université, au renforcement de son autorité nationale et internationale et à la formation de spécialistes hautement qualifiés. » Université technique nationale d'Ukraine « Institut polytechnique de Kyiv Igor Sikorsky » ; signé par le recteur et le secrétaire scientifique.",
   "en": "What the document says (original in Ukrainian): Honorary Diploma — “Awarded: Chukut Svitlana Anatoliivna — for a significant contribution to the development of the university, strengthening its state and international authority, and training highly qualified specialists.” National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”; signed by the Rector and the Academic Secretary."
  }
 },
 "spu2021": {
  "pages": [
   "assets/certificates/spu2021-conference-certificate-1.png"
  ],
  "sum": {
   "fr": "Ce que dit le document (original en ukrainien) : certificat de participation délivré par la Faculté de sociologie et de droit et le Département de théorie et de pratique du management. Il confirme que Svitlana Anatoliivna Chukut a participé à la XIe conférence scientifique et pratique internationale « Problèmes contemporains de management 2021 — Transformation de l'administration publique dans le monde post-COVID », section 4 « Transformation numérique de l'administration publique : tendances et défis ». Kyiv, 18-19 novembre 2021 ; signé par Yana Tsymbalenko, présidente du comité d'organisation.",
   "en": "What the document says (original in Ukrainian): a certificate of participation issued by the Faculty of Sociology and Law and the Department of Theory and Practice of Management. It confirms that Svitlana Anatoliivna Chukut took part in the XI International Scientific and Practical Conference “Modern Problems of Management 2021 — Transformation of Public Administration in the Post-COVID World”, Section 4 “Digital Transformation of Public Administration: Trends and Challenges”. Kyiv, 18–19 November 2021; signed by Yana Tsymbalenko, head of the organising committee."
  }
 },
 "gisu-participation-2021": {
  "pages": [
   "assets/cert-pages/gisu-participation-2021-1.jpg"
  ]
 },
 "ugf-qualitative-methods-2023": {
  "pages": [
   "assets/cert-pages/ugf-qualitative-methods-2023-1.jpg"
  ]
 },
 "ugf-quantitative-methods-2023": {
  "pages": [
   "assets/cert-pages/ugf-quantitative-methods-2023-1.jpg"
  ]
 },
 "portfolio-curriculum": {
  "pages": [
   "assets/cert-pages/portfolio-curriculum-1.jpg",
   "assets/cert-pages/portfolio-curriculum-2.jpg",
   "assets/cert-pages/portfolio-curriculum-3.jpg",
   "assets/cert-pages/portfolio-curriculum-4.jpg",
   "assets/cert-pages/portfolio-curriculum-5.jpg",
   "assets/cert-pages/portfolio-curriculum-6.jpg",
   "assets/cert-pages/portfolio-curriculum-7.jpg",
   "assets/cert-pages/portfolio-curriculum-8.jpg",
   "assets/cert-pages/portfolio-curriculum-9.jpg",
   "assets/cert-pages/portfolio-curriculum-10.jpg",
   "assets/cert-pages/portfolio-curriculum-11.jpg",
   "assets/cert-pages/portfolio-curriculum-12.jpg",
   "assets/cert-pages/portfolio-curriculum-13.jpg",
   "assets/cert-pages/portfolio-curriculum-14.jpg"
  ],
  "title": {
   "fr": "Portfolio de conception de cours et de programmes d'études",
   "en": "Course & Curriculum Development Portfolio"
  }
 },
 "opp-egov-kpi": {
  "pages": [
   "assets/cert-pages/opp-egov-kpi-1.jpg",
   "assets/cert-pages/opp-egov-kpi-2.jpg",
   "assets/cert-pages/opp-egov-kpi-3.jpg",
   "assets/cert-pages/opp-egov-kpi-4.jpg",
   "assets/cert-pages/opp-egov-kpi-5.jpg",
   "assets/cert-pages/opp-egov-kpi-6.jpg",
   "assets/cert-pages/opp-egov-kpi-7.jpg",
   "assets/cert-pages/opp-egov-kpi-8.jpg",
   "assets/cert-pages/opp-egov-kpi-9.jpg",
   "assets/cert-pages/opp-egov-kpi-10.jpg",
   "assets/cert-pages/opp-egov-kpi-11.jpg",
   "assets/cert-pages/opp-egov-kpi-12.jpg",
   "assets/cert-pages/opp-egov-kpi-13.jpg",
   "assets/cert-pages/opp-egov-kpi-14.jpg",
   "assets/cert-pages/opp-egov-kpi-15.jpg",
   "assets/cert-pages/opp-egov-kpi-16.jpg",
   "assets/cert-pages/opp-egov-kpi-17.jpg",
   "assets/cert-pages/opp-egov-kpi-18.jpg",
   "assets/cert-pages/opp-egov-kpi-19.jpg",
   "assets/cert-pages/opp-egov-kpi-20.jpg",
   "assets/cert-pages/opp-egov-kpi-21.jpg",
   "assets/cert-pages/opp-egov-kpi-22.jpg",
   "assets/cert-pages/opp-egov-kpi-23.jpg",
   "assets/cert-pages/opp-egov-kpi-24.jpg",
   "assets/cert-pages/opp-egov-kpi-25.jpg",
   "assets/cert-pages/opp-egov-kpi-26.jpg",
   "assets/cert-pages/opp-egov-kpi-27.jpg",
   "assets/cert-pages/opp-egov-kpi-28.jpg",
   "assets/cert-pages/opp-egov-kpi-29.jpg",
   "assets/cert-pages/opp-egov-kpi-30.jpg",
   "assets/cert-pages/opp-egov-kpi-31.jpg",
   "assets/cert-pages/opp-egov-kpi-32.jpg",
   "assets/cert-pages/opp-egov-kpi-33.jpg",
   "assets/cert-pages/opp-egov-kpi-34.jpg",
   "assets/cert-pages/opp-egov-kpi-35.jpg",
   "assets/cert-pages/opp-egov-kpi-36.jpg",
   "assets/cert-pages/opp-egov-kpi-37.jpg",
   "assets/cert-pages/opp-egov-kpi-38.jpg",
   "assets/cert-pages/opp-egov-kpi-39.jpg",
   "assets/cert-pages/opp-egov-kpi-40.jpg"
  ],
  "sum": {
   "fr": "Ce que dit le document (original en ukrainien) : présentation du programme éducatif et professionnel « Administration électronique » de l'Université technique nationale d'Ukraine « Institut polytechnique de Kyiv Igor Sikorsky ». L'objectif du programme correspond pleinement à la mission et à la stratégie de développement de l'Institut polytechnique de Kyiv Igor Sikorsky pour 2020–2025 : la formation professionnelle de fonctionnaires et de gestionnaires capables de résoudre des tâches spécialisées complexes et des problèmes pratiques en administration publique, notamment en administration électronique. La présentation montre le développement des compétences pratiques — cours hors les murs, notamment au Secrétariat du Cabinet des ministres de l'Ukraine, et étude des meilleures expériences ukrainiennes (composante « Villes intelligentes ») — et présente les étudiants du programme, participants et lauréats du concours panukrainien de travaux scientifiques étudiants en administration et gestion publiques et du concours du budget participatif de Kyiv.",
   "en": "What the document says (original in Ukrainian): presentation of the Educational and Professional Programme “Electronic Governance” of the National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”. The programme's goal fully matches the mission and the Development Strategy of Igor Sikorsky Kyiv Polytechnic Institute for 2020–2025: professional training of public servants and managers able to solve complex specialised tasks and practical problems in public administration and management, in particular in e-governance. The presentation shows how practical skills are developed — field classes, including at the Secretariat of the Cabinet of Ministers of Ukraine, and study of the best Ukrainian experience (the “Smart Cities” component) — and presents the programme's students, participants and winners of the All-Ukrainian Competition of Student Scientific Works in Public Administration and Management and of the Kyiv Public Budget competition."
  },
  "title": {
   "fr": "Programme éducatif et professionnel « Administration électronique » — Institut polytechnique de Kyiv Igor Sikorsky",
   "en": "Educational and Professional Programme “Electronic Governance” — Igor Sikorsky Kyiv Polytechnic Institute"
  }
 },
 "fsp-gratitude-2023": {
  "pages": [
   "assets/cert-pages/fsp-gratitude-2023-1.jpg"
  ]
 },
 "black-sea-science-2023": {
  "pages": [
   "assets/cert-pages/black-sea-science-2023-1.jpg"
  ]
 },
 "ifntuog-gratitude-2022": {
  "pages": [
   "assets/cert-pages/ifntuog-gratitude-2022-1.jpg"
  ]
 },
 "nmc-testology-2021": {
  "pages": [
   "assets/cert-pages/nmc-testology-2021-1.jpg"
  ]
 },
 "knteu-2020-gramota": {
  "pages": [
   "assets/cert-pages/knteu-gramota-2020-1.jpg"
  ]
 },
 "kpi-jury-2019": {
  "pages": [
   "assets/cert-pages/kpi-jury-2019-1.jpg"
  ]
 },
 "knteu-2018-gramota": {
  "pages": [
   "assets/cert-pages/knteu-gramota-2018-1.jpg"
  ]
 },
 "kpi-2017-organizer": {
  "pages": [
   "assets/cert-pages/kpi-organizer-2017-1.jpg"
  ]
 },
 "kpi-2019-organizer": {
  "pages": [
   "assets/cert-pages/kpi-organizer-2019-1.jpg"
  ]
 },
 "kpi-2018-organizer": {
  "pages": [
   "assets/cert-pages/kpi-organizer-2018-1.jpg"
  ]
 },
 "gisu-symposium-2023": {
  "pages": [
   "assets/photos/gisu-symposium-2023.jpg"
  ]
 },
 "book-2008-foreign": {
  "pages": [
   "assets/books/egov-2008-foreign-experience.jpg"
  ]
 }
};
