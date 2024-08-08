// Esto hace que el tema se reinicie al apretarse nuevamente, no se repite!
let boton = document.querySelector("#nex");
let audioEtiqueta = document.querySelector(".nexmu");
boton.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "/source/music/twiddlefinger-instrumental.mp3");
    audioEtiqueta.play();
});

const isterec1 = document.querySelector(".isterec1");
const tinkycream = document.querySelector(".tinkycream");
let accionEjecutada = false;

isterec1.addEventListener("click", () => {
    if (!accionEjecutada) {
        setTimeout(function tinkyScream() {
            var audio = new Audio("/source/music/twinky-scream.mp3");
            audio.volume = 1;
            audio.play();
            tinkycream.style.display = "block";
            accionEjecutada = true;
        }, 5000);

        setTimeout(function window_reload() {
            tinkycream.style.display = "none";
            isterec1.classList.replace("isterec1", "normal");
            isterec1.textContent = "Zorua is not Crepy"
            isterec1.title = "Zorua is not Crepy"

        }, 6000);
    }
});

//Esto reproduce pero al apretarlo dos veces suena nuevamente
// const nex = document.querySelector('#nex');
// nex.addEventListener('click', () => {
//     let lamento = new Audio('/source/music/twiddlefinger-instrumental.mp3');
//     lamento.play();
// })

// Esto hace que al apretar la pantalla de la pagina en cualquier lado se reproduzca la música
// var isAudioPlayed = false;
// function playAudio() {
//     isAudioPlayed = true;
//     const myAudio = document.getElementById("my-audio");
//     myAudio.play();
// }
// document.body.onclick = () => {
//     if (isAudioPlayed) return;
//     playAudio();
// }