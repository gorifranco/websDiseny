document.addEventListener('DOMContentLoaded', lazyLoad);
window.onload = () => {
    let image = document.getElementById('imatgeHeader');

    window.addEventListener('scroll', function () {
        let scrollPercentage = document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight);

        let luminosity = 100 - (scrollPercentage) * 200;
        image.style.filter = 'brightness(' + luminosity + '%)';

    });
}

function lazyLoad() {
    const lazyImages = document.getElementsByTagName("img");

    const inView = (changesArray) => {
        changesArray.forEach((change) => {
            if (change.isIntersecting) {
                const targetImage = change.target;
                console.log(change)
                if (targetImage.className === "imatge2") {
                    targetImage.style.animation = "aparecer_i-d 1s forwards";
                }
                if (targetImage.className === "imatge1") {
                    targetImage.style.animation = "aparecer_d-i 1s forwards";
                }
            }
        });
    };

    const config = {

        rootMargin: '0px', // Margen cero
        threshold: 0.5 // Carga cuando el 20% de la imagen está visible
    };

    const observer = new IntersectionObserver(inView, config);

    for (let lazyImage of lazyImages) {
        observer.observe(lazyImage)
    }
}
