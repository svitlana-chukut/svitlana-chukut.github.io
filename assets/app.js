/* ================================================================
   EDITING THIS SCRIPT — map of the file, top to bottom.
   1. Shared behaviour: language switch (PAGE dictionaries live in
      index.html), Light/Dark theme, header menus, reveal-on-scroll,
      counters, course accordions.
   2. Progressive disclosure for long registries ([data-collapse]).
   3. Site-wide search: the index is built from the live page markup
      plus the LIB catalogue, so new content is searchable with no
      extra registration — except the hand-written LABELS map inside
      that block, which names the section a result belongs to.
   4. Document archive filter, certificate viewer, file viewer.
   To add a PAGE: add its <section class="page"> in index.html and
   register its name in the router there (PAGES + TITLES) — this file
   needs no change. Full manual: top of index.html.
   ================================================================ */
/* Shared: nav, i18n, reveal. Each page defines const PAGE = {uk:{...}, en:{...}} before this script. */
(function(){
  "use strict";
  var SHARED = {
    fr:{brandSub:"Communications · Gouvernance",nHome:"Accueil",nBio:"Biographie",nLib:"Bibliothèque",nCourses:"Cours",nMedia:"Médias",nPart:"Partenaires",nContact:"Contacts",fNav:"Sections",fContact:"Contacts",fNote:"Profil académique, publications, enseignement et engagement public.",rights:"Tous droits réservés.",madeWith:"Recherche · Enseignement · Service public"},
    en:{brandSub:"Communications · Governance",nHome:"Home",nBio:"Biography",nLib:"Library",nCourses:"Courses",nMedia:"Media",nPart:"Partners",nContact:"Contact",fNav:"Explore",fContact:"Contact",fNote:"Academic profile, publications, teaching, and public engagement.",rights:"All rights reserved.",madeWith:"Scholarship · Teaching · Public service"}
  };
  var lang = "en";
  function dict(){ var p=(typeof PAGE!=="undefined")?PAGE:{fr:{},en:{}}; return Object.assign({}, SHARED[lang], p[lang]||{}); }
  function apply(){
    var d = dict();
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var k = el.getAttribute("data-i18n");
      if(d[k]!==undefined) el.innerHTML = d[k];
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang button").forEach(function(b){
      b.classList.toggle("on", b.dataset.l===lang);
      b.setAttribute("aria-pressed", b.dataset.l===lang ? "true" : "false");
    });
    if(typeof PAGE_AFTER==="function"){ try{PAGE_AFTER(d,lang);}catch(e){} }
  }
  window.SC_setLang = function(l){ lang=l; apply(); };
  /* ---- manual theme: Light / Dark segmented switch in the header ----
     The initial theme is set by the inline script in <head> (saved choice
     from localStorage, otherwise the system preference) before first paint.
     A manual choice is saved and always wins over the system theme. */
  function themeSaved(){ try{ var s=localStorage.getItem("sc-theme"); return (s==="light"||s==="dark")?s:null; }catch(e){ return null; } }
  function paintThemeBtns(){
    var t=document.documentElement.getAttribute("data-theme")||"light";
    document.querySelectorAll("[data-theme-set]").forEach(function(b){
      b.setAttribute("aria-pressed", b.getAttribute("data-theme-set")===t ? "true" : "false");
    });
    var tg=document.getElementById("themeToggle");
    if(tg) tg.setAttribute("aria-pressed", t==="dark" ? "true" : "false");
  }
  window.SC_setTheme = function(t, save){
    if(t!=="light"&&t!=="dark") return;
    document.documentElement.setAttribute("data-theme", t);
    if(save!==false){ try{ localStorage.setItem("sc-theme", t); }catch(e){} }
    paintThemeBtns();
  };
  window.SC_lang = function(){ return lang; };
  window.SC_accordion = function(){
    document.querySelectorAll(".course>button").forEach(function(btn){
      if(btn._acc) return; btn._acc = 1;
      btn.addEventListener("click", function(){
        var c = btn.closest(".course"), body = c.querySelector(".body");
        var open = c.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        body.style.maxHeight = open ? body.scrollHeight + "px" : "0";
      });
    });
  };
  document.addEventListener("DOMContentLoaded", function(){
    apply();
    // theme switch wiring + follow live system changes only while no manual choice is saved
    paintThemeBtns();
    document.querySelectorAll("[data-theme-set]").forEach(function(b){
      b.addEventListener("click", function(){ window.SC_setTheme(b.getAttribute("data-theme-set")); });
    });
    /* compact one-icon theme switch (mobile header): toggles and saves
       through the same path as the segmented switch */
    var tgBtn=document.getElementById("themeToggle");
    if(tgBtn){
      tgBtn.addEventListener("click", function(){
        var cur=document.documentElement.getAttribute("data-theme")==="dark" ? "dark" : "light";
        window.SC_setTheme(cur==="dark" ? "light" : "dark");
      });
    }
    if(window.matchMedia){
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var onSys = function(e){ if(!themeSaved()) window.SC_setTheme(e.matches?"dark":"light", false); };
      if(mq.addEventListener) mq.addEventListener("change", onSys); else if(mq.addListener) mq.addListener(onSys);
    }
    // skip link: move focus to <main> without touching the hash router
    var sk=document.querySelector(".skip-link"), mn=document.getElementById("main");
    if(sk&&mn){ sk.addEventListener("click", function(ev){ ev.preventDefault(); mn.focus({preventScroll:true}); mn.scrollIntoView(); }); }
    // back-to-top: appears after the first screenful, on long pages
    var tt=document.getElementById("toTop");
    if(tt){
      var onScroll=function(){ tt.classList.toggle("show", window.scrollY>640); };
      window.addEventListener("scroll", onScroll, {passive:true}); onScroll();
      tt.addEventListener("click", function(){ window.scrollTo({top:0, behavior:"smooth"}); });
    }
    var b=document.querySelector(".burger"), n=document.querySelector(".nav");
    if(b&&n){
      var setMenu=function(open){
        b.classList.toggle("x",open);
        n.classList.toggle("open",open);
        document.body.classList.toggle("menu-open",open);
        b.setAttribute("aria-expanded",open?"true":"false");
        if(open){ n.scrollTop=0; }
      };
      b.addEventListener("click",function(){ setMenu(!n.classList.contains("open")); });
      n.querySelectorAll("a").forEach(function(a){ a.addEventListener("click",function(){ setMenu(false); }); });
      document.addEventListener("keydown",function(e){ if(e.key==="Escape"&&n.classList.contains("open")) setMenu(false); });
    }
    // Header dropdowns (Biography / Google Scholar / More): open instantly
    // on hover, stay open while the pointer crosses into the panel (the CSS
    // bridge covers the gap) and linger 400ms after the pointer leaves, so a
    // diagonal slip no longer kills the menu mid-journey. On touch devices
    // in the desktop layout the first tap on a trigger opens its submenu and
    // the second follows the link; Esc, an outside click, choosing an item
    // or navigating closes everything. aria-expanded mirrors the state.
    var navGroups=[].slice.call(document.querySelectorAll(".nav-group"));
    if(navGroups.length){
      var CLOSE_MS=400, ddOpen=null, ddTimer=null, touchAt=0, lastTouch=false;
      var desktopNav=window.matchMedia("(min-width:1081px)");
      document.addEventListener("pointerdown",function(e){
        lastTouch=(e.pointerType==="touch"||e.pointerType==="pen");
        if(lastTouch) touchAt=Date.now();
      },true);
      var ddSet=function(g,open){
        if(!g) return;
        g.classList.toggle("open",open);
        var p=g.querySelector(".nav-parent");
        if(p) p.setAttribute("aria-expanded",open?"true":"false");
        if(open) ddOpen=g; else if(ddOpen===g) ddOpen=null;
      };
      var ddCloseAll=function(){
        if(ddTimer){ clearTimeout(ddTimer); ddTimer=null; }
        navGroups.forEach(function(g){ ddSet(g,false); });
      };
      // Esc / outside click: close AND keep the panel shut while the pointer
      // is still parked on the trigger (CSS .suppress beats :hover); the
      // suppression clears when the pointer leaves the group.
      var ddSuppress=function(){
        if(ddOpen&&ddOpen._ddInside) ddOpen.classList.add("suppress");
        ddCloseAll();
      };
      var ddScheduleClose=function(g){
        if(ddTimer) clearTimeout(ddTimer);
        ddTimer=setTimeout(function(){ ddTimer=null; ddSet(g,false); },CLOSE_MS);
      };
      navGroups.forEach(function(g){
        var parent=g.querySelector(".nav-parent");
        g.addEventListener("mouseenter",function(){
          g._ddInside=true;
          // ignore the synthetic mouseenter a tap fires just before click
          if(lastTouch&&Date.now()-touchAt<1000) return;
          if(g.classList.contains("suppress")) return;
          if(ddTimer){ clearTimeout(ddTimer); ddTimer=null; }
          if(ddOpen&&ddOpen!==g) ddSet(ddOpen,false);
          ddSet(g,true);
        });
        g.addEventListener("mouseleave",function(){
          g._ddInside=false;
          g.classList.remove("suppress");
          ddScheduleClose(g);
        });
        g.addEventListener("focusin",function(){
          g.classList.remove("suppress");
          if(ddTimer){ clearTimeout(ddTimer); ddTimer=null; }
          ddSet(g,true);
        });
        g.addEventListener("focusout",function(e){
          if(!g.contains(e.relatedTarget)) ddSet(g,false);
        });
        if(parent){
          parent.addEventListener("click",function(e){
            if(lastTouch&&desktopNav.matches){
              if(!g.classList.contains("open")){
                e.preventDefault();
                g.classList.remove("suppress");
                if(ddOpen&&ddOpen!==g) ddSet(ddOpen,false);
                ddSet(g,true);
              } else {
                ddSet(g,false);
              }
            }
          });
        }
        g.querySelectorAll(".nav-submenu a").forEach(function(a){
          a.addEventListener("click",function(){ ddCloseAll(); });
        });
        // Keyboard: ArrowDown/ArrowUp on a trigger opens its submenu and
        // moves focus to the first/last item; the same keys walk the
        // items (wrapping). Enter still follows the trigger link and Esc
        // still closes (document handler above).
        if(parent){
          parent.addEventListener("keydown",function(e){
            if(e.key!=="ArrowDown"&&e.key!=="ArrowUp") return;
            var links=g.querySelectorAll(".nav-submenu a");
            if(!links.length) return;
            e.preventDefault();
            if(ddTimer){ clearTimeout(ddTimer); ddTimer=null; }
            if(ddOpen&&ddOpen!==g) ddSet(ddOpen,false);
            ddSet(g,true);
            (e.key==="ArrowDown"?links[0]:links[links.length-1]).focus();
          });
        }
        g.querySelectorAll(".nav-submenu a").forEach(function(a,idx,links){
          a.addEventListener("keydown",function(e){
            if(e.key!=="ArrowDown"&&e.key!=="ArrowUp") return;
            e.preventDefault();
            var n=links.length, j=e.key==="ArrowDown"?(idx+1)%n:(idx-1+n)%n;
            links[j].focus();
          });
        });
      });
      document.addEventListener("click",function(e){
        if(!e.target.closest||!e.target.closest(".nav-group")) ddSuppress();
      });
      document.addEventListener("keydown",function(e){
        if(e.key!=="Escape") return;
        var g=ddOpen;
        ddSuppress();
        // keyboard path: drop focus out of the panel so :focus-within
        // doesn't hold it open after Esc
        if(g&&document.activeElement&&g.contains(document.activeElement)) document.activeElement.blur();
      });
      window.addEventListener("hashchange",ddCloseAll);
    }
    if("IntersectionObserver" in window){
      window.__SC_REVEAL_OK=true;
      var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} }); },{threshold:.12});
      document.querySelectorAll(".rv").forEach(function(el){ io.observe(el); });
    } else {
      document.querySelectorAll(".rv").forEach(function(el){ el.classList.add("in"); });
    }
    // scroll progress: gold bar tracking reading position
    var sp=document.getElementById("scrollProgress");
    if(sp){
      var ticking=false;
      var updProgress=function(){
        var h=document.documentElement;
        var max=h.scrollHeight-h.clientHeight;
        sp.style.width=(max>0?(h.scrollTop/max)*100:0)+"%";
        ticking=false;
      };
      window.addEventListener("scroll",function(){ if(!ticking){ ticking=true; requestAnimationFrame(updProgress); } },{passive:true});
      window.addEventListener("resize",updProgress);
      updProgress();
    }
    // animated counters in the proof strip and the impact metrics:
    // count up once when they first enter the viewport; with reduced
    // motion the final values (already in the markup) stay untouched
    var reduceM=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var counters=document.querySelectorAll(".proof b,.impact-metrics strong");
    function animateCount(el){
      var target=el._target, suffix=el._suffix||"", t0=null, dur=1300;
      function step(ts){
        if(!t0) t0=ts;
        var p=Math.min((ts-t0)/dur,1), e=1-Math.pow(1-p,3);
        el.textContent=Math.round(target*e)+suffix;
        if(p<1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if(counters.length&&!reduceM){
      var cio=("IntersectionObserver" in window)?new IntersectionObserver(function(es){
        es.forEach(function(e){ if(e.isIntersecting){ animateCount(e.target); cio.unobserve(e.target); } });
      },{threshold:.4}):null;
      counters.forEach(function(el){
        var m=/^(\d[\d,]*)(.*)$/.exec(el.textContent.trim());
        if(!m) return;
        el._target=parseInt(m[1].replace(/,/g,""),10); el._suffix=m[2];
        if(cio) cio.observe(el); else animateCount(el);
      });
    }
    window.SC_accordion();
    // failsafe: reveal anything in viewport if IO misbehaves (mobile).
    // Runs shortly after load, again on scroll, and one last time after
    // a few seconds — content must never stay invisible if the observer
    // stalls (in-app webviews can throttle or drop its callbacks).
    var sweepRv=function(){
      document.querySelectorAll(".rv:not(.in)").forEach(function(el){
        try{ var r=el.getBoundingClientRect(); if(r.top<window.innerHeight&&r.bottom>0) el.classList.add("in"); }catch(e){}
      });
    };
    setTimeout(sweepRv, 2200);
    var sweepTicking=false;
    window.addEventListener("scroll",function(){
      if(sweepTicking) return; sweepTicking=true;
      setTimeout(function(){ sweepTicking=false; sweepRv(); }, 150);
    },{passive:true});
    setTimeout(function(){
      document.querySelectorAll(".rv:not(.in)").forEach(function(el){ el.classList.add("in"); });
    }, 6000);
  });
})();

