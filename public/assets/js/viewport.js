!(function () {
  var viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    var value = window.outerWidth > 375 ? "width=device-width,initial-scale=1.0" : "width=375";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  switchViewport();
  window.addEventListener("resize", switchViewport);
})();
