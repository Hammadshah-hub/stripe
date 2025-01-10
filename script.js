window.__capturedErrors = [];
window.onerror = function (message, url, line, column, error) { __capturedErrors.push(error); };
window.onunhandledrejection = function(evt) { __capturedErrors.push(evt.reason); }
new MutationObserver(e=>{for(const d of e)if(d.addedNodes)for(const e of d.addedNodes)e instanceof HTMLLinkElement&&void 0!==e.dataset.jsLazyStyle&&e.addEventListener("load",function(){this.media="all"})}).observe(document.head,{childList:!0}),document.addEventListener("DOMContentLoaded",()=>{for(const e of document.querySelectorAll("link[data-js-lazy-style]"))"all"!==e.media&&(e.media="all")});
(() => {
  function displayContentForState(state) {
    document
      .querySelectorAll(`template[data-mount-on-state="${state}"]`)
      .forEach((template) => document
        .querySelectorAll(template.dataset.mountTarget)
        .forEach((target) => {
          while (target.firstChild) target.removeChild(target.firstChild);
          target.appendChild(template.content.cloneNode(true));
        }));
  }
  const siteAuthCookie = document.cookie.match(/(?:^|;) *site-auth=([^;]+);/);
  const hasLoggedInCookie = document.cookie.match(/(?:^|;) *__Secure-has_logged_in=([^;]+);/);

  const isLoggedIn = siteAuthCookie && siteAuthCookie[1] === '1';
  const hasLoggedIn = hasLoggedInCookie && hasLoggedInCookie[1];

  if (isLoggedIn) {
    displayContentForState('logged-in');
  } else if (hasLoggedIn) {
    displayContentForState('logged-out-existing');
  } else {
    displayContentForState('logged-out-new');
  }
})();



