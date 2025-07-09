window.photo = ""; // creamos variable global para guardar lector.result y luego usarla POST (y en cualquier archivo js)

const inputImagen = document.querySelector(".js__profile-upload-btn");
const profilePreview = document.querySelector(".js__profile-preview"); // Miniatura
const profileImage = document.querySelector(".js__profile-image"); // Imagen grande

const lector = new FileReader();

function updateImagePreview() {
  profilePreview.style.backgroundImage = `url(${lector.result})`;
  console.log("Imagen cargada:", lector.result);
}

function mostrarImagen() {
  window.photo = lector.result;
  profileImage.style.backgroundImage = `url(${window.photo})`;
  profileImage.style.backgroundSize = "cover";
  profileImage.style.backgroundPosition = "center";
  profileImage.style.backgroundRepeat = "no-repeat";

  updateImagePreview();
}

function readFile(evento) {
  const file = evento.currentTarget.files[0];
  if (file) {
    lector.addEventListener("load", mostrarImagen, { once: true });
    lector.readAsDataURL(file);
  } else {
    profileImage.style.backgroundImage = "";
    profilePreview.style.backgroundImage = "";
  }
}

if (inputImagen) {
  inputImagen.addEventListener("change", readFile);
}