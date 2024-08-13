const egg = document.querySelector(".easter")
const div = document.createElement("div")
const div2 = document.createElement("divwhite")
const div3 = document.createElement("divwhite2")




const cards = document.querySelector(".cards")
const nav_primary_bottom = document.querySelector(".nav_primary_bottom")
const container_asgore = document.querySelector(".container_asgore")
const container_asgore2 = document.querySelector('.container_asgore2')
const chat = document.querySelector('.chat')
const bottom_animation = document.querySelector('.bottom_animation')
const ul_asg = document.querySelector(".ul_asg")
const li_asgElements = document.querySelectorAll('.li_asg');






egg.addEventListener('click', () => {

    egg.style.backgroundColor = "#202124"
    document.body.addEventListener('dblclick', () => {

        document.body.appendChild(div2)
        div2.classList.add("divwhite");
        document.body.appendChild(div3)
        div3.classList.add("divwhite2");

        const divwhite = document.querySelector(".divwhite")
        const divwhite2 = document.querySelector(".divwhite2")


        cards.style.display = "none";
        nav_primary_bottom.style.display = "none";
        container_asgore.style.display = 'flex';
        new Audio('/source/music/asgore_intro (mp3cut.net).mp3').play();


        setTimeout(() => {
            divwhite.style.display = "flex";
        }, 270);
        setTimeout(() => {
            divwhite.style.display = "none";
        }, 300);
        setTimeout(() => {
            container_asgore.style.display = 'none';

        }, 3600);
        setTimeout(() => {
            divwhite.style.display = "flex";
        }, 1430);
        setTimeout(() => {
            divwhite.style.display = "none";
            divwhite2.style.display = "flex";

        }, 4000);
        setTimeout(() => {
            new Audio('/source/music/undertale-asgore-theme.mp3').play();

        }, 5000);

        setTimeout(() => {
            divwhite2.style.display = "none";
            container_asgore2.style.display = "flex";
            chat.style.display = "flex";
            bottom_animation.style.display = "flex";
            ul_asg.style.display = "flex";

        }, 6200);


        document.body.appendChild(div)
        div.classList.add("bkBlack");
        egg.style.display = 'none';
    });
})

li_asgElements.forEach((element) => {
    element.addEventListener('mouseover', () => {
        new Audio('/source/music/sound-button.mp3').play();
    });
});