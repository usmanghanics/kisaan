// Remembers the reader's language. The page works without this file: both
// languages are in it, and the stylesheet shows English when nothing is set.
(function () {
  var root = document.documentElement;
  function set(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang));
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var asked = new URLSearchParams(location.search).get('lang');
  set(asked === 'ur' || asked === 'en' ? asked : saved || 'en');
  document.querySelectorAll('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () { set(b.getAttribute('data-set-lang')); });
  });
})();
