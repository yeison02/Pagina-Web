/*Codigo para que eparezca el botón*/
window.onscroll = function () {
  var boton = document.getElementById("gotop");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    boton.style.bottom = "130px";
  } else {
    boton.style.bottom = "-50px";
  }
};
/*codigo para desplazarse al inicio al hacer click sobre el boton*/
var boton = document.getElementById("gotop");
boton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
