window.onload = () => {
    let init = 446
    let stick = false;
    const div = document.getElementsByClassName('divNav')[0]
    const imHead = document.getElementById("imatgeHeader")
    window.addEventListener("scroll", function () {
        if (!stick) {
            if (div.getBoundingClientRect().y < 20) {
                div.style.position = "fixed";
                div.style.top = "0"
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
    let contador = 0;
    const imatges = document.querySelectorAll('#carrouselImg img')

    setInterval(canviarImatge, 3000)

    function canviarImatge() {
        imatges[contador].style.display = "none";
        if (++contador === imatges.length) contador = 0
        imatges[contador].style.display = "flex"
    }
}
