(function(){
 'use strict';
 var game=location.pathname.split('/').filter(Boolean).filter(function(p){return /^0[1-4]-/.test(p);})[0];
 var data=(window.STUDIO_CONTENT||{})[game]||{cards:[]};
 var T={
 en:{tools:'Learning Lab controls',guide:'How to play',practices:'Best practices',collaborate:'Collaborate',motionOn:'Animations on',motionOff:'Animations off',close:'Close',city:'Ottawa · Canada',guideTitle:'Learn through decisions',guideIntro:'Choose a perspective, explore the consequences of your decisions and reflect on the evidence. This is an independent educational simulation, not a municipal consultation.',steps:[['Choose a role','Each role has different responsibilities and constraints. Start with a perspective that interests you.'],['Make a decision','Read the situation and compare the options. Feedback explains the consequences; some paths include a chance to correct an earlier choice.'],['Reflect and apply','Review your learning summary and browse the best-practice cards. Each card keeps the original source within reach.']],keyboard:'Keyboard and display',keyboardBody:'Use Tab and Shift+Tab to move between controls, and Enter or Space to activate buttons. Press Escape to close this window. Language and display controls remain available in the game. Animations respect your reduced-motion preference and can be turned off at any time.',progress:'Your current run stays in place while you browse this guide or the best practices.',practicesTitle:'Best practices & evidence',practicesIntro:'Explore the practices and cases already used in this simulation. Consider the local context, limits and responsibilities before applying an example elsewhere.',filter:'Browse by theme',all:'All themes',apply:'Application & limits',practice:'Put into practice',owner:'Who is involved',measure:'What to assess',caution:'Limits to consider',source:'Read the source',noCases:'The source material is available in the simulation.',collabTitle:'Bring civic learning to your community',collabBody:'Prof. Svitlana Chukut welcomes collaboration with municipalities, educators and community organisations on facilitated workshops, locally adapted simulations and public-service learning programmes.',contact:'Discuss a collaboration',studio:'Explore the Learning Lab',collabNote:'Start with a local learning need, an audience and the decisions they need to practise. The studio can connect learning outcomes, accessible activities, feedback and reflection.'},
 fr:{tools:'Commandes du laboratoire d’apprentissage',guide:'Mode d’emploi',practices:'Bonnes pratiques',collaborate:'Collaborer',motionOn:'Animations actives',motionOff:'Animations désactivées',close:'Fermer',city:'Ottawa · Canada',guideTitle:'Apprendre par la décision',guideIntro:'Choisissez une perspective, explorez les conséquences de vos décisions et examinez les données. Il s’agit d’une simulation pédagogique indépendante, et non d’une consultation municipale.',steps:[['Choisir un rôle','Chaque rôle comporte des responsabilités et des contraintes différentes. Commencez par la perspective qui vous intéresse.'],['Prendre une décision','Lisez la situation et comparez les options. La rétroaction explique les conséquences; certains parcours permettent de corriger un choix antérieur.'],['Réfléchir et appliquer','Examinez votre bilan et les fiches de bonnes pratiques. Chaque fiche donne accès à sa source originale.']],keyboard:'Clavier et affichage',keyboardBody:'Utilisez Tab et Maj+Tab pour parcourir les commandes, puis Entrée ou Espace pour activer les boutons. Échap ferme cette fenêtre. Les commandes de langue et d’affichage restent disponibles dans le jeu. Les animations respectent votre préférence de réduction des mouvements et peuvent être désactivées à tout moment.',progress:'Votre partie reste en place pendant la consultation du guide ou des bonnes pratiques.',practicesTitle:'Bonnes pratiques et sources',practicesIntro:'Explorez les pratiques et les études de cas déjà utilisées dans cette simulation. Examinez le contexte local, les limites et les responsabilités avant de transposer un exemple.',filter:'Parcourir par thème',all:'Tous les thèmes',apply:'Application et limites',practice:'Mettre en pratique',owner:'Acteurs concernés',measure:'Éléments à évaluer',caution:'Limites à considérer',source:'Consulter la source',noCases:'Les sources sont disponibles dans la simulation.',collabTitle:'Faire vivre l’apprentissage civique dans votre communauté',collabBody:'La professeure Svitlana Chukut accueille les propositions de collaboration avec les municipalités, les établissements d’enseignement et les organismes communautaires : ateliers animés, simulations adaptées au contexte local et formations aux services publics.',contact:'Discuter d’une collaboration',studio:'Découvrir le laboratoire',collabNote:'Le point de départ : un besoin pédagogique local, un public et les décisions qu’il doit apprendre à prendre. Le studio peut relier objectifs, activités accessibles, rétroaction et réflexion.'}
 };
 function lang(){return document.documentElement.lang==='fr'?'fr':'en';}
 function text(v){return typeof v==='string'?v:(v&&v[lang()])||'';}
 function esc(v){return String(v||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
 function url(v){return /^https?:\/\//.test(v||'')?esc(v):'#';}
 var nav=document.querySelector('.studio-return'),back=document.getElementById('studio-return');
 if(!nav||!back)return;
 var tools=document.createElement('div');tools.className='studio-tools';
 var identity=document.createElement('div');identity.className='studio-identity';identity.appendChild(back);
 var badge=document.createElement('span');badge.className='studio-city';badge.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-7 7-12A7 7 0 0 0 5 9c0 5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg><span>Ottawa · Canada</span>';identity.appendChild(badge);
 tools.appendChild(identity);
 var actions=document.createElement('div');actions.className='studio-actions';
 ['guide','practices','collaborate','motion'].forEach(function(key){var b=document.createElement('button');b.type='button';b.className='studio-tool'+(key==='practices'?' studio-primary':'');b.dataset.studioControl=key;if(key!=='motion'){b.setAttribute('aria-haspopup','dialog');b.setAttribute('aria-controls','studio-dialog');}actions.appendChild(b);});
 tools.appendChild(actions);nav.appendChild(tools);
 function measureTools(){document.documentElement.style.setProperty('--studio-tools-height',Math.ceil(nav.getBoundingClientRect().height)+'px');}
 if(window.ResizeObserver)new ResizeObserver(measureTools).observe(nav);measureTools();
 var dialog=document.createElement('dialog');dialog.id='studio-dialog';dialog.className='studio-dialog';dialog.setAttribute('aria-labelledby','studio-dialog-title');
 dialog.innerHTML='<div class="studio-dialog-head"><h2 id="studio-dialog-title"></h2><button class="studio-dialog-close" type="button">×</button></div><div class="studio-dialog-body"></div>';document.body.appendChild(dialog);
 var close=dialog.querySelector('.studio-dialog-close'),body=dialog.querySelector('.studio-dialog-body'),title=dialog.querySelector('h2'),opener=null,view=null,lastLang=null;
 var cta=document.createElement('section');cta.className='studio-collaboration';document.body.appendChild(cta);
 var mq=window.matchMedia('(prefers-reduced-motion: reduce)'),override=null,animations=[];
 try{var stored=localStorage.getItem('studio-motion');if(stored==='on'||stored==='off')override=stored==='on';}catch(e){}
 function motion(){return override===null?!mq.matches:override;}
 function setMotion(){document.documentElement.dataset.studioMotion=motion()?'on':'off';var b=actions.querySelector('[data-studio-control="motion"]');b.textContent=T[lang()][motion()?'motionOn':'motionOff'];b.removeAttribute('aria-label');b.setAttribute('aria-pressed',String(motion()));if(!motion()){animations.forEach(function(a){a.cancel();});animations=[];}}
 function catalogue(){return '../'+(lang()==='fr'?'fr/':'')+(location.protocol==='file:'?'index.html':'');}
 function collaboration(){var t=T[lang()];return '<p>'+esc(t.collabBody)+'</p><p>'+esc(t.collabNote)+'</p><div class="studio-collab-actions"><a class="studio-contact" href="mailto:svchukut@gmail.com?subject=Chukut%20Civic%20Skills%20Studio%20%E2%80%94%20Ottawa">'+esc(t.contact)+'</a><a href="'+catalogue()+'#lab-municipalities">'+esc(t.studio)+'</a></div>';}
 function renderDialog(){
  var t=T[lang()];
  if(view==='guide'){title.textContent=t.guideTitle;body.innerHTML='<p>'+esc(t.guideIntro)+'</p><div class="studio-guide-grid">'+t.steps.map(function(s){return '<article><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></article>';}).join('')+'</div><div class="studio-guide-note"><strong>'+esc(t.keyboard)+'</strong><p>'+esc(t.keyboardBody)+'</p><p>'+esc(t.progress)+'</p></div>';}
  else if(view==='collaborate'){title.textContent=t.collabTitle;body.innerHTML=collaboration();}
  else{
   title.textContent=t.practicesTitle;
   var categories=Array.from(new Set(data.cards.map(function(c){return text(c.category);})));var filter=categories.length>1?'<div class="studio-case-filter"><label for="studio-category">'+esc(t.filter)+'</label><select id="studio-category"><option value="">'+esc(t.all)+'</option>'+categories.map(function(c){return '<option value="'+esc(c)+'">'+esc(c)+'</option>';}).join('')+'</select></div>':'';
   body.innerHTML='<p>'+esc(t.practicesIntro)+'</p>'+filter+data.cards.map(function(c){return '<article class="studio-case" data-studio-category="'+esc(text(c.category))+'"><span class="studio-case-category">'+esc(text(c.category))+'</span><h3>'+esc(text(c.title))+'</h3><p>'+esc(text(c.body))+'</p><details><summary>'+esc(t.apply)+'</summary><dl><dt>'+esc(t.practice)+'</dt><dd>'+esc(text(c.apply))+'</dd>'+[['owner','owner'],['measure','measure'],['caution','caution']].map(function(k){return c[k[0]]?'<dt>'+esc(t[k[1]])+'</dt><dd>'+esc(text(c[k[0]]))+'</dd>':'';}).join('')+'</dl></details><a href="'+url(c.url)+'" target="_blank" rel="noopener noreferrer">'+esc(t.source)+' · '+esc(text(c.source))+'</a></article>';}).join('');
   var select=body.querySelector('select');if(select)select.addEventListener('change',function(){body.querySelectorAll('.studio-case').forEach(function(card){card.hidden=Boolean(select.value&&card.dataset.studioCategory!==select.value);});});
  }
  close.setAttribute('aria-label',t.close);
 }
 function open(which,button){view=which;opener=button;renderDialog();if(!dialog.open){if(dialog.showModal)dialog.showModal();else dialog.setAttribute('open','');}document.body.classList.add('studio-dialog-open');close.focus();}
 function dismiss(){if(dialog.close)dialog.close();else dialog.removeAttribute('open');}
 close.addEventListener('click',dismiss);
 dialog.addEventListener('keydown',function(e){
  if(e.key!=='Tab')return;
  var nodes=Array.from(dialog.querySelectorAll('button,a[href],select,summary,input,[tabindex="0"]')).filter(function(n){return n.offsetParent!==null&&!n.disabled;});
  if(!nodes.length)return;
  var first=nodes[0],last=nodes[nodes.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
 });
 dialog.addEventListener('click',function(e){if(e.target===dialog){var r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dismiss();}});
 dialog.addEventListener('close',function(){document.body.classList.remove('studio-dialog-open');if(opener&&opener.isConnected)opener.focus();});
 actions.addEventListener('click',function(e){var b=e.target.closest('[data-studio-control]');if(!b)return;var key=b.dataset.studioControl;if(key==='motion'){override=!motion();try{localStorage.setItem('studio-motion',override?'on':'off');}catch(err){}setMotion();}else open(key,b);});
 cta.addEventListener('click',function(e){var b=e.target.closest('button');if(b)open('practices',b);});
 function sync(){
 document.querySelectorAll('.switch[aria-label],.toolbar[aria-label],.options[aria-label]').forEach(function(el){if(!el.hasAttribute('role'))el.setAttribute('role','group');});
 document.querySelectorAll('.switch[aria-label]').forEach(function(el){el.setAttribute('aria-label',lang()==='fr'?'Choix de la langue':'Language selection');});
 document.querySelectorAll('.toolbar[aria-label]').forEach(function(el){el.setAttribute('aria-label',lang()==='fr'?'Affichage et langue':'Display and language controls');});
 document.querySelectorAll('.progressbar[aria-label]').forEach(function(el){var value=el.firstElementChild?parseFloat(el.firstElementChild.style.width):NaN;if(Number.isFinite(value)){el.setAttribute('role','progressbar');el.setAttribute('aria-valuemin','0');el.setAttribute('aria-valuemax','100');el.setAttribute('aria-valuenow',String(Math.max(0,Math.min(100,value))));}});
 document.querySelectorAll('a.brand[aria-label],#brandHome[aria-label],button[data-value][aria-label]').forEach(function(el){if(el.textContent.trim())el.removeAttribute('aria-label');});var l=lang(),t=T[l];nav.setAttribute('aria-label',t.tools);if(l!==lastLang){lastLang=l;actions.querySelectorAll('[data-studio-control]').forEach(function(b){var key=b.dataset.studioControl;if(key!=='motion')b.textContent=t[key];});cta.innerHTML='<h2>'+esc(t.collabTitle)+'</h2><p>'+esc(t.collabBody)+'</p><div class="studio-collab-actions"><a class="studio-contact" href="mailto:svchukut@gmail.com?subject=Chukut%20Civic%20Skills%20Studio%20%E2%80%94%20Ottawa">'+esc(t.contact)+'</a><button type="button">'+esc(t.practices)+'</button></div>';if(dialog.open)renderDialog();}setMotion();}
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 if(mq.addEventListener)mq.addEventListener('change',setMotion);
 var app=document.getElementById('app'),lastHeading=null,pending=false;
 function reveal(){pending=false;var heading=app&&app.querySelector('h1,#stepTitle,#resultTitle');if(!heading||heading===lastHeading)return;lastHeading=heading;if(!motion()||!heading.animate)return;var scene=heading.closest('.scene-box,.story-card,.card,.hero-panel')||heading.parentElement;animations=animations.filter(function(a){return a.playState==='running';});animations.push(scene.animate([{transform:'translateY(9px)'},{transform:'translateY(0)'}],{duration:250,easing:'cubic-bezier(.2,.7,.3,1)'}));}
 if(app)new MutationObserver(function(){if(!pending){pending=true;requestAnimationFrame(reveal);}}).observe(app,{childList:true,subtree:true});
 // Keep legacy casebooks keyboard accessible alongside the native guide.
 var legacyOpener=null,legacyOverlay=null,inertSiblings=[];
 document.addEventListener('click',function(e){var trigger=e.target.closest('.v2-fab,[data-v2="cb"]');if(trigger)legacyOpener=trigger;},true);
 function syncLegacy(){var overlay=document.querySelector('.v2-overlay');if(overlay===legacyOverlay)return;
  if(legacyOverlay){inertSiblings.forEach(function(n){n.removeAttribute('inert');});inertSiblings=[];document.body.classList.remove('studio-legacy-open');if(legacyOpener&&legacyOpener.isConnected)legacyOpener.focus();}
  legacyOverlay=overlay;
  if(overlay){document.body.classList.add('studio-legacy-open');var heading=overlay.querySelector('h2,h3');if(heading){heading.id=heading.id||'studio-casebook-title';overlay.setAttribute('aria-labelledby',heading.id);}Array.from(document.body.children).forEach(function(n){if(n!==overlay&&!n.hasAttribute('inert')&&!/^(SCRIPT|STYLE|LINK)$/.test(n.tagName)){n.setAttribute('inert','');inertSiblings.push(n);}});}
 }
 new MutationObserver(syncLegacy).observe(document.body,{childList:true});
 document.addEventListener('keydown',function(e){if(dialog.open)return;var overlay=document.querySelector('.v2-overlay');if(!overlay)return;var buttons=Array.from(overlay.querySelectorAll('button,a[href],select,[tabindex="0"]')).filter(function(n){return n.offsetParent!==null;});if(e.key==='Escape'){var exit=overlay.querySelector('[data-v2="close"]');if(exit){e.preventDefault();exit.click();}}if(e.key==='Tab'&&buttons.length){var first=buttons[0],last=buttons[buttons.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
 sync();reveal();
})();
