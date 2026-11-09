/* ================================================================
   SITE CONTENT — LONG TEXTS OF THE CONTACT page
   ================================================================
   This file holds ONLY text data — no behaviour, no layout.
   Every entry is one passage of the page, in the order it
   appears on the page:

     [ "key", "French text", "English text" ]

   The key is the data-i18n attribute of the passage's <span>
   in index.html; the renderer (assets/app.js) fills that span
   from this file on every language switch. French is also the
   fallback printed inside the span in index.html.

   HOW TO EDIT
     - Change a text: edit BOTH language strings of its entry
       here. Never edit the copy inside index.html — it is
       only a no-JavaScript fallback and is overwritten.
     - Add a passage: add an entry with a fresh key, then put
       <span data-i18n="your-key">French fallback</span> where
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
    ["contact-download-01", "CV complet · un seul document", "Full résumé · one document"],
    ["contact-download-02", "Le CV complet, <span class=\"grad\">sur demande</span>", "The full résumé, <span class=\"grad\">on request</span>"],
    ["contact-download-03", "Le CV complet — coordonnées, formation, postes, publications, distinctions et certificats, dans un seul document — est fourni sur demande, en anglais ou en français. Écrivez un courriel ou passez par LinkedIn, et le document vous sera envoyé directement.", "The full résumé — contacts, education, positions, publications, awards and certificates in one document — is provided on request, in English or French. Send an email or reach out on LinkedIn, and the document will be sent to you directly."],
    ["contact-download-04", "CV académique mis à jour le 18 octobre 2026.", "Academic CV updated 18 October 2026."],
    ["contact-download-05", "Ouvrir l'archive de documents →", "Open the document archive →"],
    ["contact-download-06", "Demander le CV complet", "Request the full résumé"],
    ["contact-download-07", "Écrire un courriel", "Write an email"],
  ];
  for (var i = 0; i < L.length; i++) { PAGE.fr[L[i][0]] = L[i][1]; PAGE.en[L[i][0]] = L[i][2]; }
})();
