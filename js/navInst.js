window.onload = () => {
    let init = 446
    let stick = false;
    const div = document.getElementsByClassName('divNav')[0]
    const imHead = document.getElementById("imatgeHeader")
    window.addEventListener("scroll", function () {
        if (!stick) {
            if (div.getBoundingClientRect().y < 20) {
                div.style.position = "fixed";
                div.style.top = "16px"
                stick = true
            }
        } else {
            console.log(imHead.getBoundingClientRect().y)
            if (imHead.getBoundingClientRect().y > -410) {
                div.style.position = "static";
                stick = false
            }
        }
    })

    //caarrousel

    document.getElementById("carrouselImg")
    const h2 = document.querySelector("#carrouselTxt h2")
    const txt = document.querySelector("#carrouselTxt p")
    let contador = 0;
    const imatges = document.querySelectorAll('#carrouselImg img')

    setInterval(canviarImatge, 3000)

    function canviarImatge() {
        imatges[contador].style.display = "none";
        if (++contador === imatges.length) contador = 0
        imatges[contador].style.display = "flex"
        canviarText()
    }
    function canviarText(){
        h2.innerText = titols[contador]
        txt.innerText = texts[contador]
    }
}

const titols = ["CAMP DE GOLF", "SPA", "CAMP DE TENIS", "GIMNAS"]

const texts = [
    "Experimenta la grandesa del nostre camp de golf de campionat, envoltat de paisatges espectaculars." +
    " Oferim un disseny desafiador per a jugadors de tots els nivells. Gaudeix d'hores de joc emocionant" +
    " mentre respires aire fresc i t'immerses en un entorn natural incomparable.",
    "Regala't un moment de pau i rejuveniment al nostre spa exclusiu. Submergeix-te en un ambient serè, on la" +
    " tranquil·litat i el benestar es fusionen. Els nostres tractaments de primera classe, teràpies revitalitzants" +
    " i personal atent et permetran desconnectar de l'estrès i revitalitzar la teva ment, cos i esperit.",
    "Vine i gaudeix dels nostres excepcionals camps de tennis, dissenyats per satisfer les necessitats dels" +
    " amants del tennis de totes les edats i nivells. Les nostres espaioses i ben cuidades instal·lacions " +
    "t'ofereixen l'oportunitat de millorar les teves habilitats, participar en emocionants partits o simplement" +
    " gaudir d'una tarda activa i divertida.",
    "El nostre gimnàs d'avantguarda està equipat amb tot el que necessites per a la teva rutina d'exercici ideal." +
    " Des de màquines de última generació fins a una varietat de classes dirigides per entrenadors experts, et" +
    " proporcionem l'entorn perfecte per aconseguir les teves metes de fitness. Manté't actiu i en forma mentre" +
    " gaudeixes d'unes vacances plenes i saludables."
]

