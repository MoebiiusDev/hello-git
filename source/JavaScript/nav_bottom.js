
//*Funcion al apretar el boton cuando la pantalla es tipo movil
const button_m = document.querySelector('.button_movile')
const sub_nav = document.querySelector('.sub_nav')
const button_click = document.querySelector('.button_click')

button_m.addEventListener('click', () => {
    sub_nav.classList.toggle('subi')
    button_click.classList.toggle('activado');
    new Audio('/source/music/boom-meme-sound-hd.mp3').play();
})


