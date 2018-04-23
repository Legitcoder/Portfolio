
let header = document.querySelector('.header');
let socialSVGS = document.querySelectorAll('.social a svg');
let navigationLinks = document.querySelectorAll('.navigation .navigation__link');
let gradientBlue = "linear-gradient(to right bottom, #011936 10%, #132356 95%)";
let experimentGradient = "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"



document.addEventListener("DOMContentLoaded", (e) => {
    let concreteJungle = {"mp4": "img/Concrete_Jungle/Concrete_Jungle.mp4", "ogv": "img/Concrete_Jungle/Concrete_Jungle.ogv", "webm": "img/Concrete_Jungle/Concrete_Jungle.webm" };
    let loveCoding = {"mp4": "img/Love-Coding/Love-Coding.mp4", "ogv": "img/Love-Coding/Love-Coding.ogv", "webm": "img/Love-Coding/Love-Coding.webm" };
    let mtaTrain = {"mp4": "img/Under/Under.mp4", "ogv": "img/Under/Under.ogv", "webm": "img/Under/Under.webm" };
    let undergroundTraffic = {"mp4": "img/Underground-Traffic/Underground-Traffic.mp4", "webm": "img/Underground-Traffic/Underground-Traffic.webm" }
    let helloWorld = {"mp4": "img/Hello-World/Hello-World.mp4", "webm": "img/Hello-World/Hello-World.webm", "ogv": "img/Hello-World/Hello-World.ogv" }
    let videos = new Array(concreteJungle, loveCoding, undergroundTraffic, helloWorld, mtaTrain);
    let coverVideo = document.querySelector('.bg-video__content');
    let mp4Src = document.querySelector('.video__content__mp4');
    let ogvSrc = document.querySelector('.video__content__ogv');
    let webmSrc = document.querySelector('.video__content__webm');
    
    let currentVideo = 0;

    let coverShowCase = () => {
        coverVideo.pause();
        currentVideo++;
        if (currentVideo >= videos.length) {
            currentVideo = 0;
        }
        mp4Src.src = videos[currentVideo].mp4;
        ogvSrc.src = videos[currentVideo].ogv;
        webmSrc.src = videos[currentVideo].webm;
        coverVideo.load();
        coverVideo.play();
    }
       setInterval(coverShowCase, 10000);
  });

window.addEventListener('scroll', (e)=> {
    let positionY = window.scrollY;
    if (positionY >= 90) {
        header.style.background = "#1B1B1B";
        header.style.height = "10vh";
    } else {
        header.style.height = "15vh";
        header.style.background = "transparent";
    }
});

