/* ================================================================
   PAGE_AFTER - per-language fix-up hook
   ================================================================
   Behaviour, no content: assets/app.js calls PAGE_AFTER(d, lang)
   after every language switch. It points the machine-facing
   layer (nav aria-label, meta / Open Graph / Twitter
   descriptions, search placeholder, image alt texts) at the
   active language. The wording itself is content and lives in
   the data files (PAGE key "metaDesc" in
   assets/content-page-global.js, PAGE_TITLES in
   assets/content-texts.js). Used to be an inline script in
   index.html.
   ================================================================ */
/* ---- Page dictionary: the fr/en strings behind every data-i18n key
   now live in assets/content-texts.js (global PAGE), together with
   the shared SHARED labels. Edit texts there. What stays below is
   PAGE_AFTER, the per-language fix-up hook run on each switch ---- */
function PAGE_AFTER(d,lang){
  /* machine-facing layer follows the page language: the main nav's
     aria-label and the meta / Open Graph / Twitter descriptions
     (wording taken from the site's own introductory texts) */
  var mainNav=document.getElementById("nav"); if(mainNav) mainNav.setAttribute("aria-label",lang==="fr"?"Navigation principale":"Main navigation");
  var metaDesc=d.metaDesc||""; /* the wording itself is content: PAGE key "metaDesc" in assets/content-page-global.js */
  var mdEl=document.querySelector('meta[name="description"]'); if(mdEl) mdEl.setAttribute("content",metaDesc);
  var ogdEl=document.querySelector('meta[property="og:description"]'); if(ogdEl) ogdEl.setAttribute("content",metaDesc);
  var twdEl=document.querySelector('meta[name="twitter:description"]'); if(twdEl) twdEl.setAttribute("content",metaDesc);
  var q=document.getElementById("fq"); if(q) q.placeholder=lang==="fr"?"Recherche par titre…":"Search by title…";
  var burger=document.querySelector(".burger"); if(burger) burger.setAttribute("aria-label","Menu");
  var metrics=document.querySelector(".impact-metrics"); if(metrics) metrics.setAttribute("aria-label",lang==="fr"?"Indicateurs scientifiques clés":"Key scholarly metrics");
  var portrait=document.querySelector(".hero-photo img"); if(portrait) portrait.alt="Svitlana Chukut";
  document.querySelectorAll("img.cc-cover").forEach(function(im){ im.alt=lang==="fr"?"Panorama de Toronto au-dessus de l'eau":"Toronto skyline across the water"; });
  try{ if(typeof HOME_AFTER==="function" && !window._haDone){ window._haDone=true; HOME_AFTER(d,lang); } }catch(e){}
  try{ if(typeof LIB_AFTER==="function") LIB_AFTER(d,lang); }catch(e){}
}
