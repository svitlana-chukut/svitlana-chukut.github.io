/* ================================================================
   HOME & LIBRARY PAGE HOOKS
   ================================================================
   Behaviour, no content: HOME_AFTER runs the Home hero
   constellation canvas and the Home tab title; LIB_AFTER
   renders the publication Library filters and list from the
   LIB catalogue (data: assets/content-library.js). Both are
   called by PAGE_AFTER (assets/page-after.js) on language
   switches. Used to be an inline script in index.html.
   ================================================================ */
/* ---- Home page: hero constellation canvas ---- */
function HOME_AFTER(d,lang){
  document.title = lang==="fr" ? "Svitlana Chukut — des communications qui transforment la gouvernance" : "Svitlana Chukut — communications that transform governance";
  // constellation canvas
  var c=document.getElementById("stars"); if(!c) return;
  var x=c.getContext("2d"),W,H,pts=[];
  function rs(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;pts=[];for(var i=0;i<70;i++)pts.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.6+.4,s:Math.random()*.4+.1});}
  rs(); addEventListener("resize",rs);
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  (function an(){x.clearRect(0,0,W,H);x.fillStyle="rgba(240,212,136,.7)";pts.forEach(function(p){if(!reduceMotion){p.y-=p.s;if(p.y<0)p.y=H;}x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill();});if(!reduceMotion)requestAnimationFrame(an);})();
}

/* Publication library: 215 records, ordered newest first — strictly
   descending by year, stable within a year (source order kept).
   The renderer also re-sorts descending after every filter/search. */
/* Catalogue data — one line per publication, newest first.
   Fields: [type, year, FR title, EN title, FR source, EN source,
   FR co-authors, EN co-authors, URL, citations (optional)].
   Types: art (article), conf, talk, proj, book… as in the filter list. */
/* The catalogue data itself (const LIB) lives in
   assets/content-library.js - add publications there. */

function LIB_AFTER(d,lang){
  document.title = lang==="fr" ? "Bibliothèque des publications — Svitlana Chukut" : "Publication library — Svitlana Chukut";
  var fc=document.getElementById("fc"), fd=document.getElementById("fd");
  var cv=fc.value, dv=fd.value;
  fc.innerHTML='<option value="">'+d.lifAll+'</option>'+CATS.map(function(c){return '<option value="'+c+'">'+(d["licat_"+c]||c)+'</option>';}).join("");
  fc.value=cv;
  var chips=document.getElementById("libChips");
  if(chips){
    chips.innerHTML=[""].concat(CATS).map(function(c){
      var lab=c?(d["licat_"+c]||c):d.lifAll;
      return '<button type="button" class="lib-chip" data-cat="'+c+'" aria-pressed="'+(cv===c?'true':'false')+'">'+lab+'</button>';
    }).join("");
    chips.querySelectorAll(".lib-chip").forEach(function(b){
      b.addEventListener("click",function(){ fc.value=b.getAttribute("data-cat"); render(d,lang); });
    });
  }
  var yrs=[...new Set(LIB.map(function(r){return (r[1]||"").slice(0,4);}).filter(function(y){return /^\d{4}$/.test(y);}))].sort().reverse();
  var decades=[...new Set(yrs.map(function(y){return y.slice(0,3)+"0";}))].sort().reverse();
  fd.innerHTML='<option value="">'+d.lifAllY+'</option>'+decades.map(function(x){return '<option value="'+x+'">'+x+'–'+(+x+9)+'</option>';}).join("");
  fd.value=dv;
  var fq=document.getElementById("fq"); fq.placeholder=d.liphSearch;
  render(d,lang);
}


var CATS=["art","book","conf","stu","proj","awd","cert","talk"];
var LIB_SHOW=24, _libSig="";

