(function(){
 'use strict';
 document.querySelectorAll('.bio-contents-group a').forEach(function(a){
  a.addEventListener('click',function(){document.querySelectorAll('.bio-contents-group').forEach(function(d){d.open=false;});});
 });
})();
