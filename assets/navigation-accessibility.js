(function(){
 'use strict';
 var nav=document.querySelector('.primary-nav');if(!nav)return;
 var groups=Array.from(nav.querySelectorAll('.primary-group')),timer;
 function set(group,open){
  group.classList.toggle('is-open',open);
  group.querySelector('.primary-toggle').setAttribute('aria-expanded',String(open));
  group.querySelector('.primary-panel').hidden=!open;
 }
 function closeAll(except){clearTimeout(timer);groups.forEach(function(g){if(g!==except)set(g,false);});}
 function open(g){closeAll(g);set(g,true);}
 function positionPanel(){
  var box=nav.getBoundingClientRect();
  document.documentElement.style.setProperty('--nav-panel-top',Math.max(8,Math.min(box.bottom+4,window.innerHeight-180))+'px');
 }
 nav.addEventListener('scroll',positionPanel,{passive:true});
 window.addEventListener('resize',positionPanel,{passive:true});
 window.addEventListener('scroll',positionPanel,{passive:true});
 positionPanel();
 groups.forEach(function(g){
  var toggle=g.querySelector('.primary-toggle'),panel=g.querySelector('.primary-panel'),parent=g.querySelector('.primary-link');
  toggle.addEventListener('click',function(){var next=panel.hidden;closeAll();if(next)open(g);});
  parent.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse'&&window.innerWidth>1100){clearTimeout(timer);positionPanel();if(!g.classList.contains('hover-dismissed'))open(g);}});
  toggle.addEventListener('pointerenter',function(){clearTimeout(timer);});
  g.addEventListener('pointerleave',function(e){g.classList.remove('hover-dismissed');if(e.pointerType==='mouse')timer=setTimeout(function(){if(!g.contains(document.activeElement))set(g,false);},300);});
  g.addEventListener('focusout',function(e){if(!g.contains(e.relatedTarget))set(g,false);});
  g.addEventListener('keydown',function(e){
   var links=Array.from(panel.querySelectorAll('a'));
   if(e.key==='Escape'&&!panel.hidden){e.preventDefault();e.stopPropagation();set(g,false);g.classList.add('hover-dismissed');toggle.focus();}
   else if((e.key==='ArrowDown'||e.key==='ArrowUp')&&(e.target===parent||e.target===toggle)){e.preventDefault();open(g);(e.key==='ArrowDown'?links[0]:links[links.length-1]).focus();}
   else if((e.key==='ArrowDown'||e.key==='ArrowUp')&&links.includes(e.target)){e.preventDefault();var i=links.indexOf(e.target)+(e.key==='ArrowDown'?1:-1);links[(i+links.length)%links.length].focus();}
   else if(e.key==='Home'&&links.includes(e.target)){e.preventDefault();links[0].focus();}
   else if(e.key==='End'&&links.includes(e.target)){e.preventDefault();links[links.length-1].focus();}
  });
  g.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){closeAll();});});
 });
 document.addEventListener('pointerdown',function(e){if(!nav.contains(e.target))closeAll();});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')closeAll();});
 window.addEventListener('hashchange',function(){closeAll();});
 document.addEventListener('sc:route',function(){closeAll();});
 // Recalculate open course panels after font loading and viewport changes.
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){window.dispatchEvent(new Event('resize'));});
})();