function render(d,lang){
  var q=(document.getElementById("fq").value||"").toLowerCase().trim();
  var c=document.getElementById("fc").value, dec=document.getElementById("fd").value;
  var chEl=document.getElementById("libChips");
  if(chEl){ chEl.querySelectorAll(".lib-chip").forEach(function(b){ b.setAttribute("aria-pressed", b.getAttribute("data-cat")===c?"true":"false"); }); }
  var out=LIB.filter(function(r){
    if(c&&r[0]!==c)return false;
    if(dec){var y=(r[1]||"").slice(0,4);if(!(y>=dec&&y<(+dec+10)))return false;}
    if(q){var t=((r[2]||"")+" "+(r[3]||"")).toLowerCase();if(t.indexOf(q)<0)return false;}
    return true;
  });
  /* default order: newest first (strict descending year). The sort is
     stable, so entries within one year keep their source order, and it
     runs after every filter/search so the order never breaks. */
  out.sort(function(a,b){var ya=parseInt((a[1]||"").slice(0,4),10)||0, yb=parseInt((b[1]||"").slice(0,4),10)||0; return yb-ya;});
  var sig=q+"|"+c+"|"+dec+"|"+lang; if(sig!==_libSig){_libSig=sig;LIB_SHOW=24;}
  var g=document.getElementById("grid");
  g.innerHTML=out.slice(0,LIB_SHOW).map(function(r){
    var t=lang==="fr"?r[2]:r[3], s=lang==="fr"?r[4]:r[5];
    /* fall back to the other language slot when a translation is absent,
       so a card never renders without its title or source */
    if(!t)t=lang==="fr"?r[3]:r[2]; if(!s)s=lang==="fr"?r[5]:r[4];
    /* the source link is whichever trailing field actually holds a URL
       (older records keep it in r[7], newer ones in r[8]) */
    var url=""; [r[8],r[7],r[6]].forEach(function(v){ if(!url&&typeof v==="string"&&/^https?:\/\//.test(v)) url=v; });
    var meta=[d["licat_"+r[0]]||r[0],r[1],s].filter(Boolean).join(" · ");
    var cit=r[9];
    if(cit!==undefined&&cit!==""&&cit!==null){ meta+=' · <span class="lib-cit">'+(lang==="fr"?"Citations : ":"Citations: ")+cit+'</span>'; }
    var link=url?(' <a href="'+url+'" target="_blank" rel="noopener" aria-label="Open source">↗</a>'):"";
    var img="";
    var coverSrc=(r[1]==="2022" && /Fondements de l’administration électronique|Fundamentals of Electronic Governance/.test(t))?"assets/books/osnovy-egu-2022-titlepage.jpg":(r[1]==="2007" && /Politique d’information en Ukraine : support de cours|Information policy in Ukraine: lecture outline/.test(t))?"assets/books/info-policy.jpg":(r[1]==="2008" && /Politique d’information : manuel|Information Policy: a textbook/.test(t))?"assets/books/info-policy-textbook-cover.jpg":(r[1]==="2008" && /Expérience nationale et étrangère|Domestic and foreign experience/.test(t))?"assets/books/egov-2008.jpg":"";
    if(coverSrc) img='<img class="lib-cover" src="'+coverSrc+'" alt="'+t.replace(/"/g,"&quot;")+'">';
    var badge=r[0]==="cert"?'<div class="lib-badge">'+(lang==="fr"?"CERTIFICAT":"CERTIFICATE")+'</div>':"";
    return '<div class="lib-it '+(img||badge?'visual':'')+'">'+img+badge+'<div class="lib-copy"><div class="t">'+t+link+'</div><div class="m">'+meta+'</div></div></div>';
  }).join("");
  var emptyEl=document.getElementById("libEmpty");
  if(emptyEl) emptyEl.hidden = out.length>0;
  var cntEl=document.getElementById("cnt");
  cntEl.textContent=d.lifound+" "+out.length+" / "+LIB.length;
  if(out.length>LIB_SHOW){
    var mb=document.createElement("button");
    mb.type="button"; mb.className="more-btn";
    mb.innerHTML='<span class="lang-fr">Afficher plus</span><span class="lang-en">Show more</span>';
    mb.addEventListener("click",function(){ LIB_SHOW+=24; render(d,lang); });
    cntEl.appendChild(mb);
  }
}
document.addEventListener("DOMContentLoaded",function(){
  ["fq","fc","fd"].forEach(function(id){document.getElementById(id).addEventListener("input",function(){var l=document.documentElement.lang;render(Object.assign({},PAGE[l]),l);});});
  document.getElementById("fc").addEventListener("change",function(){var l=document.documentElement.lang;render(Object.assign({},PAGE[l]),l);});
  document.getElementById("fd").addEventListener("change",function(){var l=document.documentElement.lang;render(Object.assign({},PAGE[l]),l);});
  var rs=document.getElementById("libReset");
  if(rs){ rs.addEventListener("click",function(){ var l=document.documentElement.lang||"en"; document.getElementById("fq").value=""; document.getElementById("fc").value=""; document.getElementById("fd").value=""; render(Object.assign({},PAGE[l]),l); var f=document.getElementById("fq"); if(f) f.focus(); }); }
});
/* Global-search target: filter the library to one record and flash its card. */
window.SC_libGo=function(rec){
  var lang=(window.SC_lang?window.SC_lang():"en");
  var go=function(){
    var d=Object.assign({},PAGE[lang]);
    document.getElementById("fq").value=(lang==="fr"?(rec[2]||rec[3]):(rec[3]||rec[2]))||"";
    document.getElementById("fc").value=rec[0];
    document.getElementById("fd").value="";
    LIB_AFTER(d,lang);
    setTimeout(function(){
      var title=(lang==="fr"?(rec[2]||rec[3]):(rec[3]||rec[2]))||"";
      var cards=document.querySelectorAll("#grid .lib-it");
      for(var i=0;i<cards.length;i++){
        var t=cards[i].querySelector(".t");
        if(t&&title&&t.textContent.indexOf(title.slice(0,42))===0){
          if(window.SC_scrollFlash) window.SC_scrollFlash(cards[i]);
          return;
        }
      }
      var first=document.querySelector("#grid .lib-it");
      if(first&&window.SC_scrollFlash) window.SC_scrollFlash(first);
    },80);
  };
  var cur=document.querySelector(".page.on");
  if(!cur||cur.id!=="page-library"){ location.hash="#library"; setTimeout(go,140); } else { go(); }
};