/* Progressive disclosure: long registries (awards, events, projects,
   archive gallery) start folded to the count in data-collapse and are
   expanded on demand — every record stays on the page, one tap away. */
(function(){
  "use strict";
  document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("[data-collapse]").forEach(function(box){
      var n = parseInt(box.getAttribute("data-collapse"), 10) || 6;
      var items = Array.prototype.slice.call(box.children);
      if(items.length <= n) return;
      var rest = items.slice(n);
      rest.forEach(function(el){ el.hidden = true; });
      var wrap = document.createElement("div");
      wrap.className = "more-wrap";
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "more-btn";
      btn.setAttribute("aria-expanded", "false");
      function label(exp){
        btn.innerHTML = exp
          ? '<span class="lang-fr">Réduire</span><span class="lang-en">Show less</span>'
          : '<span class="lang-fr">Tout afficher (' + items.length + ')</span><span class="lang-en">Show all ' + items.length + '</span>';
      }
      label(false);
      btn.addEventListener("click", function(){
        var exp = btn.getAttribute("aria-expanded") !== "true";
        btn.setAttribute("aria-expanded", exp ? "true" : "false");
        rest.forEach(function(el){ el.hidden = !exp; });
        label(exp);
        if(!exp){ box.scrollIntoView({block:"start"}); }
      });
      wrap.appendChild(btn);
      box.parentNode.insertBefore(wrap, box.nextSibling);
    });
    /* section-jump: mark the jump link of the section currently in view */
    document.querySelectorAll(".section-jump").forEach(function(bar){
      var links = Array.prototype.slice.call(bar.querySelectorAll("a[href^='#']"));
      if(!links.length || !("IntersectionObserver" in window)) return;
      var map = {};
      links.forEach(function(a){
        var t = document.getElementById(a.getAttribute("href").slice(1));
        if(t) map[t.id] = a;
      });
      var io = new IntersectionObserver(function(es){
        es.forEach(function(e){
          if(e.isIntersecting){
            links.forEach(function(a){ a.removeAttribute("aria-current"); });
            var act=map[e.target.id];
            if(act){
              act.setAttribute("aria-current", "true");
              /* on mobile the bar is a single-row horizontal strip: keep
                 the active chip visible inside it */
              var strip=bar.querySelector(".wrap");
              if(strip && window.innerWidth<=680 && strip.scrollWidth>strip.clientWidth){
                var ar=act.getBoundingClientRect(), wr=strip.getBoundingClientRect();
                var target=strip.scrollLeft + (ar.left - wr.left) - (strip.clientWidth - ar.width)/2;
                strip.scrollTo({left:Math.max(0,target), behavior:"smooth"});
              }
            }
          }
        });
      }, {rootMargin: "-30% 0px -60% 0px"});
      Object.keys(map).forEach(function(id){ io.observe(document.getElementById(id)); });
    });
  });
})();

/* ================================================================
   Findability layer: site-wide search + precise go-to helper.
   The index is built from the live DOM (both languages are in the
   markup) plus the LIB catalogue, so it can never drift from the
   content. A result click switches page when needed, expands any
   folded registry or accordion around the target, scrolls to it
   with the sticky header accounted for, and flashes it briefly.
   ================================================================ */
