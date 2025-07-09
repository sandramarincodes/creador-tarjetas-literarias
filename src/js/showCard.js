"use strict";

const sectionCard = document.querySelector(".js_card");

if (sectionCard) {
  const params = new URLSearchParams(window.location.search);
  const uuid = params.get("id");
  

  //Petición GET al servidor

  fetch(`https://dev.adalab.es/api/info/${uuid}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        paintCard(data.data);
      } else {
        console.error("Error al obtener la tarjeta:", data.error);
      }
    })
    .catch((error) => {
      console.error("Error en la petición:", error);
    });
}

function paintCard(data) {
  sectionCard.innerHTML = `
  <article class="cardPreview ${data.field7}">
      <h2 class="card__title">${data.field2}</h2>               <!-- Título -->
      <p class="card__author">${data.field3}</p>                <!-- Autor -->
      <p class="card__gender">${data.field4}</p>                <!-- Género -->
      <p class="card__stars">${"⭐".repeat(
        data.field5
      )}</p>     <!-- Valoración -->
      <img class="card__image profile__image" src="${
        data.photo
      }" alt="Imagen del libro o recomendación"/> <!-- Imagen -->
      <p class="card__user">Recomendado por: ${data.field6}</p> <!-- Usuario -->
    </article>
  `;
}
