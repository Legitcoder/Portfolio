
let header = document.querySelector('.header');
let socialSVGS = document.querySelectorAll('.social a svg');
let navigationLinks = document.querySelectorAll('.navigation .navigation__link');
let gradientBlue = "linear-gradient(to right bottom, #011936 10%, #132356 95%)";


window.addEventListener('scroll', (e)=> {
    let positionY = window.scrollY;
    if (positionY >= 90) {
        header.style.background = "#132356";
        header.style.height = "10vh";
        socialSVGS.forEach( svg => svg.style.fill = "#fff");
        navigationLinks.forEach( navLink => navLink.style.color = "#fff");
    } else {
        header.style.height = "13vh";
        socialSVGS.forEach( svg => svg.style.fill = "#000");
        header.style.background = "transparent";
        navigationLinks.forEach( navLink => navLink.style.color = "#000");
    }
});