(function(){
  "use strict";
  var toggle=document.getElementById("ssToggle");
  var panel=document.getElementById("siteSearch");
  if(!toggle||!panel) return; /* pages without the search UI: inert */
  var input=document.getElementById("ssInput");
  var results=document.getElementById("ssResults");
  var hint=document.getElementById("ssHint");
  var closeBtn=document.getElementById("ssClose");
  var reduceM=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var T={
    fr:{ph:"Rechercher sur tout le site…",hint:"Recherche tolérante : fautes de frappe, synonymes et autres langues sont acceptés. Elle couvre les 215 publications, le CV complet, l'archive de documents, les certificats, les distinctions, les cours, les événements, les partenaires et les contacts.",none:"Aucun résultat",noneHint:"Même la recherche tolérante n'a rien trouvé pour « {q} ». Essayez un mot plus large — un thème, une organisation ou une année."},
    en:{ph:"Search the whole site…",hint:"Forgiving search: typos, synonyms and other languages are fine. It covers all 215 publications, the full résumé, the document archive, certificates, awards, courses, events, partners and contacts.",none:"No results",noneHint:"Even the forgiving search found nothing for “{q}”. Try a broader word — a topic, an organisation or a year."}
  };
  var LABELS={
    home:{fr:"Accueil",en:"Home"},bio:{fr:"Biographie",en:"Biography"},
    awards:{fr:"Distinctions",en:"Awards"},certs:{fr:"Certificats",en:"Certificates"},
    library:{fr:"Bibliothèque",en:"Library"},pubs:{fr:"Publications",en:"Publications"},
    courses:{fr:"Cours",en:"Courses"},media:{fr:"Médias",en:"Media"},
    events:{fr:"Événements",en:"Events"},egov:{fr:"Journées de l'administration électronique",en:"E-Governance Days"},
    partners:{fr:"Partenaires",en:"Partners"},contact:{fr:"Contacts",en:"Contact"},
    docs:{fr:"Documents",en:"Documents & files"}
  };
  function lang(){ return (window.SC_lang?window.SC_lang():"en")==="fr"?"fr":"en"; }
  function norm(s){ return (s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[«»"“”'’]/g," ").replace(/\s+/g," ").trim(); }
  function clean(s){ return (s||"").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim(); }
  function escapeHtml(s){ return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

  function dictVal(el,l){
    var holder=null;
    if(el.hasAttribute&&el.hasAttribute("data-i18n")) holder=el;
    else { var q=el.querySelector?el.querySelector("[data-i18n]"):null; if(q) holder=q; }
    if(holder&&typeof PAGE!=="undefined"&&PAGE[l]){ var v=PAGE[l][holder.getAttribute("data-i18n")]; if(v) return clean(v); }
    return null;
  }
  function langText(el,l){
    var c=el.cloneNode(true);
    c.querySelectorAll(l==="fr"?".lang-en":".lang-fr").forEach(function(n){ n.parentNode.removeChild(n); });
    c.querySelectorAll(".milestone-badge").forEach(function(n){ n.parentNode.removeChild(n); });
    return c.textContent.replace(/\s+/g," ").trim();
  }
  function titleOf(el,l){
    var h=el.querySelector("h1,h2,h3,h4")||el.querySelector("b,strong");
    if(!h) return "";
    return dictVal(h,l)||langText(h,l);
  }
  function fullText(el){
    var t=el.textContent||"";
    if(typeof PAGE!=="undefined"){
      var nodes=[];
      if(el.hasAttribute&&el.hasAttribute("data-i18n")) nodes.push(el);
      el.querySelectorAll("[data-i18n]").forEach(function(n){ nodes.push(n); });
      nodes.forEach(function(n){ var k=n.getAttribute("data-i18n"); ["fr","en"].forEach(function(l){ if(PAGE[l]&&PAGE[l][k]) t+=" "+clean(PAGE[l][k]); }); });
    }
    return t;
  }
  function yearOf(el,l){
    var src=el.querySelector("time")||el.querySelector(".y");
    if(!src) return "";
    var s=langText(src,l).split("·")[0].trim();
    if(s.length>30){ var m=/\d{4}(\s*[–—-]\s*\d{4})?/.exec(s); s=m?m[0]:s.slice(0,30); }
    return s;
  }
  function labelKey(el){
    var page=el.closest(".page"); var pid=page?page.id.replace("page-",""):"home";
    var sec=el.closest("section[id]"); var sid=sec?sec.id:"";
    if(sid==="bio-awards") return "awards";
    if(sid==="bio-certificates") return "certs";
    if(pid==="bio") return "bio";
    if(pid==="library") return "library";
    if(pid==="courses") return "courses";
    if(pid==="media") return "media";
    if(pid==="events") return "events";
    if(pid==="egov-days") return "egov";
    if(pid==="partners") return "partners";
    if(pid==="contact") return "contact";
    if(pid==="documents") return "docs";
    return "home";
  }

  var ITEM_SEL=".tl-it,.award-item,.cert-card,.oxford-cert,.compact-credentials article,.card,.course,.media-it,.event-record,.part,.c-row,.role-grid article,.year-entry,.skill-group,.collab-feature,.coauthor-list article,.sponsor-strip article,.certificate-feature,.book-feature,.book-card,.doc-card";
  var INDEX=null;
  function buildIndex(){
    INDEX=[];
    document.querySelectorAll(".page").forEach(function(page){
      page.querySelectorAll("section").forEach(function(sec){
        var isPhero=sec.classList.contains("phero");
        if(!isPhero&&!sec.id) return;
        var head=sec.querySelector("h1,h2.st");
        if(!head) return;
        var tfr=titleOf(sec,"fr"), ten=titleOf(sec,"en");
        if(!tfr&&!ten) return;
        INDEX.push({el:sec,fr:tfr,en:ten,text:norm(fullText(sec).slice(0,500)),yearFr:"",yearEn:"",label:labelKey(sec),head:true});
      });
      page.querySelectorAll(ITEM_SEL).forEach(function(el){
        var tfr=titleOf(el,"fr"), ten=titleOf(el,"en");
        if(!tfr&&!ten) return;
        var entry={el:el,fr:tfr,en:ten,text:norm(fullText(el)),yearFr:yearOf(el,"fr"),yearEn:yearOf(el,"en"),label:labelKey(el)};
        if(el.tagName==="A"){ var href=el.getAttribute("href")||""; if(href.charAt(0)==="#") entry.hash=href; }
        INDEX.push(entry);
      });
    });
    var scholar=document.getElementById("contact-scholar");
    if(scholar) INDEX.push({el:scholar,fr:"Google Scholar — 94 travaux · 1 954 citations · indice h 20",en:"Google Scholar — 94 works · 1,954 citations · h-index 20",text:"google scholar citations h-index profil academique academic profile",yearFr:"",yearEn:"",label:"contact"});
    var resumeEl=document.getElementById("home-download");
    if(resumeEl) INDEX.push({el:resumeEl,fr:"CV complet sur demande — pour les employeurs, en anglais et en français, par courriel ou LinkedIn",en:"Full résumé, on request — for employers, in English and French, by email or LinkedIn",text:"cv resume résumé curriculum vitae demande request employeur employeurs employer employers courriel email linkedin anglais francais english french academic complet full",yearFr:"2026",yearEn:"2026",label:"docs"});
    var docsListEl=document.getElementById("docs-list");
    if(docsListEl) INDEX.push({el:docsListEl,fr:"Documents et fichiers — archive : certificats, diplômes, articles, recommandations, livres",en:"Documents & files — archive: certificates, diplomas, articles, recommendations, books",text:"documents fichiers archive certificats diplomes gramoty lettres recommandations livres obkladynky documents files archive certificates diplomas awards letters recommendations books covers",yearFr:"",yearEn:"",label:"docs"});
    if(typeof LIB!=="undefined"){
      LIB.forEach(function(r){
        INDEX.push({lib:r,fr:r[2]||r[3]||"",en:r[3]||r[2]||"",text:norm((r[2]||"")+" "+(r[3]||"")+" "+(r[4]||"")+" "+(r[5]||"")),yearFr:(r[1]||""),yearEn:(r[1]||""),label:"pubs",cat:r[0]});
      });
    }
    /* forgiving-search preparation: folded tokens, stems, concept
       tags and the shared vocabulary the matcher scans */
    INDEX.forEach(prepEntry);
    buildVocab();
  }

  /* SMART-CORE-BEGIN — forgiving matcher: pure functions over the
     prepared index. A query word can match an entry word exactly, by
     stem (word endings cut off, Ukrainian/English/French), by prefix
     or substring, by Damerau-Levenshtein distance (typos, dropped or
     extra letters), through transliteration (chukut ↔ чукут,
     governance ↔ говерненс) or the other keyboard layout, and whole
     queries match through the domain synonym dictionary below, so a
     different word or phrase in any site language finds the expected
     entries. Exact matches always outscore fuzzy and synonym ones. */
  var TR={"а":"a","б":"b","в":"v","г":"h","ґ":"g","д":"d","е":"e","є":"ie","ж":"zh","з":"z","и":"y","і":"i","ї":"i","й":"i","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"kh","ц":"ts","ч":"ch","ш":"sh","щ":"shch","ь":"","ю":"iu","я":"ia","ы":"y","э":"e","ъ":"","ё":"e"};
  function translit(s){ return (s||"").replace(/[а-яґєіїйыэъёА-ЯҐЄІЇЙЫЭЪЁ]/g,function(c){ var v=TR[c.toLowerCase()]; return v===undefined?c:v; }); }
  var LAY={"q":"й","w":"ц","e":"у","r":"к","t":"е","y":"н","u":"г","i":"ш","o":"щ","p":"з","[":"х","]":"ї","a":"ф","s":"і","d":"в","f":"а","g":"п","h":"р","j":"о","k":"л","l":"д",";":"ж","'":"є","z":"я","x":"ч","c":"с","v":"м","b":"и","n":"т","m":"ь",",":"б",".":"ю"};
  var LAYR={}; for(var lk in LAY) LAYR[LAY[lk]]=lk;
  function layoutSwap(s){ return (s||"").replace(/./g,function(c){ return LAY[c]||LAYR[c]||c; }); }
  function fold(s){ return translit(norm(s)).replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim(); }
  function tokensOf(s){ return fold(s).split(" ").filter(Boolean); }
  var SUF=["uvannia","annia","ennia","innia","atsiia","oho","omu","iie","iiu","akh","ost","ing","ed","es","iv","ov","am","ia","iu","ii","ie","a","e","i","o","u","y"];
  function stem(w){
    if(w.length<=4||/^\d+$/.test(w)) return w;
    if(/ies$/.test(w)) w=w.slice(0,-3)+"i";
    else if(/y$/.test(w)&&w.length>5&&!/[aeiou]y$/.test(w)) w=w.slice(0,-1)+"i";
    for(var k=0;k<2;k++){
      var best="";
      for(var j=0;j<SUF.length;j++){ var s=SUF[j]; if(s.length>best.length&&w.length-s.length>=4&&w.slice(-s.length)===s) best=s; }
      if(!best) break;
      w=w.slice(0,w.length-best.length);
    }
    return w;
  }
  var STEMC={};
  function stemC(w){ return STEMC[w]||(STEMC[w]=stem(w)); }
  function dlDist(a,b,maxD){
    var la=a.length, lb=b.length, i, j;
    if(Math.abs(la-lb)>maxD) return maxD+1;
    if(!la) return lb; if(!lb) return la;
    var prev=[], cur=[], prev2=null;
    for(j=0;j<=lb;j++) prev[j]=j;
    for(i=1;i<=la;i++){
      cur[0]=i; var rowMin=i;
      for(j=1;j<=lb;j++){
        var cost=a.charAt(i-1)===b.charAt(j-1)?0:1;
        var v=prev[j]+1; if(cur[j-1]+1<v) v=cur[j-1]+1; var sub=prev[j-1]+cost; if(sub<v) v=sub;
        if(prev2&&i>1&&j>1&&a.charAt(i-1)===b.charAt(j-2)&&a.charAt(i-2)===b.charAt(j-1)){ var tr=prev2[j-2]+1; if(tr<v) v=tr; }
        cur[j]=v; if(v<rowMin) rowMin=v;
      }
      if(rowMin>maxD) return maxD+1;
      prev2=prev; prev=cur; cur=[];
    }
    return prev[lb];
  }
  /* domain synonyms: folded phrases and single words per concept */
  var CONCEPTS=[
    {id:"ai",terms:["shtuchnyy intelekt","shtuchnoho intelektu","shtuchnomu intelektu","artificial intelligence","intelligence artificielle","generative ai","generative artificial intelligence"],words:["ai","shi","chatgpt","gpt"]},
    {id:"egov",terms:["elektronne uriaduvannia","elektronnoho uriaduvannia","elektronne upravlinnia","e governance","e government","electronic governance","electronic government","digital governance","administration electronique","gouvernement electronique"],words:["egovernance","egovernment","hovernens","governance","uriaduvannia"]},
    {id:"smartcity",terms:["smart city","smart cities","rozumne misto","rozumnoho mista","rozumni mista","ville intelligente","villes intelligentes","smart siti","smart tourism","smart turyzm","rozumnyy turyzm"],words:["smartcity"]},
    {id:"pubadm",terms:["public administration","administration publique","publichne upravlinnia","derzhavne upravlinnia","public management","publichne administruvannia"],words:["derzhavupravlinnia","publichneupravlinnia"]},
    {id:"edem",terms:["e democracy","electronic democracy","democratie electronique","elektronna demokratiia","elektronnoi demokratii"],words:["edemocracy"]},
    {id:"digital",terms:["digital transformation","tsyfrova transformatsiia","tsyfrovoi transformatsii","tsyfrovizatsiia","transformation numerique"],words:["digitalization","digitalisation"]}
  ];
  function consOf(strF,tokset){
    var cons={};
    CONCEPTS.forEach(function(c){
      var hit=false, i;
      for(i=0;i<c.terms.length&&!hit;i++) if((" "+strF+" ").indexOf(" "+c.terms[i]+" ")>=0) hit=true;
      if(!hit) for(i=0;i<c.words.length;i++) if(tokset[c.words[i]]){ hit=true; break; }
      if(hit) cons[c.id]=1;
    });
    return cons;
  }
  var VOCAB=null, VSTEM=null, VKEYS=[];
  function prepEntry(e){
    var titleAll=(e.fr||"")+" "+(e.en||""), all=titleAll+" "+(e.text||"");
    var tf=fold(titleAll), xf=fold(all);
    var ttoks=tf.split(" ").filter(Boolean), xtoks=xf.split(" ").filter(Boolean);
    var tset={}, xset={}, sset={};
    ttoks.forEach(function(w){ tset[w]=1; });
    xtoks.forEach(function(w){ xset[w]=1; sset[stemC(w)]=1; });
    e._m={tf:tf,xf:xf,xtoks:xtoks,tset:tset,xset:xset,sset:sset,cons:consOf(xf,xset),tcons:consOf(tf,tset)};
  }
  function buildVocab(){
    VOCAB={}; VSTEM={}; VKEYS=[];
    INDEX.forEach(function(e,i){
      var m=e._m; if(!m) return;
      Object.keys(m.xset).forEach(function(w){
        var r=VOCAB[w]; if(!r){ r=VOCAB[w]=[]; VKEYS.push(w); }
        r.push({i:i,t:m.tset[w]?1:0});
      });
    });
    VKEYS.forEach(function(w){ var s=stemC(w); (VSTEM[s]=VSTEM[s]||[]).push(w); });
  }
  function searchAll(q){
    var qF=fold(q); if(!qF) return [];
    var rawToks=norm(q).split(/[^0-9a-z\u0430-\u044f\u0451\u0491\u0454\u0456\u0457]+/).filter(Boolean);
    if(rawToks.length>1) rawToks=rawToks.filter(function(w){ return w.length>1; });
    if(!rawToks.length) return [];
    var qset={}; rawToks.forEach(function(w){ qset[translit(w)]=1; });
    var qcons=consOf(qF,qset);
    var acc={};
    rawToks.forEach(function(raw){
      var forms=[], seenF={};
      [raw,layoutSwap(raw)].forEach(function(v){ var f=translit(v); if(f&&!seenF[f]){ seenF[f]=1; forms.push(f); } });
      var hit={};
      function addWord(w,wt,wf){ var refs=VOCAB[w]; if(!refs) return; for(var k=0;k<refs.length;k++){ var val=refs[k].t?wt:wf; if(!hit[refs[k].i]||val>hit[refs[k].i]) hit[refs[k].i]=val; } }
      forms.forEach(function(f){
        if(VOCAB[f]) addWord(f,30,12);
        var sw=VSTEM[stemC(f)];
        if(sw) for(var a=0;a<sw.length;a++) if(sw[a]!==f) addWord(sw[a],20,9);
        if(f.length>=3){
          var maxD=f.length<=6?1:2;
          for(var b=0;b<VKEYS.length;b++){
            var w=VKEYS[b]; if(w===f) continue;
            var pos=w.indexOf(f);
            if(pos===0) addWord(w,15,6);
            else if(f.length>=4&&pos>0) addWord(w,13,5);
            else if(Math.abs(w.length-f.length)<=maxD){ var d=dlDist(w,f,maxD); if(d<=maxD) addWord(w,d===1?13:8,4); }
          }
        }
      });
      if(/^\d{4}$/.test(raw)){
        INDEX.forEach(function(e,i){ if(((e.yearEn||"").indexOf(raw)>=0||(e.yearFr||"").indexOf(raw)>=0)&&(!hit[i]||hit[i]<15)) hit[i]=15; });
      }
      for(var i in hit){ var a2=acc[i]; if(!a2) a2=acc[i]={s:0,m:0}; a2.m++; a2.s+=hit[i]+3; }
    });
    var main=[], part=[];
    INDEX.forEach(function(e,i){
      var m=e._m; if(!m) return;
      var a=acc[i], score=a?a.s:0, matched=a?a.m:0, cHits=0;
      for(var cid in qcons){ if(qcons[cid]&&m.cons[cid]){ cHits++; score+=m.tcons[cid]?38:22; } }
      if(!matched&&!cHits) return;
      if(e.head) score+=8;
      if(matched>=rawToks.length||cHits>0){
        if(qF.length>=3&&m.tf.indexOf(qF)>=0) score+=60;
        main.push({e:e,score:score});
      } else part.push({e:e,score:score,m:matched});
    });
    main.sort(function(x,y){ return y.score-x.score; });
    part.sort(function(x,y){ return (y.m-x.m)||(y.score-x.score); });
    return main.concat(part).slice(0,40);
  }
  /* SMART-CORE-END */

  /* ---- precise go-to: reveal folded content, scroll, flash ---- */
  function reveal(el){
    var n=el;
    while(n&&n!==document.body){
      if(n.hidden){
        var box=n.closest?n.closest("[data-collapse]"):null;
        if(box){
          var wrap=box.nextElementSibling;
          if(wrap&&wrap.classList&&wrap.classList.contains("more-wrap")){
            var btn=wrap.querySelector(".more-btn");
            if(btn&&btn.getAttribute("aria-expanded")!=="true") btn.click();
          }
        }
        if(n.hidden) n.hidden=false;
      }
      n=n.parentElement;
    }
    var course=el.closest?el.closest(".course"):null;
    if(course&&!course.classList.contains("open")){
      var b=course.querySelector(":scope>button");
      if(b) b.click();
    }
    if(el.classList&&el.classList.contains("rv")) el.classList.add("in");
  }
  /* landing offset for a search jump: header height plus, for library
     catalogue cards on desktop, the sticky library toolbar that would
     otherwise cover the card's title */
  function offFor(el){
    var off=window.innerWidth<=680?128:150;
    if(window.innerWidth>680 && el && el.closest && el.closest("#grid")){
      var tools=document.querySelector(".lib-tools");
      if(tools) off=68+tools.offsetHeight+14;
    }
    return off;
  }
  function scrollToEl(el){
    var off=offFor(el);
    var y=el.getBoundingClientRect().top+window.scrollY-off;
    window.scrollTo({top:Math.max(0,y),behavior:reduceM?"auto":"smooth"});
  }
  function flash(el){
    el.classList.remove("find-flash");
    void el.offsetWidth;
    el.classList.add("find-flash");
    setTimeout(function(){ el.classList.remove("find-flash"); },2000);
    if(!el.hasAttribute("tabindex")) el.setAttribute("tabindex","-1");
    try{ el.focus({preventScroll:true}); }catch(e){}
  }
  var jumpTimer=null;
  function present(el){
    reveal(el);
    var f=el;
    if(el.tagName==="SECTION"){ var h=el.querySelector("h1,h2"); if(h) f=h; }
    scrollToEl(el);
    flash(f);
    /* Deep targets drift while the page settles: images above them load
       late and push them down, registry blocks expand. Keep correcting
       until the target has sat at the header offset for a sustained
       moment; an image finishing loading restarts the settle watch, and
       a manual scroll by the visitor cancels the correction at once. */
    var off=offFor(el);
    var tries=0, stable=0;
    if(jumpTimer) clearInterval(jumpTimer);
    function cleanup(){
      if(jumpTimer) clearInterval(jumpTimer);
      jumpTimer=null;
      document.removeEventListener("load",onLoad,true);
      window.removeEventListener("wheel",onUser,{passive:true});
      window.removeEventListener("touchstart",onUser,{passive:true});
    }
    function onLoad(){ stable=0; }
    function onUser(){ cleanup(); }
    document.addEventListener("load",onLoad,true);
    window.addEventListener("wheel",onUser,{passive:true});
    window.addEventListener("touchstart",onUser,{passive:true});
    jumpTimer=setInterval(function(){
      tries++;
      var top=el.getBoundingClientRect().top;
      if(Math.abs(top-off)<=6){ stable++; }
      else{
        stable=0;
        window.scrollTo({top:window.scrollY+(top-off), behavior:"auto"});
        if(tries%4===0) flash(f);
      }
      if(stable>=8||tries>50){
        var settled=Math.abs(el.getBoundingClientRect().top-off)<=6;
        cleanup();
        if(settled) flash(f);
      }
    },300);
  }
  window.SC_scrollFlash=function(el){ if(el) present(el); };
  function goToEl(el,hash){
    if(!el) return;
    var page=el.closest(".page"), cur=document.querySelector(".page.on");
    if(page&&(!cur||cur!==page)){
      /* Keep the deep anchor in the address (e.g. #events-gallery),
         not just the page name, so a reload, Back/Forward or a copied
         link returns to the section itself; the router lands on it
         through the same stabilized go-to as present() below. */
      location.hash=hash||("#"+page.id.replace("page-",""));
      setTimeout(function(){ present(el); },160);
    } else present(el);
  }
  function jumpHash(hash,fallbackEl){
    var target=document.getElementById(hash.slice(1));
    location.hash=hash;
    setTimeout(function(){
      var t=document.getElementById(hash.slice(1))||target||fallbackEl;
      if(t) present(t);
    },170);
  }

  /* ---- panel behaviour ---- */
  var current=[], activeIdx=-1;
  function paintActive(){
    var items=results.querySelectorAll(".ss-item");
    items.forEach(function(b,i){
      var on=i===activeIdx;
      b.classList.toggle("act",on);
      b.setAttribute("aria-selected",on?"true":"false");
      if(on){ input.setAttribute("aria-activedescendant",b.id); b.scrollIntoView({block:"nearest"}); }
    });
  }
  function render(){
    var l=lang(), t=T[l], q=input.value.trim();
    input.placeholder=t.ph;
    hint.textContent=t.hint;
    if(!q){
      results.innerHTML=""; hint.hidden=false; current=[]; activeIdx=-1;
      input.setAttribute("aria-expanded","false");
      input.removeAttribute("aria-activedescendant");
      return;
    }
    hint.hidden=true;
    if(!INDEX) buildIndex();
    var found=searchAll(q);
    if(!found.length){
      current=[]; activeIdx=-1;
      results.innerHTML='<div class="ss-none">'+t.none+'</div><div class="ss-none-hint">'+t.noneHint.replace("{q}",escapeHtml(q))+'</div>';
      input.setAttribute("aria-expanded","true");
      return;
    }
    var groups=[], byKey={}, flat=[];
    found.forEach(function(f){
      var k=f.e.label;
      if(!byKey[k]){ byKey[k]={key:k,items:[]}; groups.push(byKey[k]); }
      if(byKey[k].items.length<8) byKey[k].items.push(f);
    });
    /* the clickable order is the RENDERED order (group by group), so
       build the flat activation list in exactly that order */
    groups.forEach(function(g){ g.items.forEach(function(f){ flat.push(f); }); });
    var html="", gi=0;
    groups.forEach(function(g){
      if(!g.items.length) return;
      html+='<div class="ss-group" role="presentation">'+escapeHtml(LABELS[g.key][l])+'</div>';
      g.items.forEach(function(f){
        var e=f.e, title=(l==="fr"?e.fr:e.en)||e.en||e.fr, meta=[];
        if(e.lib&&typeof PAGE!=="undefined"&&PAGE[l]&&PAGE[l]["licat_"+e.cat]) meta.push(PAGE[l]["licat_"+e.cat]);
        var yr=l==="fr"?e.yearFr:e.yearEn;
        if(yr) meta.push(yr);
        html+='<button type="button" class="ss-item" role="option" id="ss-opt-'+gi+'" data-gi="'+gi+'" aria-selected="false"><span class="ss-t">'+escapeHtml(title)+'</span>'+(meta.length?'<span class="ss-m">'+escapeHtml(meta.join(" · "))+'</span>':'')+'</button>';
        gi++;
      });
    });
    results.innerHTML=html;
    current=flat; activeIdx=flat.length?0:-1;
    input.setAttribute("aria-expanded","true");
    paintActive();
  }
  function activate(i){
    var f=current[i]; if(!f) return;
    var e=f.e;
    closePanel(false);
    if(e.lib){ if(window.SC_libGo) window.SC_libGo(e.lib); return; }
    if(e.hash){ jumpHash(e.hash,e.el); return; }
    goToEl(e.el);
  }
  function openPanel(){
    if(!INDEX) buildIndex();
    panel.hidden=false;
    toggle.setAttribute("aria-expanded","true");
    var nav=document.querySelector(".nav");
    if(nav) nav.classList.remove("open");
    var burger=document.querySelector(".burger");
    if(burger){ burger.classList.remove("x"); burger.setAttribute("aria-expanded","false"); }
    document.body.classList.remove("menu-open");
    render();
    setTimeout(function(){ input.focus(); },30);
  }
  function closePanel(refocus){
    if(panel.hidden) return;
    panel.hidden=true;
    toggle.setAttribute("aria-expanded","false");
    input.setAttribute("aria-expanded","false");
    if(refocus) toggle.focus();
  }
  toggle.addEventListener("click",function(){ if(panel.hidden) openPanel(); else closePanel(true); });
  closeBtn.addEventListener("click",function(){ closePanel(true); });
  input.addEventListener("input",render);
  input.addEventListener("keydown",function(ev){
    if(ev.key==="ArrowDown"||ev.key==="ArrowUp"){
      ev.preventDefault();
      if(!current.length) return;
      activeIdx=ev.key==="ArrowDown"?(activeIdx+1)%current.length:(activeIdx-1+current.length)%current.length;
      paintActive();
    } else if(ev.key==="Enter"){
      ev.preventDefault();
      if(current.length) activate(activeIdx>=0?activeIdx:0);
    } else if(ev.key==="Escape"){
      ev.preventDefault();
      closePanel(true);
    }
  });
  results.addEventListener("click",function(ev){
    var b=ev.target.closest(".ss-item");
    if(b) activate(parseInt(b.getAttribute("data-gi"),10));
  });
  results.addEventListener("mousemove",function(ev){
    var b=ev.target.closest(".ss-item");
    if(b){ var i=parseInt(b.getAttribute("data-gi"),10); if(i!==activeIdx){ activeIdx=i; paintActive(); } }
  });
  document.addEventListener("keydown",function(ev){
    if(ev.key==="Escape"&&!panel.hidden) closePanel(true);
  });
  document.addEventListener("click",function(ev){
    if(!panel.hidden&&!ev.target.closest(".hdr")) closePanel(false);
  });
  document.querySelectorAll(".nav a").forEach(function(a){
    a.addEventListener("click",function(){ closePanel(false); });
  });
  var burgerBtn=document.querySelector(".burger");
  if(burgerBtn) burgerBtn.addEventListener("click",function(){ closePanel(false); });
  /* Quick-access cards, in-section jump chips and the other deep
     anchors land through the same stabilized go-to as search results,
     so every route to a section arrives at exactly the same place. */
  var PAGE_NAMES=["home","bio","library","courses","media","events","egov-days","partners","documents","contact"];
  document.addEventListener("click",function(ev){
    var a=ev.target.closest?ev.target.closest('a[href^="#"]'):null;
    if(!a) return;
    var h=(a.getAttribute("href")||"").slice(1);
    if(!h||h==="main"||PAGE_NAMES.indexOf(h)>-1) return;
    var target=document.getElementById(h);
    if(!target) return;
    ev.preventDefault();
    closePanel(false);
    var tp=target.closest(".page"), cur=document.querySelector(".page.on");
    if(tp&&cur===tp){ try{ history.replaceState(null,"","#"+h); }catch(e){} }
    goToEl(target,"#"+h);
  });
  if(window.MutationObserver){
    new MutationObserver(function(){
      input.placeholder=T[lang()].ph;
      hint.textContent=T[lang()].hint;
      if(!panel.hidden) render();
    }).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
  }
  input.placeholder=T[lang()].ph;
  hint.textContent=T[lang()].hint;
})();

/* ================================================================
   Document archive: category filter chips. Cards are static HTML;
   the chips only show/hide them and keep a live counter in the
   current language. Categories with no cards yet show an honest
   empty state. */
(function(){
  "use strict";
  document.addEventListener("DOMContentLoaded", function(){
    var sec=document.getElementById("docs-list");
    if(!sec) return;
    var chips=Array.prototype.slice.call(sec.querySelectorAll(".doc-chips .lib-chip"));
    var cards=Array.prototype.slice.call(sec.querySelectorAll(".doc-card"));
    var cnt=document.getElementById("docCnt");
    var empty=document.getElementById("docEmpty");
    var total=cards.length;
    function lang(){ return (window.SC_lang?window.SC_lang():"en")==="fr"?"fr":"en"; }
    function paint(){
      var cur=sec.getAttribute("data-dcat")||"all", shown=0;
      cards.forEach(function(c){
        var on=cur==="all"||c.getAttribute("data-dcat")===cur;
        c.hidden=!on;
        if(on) shown++;
      });
      chips.forEach(function(b){ b.setAttribute("aria-pressed", b.getAttribute("data-dcat")===cur?"true":"false"); });
      if(cnt) cnt.textContent=lang()==="fr"?("Affichés : "+shown+" sur "+total):("Showing: "+shown+" of "+total);
      if(empty) empty.hidden=shown!==0;
    }
    chips.forEach(function(b){
      b.addEventListener("click", function(){ sec.setAttribute("data-dcat", b.getAttribute("data-dcat")||"all"); paint(); });
    });
    if(window.MutationObserver){
      new MutationObserver(paint).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
    }
    paint();
  });
})();

/* ---- Certificate viewer (lightbox): document pages shown large;
   each page image is also a link that opens its own file ---- */
(function(){
  "use strict";
  var CERTVIEW = {"photo-podium-blue-1": {"pages": ["assets/photos/event-podium-blue-1.jpg"]}, "photo-podium-blue-2": {"pages": ["assets/photos/photo-02-upgraded.jpg"]}, "photo-podium-closeup": {"pages": ["assets/photos/photo-03-upgraded.jpg"]}, "photo-podium-emblem": {"pages": ["assets/photos/photo-04-upgraded.jpg"]}, "photo-rada-2017": {"pages": ["assets/photos/photo-05-upgraded.jpg"]}, "photo-meeting-pryimak": {"pages": ["assets/photos/photo-06-upgraded.jpg"]}, "photo-jury-desk": {"pages": ["assets/photos/event-jury-desk.jpg"]}, "photo-knutd-meeting": {"pages": ["assets/photos/event-knutd-meeting.jpg"]}, "photo-round-table": {"pages": ["assets/photos/photo-09-fine.jpg"]}, "photo-round-table-group": {"pages": ["assets/photos/event-round-table-group.jpg"]}, "photo-hall-group": {"pages": ["assets/photos/event-hall-group.jpg"]}, "photo-classroom-group": {"pages": ["assets/photos/event-classroom-group.jpg"]}, "photo-group-nmc": {"pages": ["assets/photos/event-group-nmc.jpg"]}, "photo-gloria-honours": {"pages": ["assets/photos/event-gloria-honours.jpg"]}, "photo-gloria-graduation": {"pages": ["assets/photos/event-gloria-graduation.jpg"]}, "photo-students-flag": {"pages": ["assets/photos/photo-16-fine.jpg"]}, "photo-students-hall-1": {"pages": ["assets/photos/photo-17-fine.jpg"]}, "photo-olympiada-opening-2019": {"pages": ["assets/photos/event-olympiada-2019.jpg"]}, "photo-online-conference": {"pages": ["assets/photos/event-online-conference.jpg"]}, "photo-rotary-2023": {"pages": ["assets/photos/rotary.jpg"]}, "photo-award-coe": {"pages": ["assets/photos/event-award-coe.jpg"]}, "photo-round-table-voitovych": {"pages": ["assets/photos/event-round-table-voitovych.jpg"]}, "photo-sikorsky": {"pages": ["assets/photos/photo-22-upgraded.jpg"]}, "photo-meeting-lavra": {"pages": ["assets/photos/event-meeting-lavra.jpg"]}, "photo-subcommission-281-2017": {"pages": ["assets/photos/event-subcommission-2017.jpg"]}, "photo-egov-banner-meeting": {"pages": ["assets/photos/event-egov-banner-meeting.jpg"]}, "photo-egov-day-table": {"pages": ["assets/photos/event-egov-day-table.jpg"]}, "photo-seminar-zoom-2021": {"pages": ["assets/photos/event-seminar-2021.jpg"]}, "photo-egov-for-all": {"pages": ["assets/photos/event-egov-for-all.jpg"]}, "photo-panel-chukut": {"pages": ["assets/photos/event-panel-chukut.jpg"]}, "photo-panel-chukut-wide": {"pages": ["assets/photos/event-panel-chukut-wide.jpg"]}, "photo-colleagues-hall": {"pages": ["assets/photos/event-colleagues-hall.jpg"]}, "photo-hall-wide": {"pages": ["assets/photos/event-hall-wide.jpg"]}, "photo-egov-day-stage": {"pages": ["assets/photos/event-egov-day-stage.jpg"]}, "photo-egov-group-banner": {"pages": ["assets/photos/event-egov-group-banner.jpg"]}, "microsoft-ai-skills": {"pages": ["assets/photos/microsoft-ai-skills-badge.jpg"]}, "book-2007": {"pages": ["assets/books/info-policy.jpg"]}, "book-2008": {"pages": ["assets/books/egov-2008.jpg"]}, "book-2022": {"pages": ["assets/books/osnovy-egu-2022-titlepage.jpg"]}, "proc-2008": {"pages": ["assets/books/egov-2008.jpg"]}, "oxford-unesco-ai-gov-2026": {"pages": ["assets/cert-pages/oxford-unesco-ai-gov-2026-1.jpg"]}, "ipac-ai-agents-2026": {"pages": ["assets/cert-pages/ipac-ai-agents-2026-1.jpg"]}, "ipac-navigating-ai-2026": {"pages": ["assets/cert-pages/ipac-navigating-ai-2026-1.jpg"]}, "ipac-practical-guide-2025": {"pages": ["assets/cert-pages/ipac-practical-guide-2025-1.jpg"]}, "ipac-practical-guide-2024": {"pages": ["assets/cert-pages/ipac-practical-guide-2024-1.jpg"]}, "gbc-ai-gamification": {"pages": ["assets/cert-pages/gbc-ai-gamification-1.jpg"]}, "gbc-training-programs": {"pages": ["assets/cert-pages/gbc-training-programs-1.jpg"]}, "gbc-ai-creativity": {"pages": ["assets/cert-pages/gbc-ai-creativity-1.jpg"]}, "gbc-digital-confidence": {"pages": ["assets/cert-pages/gbc-digital-confidence-1.jpg"]}, "gbc-excel": {"pages": ["assets/cert-pages/gbc-excel-1.jpg"]}, "gbc-code-and-aoda": {"pages": ["assets/cert-pages/gbc-code-and-aoda-1.jpg"]}, "gbc-anti-racism": {"pages": ["assets/cert-pages/gbc-anti-racism-1.jpg"]}, "gbc-respect-workplace": {"pages": ["assets/cert-pages/gbc-respect-workplace-1.jpg"]}, "gbc-aoda-general-requirements": {"pages": ["assets/cert-pages/gbc-aoda-general-requirements-1.jpg"]}, "gbc-aoda-info-communication": {"pages": ["assets/cert-pages/gbc-aoda-info-communication-1.jpg"]}, "gbc-aoda-customer-service": {"pages": ["assets/cert-pages/gbc-aoda-customer-service-1.jpg"]}, "acadia-ai-literacy": {"pages": ["assets/cert-pages/acadia-ai-literacy-1.jpg"]}, "umanitoba-conference-2024": {"pages": ["assets/cert-pages/umanitoba-conference-2024-1.jpg"]}, "coursera-pe-educators-spec": {"pages": ["assets/cert-pages/coursera-pe-educators-spec-1.jpg"]}, "coursera-pe-spec": {"pages": ["assets/cert-pages/coursera-pe-spec-1.jpg"]}, "coursera-genai-educators-spec": {"pages": ["assets/cert-pages/coursera-genai-educators-spec-1.jpg"]}, "coursera-genai-assistants-spec": {"pages": ["assets/cert-pages/coursera-genai-assistants-spec-1.jpg"]}, "coursera-gpt-vision": {"pages": ["assets/cert-pages/coursera-gpt-vision-1.jpg"]}, "coursera-openai-gpts": {"pages": ["assets/cert-pages/coursera-openai-gpts-1.jpg"]}, "coursera-trustworthy-ai": {"pages": ["assets/cert-pages/coursera-trustworthy-ai-1.jpg"]}, "coursera-pe-for-chatgpt": {"pages": ["assets/cert-pages/coursera-pe-for-chatgpt-1.jpg"]}, "coursera-genai-leaders": {"pages": ["assets/cert-pages/coursera-genai-leaders-1.jpg"]}, "coursera-chatgpt-ada": {"pages": ["assets/cert-pages/coursera-chatgpt-ada-1.jpg"]}, "coursera-genai-everyone": {"pages": ["assets/cert-pages/coursera-genai-everyone-1.jpg"]}, "coursera-ai-foundations-asu": {"pages": ["assets/cert-pages/coursera-ai-foundations-asu-1.jpg"]}, "coursera-innovative-teaching": {"pages": ["assets/cert-pages/coursera-innovative-teaching-1.jpg"]}, "curriculum-development-2023": {"pages": ["assets/cert-pages/curriculum-development-2023-1.jpg"]}, "tcps2-core": {"pages": ["assets/cert-pages/tcps2-core-1.jpg"]}, "wes-eca-2023": {"pages": ["assets/certificates/wes-eca-2023.jpg"]}, "gisu-appreciation-2023": {"pages": ["assets/cert-pages/gisu-appreciation-2023-1.jpg"]}, "costi-elt-2023": {"pages": ["assets/cert-pages/costi-elt-2023-1.jpg"]}, "prometheus-naqa-2019": {"pages": ["assets/cert-pages/prometheus-naqa-2019-1.jpg"], "sum": {"fr": "Ce que dit le document (original en ukrainien) : l'Agence nationale d'assurance qualité de l'enseignement supérieur de l'Ukraine, par l'intermédiaire de la plateforme d'apprentissage en ligne Prometheus, certifie que Svitlana Anatoliivna Chukut a réussi le cours « Experte en accréditation des programmes d'enseignement : formation en ligne ». Délivré le 19 octobre 2019.", "en": "What the document says (original in Ukrainian): the National Agency for Higher Education Quality Assurance of Ukraine, through the Prometheus online learning platform, certifies that Svitlana Anatoliivna Chukut successfully completed the course “Expert on Accreditation of Educational Programs: Online Training”. Issued 19 October 2019."}}, "award-podjaka-ifntuog-2023": {"pages": ["assets/photos/podjaka-ifntuog-2023.jpg"], "sum": {"fr": "Ce que dit le document (original en ukrainien) : Remerciement (Podjaka) — le Ministère de l'Éducation et des Sciences de l'Ukraine et l'Université technique nationale du pétrole et du gaz d'Ivano-Frankivsk remercient Svitlana Anatoliivna Chukut pour son haut niveau de professionnalisme, son travail scientifique fructueux et la préparation du lauréat (1re place) du concours international de travaux scientifiques étudiants « Sciences managériales, sociales et comportementales dans la mise en œuvre des principes du développement durable » pour l'année universitaire 2022/2023. Arrêté n° 102 du 10 mai 2023 ; signé par le vice-recteur à la recherche, Ihor Chudyk.", "en": "What the document says (original in Ukrainian): Certificate of Gratitude (Podjaka) — the Ministry of Education and Science of Ukraine and the Ivano-Frankivsk National Technical University of Oil and Gas thank Svitlana Anatoliivna Chukut for her high level of professionalism, fruitful scientific work and preparation of the winner (1st place) of the International Competition of Student Scientific Works “Managerial, Social and Behavioural Sciences in Implementing the Principles of Sustainable Development” in the 2022/2023 academic year. Order No. 102 of 10 May 2023; signed by the Vice-Rector for Research, Ihor Chudyk."}}, "award-podjaka-kneu-2021": {"pages": ["assets/photos/podjaka-kneu-2021.jpg"], "sum": {"fr": "Ce que dit le document (original en ukrainien) : Remerciement — l'Université nationale d'économie de Kyiv nommée d'après Vadym Hetman remercie Svitlana Anatoliivna Chukut pour la préparation des lauréats du IIe tour du concours panukrainien de travaux scientifiques étudiants en « Administration et gestion publiques » pour l'année universitaire 2020/2021. Kyiv, le 8 avril 2021 ; signé par L. L. Antoniuk, présidente de la commission sectorielle du concours.", "en": "What the document says (original in Ukrainian): Certificate of Gratitude — the Kyiv National Economic University named after Vadym Hetman thanks Svitlana Anatoliivna Chukut for preparing the winners of the second round of the All-Ukrainian Competition of Student Scientific Works in “Public Administration and Management” in the 2020/2021 academic year. Kyiv, 8 April 2021; signed by L. L. Antoniuk, head of the field competition commission."}}, "award-podjaka-mes": {"pages": ["assets/photos/podjaka-mes.jpg"], "sum": {"fr": "Ce que dit le document (original en ukrainien) : Remerciement (Podjaka) du Ministère de l'Éducation et des Sciences de l'Ukraine, décerné à Svitlana Anatoliivna Chukut, directrice par intérim de la chaire de théorie et de pratique de l'administration de l'Université technique nationale d'Ukraine « Institut polytechnique de Kyiv Igor Sikorsky », pour un apport important au développement de l'éducation et des sciences, un grand professionnalisme, un soutien efficace à l'élaboration et à la mise en œuvre de la politique publique d'éducation et de science, ainsi qu'une participation à l'élaboration de normes d'enseignement supérieur fondées sur les compétences. Signé par la ministre, Liliia Hrynevych, Kyiv.", "en": "What the document says (original in Ukrainian): Certificate of Gratitude (Podjaka) of the Ministry of Education and Science of Ukraine, awarded to Svitlana Anatoliivna Chukut, acting head of the Department of Theory and Practice of Management of the National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”, for a significant contribution to the development of education and science, high professionalism, effective support for shaping and implementing state policy in education and science, and participation in developing higher-education standards on a competency basis. Signed by the Minister, Liliia Hrynevych, Kyiv."}}, "award-nads-diploma-2020": {"pages": ["assets/photos/nads-diploma-2020.jpg"], "sum": {"fr": "Ce que dit le document (original en ukrainien) : Diplôme — IIIe place, décerné à l'Université technique nationale d'Ukraine « Institut polytechnique de Kyiv Igor Sikorsky » dans la catégorie « Formation des masters de la spécialité 281 « Administration et gestion publiques » » du concours « Meilleures pratiques de mise en œuvre des innovations pédagogiques dans le système de formation professionnelle des fonctionnaires, des chefs d'administrations locales d'État, de leurs premiers adjoints et adjoints, des agents des collectivités locales et des députés des conseils locaux ». Agence nationale d'Ukraine de la fonction publique ; signé par sa présidente, Nataliia Aliushyna, octobre 2020.", "en": "What the document says (original in Ukrainian): Diploma — third place, awarded to the National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute” in the category “Training of Masters in Specialty 281 ‘Public Administration and Management’” of the competition “Best Practices in Implementing Educational Innovations in the System of Professional Training of Civil Servants, Heads of Local State Administrations, Their First Deputies and Deputies, Local Self-Government Officials and Deputies of Local Councils”. National Agency of Ukraine on Civil Service; signed by its Head, Nataliia Aliushyna, October 2020."}}, "award-gramota-kpi": {"pages": ["assets/photos/gramota-kpi.jpg"], "sum": {"fr": "Ce que dit le document (original en ukrainien) : Diplôme d'honneur — « Décerné à Svitlana Anatoliivna Chukut — pour un apport important au développement de l'université, au renforcement de son autorité nationale et internationale et à la formation de spécialistes hautement qualifiés. » Université technique nationale d'Ukraine « Institut polytechnique de Kyiv Igor Sikorsky » ; signé par le recteur et le secrétaire scientifique.", "en": "What the document says (original in Ukrainian): Honorary Diploma — “Awarded: Chukut Svitlana Anatoliivna — for a significant contribution to the development of the university, strengthening its state and international authority, and training highly qualified specialists.” National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”; signed by the Rector and the Academic Secretary."}}, "spu2021": {"pages": ["assets/certificates/spu2021-conference-certificate-1.png"], "sum": {"fr": "Ce que dit le document (original en ukrainien) : certificat de participation délivré par la Faculté de sociologie et de droit et le Département de théorie et de pratique du management. Il confirme que Svitlana Anatoliivna Chukut a participé à la XIe conférence scientifique et pratique internationale « Problèmes contemporains de management 2021 — Transformation de l'administration publique dans le monde post-COVID », section 4 « Transformation numérique de l'administration publique : tendances et défis ». Kyiv, 18-19 novembre 2021 ; signé par Yana Tsymbalenko, présidente du comité d'organisation.", "en": "What the document says (original in Ukrainian): a certificate of participation issued by the Faculty of Sociology and Law and the Department of Theory and Practice of Management. It confirms that Svitlana Anatoliivna Chukut took part in the XI International Scientific and Practical Conference “Modern Problems of Management 2021 — Transformation of Public Administration in the Post-COVID World”, Section 4 “Digital Transformation of Public Administration: Trends and Challenges”. Kyiv, 18–19 November 2021; signed by Yana Tsymbalenko, head of the organising committee."}}, "gisu-participation-2021": {"pages": ["assets/cert-pages/gisu-participation-2021-1.jpg"]}, "ugf-qualitative-methods-2023": {"pages": ["assets/cert-pages/ugf-qualitative-methods-2023-1.jpg"]}, "ugf-quantitative-methods-2023": {"pages": ["assets/cert-pages/ugf-quantitative-methods-2023-1.jpg"]}, "portfolio-curriculum": {"pages": ["assets/cert-pages/portfolio-curriculum-1.jpg", "assets/cert-pages/portfolio-curriculum-2.jpg", "assets/cert-pages/portfolio-curriculum-3.jpg", "assets/cert-pages/portfolio-curriculum-4.jpg", "assets/cert-pages/portfolio-curriculum-5.jpg", "assets/cert-pages/portfolio-curriculum-6.jpg", "assets/cert-pages/portfolio-curriculum-7.jpg", "assets/cert-pages/portfolio-curriculum-8.jpg", "assets/cert-pages/portfolio-curriculum-9.jpg", "assets/cert-pages/portfolio-curriculum-10.jpg", "assets/cert-pages/portfolio-curriculum-11.jpg", "assets/cert-pages/portfolio-curriculum-12.jpg", "assets/cert-pages/portfolio-curriculum-13.jpg", "assets/cert-pages/portfolio-curriculum-14.jpg"]}, "opp-egov-kpi": {"pages": ["assets/cert-pages/opp-egov-kpi-1.jpg", "assets/cert-pages/opp-egov-kpi-2.jpg", "assets/cert-pages/opp-egov-kpi-3.jpg", "assets/cert-pages/opp-egov-kpi-4.jpg", "assets/cert-pages/opp-egov-kpi-5.jpg", "assets/cert-pages/opp-egov-kpi-6.jpg", "assets/cert-pages/opp-egov-kpi-7.jpg", "assets/cert-pages/opp-egov-kpi-8.jpg", "assets/cert-pages/opp-egov-kpi-9.jpg", "assets/cert-pages/opp-egov-kpi-10.jpg", "assets/cert-pages/opp-egov-kpi-11.jpg", "assets/cert-pages/opp-egov-kpi-12.jpg", "assets/cert-pages/opp-egov-kpi-13.jpg", "assets/cert-pages/opp-egov-kpi-14.jpg", "assets/cert-pages/opp-egov-kpi-15.jpg", "assets/cert-pages/opp-egov-kpi-16.jpg", "assets/cert-pages/opp-egov-kpi-17.jpg", "assets/cert-pages/opp-egov-kpi-18.jpg", "assets/cert-pages/opp-egov-kpi-19.jpg", "assets/cert-pages/opp-egov-kpi-20.jpg", "assets/cert-pages/opp-egov-kpi-21.jpg", "assets/cert-pages/opp-egov-kpi-22.jpg", "assets/cert-pages/opp-egov-kpi-23.jpg", "assets/cert-pages/opp-egov-kpi-24.jpg", "assets/cert-pages/opp-egov-kpi-25.jpg", "assets/cert-pages/opp-egov-kpi-26.jpg", "assets/cert-pages/opp-egov-kpi-27.jpg", "assets/cert-pages/opp-egov-kpi-28.jpg", "assets/cert-pages/opp-egov-kpi-29.jpg", "assets/cert-pages/opp-egov-kpi-30.jpg", "assets/cert-pages/opp-egov-kpi-31.jpg", "assets/cert-pages/opp-egov-kpi-32.jpg", "assets/cert-pages/opp-egov-kpi-33.jpg", "assets/cert-pages/opp-egov-kpi-34.jpg", "assets/cert-pages/opp-egov-kpi-35.jpg", "assets/cert-pages/opp-egov-kpi-36.jpg", "assets/cert-pages/opp-egov-kpi-37.jpg", "assets/cert-pages/opp-egov-kpi-38.jpg", "assets/cert-pages/opp-egov-kpi-39.jpg", "assets/cert-pages/opp-egov-kpi-40.jpg"], "sum": {"fr": "Ce que dit le document (original en ukrainien) : présentation du programme éducatif et professionnel « Administration électronique » de l'Université technique nationale d'Ukraine « Institut polytechnique de Kyiv Igor Sikorsky ». L'objectif du programme correspond pleinement à la mission et à la stratégie de développement de l'Institut polytechnique de Kyiv Igor Sikorsky pour 2020–2025 : la formation professionnelle de fonctionnaires et de gestionnaires capables de résoudre des tâches spécialisées complexes et des problèmes pratiques en administration publique, notamment en administration électronique. La présentation montre le développement des compétences pratiques — cours hors les murs, notamment au Secrétariat du Cabinet des ministres de l'Ukraine, et étude des meilleures expériences ukrainiennes (composante « Villes intelligentes ») — et présente les étudiants du programme, participants et lauréats du concours panukrainien de travaux scientifiques étudiants en administration et gestion publiques et du concours du budget participatif de Kyiv.", "en": "What the document says (original in Ukrainian): presentation of the Educational and Professional Programme “Electronic Governance” of the National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”. The programme's goal fully matches the mission and the Development Strategy of Igor Sikorsky Kyiv Polytechnic Institute for 2020–2025: professional training of public servants and managers able to solve complex specialised tasks and practical problems in public administration and management, in particular in e-governance. The presentation shows how practical skills are developed — field classes, including at the Secretariat of the Cabinet of Ministers of Ukraine, and study of the best Ukrainian experience (the “Smart Cities” component) — and presents the programme's students, participants and winners of the All-Ukrainian Competition of Student Scientific Works in Public Administration and Management and of the Kyiv Public Budget competition."}}, "fsp-gratitude-2023": {"pages": ["assets/cert-pages/fsp-gratitude-2023-1.jpg"]}, "black-sea-science-2023": {"pages": ["assets/cert-pages/black-sea-science-2023-1.jpg"]}, "ifntuog-gratitude-2022": {"pages": ["assets/cert-pages/ifntuog-gratitude-2022-1.jpg"]}, "nmc-testology-2021": {"pages": ["assets/cert-pages/nmc-testology-2021-1.jpg"]}, "knteu-2020-gramota": {"pages": ["assets/cert-pages/knteu-gramota-2020-1.jpg"]}, "kpi-jury-2019": {"pages": ["assets/cert-pages/kpi-jury-2019-1.jpg"]}, "knteu-2018-gramota": {"pages": ["assets/cert-pages/knteu-gramota-2018-1.jpg"]}, "kpi-2017-organizer": {"pages": ["assets/cert-pages/kpi-organizer-2017-1.jpg"]}, "kpi-2019-organizer": {"pages": ["assets/cert-pages/kpi-organizer-2019-1.jpg"]}, "kpi-2018-organizer": {"pages": ["assets/cert-pages/kpi-organizer-2018-1.jpg"]}, "gisu-symposium-2023": {"pages": ["assets/photos/gisu-symposium-2023.jpg"]}, "book-2008-foreign": {"pages": ["assets/books/egov-2008-foreign-experience.jpg"]}};
  var viewer = document.getElementById("certViewer");
  if(!viewer) return;
  var panel = viewer.querySelector(".cv-panel"),
      titleEl = document.getElementById("cvTitle"),
      sumEl = document.getElementById("cvSum"),
      pagesEl = document.getElementById("cvPages"),
      closeBtn = document.getElementById("cvClose"),
      hintEl = document.getElementById("cvHint"),
      lastFocus = null;
  function lang(){ return (window.SC_lang ? window.SC_lang() : "en") === "fr" ? "fr" : "en"; }
  function pickText(el){
    if(!el) return "";
    var l = lang();
    var fr = el.querySelector(".lang-fr"), en = el.querySelector(".lang-en");
    if(fr || en){ var n = (l === "fr" ? fr : en) || fr || en; return n.textContent.replace(/\s+/g, " ").trim(); }
    var clone = el.cloneNode(true);
    clone.querySelectorAll(".doc-orig").forEach(function(x){ x.remove(); });
    return clone.textContent.replace(/\s+/g, " ").trim();
  }
  function openViewer(slug, btn){
    var d = CERTVIEW[slug];
    if(!d) return;
    lastFocus = btn || document.activeElement;
    var t = btn.getAttribute("data-cv-title-" + lang()) || "";
    if(!t){
      var card = btn.closest("article") || btn.closest(".certificate-feature") || btn.closest("figure");
      if(card) t = pickText(card.querySelector("h3, b"));
    }
    titleEl.textContent = t;
    if(hintEl) hintEl.hidden = slug.indexOf("photo-") === 0;
    if(d.sum){ sumEl.textContent = d.sum[lang()]; sumEl.hidden = false; }
    else { sumEl.textContent = ""; sumEl.hidden = true; }
    pagesEl.innerHTML = "";
    d.pages.forEach(function(src, i){
      var a = document.createElement("a");
      a.href = src;
      a.target = "_blank";
      a.rel = "noopener";
      a.className = "cv-page-file";
      a.setAttribute("aria-label", (lang() === "fr" ? "Ouvrir le fichier de la page " : "Open the file of page ") + (i + 1));
      var img = document.createElement("img");
      img.src = src;
      img.alt = t + " — " + (lang() === "fr" ? "page " : "page ") + (i + 1);
      if(i > 0) img.loading = "lazy";
      a.appendChild(img);
      pagesEl.appendChild(a);
    });
    viewer.hidden = false;
    document.body.style.overflow = "hidden";
    panel.scrollTop = 0;
    closeBtn.focus();
  }
  function closeViewer(){
    viewer.hidden = true;
    pagesEl.innerHTML = "";
    document.body.style.overflow = "";
    if(lastFocus && lastFocus.focus) lastFocus.focus();
    lastFocus = null;
  }
  document.addEventListener("click", function(e){
    var b = e.target.closest("[data-cert]");
    if(b){ openViewer(b.getAttribute("data-cert"), b); }
  });
  closeBtn.addEventListener("click", closeViewer);
  viewer.querySelector("[data-cv-close]").addEventListener("click", closeViewer);
  document.addEventListener("keydown", function(e){
    if(viewer.hidden) return;
    var fv=document.getElementById("fileViewer");
    if(fv && !fv.hidden) return; /* the file viewer sits above; its own handler takes Escape */
    if(e.key === "Escape"){ closeViewer(); }
    else if(e.key === "Tab"){
      var f = panel.querySelectorAll("button, [href], [tabindex]");
      var list = Array.prototype.filter.call(f, function(el){ return !el.disabled && el.offsetParent !== null; });
      if(!list.length) return;
      var first = list[0], last = list[list.length - 1];
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  });
})();

/* ---- Attached-file viewer: every link to one of the site's own files
   (document pages in the certificate viewer, the 2008 book PDF) used to
   rely on target="_blank" — a new tab that never opens inside the app
   shell, so the file simply did not open. Clicks on those links are now
   intercepted and the file is shown in an in-page viewer instead; the
   plain link underneath still works where JavaScript or popups differ. */
(function(){
  "use strict";
  var viewer = document.getElementById("fileViewer");
  if(!viewer) return;
  var panel = viewer.querySelector(".fv-panel"),
      titleEl = document.getElementById("fvTitle"),
      bodyEl = document.getElementById("fvBody"),
      directEl = document.getElementById("fvDirect"),
      closeBtn = document.getElementById("fvClose"),
      lastFocus = null;
  function lang(){ return (window.SC_lang ? window.SC_lang() : "en") === "fr" ? "fr" : "en"; }
  function certOpen(){
    var cv = document.getElementById("certViewer");
    return !!(cv && !cv.hidden);
  }
  function openFile(src, title){
    lastFocus = document.activeElement;
    titleEl.textContent = title || src.split("/").pop() || "";
    bodyEl.innerHTML = "";
    if(/\.pdf($|\?)/i.test(src)){
      var fr = document.createElement("iframe");
      fr.src = src;
      fr.title = titleEl.textContent;
      bodyEl.appendChild(fr);
    } else {
      var img = document.createElement("img");
      img.src = src;
      img.alt = titleEl.textContent;
      bodyEl.appendChild(img);
    }
    directEl.setAttribute("href", src);
    viewer.hidden = false;
    document.body.style.overflow = "hidden";
    panel.scrollTop = 0;
    closeBtn.focus();
  }
  function closeFile(){
    viewer.hidden = true;
    bodyEl.innerHTML = "";
    directEl.removeAttribute("href");
    if(!certOpen()) document.body.style.overflow = "";
    if(lastFocus && lastFocus.focus) lastFocus.focus();
    lastFocus = null;
  }
  window.SC_openFile = openFile;
  document.addEventListener("click", function(e){
    var a = e.target.closest ? e.target.closest('a[href^="assets/"]') : null;
    if(!a) return;
    if(viewer.contains(a)) return; /* the viewer's own "open directly" link must really navigate */
    var src = a.getAttribute("href");
    if(!src) return;
    e.preventDefault();
    var t = a.getAttribute("aria-label") || "";
    if(!t){
      var sp = a.querySelector(lang() === "fr" ? ".lang-fr" : ".lang-en");
      t = (sp ? sp.textContent : a.textContent).replace(/\s+/g, " ").trim();
    }
    if(!t || /^open the file of page/i.test(t)){
      var cvT = document.getElementById("cvTitle");
      var base = cvT ? cvT.textContent.trim() : "";
      t = base ? base + " — " + t : t;
    }
    openFile(src, t);
  });
  closeBtn.addEventListener("click", closeFile);
  viewer.querySelector("[data-fv-close]").addEventListener("click", closeFile);
  document.addEventListener("keydown", function(e){
    if(viewer.hidden) return;
    if(e.key === "Escape"){ closeFile(); }
    else if(e.key === "Tab"){
      var f = panel.querySelectorAll("button, [href], [tabindex]");
      var list = Array.prototype.filter.call(f, function(el){ return !el.disabled && el.offsetParent !== null; });
      if(!list.length) return;
      var first = list[0], last = list[list.length - 1];
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  });
})();
