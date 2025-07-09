const tarjeta = document.querySelector('.js_cardPreview');
const fondoRadios = document.querySelectorAll(".js-fondo-radio");

fondoRadios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    const fondoSeleccionado = event.target.value;

    // Quitar clases antiguas y aplicar la nueva
    tarjeta.classList.remove(
      "romance",
      "misterio",
      "poesia",
      "fantasia",
      "cienciaficcion"
    );
    tarjeta.classList.add(fondoSeleccionado);
  });
});
