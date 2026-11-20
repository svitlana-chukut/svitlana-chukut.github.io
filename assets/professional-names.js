(function(){
 'use strict';
 var surname='(?:Chukut|Tchukut|Чукут)';
 var first='(?:Svitlana|Svetlana|Світлана|Светлана)(?:\\s+(?:Anatoliivna|Anatoliyivna|Анатоліївна|Анатольевна))?';
 var initials='(?:[SС]\\.?\\s*(?:[AА]\\.?\\s*)?)';
 var pattern=new RegExp(first+'\\s+'+surname+'|'+surname+'(?:,?\\s+'+first+')|'+initials+surname+'|'+surname,'giu');
 var letters=/[\p{L}\p{N}_]/u;
 function format(s,context){
  if(!s||/^\s*(?:https?:\/\/|mailto:)/i.test(s))return s;
  s=s.replace(/Chukut Civic Skills Studio/gi,'Civic Skills Studio · Prof. Chukut').replace(/Studio Chukut de compétences civiques/gi,'Studio de compétences civiques · Prof. Chukut');
  s=s.replace(/\b(?:Professor|Professeure)\s+(?=(?:Svitlana|Svetlana|Chukut)\b)/gi,'Prof. ')
     .replace(/\b(?:La professeure|la professeure)\s+(?=(?:Svitlana|Chukut)\b)/g,'Prof. ');
  return s.replace(pattern,function(name,index,whole){
   if(index&&letters.test(whole[index-1]))return name;
   var end=index+name.length;if(end<whole.length&&letters.test(whole[end]))return name;
   var token=whole.slice(0,index).split(/\s/).pop()+name+whole.slice(end).split(/\s/)[0];
   if(/@|:\/\/|www\.|[a-z0-9.-]+\.[a-z]{2,}(?:[\/?#]|$)|\//i.test(token))return name;
   var before=(context||'')+whole.slice(0,index);
   return /Prof\.?\s*$/i.test(before)?name:'Prof. '+name;
  });
 }
 window.SC_professionalName=format;
 function prior(node){var result='',n=node;for(var level=0;n&&level<3;level++,n=n.parentNode){var p=n.previousSibling;while(p){var t=p.textContent||'';if(t.trim()){result=t.slice(-60)+result;break;}p=p.previousSibling;}if(result.trim())break;}return result;}
 function citation(node){return node.parentElement&&node.parentElement.closest('.apa,.citation,[data-i18n^="apa-"]');}
 function stripRank(s){return (s||'').replace(/\bProf\.?\s+/gi,'');}
 function rewrite(node){return citation(node)?stripRank(node.nodeValue):format(node.nodeValue,prior(node));}
 function skip(node){return !node.parentElement||node.parentElement.closest('script,style,code,pre,textarea,.hero-full-name,.brand-full-name,[contenteditable="true"]');}
 function process(root){
  if(root.nodeType===3){if(!skip(root)){var value=rewrite(root);if(value!==root.nodeValue)root.nodeValue=value;}return;}
  if(root.nodeType!==1||root.matches('script,style,code,pre,textarea'))return;
  var walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),node;
  while((node=walk.nextNode()))if(!skip(node)){var value=rewrite(node);if(value!==node.nodeValue)node.nodeValue=value;}
  var nodes=[root].concat(Array.from(root.querySelectorAll('[alt],[aria-label],[title]')));
  nodes.forEach(function(el){if(el.closest('.apa,.citation,[data-i18n^="apa-"]'))return;['alt','aria-label','title'].forEach(function(a){var value=el.getAttribute(a);if(value){var next=format(value);if(next!==value)el.setAttribute(a,next);}});});
 }
 var queued=new Set(),pending=false;
 new MutationObserver(function(records){records.forEach(function(r){if(r.type==='characterData'||r.type==='attributes')queued.add(r.target);else r.addedNodes.forEach(function(n){if(n.nodeType===1||n.nodeType===3)queued.add(n);});});if(!pending&&queued.size){pending=true;queueMicrotask(function(){pending=false;var roots=Array.from(queued);queued.clear();roots.forEach(process);});}}).observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['alt','aria-label','title']});
 process(document.body);
})();
