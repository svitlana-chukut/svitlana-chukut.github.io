/* ================================================================
   ARCHIVE PAGE - file grid renderer
   ================================================================
   Behaviour, no content: renders the "Archive for analysis"
   image grid (filter, search, keep / check / remove marks for
   this session) from the file inventory data in
   assets/content-files.js (IMGS, NONIMG). Used to be an inline
   script in index.html.
   ================================================================ */
(function(){
  "use strict";
  /* File inventory data (IMGS, NONIMG) is loaded from
     assets/content-files.js - edit that file to change the inventory. */
  var grid = document.getElementById("archGrid");
  if(!grid) return;
  var marks = {}; /* in-memory only, this session */
  var PAGE = 48, shown = PAGE;
  var fname = function(p){ return p.split("/").pop(); };
  function filtered(){
    var f = document.getElementById("archFolder").value;
    var q = (document.getElementById("archSearch").value||"").toLowerCase();
    var mf = document.getElementById("archMarkFilter").value;
    return IMGS.filter(function(it){
      if(f!=="all" && it.f!==f) return false;
      if(q && fname(it.p).toLowerCase().indexOf(q)<0) return false;
      if(mf!=="all"){ var m = marks[it.p]||"none"; if(m!==mf) return false; }
      return true;
    });
  }
  function counters(){
    var k=0,c=0,r=0;
    Object.keys(marks).forEach(function(p){ if(marks[p]==="keep")k++; else if(marks[p]==="check")c++; else if(marks[p]==="remove")r++; });
    document.getElementById("archKeep").textContent=k;
    document.getElementById("archCheck").textContent=c;
    document.getElementById("archRemove").textContent=r;
    document.getElementById("archLeft").textContent=IMGS.length-(k+c+r);
  }
  function render(){
    var list = filtered();
    document.getElementById("archShown").textContent = list.length;
    grid.innerHTML = "";
    list.slice(0, shown).forEach(function(it){
      var card = document.createElement("figure");
      card.className = "arch-card" + (marks[it.p] ? " is-"+marks[it.p] : "");
      var img = document.createElement("img");
      img.src = it.p; img.alt = fname(it.p); img.loading = "lazy";
      var cap = document.createElement("figcaption");
      var name = document.createElement("span"); name.className="arch-name"; name.textContent = fname(it.p);
      var meta = document.createElement("span"); meta.className="arch-meta"; meta.textContent = it.f + " · " + it.p + " · " + it.s + " KB";
      var btns = document.createElement("span"); btns.className="arch-btns";
      [["keep","Keep"],["check","Check"],["remove","Remove?"]].forEach(function(pair){
        var b = document.createElement("button"); b.type="button"; b.textContent = pair[1];
        b.className = "arch-mk" + (marks[it.p]===pair[0] ? " on" : "");
        b.setAttribute("aria-pressed", marks[it.p]===pair[0] ? "true" : "false");
        b.addEventListener("click", function(){
          if(marks[it.p]===pair[0]) delete marks[it.p]; else marks[it.p]=pair[0];
          counters(); render();
        });
        btns.appendChild(b);
      });
      var open = document.createElement("a"); open.className="arch-open"; open.href=it.p; open.target="_blank"; open.rel="noopener"; open.textContent="Open full size ↗";
      cap.appendChild(name); cap.appendChild(meta); cap.appendChild(btns); cap.appendChild(open);
      card.appendChild(img); card.appendChild(cap);
      grid.appendChild(card);
    });
    document.getElementById("archMore").style.display = list.length>shown ? "" : "none";
    counters();
  }
  ["archFolder","archMarkFilter"].forEach(function(id){ document.getElementById(id).addEventListener("change", function(){ shown=PAGE; render(); }); });
  document.getElementById("archSearch").addEventListener("input", function(){ shown=PAGE; render(); });
  document.getElementById("archMore").addEventListener("click", function(){ shown+=PAGE; render(); });
  function download(name, text, type){
    var blob = new Blob([text], {type:type||"text/plain;charset=utf-8"});
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 400);
  }
  function csvEsc(v){ return '"' + String(v).replace(/"/g,'""') + '"'; }
  document.getElementById("archDlReview").addEventListener("click", function(){
    var rows = [["folder","file","original_path","size_kb","my_mark"]];
    IMGS.forEach(function(it){ rows.push([it.f, fname(it.p), it.p, it.s, marks[it.p]||""]); });
    download("my-image-sort.csv", rows.map(function(r){ return r.map(csvEsc).join(","); }).join("\n"), "text/csv;charset=utf-8");
  });
  document.getElementById("archDlInventory").addEventListener("click", function(){
    var rows = [["folder","file","original_path","size_kb"]];
    NONIMG.concat(IMGS).forEach(function(it){ rows.push([it.f, fname(it.p), it.p, it.s]); });
    rows.slice(1).sort(function(a,b){ return a[0]<b[0]?-1:a[0]>b[0]?1:(a[1]<b[1]?-1:1); });
    download("INVENTORY.csv", rows.map(function(r){ return r.map(csvEsc).join(","); }).join("\n"), "text/csv;charset=utf-8");
  });
  document.getElementById("archDlTree").addEventListener("click", function(){
    var lines = ["Svitlana-Chukut--ALL-DATA--sorted — 475 files, 462 images, 76.8 MB",""];
    var byF = {};
    NONIMG.concat(IMGS).forEach(function(it){ (byF[it.f]=byF[it.f]||[]).push(it); });
    Object.keys(byF).sort().forEach(function(f){ lines.push(f+"  ("+byF[f].length+" files)"); byF[f].forEach(function(it){ lines.push("   "+it.p+"  —  "+it.s+" KB"); }); lines.push(""); });
    download("folder-structure.txt", lines.join("\n"));
  });
  render();
})();
