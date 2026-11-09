/* ================================================================
   THEME INITIALISATION - runs in <head> before first paint
   ================================================================
   Sets the initial light/dark theme on <html data-theme> from
   the saved manual choice (localStorage "sc-theme"), otherwise
   from the system preference, and arms the reveal-on-scroll
   safety net. This must load synchronously in <head>; it used
   to be an inline script in index.html.
   ================================================================ */
(function(){var t="light";try{var s=localStorage.getItem("sc-theme");if(s==="light"||s==="dark"){t=s;}else if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches){t="dark";}}catch(e){}document.documentElement.setAttribute("data-theme",t);document.documentElement.classList.add("js");setTimeout(function(){if(!window.__SC_REVEAL_OK){document.documentElement.classList.add("rv-safe");}},3500);})();
