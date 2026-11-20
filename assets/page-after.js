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
  [["aria-label", "data-i18n-aria"], ["title", "data-i18n-title"]].forEach(function(pair){
    document.querySelectorAll("["+pair[1]+"]").forEach(function(el){
      var label = d[el.getAttribute(pair[1])];
      if(label) el.setAttribute(pair[0], label);
    });
  });
  var metaDesc=d.metaDesc||""; /* the wording itself is content: PAGE key "metaDesc" in assets/content-page-global.js */
  var mdEl=document.querySelector('meta[name="description"]'); if(mdEl) mdEl.setAttribute("content",metaDesc);
  var ogdEl=document.querySelector('meta[property="og:description"]'); if(ogdEl) ogdEl.setAttribute("content",metaDesc);
  var twdEl=document.querySelector('meta[name="twitter:description"]'); if(twdEl) twdEl.setAttribute("content",metaDesc);
  var q=document.getElementById("fq"); if(q) q.placeholder=lang==="fr"?"Recherche par titre…":"Search by title…";
  var ss=document.getElementById("ssInput"); if(ss) ss.placeholder=lang==="fr"?"Rechercher sur tout le site…":"Search the whole site…";
  var burger=document.querySelector(".burger"); if(burger) burger.setAttribute("aria-label","Menu");
  var metrics=document.querySelector(".impact-metrics"); if(metrics) metrics.setAttribute("aria-label",lang==="fr"?"Indicateurs scientifiques clés":"Key scholarly metrics");
  var portrait=document.querySelector(".hero-photo img"); if(portrait) portrait.alt="Svitlana Chukut";
  document.querySelectorAll("img.cc-cover").forEach(function(im){ im.alt=lang==="fr"?"Panorama de Toronto au-dessus de l'eau":"Toronto skyline across the water"; });
  /* every other image alt follows the page language too: the FR/EN
     pairs are content (PAGE keys named by each image's data-alt-i18n
     attribute, in assets/content-page-global.js) */
  document.querySelectorAll("img[data-alt-i18n]").forEach(function(im){ var v=d[im.getAttribute("data-alt-i18n")]; if(v) im.alt=v; });
  // Presentation covers match the language used for the slides in the viewer.
  document.querySelectorAll("img[data-cover-fr]").forEach(function(img){
    var language = lang === "fr" ? "fr" : "en";
    var src = img.getAttribute("data-cover-" + language);
    var dimensions = img.getAttribute("data-cover-" + language + "-size").split(" ");
    img.width = Number(dimensions[0]);
    img.height = Number(dimensions[1]);
    if(img.getAttribute("src") !== src) img.setAttribute("src", src);
  });
  /* the schema.org JSON-LD description follows the page language too
     (the Person record's facts themselves never change) */
  var ld=document.querySelector('script[type="application/ld+json"]');
  if(ld){ try{ var j=JSON.parse(ld.textContent); if(j&&typeof j.description==="string"){ j.description=metaDesc; ld.textContent=JSON.stringify(j); } }catch(e){} }
  // Preserve the visible wording in each card's accessible name for voice control.
  document.querySelectorAll("a.card,a.media-it,a.part").forEach(function(a){a.removeAttribute("aria-label");});
  try{ if(typeof HOME_AFTER==="function" && !window._haDone){ window._haDone=true; HOME_AFTER(d,lang); } }catch(e){}
  try{ if(typeof LIB_AFTER==="function") LIB_AFTER(d,lang); }catch(e){}
  if(window.SC_show) window.SC_show(true);
}
