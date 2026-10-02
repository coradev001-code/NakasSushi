// Sombra no cabeçalho ao rolar e ano do rodapé
(function () {
  var header = document.querySelector('header');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();
