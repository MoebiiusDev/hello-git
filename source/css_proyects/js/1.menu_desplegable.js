const bMore = document.querySelector('#bMore')
const links = document.querySelector('#links')

bMore.addEventListener('click', () => {
    links.classList.toggle('collapse')
})

//*Funcion al apretar el boton cuando la pantalla es tipo movil
const boot = document.querySelector('.boot')
const subdiv = document.querySelector('.subdiv')
const ñam = document.querySelector('.ñamñamñam')

boot.addEventListener('click', () => {
    subdiv.classList.toggle('subi')
    ñam.classList.toggle('activado');
    new Audio('/source/music/ñam ñam ñam.mp3').play();
})

//!easter egg
const contenedor_de_zoruas = document.querySelector('.contenedor_de_zoruas')
const epa = document.querySelectorAll('.epa');
let song_coqueta = document.querySelector(".song_coqueta");
let audioReproduciendo = false;

epa.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        if (!audioReproduciendo) {
            song_coqueta.setAttribute("src", "/source/music/careless-whisper-official-video.mp3");
            song_coqueta.play();
            contenedor_de_zoruas.style.display = 'flex';
            audioReproduciendo = true;
        }
    });
});

const lamentoso = document.querySelector("#lamentoso");
const logo = document.querySelectorAll(".logo"); // Reemplaza con el ID de tu elemento
const nevada_effect = document.querySelector(".nevada_effect")
let lamentosoPlay = false;
let timeoutId;
let currentVolume = 0.1; // Volumen inicial (puede ser ajustado según tus necesidades)
const maxVolume = 1; // Volumen máximo

logo.forEach((elemento2) => {
    elemento2.addEventListener('mouseover', () => {
        timeoutId = setTimeout(() => {
            document.body.style.filter = "grayscale(100%)";
            document.body.style.transition = "all 2s";

            if (!lamentosoPlay) {
                lamentosoPlay = true;
            }
            if (currentVolume < maxVolume) {
                currentVolume += 0.3;
                lamentoso.volume = currentVolume;
                lamentoso.play();
            }

            // La siguiente función se ejecutará después de 5 segundos
            setTimeout(() => {
                nevada_effect.style.display = 'flex';
            }, 20000);
        }, 5000);

        elemento2.addEventListener("mouseout", () => {
            // Cancela el temporizador si el mouse sale del elemento antes de los 2 segundos
            clearTimeout(timeoutId);
            currentVolume = 0.2;
            lamentoso.volume = currentVolume;
        });
    });
});




