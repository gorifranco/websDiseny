window.onload = () => {
    let image = document.getElementById('imatgeHeader');

    window.addEventListener('scroll', function() {
        let scrollPercentage = document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight);

        if (isNaN(scrollPercentage)) {
            console.error("Error: scrollPercentage es NaN");
            console.log("document.documentElement.scrollTop:", document.documentElement.scrollTop);
            console.log("document.documentElement.scrollHeight:", document.documentElement.scrollHeight);
            console.log("window.innerHeight:", window.innerHeight);
        } else {
            let luminosity = 90 - scrollPercentage * 60;
            console.log("scrollPercentage:", scrollPercentage);
            console.log("luminosity:", luminosity);

            image.style.filter = 'brightness(' + luminosity + '%)';
        }
    });
}