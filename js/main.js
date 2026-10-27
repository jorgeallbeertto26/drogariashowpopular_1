/* Drogaria Show Popular — JavaScript puro, sem dependências, sem rastreamento. */
(function () {
  "use strict";

  /* Ano do rodapé */
  try {
    var ano = document.getElementById("ano");
    if (ano) ano.textContent = String(new Date().getFullYear());
  } catch (e) { /* mantém o ano estático do HTML */ }

  /* Menu móvel */
  try {
    var toggle = document.querySelector(".menu-toggle");
    var menu = document.getElementById("menu");
    if (toggle && menu) {
      var desktop = window.matchMedia("(min-width: 960px)");

      var setOpen = function (open, returnFocus) {
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        menu.classList.toggle("is-open", open);
        if (!open && returnFocus) toggle.focus();
      };

      toggle.addEventListener("click", function () {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
      });

      menu.addEventListener("click", function (ev) {
        if (ev.target.closest("a")) setOpen(false);
      });

      document.addEventListener("keydown", function (ev) {
        if (ev.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") setOpen(false, true);
      });

      var onChange = function () { if (desktop.matches) setOpen(false); };
      if (desktop.addEventListener) desktop.addEventListener("change", onChange);
      else if (desktop.addListener) desktop.addListener(onChange);
    }
  } catch (e) {
    /* Em caso de erro, o menu continua acessível pelos links âncora. */
    var m = document.getElementById("menu");
    if (m) m.classList.add("is-open");
  }

  /* Mapa: só carrega o iframe do Google depois do clique (nada de terceiros antes disso) */
  try {
    var box = document.getElementById("map-box");
    var btn = document.getElementById("load-map");
    var msg = document.getElementById("map-msg");
    if (box && btn && msg) {
      btn.addEventListener("click", function () {
        var src = box.getAttribute("data-map-src");
        if (!src) return;
        var frame = document.createElement("iframe");
        frame.src = src;
        frame.title = "Mapa com a localização da Drogaria Show Popular, Rua José Hipólito de Oliveira, 70, Centro, Nova Iguaçu";
        frame.loading = "lazy";
        frame.referrerPolicy = "no-referrer-when-downgrade";
        frame.setAttribute("allowfullscreen", "");
        box.appendChild(frame);
        msg.hidden = true;
      });
    }
  } catch (e) {
    /* Se falhar, o botão "Ver rota no Google Maps" continua funcionando. */
  }
})();
