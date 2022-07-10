const serviceSection = document.querySelector('.service-container');

function changeSection() {
    if (document.documentElement.clientWidth <= 600) {
        // service area
        changeClass.flexCenterCenterRow(serviceSection);

    }
    if (document.documentElement.clientWidth > 600) {
        // service area
        changeClass.flexCenterCenter(serviceSection);

    }
}


window.addEventListener("resize", changeSection); // event listener for resize
changeSection(); // call function changeHero for first time & when page load