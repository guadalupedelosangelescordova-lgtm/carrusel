// ================================
// MENSAJE DE RECUERDO
// ================================

const botonRecuerdo = document.getElementById("botonRecuerdo");
const mensaje = document.getElementById("mensaje");

const recuerdos = [
    "💕 Las mejores amigas siempre terminan riéndose de cualquier cosa.",
    "😂 Un día normal con nosotras nunca es realmente normal.",
    "✨ Algunos momentos duran segundos, pero los recuerdos duran años.",
    "🌷 La escuela nos dejó tareas... y también muchos recuerdos.",
    "💗 Juntas hacemos que cualquier día sea más divertido."
];

let numeroRecuerdo = 0;

botonRecuerdo.addEventListener("click", function() {

    mensaje.textContent = recuerdos[numeroRecuerdo];

    numeroRecuerdo++;

    if (numeroRecuerdo >= recuerdos.length) {
        numeroRecuerdo = 0;
    }

});


// ================================
// CARRUSEL
// ================================

const foto = document.getElementById("foto");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");


// Puedes agregar más fotografías aquí.
// Si solamente tienes una, déjalo así.

const fotos = [
    "imagen.j.jpeg",
    "imagen.jnp.jpeg"
];

let fotoActual = 0;


function cambiarFoto(indice) {

    foto.classList.add("cambiar");

    setTimeout(function() {

        fotoActual = indice;

        foto.src = fotos[fotoActual];

        foto.classList.remove("cambiar");

    }, 300);

}


siguiente.addEventListener("click", function() {

    let nuevaFoto = fotoActual + 1;

    if (nuevaFoto >= fotos.length) {
        nuevaFoto = 0;
    }

    cambiarFoto(nuevaFoto);

});


anterior.addEventListener("click", function() {

    let nuevaFoto = fotoActual - 1;

    if (nuevaFoto < 0) {
        nuevaFoto = fotos.length - 1;
    }

    cambiarFoto(nuevaFoto);

});


// ================================
// VIDEO
// ================================

const video = document.getElementById("video");
const botonVideo = document.getElementById("botonVideo");


botonVideo.addEventListener("click", function() {

    if (video.paused) {

        video.play();

        botonVideo.textContent = "⏸️ Pausar video";

    } else {

        video.pause();

        botonVideo.textContent = "▶️ Reproducir video";

    }

});


// ================================
// BOTÓN SORPRESA
// ================================

const botonSorpresa = document.getElementById("botonSorpresa");
const sorpresa = document.getElementById("sorpresa");


botonSorpresa.addEventListener("click", function() {

    sorpresa.classList.toggle("mostrar");

    if (sorpresa.classList.contains("mostrar")) {

        botonSorpresa.textContent = "💗 Ocultar mensaje";

    } else {

        botonSorpresa.textContent = "🎁 ¡Presióname!";

    }

});