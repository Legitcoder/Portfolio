// let socialSVGS = document.querySelectorAll('.social a svg');
// let navigationLinks = document.querySelectorAll('.navigation .navigation__link');
// let gradientBlue = "linear-gradient(to right bottom, #011936 10%, #132356 95%)";
// let experimentGradient = "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"


document.addEventListener("DOMContentLoaded", (e) => {

       let copyRight = document.querySelector('.footer > p');
       copyRight.innerText = `Copyright © ${(new Date).getFullYear()} Moin Uddin`




       //Navigation Scroll Animation

       let projectsLink = document.querySelector('.navigation__link--projects');
       let contactLink = document.querySelector('.navigation__link--contact');

       function scrollIt(destination, duration = 200, easing = 'linear', callback) {

        const easings = {
          linear(t) {
            return t;
          },
          easeInQuad(t) {
            return t * t;
          },
          easeOutQuad(t) {
            return t * (2 - t);
          },
          easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          },
          easeInCubic(t) {
            return t * t * t;
          },
          easeOutCubic(t) {
            return (--t) * t * t + 1;
          },
          easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          },
          easeInQuart(t) {
            return t * t * t * t;
          },
          easeOutQuart(t) {
            return 1 - (--t) * t * t * t;
          },
          easeInOutQuart(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
          },
          easeInQuint(t) {
            return t * t * t * t * t;
          },
          easeOutQuint(t) {
            return 1 + (--t) * t * t * t * t;
          },
          easeInOutQuint(t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
          }
        };
      
        const start = window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
      
        const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
        const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset) - 90;
      
        if ('requestAnimationFrame' in window === false) {
          window.scroll(0, destinationOffsetToScroll);
          if (callback) {
            callback();
          }
          return;
        }
      
        function scroll() {
          const now = 'now' in window.performance ? performance.now() : new Date().getTime();
          const time = Math.min(1, ((now - startTime) / duration));
          const timeFunction = easings[easing](time);
          window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
      
          if (window.pageYOffset === destinationOffsetToScroll) {
            if (callback) {
              callback();
            }
            return;
          }
      
          requestAnimationFrame(scroll);
        }
      
        scroll();
      }

      projectsLink.addEventListener('click', () => scrollIt(document.querySelector('#projects'), 500));

      contactLink.addEventListener('click', () => scrollIt(document.querySelector('#contact'), 500));




  });

window.addEventListener('scroll', (e)=> {
    let header = document.querySelector('.header');
    let positionY = window.scrollY;
    if (positionY >= 90) {
        header.style.background = "#1B1B1B";
        header.style.height = "10vh";
    } else {
        header.style.height = "15vh";
        header.style.background = "transparent";
    }
});

