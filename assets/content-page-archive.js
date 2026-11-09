/* ================================================================
   SITE CONTENT — LONG TEXTS OF THE ANALYSIS ARCHIVE page
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
    ["page-archive-01", "Accueil", "Home"],
    ["page-archive-02", "Archive pour analyse", "Analysis archive"],
    ["page-archive-03", "Tout le site, <em>un seul dossier trié</em>", "The whole site, <em>one sorted folder</em>"],
    ["page-archive-04", "Chaque fichier du site — pages, textes et les 462 images — rassemblé et trié en dix dossiers numérotés, prêt pour une analyse approfondie et un tri manuel des images, une par une.", "Every file on the site — pages, texts and all 462 images — gathered and sorted into ten numbered folders, ready for deep analysis and for sorting the images by hand, one by one."],
    ["page-archive-05", "fichiers dans le dossier", "files in the folder"],
    ["page-archive-06", "images à passer en revue", "images to review"],
    ["page-archive-07", "volume total des ressources", "total size of the resources"],
    ["page-archive-08", "dossiers numérotés", "numbered folders"],
    ["page-archive-09", "Le même tri existe comme un vrai dossier de fichiers : « Svitlana-Chukut--ALL-DATA--sorted » — avec le fichier 00_README--START-HERE.txt et l'inventaire complet INVENTORY.csv (chaque fichier, son dossier, son chemin d'origine et sa taille). Cette page en est le miroir navigable : mêmes dossiers, mêmes noms de fichiers.", "The same sort exists as a real folder of files: “Svitlana-Chukut--ALL-DATA--sorted” — with 00_README--START-HERE.txt and the complete INVENTORY.csv (every file, its folder, its original path and its size). This page is its browsable mirror: same folders, same file names."],
    ["archive-folders-01", "Structure du dossier", "Folder structure"],
    ["archive-folders-02", "Dix dossiers, <em>aucun fichier hors tri</em>", "Ten folders, <em>nothing left unsorted</em>"],
    ["archive-folders-03", "Pages du site et code", "Site pages &amp; code"],
    ["archive-folders-04", "7 pages HTML (la page principale contient les 10 rubriques du site), la feuille de style et les 2 scripts.", "7 HTML pages (the main page holds all 10 site sections), the stylesheet and the 2 scripts."],
    ["archive-folders-05", "fichiers", "files"],
    ["archive-folders-06", "Photos — portraits et événements", "Photos — portraits &amp; events"],
    ["archive-folders-07", "Le dossier photos (67) plus hero.jpg, bio2.jpg et favicon.jpg.", "The photos folder (67) plus hero.jpg, bio2.jpg and favicon.jpg."],
    ["archive-folders-08", "Certificats — originaux (cartes)", "Certificates — originals (cards)"],
    ["archive-folders-09", "Cartes des certificats, remerciements et diplômes tels qu'ils s'affichent sur le site.", "Certificate, gratitude and diploma cards as shown on the site."],
    ["archive-folders-10", "Certificats — pages complètes", "Certificates — full pages"],
    ["archive-folders-11", "Les pages entières des mêmes 53 documents : opp-egov-kpi en compte 40, portfolio-curriculum 14.", "The full pages of the same 53 documents: opp-egov-kpi alone has 40, portfolio-curriculum 14."],
    ["archive-folders-12", "Archive des Journées de l'administration électronique", "E-Governance Days archive"],
    ["archive-folders-13", "150 fichiers : 21 documents d'archive en 6 versions chacun, plus photos et emblèmes 2009–2011.", "150 files: 21 archive documents in 6 versions each, plus 2009–2011 photos and emblems."],
    ["archive-folders-14", "Livres", "Books"],
    ["archive-folders-15", "Couvertures et pages de titre des livres, et le PDF de l'édition 2008.", "Book covers and title pages, and the PDF of the 2008 edition."],
    ["archive-folders-16", "Logos et partenaires", "Logos &amp; partners"],
    ["archive-folders-17", "Logos des institutions partenaires en PNG, SVG et JPG.", "Partner institution logos in PNG, SVG and JPG."],
    ["archive-folders-18", "Miniatures vidéo", "Video thumbnails"],
    ["archive-folders-19", "Les 19 miniatures des vidéos YouTube de la rubrique Médias.", "The 19 thumbnails of the Media section's YouTube videos."],
    ["archive-folders-20", "Illustrations de service et captures de contrôle", "Service illustrations &amp; QA screenshots"],
    ["archive-folders-21", "14 illustrations de service (stock) et 11 captures de contrôle des pages (qa).", "14 service illustrations (stock) and 11 page-check screenshots (qa)."],
    ["archive-folders-22", "Les 2 certificats publiés via LinkedIn.", "The 2 certificates published via LinkedIn."],
    ["archive-analysis-01", "Analyse approfondie", "Deep analysis"],
    ["archive-analysis-02", "Ce qu'il faut regarder <em>en premier</em>", "What to look at <em>first</em>"],
    ["archive-analysis-03", "Un document, six versions", "One document, six versions"],
    ["archive-analysis-04", "Dans le dossier 05, chacun des 21 documents arch-01…arch-22 existe en original, -clean, -enhanced, -restored, -sr et -tuned : 105 fichiers sont des variantes du même contenu. C'est le premier tri à faire à la main : garder une version par document.", "In folder 05, each of the 21 documents arch-01…arch-22 exists as the original, -clean, -enhanced, -restored, -sr and -tuned: 105 files are variants of the same content. This is the first sort to do by hand: keep one version per document."],
    ["archive-analysis-05", "Chaque certificat existe deux fois", "Every certificate exists twice"],
    ["archive-analysis-06", "Les dossiers 03 et 04 portent les mêmes 53 documents : une carte courte et ses pages complètes (105 fichiers). Vérifiez chaque paire ensemble — la carte affichée doit venir de la même version que les pages.", "Folders 03 and 04 hold the same 53 documents: a short card and its full pages (105 files). Check each pair together — the displayed card should come from the same version as the pages."],
    ["archive-analysis-07", "Doublons dans les photos", "Duplicates among the photos"],
    ["archive-analysis-08", "Dans le dossier 02, plusieurs photos existent en deux traitements (photo-09-fine à côté de photo-09-upgraded, de même pour 16 et 17). Un seul traitement par photo suffit ; les autres alourdissent le dossier de 17,2 Mo.", "In folder 02, several photos exist in two treatments (photo-09-fine next to photo-09-upgraded, likewise 16 and 17). One treatment per photo is enough; the rest is what makes the folder weigh 17.2 MB."],
    ["archive-review-01", "Tri manuel", "Manual sort"],
    ["archive-review-02", "Passer les images en revue, <em>une par une</em>", "Review the images, <em>one by one</em>"],
    ["archive-review-03", "Filtrez par dossier, cherchez par nom de fichier, puis marquez chaque image : garder, à revérifier, ou candidate à la suppression. Les compteurs suivent votre avancement.", "Filter by folder, search by file name, then mark each image: keep, check again, or candidate for removal. The counters track your progress."],
    ["archive-review-04", "Dossier", "Folder"],
    ["archive-review-05", "Nom de fichier", "File name"],
    ["archive-review-06", "Mon tri", "My marks"],
    ["archive-review-07", "affichées", "shown"],
    ["archive-review-08", "à garder", "keep"],
    ["archive-review-09", "à revérifier", "check"],
    ["archive-review-10", "à supprimer ?", "remove?"],
    ["archive-review-11", "sans marque", "unmarked"],
    ["archive-review-12", "Afficher plus d'images", "Show more images"],
    ["archive-review-13", "Télécharger mon tri (.csv)", "Download my sort (.csv)"],
    ["archive-review-14", "Inventaire complet — 475 fichiers (.csv)", "Full inventory — 475 files (.csv)"],
    ["archive-review-15", "Structure du dossier (.txt)", "Folder structure (.txt)"],
    ["archive-review-16", "Les marques vivent uniquement dans cet onglet, le temps de la session : téléchargez votre tri avant de fermer la page pour le conserver à côté du dossier.", "Marks live only in this tab, for this session: download your sort before closing the page to keep it next to the folder."],
  ];
  for (var i = 0; i < L.length; i++) { PAGE.fr[L[i][0]] = L[i][1]; PAGE.en[L[i][0]] = L[i][2]; }
})();
