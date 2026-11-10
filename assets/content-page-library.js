/* ================================================================
   SITE CONTENT — LONG TEXTS OF THE LIBRARY page
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
    ["lib-book-01", "Éditions vérifiées", "Verified editions"],
    ["lib-book-02", "Les livres que l'on peut <span class=\"grad\">voir</span>", "The books you can <span class=\"grad\">see</span>"],
    ["lib-book-03", "Toutes les éditions dont une vraie couverture ou page de titre est conservée — le manuel de 2022, les actes de la première Journée de l'administration électronique (2008), le manuel « Politique d'information » (2e éd., 2008) et le support de cours de 2007.", "Every edition for which a genuine cover or title page survives — the 2022 textbook, the proceedings of the first E-Governance Day (2008), the Information Policy textbook (2nd ed., 2008) and the 2007 lecture outline."],
    ["lib-book-04", "Page de titre, et non couverture artistique", "Title page, not a designed cover"],
    ["lib-book-05", "p.", "pp."],
    ["lib-book-06", "« Fondements de l'administration électronique »", "Fundamentals of Electronic Governance"],
    ["lib-book-07", "Svitlana Chukut, Olha Zahvoiska, Yana Tsymbalenko. Manuel électronique de l'Université technique nationale d'Ukraine « Institut polytechnique de Kyiv Igor Sikorsky ».", "Svitlana Chukut, Olha Zahvoiska and Yana Tsymbalenko. An electronic textbook published by National Technical University of Ukraine «Igor Sikorsky Kyiv Polytechnic Institute»."],
    ["lib-book-08", "Ouvrir l'enregistrement dans le dépôt de l'Université technique nationale d'Ukraine « Igor Sikorsky Kyiv Polytechnic Institute» →", "Open the National Technical University of Ukraine «Igor Sikorsky Kyiv Polytechnic Institute» repository record →"],
    ["lib-book-09", "Page de titre des actes officiels", "Title page of the official proceedings"],
    ["lib-book-10", "p.", "pp."],
    ["lib-book-11", "« Expérience ukrainienne et étrangère de mise en œuvre de l'administration électronique »", "Domestic and Foreign Experience of Implementing E-Governance"],
    ["lib-book-12", "Actes de la première Journée de l'administration électronique (Kyiv, 14 mai 2008), Académie nationale d'administration publique auprès du Président de l'Ukraine. Rédactrice générale : Svitlana Chukut ; co-rédactrice : Olha Zahvoiska.", "Proceedings of the first E-Governance Day (Kyiv, 14 May 2008), National Academy of Public Administration under the President of Ukraine. General editor: Svitlana Chukut; co-editor: Olha Zahvoiska."],
    ["lib-book-13", "Ouvrir les actes officiels →", "Open the official proceedings →"],
    ["lib-book-14", "Couverture de la deuxième édition", "Cover of the second edition"],
    ["lib-book-15", "p.", "pp."],
    ["lib-book-16", "« Politique d'information » — manuel", "Information Policy — a textbook"],
    ["lib-book-17", "Heorhii Pocheptsov, Svitlana Chukut. Deuxième édition du manuel, maison d'édition « Znannia », Kyiv, 2008.", "Heorhii Pocheptsov and Svitlana Chukut. Second edition of the textbook, Znannia publishing house, Kyiv, 2008."],
    ["lib-book-18", "Page de titre", "Title page"],
    ["lib-book-19", "« Politique d'information en Ukraine » — support de cours", "Information Policy in Ukraine — lecture outline"],
    ["lib-book-20", "Svitlana Chukut, Tetiana Dzhyha. Support de cours, Académie nationale d'administration publique auprès du Président de l'Ukraine, Kyiv, 2007.", "Svitlana Chukut, Tetiana Dzhyha. Lecture outline, National Academy of Public Administration under the President of Ukraine, Kyiv, 2007."],
    ["lib-book-21", "Ouvrir le texte intégral →", "Open the full text →"],
    ["lib-book-22", "Les autres livres et manuels — la première édition de « Politique d'information » (2006), « Gouvernement électronique » (2007), « Politique humanitaire » (2002), la monographie de 1999 et les guides méthodologiques — figurent au catalogue ci-dessous comme notices textuelles : aucune image de couverture ou de page de titre vérifiée n'existe pour eux dans les catalogues ouverts ; elles pourront être ajoutées à partir de photographies d'exemplaires personnels.", "The other books and textbooks — the first edition of Information Policy (2006), E-Government (2007), Humanitarian Policy (2002), the 1999 monograph and the methodological guides — are catalogued below as text records: no verified cover or title-page image exists for them in open catalogues; those can be added from photographs of personal copies."],
    ["lib-catalogue-01", "Ouvrir le profil", "Open the profile"],
    ["lib-catalogue-02", "travaux", "works"],
    ["lib-catalogue-03", "1 954", "1,954"],
    ["lib-catalogue-04", "indice h", "h-index"],
    ["lib-catalogue-05", "indice i10", "i10-index"],
    ["lib-catalogue-06", "EN DATE DE NOVEMBRE 2026", "AS OF NOVEMBER 2026"],
    ["lib-catalogue-07", "Aucun résultat", "No results found"],
    ["lib-catalogue-08", "Essayer un autre titre ou réinitialiser les filtres pour retrouver la liste complète.", "Try a different title or clear the filters to bring the full list back."],
    ["lib-catalogue-09", "Réinitialiser les filtres", "Reset filters"],
  ];
  for (var i = 0; i < L.length; i++) { PAGE.fr[L[i][0]] = L[i][1]; PAGE.en[L[i][0]] = L[i][2]; }
})();
