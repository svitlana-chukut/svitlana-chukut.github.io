(function(){
 "use strict";
 var header=document.querySelector('.hdr');
 function measure(){if(header)document.documentElement.style.setProperty('--site-header-height',Math.ceil(header.getBoundingClientRect().height)+'px');}
 if(header&&window.ResizeObserver)new ResizeObserver(measure).observe(header);
 window.addEventListener('resize',measure,{passive:true});measure();
 var group=document.querySelector('.lab-nav-group');
 if(group){
  document.addEventListener('keydown',function(e){if(e.key==='Escape')group.classList.add('is-dismissed');});
  group.addEventListener('mouseleave',function(){group.classList.remove('is-dismissed');});
  group.addEventListener('focusout',function(e){if(!group.contains(e.relatedTarget))group.classList.remove('is-dismissed');});
 }
})();
