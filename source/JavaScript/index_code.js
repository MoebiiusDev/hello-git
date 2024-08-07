// Esto hace que el tema se reinicie al apretarse nuevamente, no se repite!
let boton = document.querySelector("#nex");
let audioEtiqueta = document.querySelector(".nexmu");
boton.addEventListener("click", () => {
    audioEtiqueta.setAttribute("src", "/source/music/twiddlefinger-instrumental.mp3");
    audioEtiqueta.play();
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