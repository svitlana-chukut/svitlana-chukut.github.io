/* ================================================================
   ROUTER - hash routing for the single-page site
   ================================================================
   Behaviour, no content: maps the URL hash to one of the twelve
   <section class="page"> pages in index.html (SC_show), keeps
   the browser-tab title, the active menu state and Back/Forward
   scroll restoration in step. Page tab titles are content:
   PAGE_TITLES in assets/content-texts.js. Used to be an inline
   script in index.html.
   ================================================================ */
/* ---- Router: hash -> page/section whitelist, SC_show (page switch,
   tab title, active-menu state), deep-link hand-off and the
   Back/Forward scroll restoration further below ---- */
(function(){
  var PAGES=["home","bio","library","courses","media","events","egov-days","partners","documents","contact","archive","site-files"];
  var TITLES=window.PAGE_TITLES||{}; /* page tab titles are content: PAGE_TITLES in assets/content-texts.js */
  var ANCHORS={"courses-public":"courses","courses-list":"courses","courses-disciplines":"courses","courses-teaching":"courses","courses-kpi":"courses","courses-george-brown":"courses","courses-gbc":"courses","media-talks":"media","media-events":"media","events-list":"events","events-gallery":"events","egov-story":"egov-days","egov-editions":"egov-days","egov-sponsors":"egov-days","egov-gallery":"egov-days","egov-archive":"egov-days","egov-sources":"egov-days","lib-book":"library","lib-catalogue":"library","partners-grid":"partners","contact-cards":"contact","home-quick":"home","home-download":"home","contact-download":"contact","docs-resume":"documents","docs-list":"documents","docs-add":"documents","archive-folders":"archive","archive-analysis":"archive","archive-review":"archive","files-download":"site-files","files-structure":"site-files","files-editing":"site-files","files-naming":"site-files"};
  function validTarget(h){
    if(!h) return null;
    if(PAGES.indexOf(h)>=0) return {page:h,anchor:""};
    if(/^bio-(story|education|career|awards|certificates|projects|research|supervision|expertise|editorial|volunteering|collaboration|skills|recommendations|legacy)$/.test(h)) return {page:"bio",anchor:h};
    if(ANCHORS[h]) return {page:ANCHORS[h],anchor:h};
    return null;
  }
  function route(){
    return validTarget((location.hash||"").slice(1))||{page:"home",anchor:""};
  }
  /* A deep link does not always arrive as this document's own fragment:
     the public address belongs to the shell around the page, and the
     target section can be handed over as the query string of the
     address the page is actually served at, or by a message from the
     parent window. Every channel is normalised through the same
     whitelist and adopted as the fragment, so the address, a reload
     and Back/Forward all keep pointing at the section itself. */
  function targetFromSearch(){
    var q=location.search||"";
    if(q.length<2) return "";
    try{
      var sp=new URLSearchParams(q), keys=["to","section","anchor","page","target"], i, v;
      for(i=0;i<keys.length;i++){
        v=sp.get(keys[i]);
        if(v){ v=decodeURIComponent(v).replace(/^#/,""); if(validTarget(v)) return v; }
      }
      v=decodeURIComponent(q.slice(1).split("&")[0].split("=")[0]).replace(/^#/,"");
      if(validTarget(v)) return v;
    }catch(e){}
    return "";
  }
  function adoptHash(h){
    try{ history.replaceState(history.state,"","#"+h); }
    catch(e){ location.hash=h; }
  }
  var lastHash=null;
  window.SC_show=function(skipLand){
    lastHash=location.hash||"";
    var r=route(), p=r.page, lang=(window.SC_lang?window.SC_lang():"fr");
    document.querySelectorAll(".page").forEach(function(s){ s.classList.toggle("on", s.id==="page-"+p); });
    document.querySelectorAll(".nav a").forEach(function(a){
      var href=a.getAttribute("href");
      a.classList.toggle("on", href==="#"+p || href==="#"+(r.anchor||"__none__") || (a.classList.contains("nav-parent")&&p==="bio"));
      a.removeAttribute("aria-current");
    });
    /* exactly one aria-current in the header menu: the most specific
       link for this route (the section link when there is an anchor,
       otherwise the page link) */
    var curLink=document.querySelector('.nav a[href="#'+(r.anchor||p)+'"]');
    if(curLink) curLink.setAttribute("aria-current","page");
    document.title=(TITLES[p]&&TITLES[p][lang])||TITLES[p].fr;
    /* the social-card titles track the tab title */
    var ogt=document.querySelector('meta[property="og:title"]'); if(ogt) ogt.setAttribute("content",document.title);
    var twt=document.querySelector('meta[name="twitter:title"]'); if(twt) twt.setAttribute("content",document.title);
    if(skipLand===true) return;
    /* Back/Forward: a saved place handed over by popstate wins over the
       usual landing — restore the exact scroll offset once the page is
       shown (see the scroll-restoration block below). */
    if(restoreReq){ var rq=restoreReq; restoreReq=null; if(rq.hash===(location.hash||"")){ restorePlace(rq); return; } }
    if(r.anchor){
      /* One landing for every route to a deep anchor — menu, cards,
         search, a shared or direct link, Back/Forward: the same
         stabilized go-to the search uses (SC_scrollFlash in app.js),
         which keeps correcting while images above the target finish
         loading. The plain scrollIntoView below is only a fallback
         for when app.js is unavailable. */
      window.setTimeout(function(){
        var target=document.getElementById(r.anchor);
        if(!target) return;
        if(window.SC_scrollFlash) window.SC_scrollFlash(target);
        else target.scrollIntoView({behavior:"smooth",block:"start"});
      },0);
    }else{
      window.scrollTo(0,0);
    }
  };
  window.addEventListener("hashchange", window.SC_show);
  /* Keyboard and screen-reader landing: when navigation switches to a
     different page without a deep anchor (anchor landings already focus
     their target through SC_scrollFlash), move focus to the new page's
     heading, so the visitor starts at the top of the new content
     instead of being left on the menu link they activated. Registered
     after SC_show's own listener, so the page is shown first. */
  var focusPage=null;
  window.addEventListener("hashchange", function(){
    var r=route();
    if(r.anchor){ focusPage=r.page; return; }
    if(focusPage===r.page) return;
    focusPage=r.page;
    var pg=document.getElementById("page-"+r.page);
    var h=pg?pg.querySelector("h1"):null;
    if(h){ if(!h.hasAttribute("tabindex")) h.setAttribute("tabindex","-1"); try{ h.focus({preventScroll:true}); }catch(e){} }
  });
  /* ---- Back/Forward scroll restoration -------------------------------
     The browser's own restoration is switched off: every history entry
     carries the visitor's exact place — page, section anchor and scroll
     offset — in history.state. The place is re-saved as the visitor
     scrolls (throttled) and flushed the moment an in-app link is
     clicked, so the entry being left always holds the position it was
     left at. On Back/Forward, popstate hands the saved place to
     SC_show, which shows the page and then re-applies the offset until
     the layout has settled — the same stabilised landing present()
     gives anchor jumps — instead of the usual section-top landing.
     While a restore runs, saving is suspended so the programmatic
     scrolling cannot overwrite the saved place with intermediate
     positions; a scroll by the visitor cancels the restore at once. */
  if("scrollRestoration" in history){ try{ history.scrollRestoration="manual"; }catch(e){} }
  var restoreReq=null, restoring=false, saveTimer=null, settleTimer=null;
  function currentPlace(){
    var r=route();
    return {scPlace:1, page:r.page, section:r.anchor||"", y:Math.round(window.scrollY||window.pageYOffset||0)};
  }
  function savePlace(){
    if(restoring) return;
    try{ history.replaceState(currentPlace(),""); }catch(e){}
  }
  function savePlaceSoon(){
    if(saveTimer) return;
    saveTimer=window.setTimeout(function(){ saveTimer=null; savePlace(); },150);
  }
  window.addEventListener("scroll", savePlaceSoon, {passive:true});
  document.addEventListener("click", function(ev){
    var a=ev.target&&ev.target.closest?ev.target.closest('a[href^="#"]'):null;
    if(!a) return;
    savePlace();
    /* a same-page section jump swaps the fragment by replaceState and
       fires no hashchange, so re-save once its landing has settled */
    window.setTimeout(savePlace, 1400);
  }, true);
  window.addEventListener("hashchange", function(){
    window.setTimeout(savePlace, 1200);
  });
  function onRestoreUser(){ cancelRestore(); }
  function cancelRestore(){
    if(settleTimer){ window.clearInterval(settleTimer); settleTimer=null; }
    window.removeEventListener("wheel", onRestoreUser, {passive:true});
    window.removeEventListener("touchstart", onRestoreUser, {passive:true});
    window.removeEventListener("keydown", onRestoreUser, true);
    if(restoring){ restoring=false; savePlace(); }
  }
  function restorePlace(req){
    cancelRestore();
    restoring=true;
    var y=Math.max(0, req.y||0);
    window.scrollTo(0,y);
    var tries=0, stable=0, lastY=-1;
    window.addEventListener("wheel", onRestoreUser, {passive:true});
    window.addEventListener("touchstart", onRestoreUser, {passive:true});
    window.addEventListener("keydown", onRestoreUser, true);
    settleTimer=window.setInterval(function(){
      tries++;
      var cy=window.scrollY||window.pageYOffset||0;
      var maxY=Math.max(0, document.documentElement.scrollHeight-window.innerHeight);
      if(Math.abs(cy-y)<=2||(cy>=maxY-2&&cy===lastY)) stable++;
      else{ stable=0; window.scrollTo(0,y); }
      lastY=cy;
      if(stable>=6||tries>48) cancelRestore();
    },250);
  }
  window.addEventListener("popstate", function(ev){
    var st=ev.state;
    if(st&&st.scPlace===1&&typeof st.y==="number"){
      restoreReq={hash:location.hash||"", y:st.y};
      /* hashchange follows popstate and SC_show consumes the request;
         if no hashchange comes (same-fragment traversal), show and
         restore directly. */
      window.setTimeout(function(){ if(restoreReq) window.SC_show(); },60);
    } else restoreReq=null;
  });
  /* Hand-off from the shell around the page: a message naming a valid
     section (e.g. "#events-gallery") is adopted as the fragment and
     landed on exactly like a fragment that arrived with the address. */
  window.addEventListener("message", function(ev){
    if(window.parent===window||ev.source!==window.parent) return;
    var d=ev.data, h="";
    if(typeof d==="string") h=d;
    else if(d&&typeof d==="object") h=d.hash||d.anchor||d.target||d.to||"";
    if(typeof h!=="string") return;
    h=h.replace(/^#/,"");
    if(!validTarget(h)) return;
    if((location.hash||"").slice(1)!==h) adoptHash(h);
    window.SC_show();
  });
  function initRoute(){
    if(!(location.hash||"").slice(1)){
      var t=targetFromSearch();
      if(t) adoptHash(t);
    }
    window.SC_show();
  }
  /* Route at every point the target can show up: this script runs
     after the page markup, so the first pass already opens the linked
     section instead of flashing the home page; the later passes catch
     a fragment or query handed over while the page was loading, and
     the load pass re-asserts the routed page and title after every
     other initialisation hook has run. */
  initRoute();
  document.addEventListener("DOMContentLoaded", function(){
    initRoute();
    if(window.SC_setLang){ var orig=window.SC_setLang; window.SC_setLang=function(l){ orig(l); window.SC_show(true); }; }
  });
  window.addEventListener("load", function(){ window.SC_show(true); });
  /* For the first seconds, watch for a target that arrives without a
     hashchange (some shells rewrite the address silently): if the
     fragment names a section other than the one on screen, land on it
     through the same route as everything else. */
  var pollN=0;
  var poll=window.setInterval(function(){
    pollN++;
    var h=location.hash||"";
    if(h&&validTarget(h.slice(1))){
      var r=route(), cur=document.querySelector(".page.on");
      if(!cur||cur.id!=="page-"+r.page||(r.anchor&&h!==lastHash)) window.SC_show();
    }
    if(pollN>=12) window.clearInterval(poll);
  },400);
})();
