const zoruaPunch = document.querySelector("#zorua-finisher");
const blackPage = document.querySelector("#black-page");
const miVideo = document.getElementById('miVideo');
let isterec = document.querySelector(".leyli")
let finisher = document.querySelector(".finisher")

isterec.addEventListener("dblclick", () => {
    blackPage.style.display = "block";
    finisher.setAttribute("src", "/source/music/finisher.mp3");
    finisher.play();

    setTimeout(function fontWhiteOcult() {
        zoruaPunch.style.display = "block";
    }, 2500),
        setTimeout(function songEncounter() {
            new Audio("/source/music/finisherx2.mp3").play();
            zoruaPunch.style.display = "none";

        }, 3400),
        setTimeout(function videEncounter() {
            miVideo.style.display = "block";
            miVideo.play();
        }, 3150),
        setTimeout(function fataEncounter() {
            new Audio("/source/music/fataliti.mp3").play();
            miVideo.load();
            miVideo.style.display = "none";
        }, 5000)
});





// setTimeout(function fontWhiteOcult() {
//     document.getElementById('zoruaPunch').style.display = "block";
//     setTimeout(function songEncounter() {
//         new Audio("music/nuclearBomb.mp3").play();
//     }, 1400)
// }, 3000)


// setTimeout(function songEncounter() {
//     window.close("isterec.html");
// }, 5000)