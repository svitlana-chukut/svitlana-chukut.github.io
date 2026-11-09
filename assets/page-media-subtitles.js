/* ================================================================
   MEDIA PAGE - Olympiad video subtitle controller
   ================================================================
   Behaviour, no content: steers the Olympiad video embed and
   the synchronised subtitle line under it. The subtitle texts
   themselves are generated data in assets/subtitles.js - do
   not edit those by hand. Used to be an inline script in
   index.html.
   ================================================================ */
/* ---- Olympiad video: synchronised subtitles under the player ----
   The subtitles run on a PAGE-LOCAL clock, not on the YouTube IFrame
   API. The API (www-widgetapi.js) talks to the player via postMessage,
   and this page is served inside a sandboxed frame whose origin is
   opaque ("null"), so every API message failed the browser's origin
   check and Chrome logged a postMessage error about once a second
   while the subtitle clock never connected. The sync controls under
   the player therefore steer BOTH the video and this clock through
   the embed URL only (start / autoplay parameters): Start loads the
   player autoplaying from 0 and starts the clock; Pause reloads it
   cued at the current second and freezes the clock; Resume, -10s,
   +10s and Restart do the matching reload + clock reset. If the
   viewer pauses or scrubs inside the YouTube player itself, the
   -10s / +10s buttons bring the subtitles back in step. The segment
   shown follows the page language (window.SC_lang), so a language
   switch mid-playback swaps the subtitle language at the next tick. */
(function(){
  "use strict";
  var row=document.getElementById("subRow"),
      txt=document.getElementById("subText"),
      tog=document.getElementById("subToggle"),
      frame=document.getElementById("olympiad-video"),
      playBtn=document.getElementById("subPlay"),
      playLabel=document.getElementById("subPlayLabel"),
      backBtn=document.getElementById("subBack"),
      fwdBtn=document.getElementById("subFwd"),
      restartBtn=document.getElementById("subRestart");
  if(!row||!txt||!tog||!frame||!playBtn||typeof SUBTITLES_EN==="undefined"||typeof SUBTITLES_FR==="undefined") return;
  var EMBED="https://www.youtube-nocookie.com/embed/KBpZt8X0Pw0";
  var started=false, playing=false, base=0, stamp=0, timer=null, lastIdx=-1, shown=null;
  function curLang(){ return (window.SC_lang?window.SC_lang():"en")==="fr"?"fr":"en"; }
  function segs(){ return curLang()==="fr"?SUBTITLES_FR:SUBTITLES_EN; }
  /* binary search: index of the last segment with start <= t, kept
     only when t also falls before its end; -1 during silence/music */
  function findIdx(s,t){
    var lo=0, hi=s.length-1, ans=-1;
    while(lo<=hi){ var mid=(lo+hi)>>1; if(s[mid].start<=t){ ans=mid; lo=mid+1; } else { hi=mid-1; } }
    return (ans>=0 && t<s[ans].end) ? ans : -1;
  }
  function subsOn(){ return tog.getAttribute("aria-pressed")==="true"; }
  function nowT(){ return playing ? base + (performance.now()-stamp)/1000 : base; }
  function render(){
    if(!subsOn()){ if(shown!==null){ shown=null; txt.textContent=""; } return; }
    if(!started) return;
    var s=segs(), t=nowT(), i=findIdx(s,t);
    lastIdx=i;
    var want=i>=0?s[i].text:"";
    if(want!==shown){ shown=want; txt.textContent=want; }
  }
  function setLabel(){
    var fr, en;
    if(!started){ fr="\u25B6 Lancer vid\u00E9o + sous-titres"; en="\u25B6 Start video + subtitles"; }
    else if(playing){ fr="\u23F8 Pause vid\u00E9o + sous-titres"; en="\u23F8 Pause video + subtitles"; }
    else { fr="\u25B6 Reprendre"; en="\u25B6 Resume"; }
    /* The label is a single data-i18n span now (its texts live in
       assets/content-page-media.js); write the state label for the
       current page language straight into it. */
    var sp=playLabel.querySelector("span");
    if(sp) sp.textContent=((window.SC_lang&&window.SC_lang()==="fr")?fr:en);
    playBtn.setAttribute("aria-pressed", playing?"true":"false");
  }
  function load(t, autoplay){
    frame.src=EMBED+"?rel=0&start="+Math.max(0,Math.floor(t))+(autoplay?"&autoplay=1":"");
  }
  function startClock(t){
    base=t; stamp=performance.now(); playing=true;
    if(!timer){ timer=setInterval(render,250); }
    render(); setLabel();
  }
  function freeze(){
    base=nowT(); playing=false;
    if(timer){ clearInterval(timer); timer=null; }
  }
  playBtn.addEventListener("click",function(){
    if(!started){ started=true; load(0,true); startClock(0); }
    else if(playing){ freeze(); load(base,false); render(); setLabel(); }
    else { load(base,true); startClock(base); }
  });
  backBtn.addEventListener("click",function(){
    if(!started) return;
    var t=Math.max(0,nowT()-10);
    if(playing){ load(t,true); startClock(t); } else { base=t; load(t,false); render(); }
  });
  fwdBtn.addEventListener("click",function(){
    if(!started) return;
    var t=nowT()+10;
    if(playing){ load(t,true); startClock(t); } else { base=t; load(t,false); render(); }
  });
  restartBtn.addEventListener("click",function(){
    started=true; load(0,true); startClock(0);
  });
  tog.addEventListener("click",function(){
    var on=!subsOn();
    tog.setAttribute("aria-pressed",on?"true":"false");
    row.classList.toggle("subs-off",!on);
    if(on){ lastIdx=-1; render(); }
    else { txt.textContent=""; shown=null; }
  });
  /* Leaving the Media page: cue the player at the current second and
     freeze the clock, so no audio keeps playing from a hidden page. */
  window.addEventListener("hashchange",function(){
    setTimeout(function(){
      var mp=document.getElementById("page-media");
      if(playing && mp && !mp.classList.contains("on")){ freeze(); load(base,false); setLabel(); }
    },80);
  });
  setLabel();
  /* A language switch rewrites the label span from the dictionary
     (its "not started" text); re-apply the state label afterwards. */
  if(window.MutationObserver){
    new MutationObserver(function(){ setLabel(); }).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
  }
})();
