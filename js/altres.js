window.onload = () => {
    const gridItems = document.getElementsByClassName("gridItem")
    for (const gridItem of gridItems) {
        gridItem.addEventListener("click", function () {
            if(!gridItem.firstElementChild.style.transform){
                gridItem.firstElementChild.style.transform = "rotateY(180deg)";
            }else{
                gridItem.firstElementChild.style.transform = "rotateY(-180deg)";
            }
            canviarFoto(gridItem.firstElementChild)
        });
    }
}

function canviarFoto(img){
    setTimeout(function (){
        if(img.style.display === "none"){
            img.style.display = ""
        }else{
            img.style.display = "none"
        }

    }, 150)
}