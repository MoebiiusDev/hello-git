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
