/* W2b pro — local admin tool link, mirroring the art site's own
   js/legal-footer.js convention: appended to the existing footer links
   row, same muted styling (inherits .foot a from css/site.css), no
   nav/menu entry. http://127.0.0.1:4849 only ever resolves on
   Guillaume's own machine while .admin/server.js is running; for every
   other visitor it's just a link that goes nowhere. */
(function () {
  function mount() {
    var row = document.querySelector('.foot > div');
    if (!row) return;
    var a = document.createElement('a');
    a.href = 'http://127.0.0.1:4849/';
    a.target = '_blank';
    a.rel = 'noopener';
    a.title = 'Local admin tool';
    a.textContent = 'admin';
    row.appendChild(a);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
