const inputImage = document.querySelector(".js__profile-upload-btn");
const errorMessage = document.querySelector(".js_imageError");
const imagePreview = document.querySelector(".js__profile-preview");

// evento que escucha el cambio, cuando el usuario selecciona una imagen, se ejecuta el código dentro.
if (inputImage) {
  inputImage.addEventListener("change", (event) => {
    const file = event.target.files[0]; //Coge el archivo que el usuario subió.
    if (!file) return;

    // define el tamaño máximo: 5KB y el formato válido.
    const maxSize = 5 * 1024;
    const validTypes = ["image/jpeg", "image/png", "image/gif"];

    // Si la imagen es demasiado grande o no es del formato válido, muestra un mensaje de error.
    if (file.size > maxSize) {
      errorMessage.textContent =
        "❌ Tu imagen es demasiado grande. Selecciona una con máximo 5KB.";
      inputImage.value = "";
      window.photo = null;
      imagePreview.style.backgroundImage = "url('./images/Image_example.jpg')";
      return;
    }

    if (!validTypes.includes(file.type)) {
      errorMessage.textContent = "❌ Formato no válido. Usa JPG, PNG o GIF.";
      inputImage.value = "";
      window.photo = null;
      imagePreview.style.backgroundImage = "url('./images/Image_example.jpg')";
      return;
    }

    const reader = new FileReader(); // Crea un nuevo FileReader para leer el archivo seleccionado. Un FileReader es un objeto que viene incorporado en JavaScript y sirve para leer archivos locales que el usuario sube desde su dispositivo.
    reader.onload = function () {
      const img = new Image(); // Crea un nuevo objeto Image para cargar la imagen.
      img.onload = () => {
        // Cuando la imagen se carga correctamente, se ejecuta esta función.
        errorMessage.textContent = "";
        window.photo = reader.result; // Guarda la imagen en la variable global window.photo
        imagePreview.style.backgroundImage = `url('${reader.result}')`; // Muestra la imagen en el preview
      };
      img.onerror = () => {
        // Si hay un error o la imagen esta rota, se ejecuta el mensaje de error.
        errorMessage.textContent =
          "❌ Tu imagen no se puede usar. El archivo está dañado.";
        inputImage.value = "";
        window.photo = null;
        imagePreview.style.backgroundImage = // Muestra una imagen de ejemplo si hay un error.
          "url('./images/Image_example.jpg')";
      };
      img.src = reader.result; //Le damos a la imagen el resultado del FileReader, que es la imagen en formato base64, que significa que convierte cualquier archivo (aunque sea una imagen) en una cadena larga de letras, números y símbolos que se puede leer como texto.
    };
    reader.readAsDataURL(file); //lee el archivo que subió el usuario y lo convierte a base64.
  });
}
