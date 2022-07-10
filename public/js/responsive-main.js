const topHeroSection = document.querySelector('.top-hero-section');
const btnContainer = document.querySelector('.btn-container');
const serviceTitle = document.querySelector('.service .title-service');
const benefiteArea = document.querySelector('.benefit');
const contentBenefit = benefiteArea.querySelector('.content');
const prosesTitle = document.querySelector('.proses .title-proses');

function changeHero() {
    if (document.documentElement.clientWidth <= 600) {
        // hero section top
        changeClass.flexTopCenterRow(topHeroSection);

        // btn container in hero section
        changeClass.flexCenterCenter(btnContainer);

        // service area
        changeClass.flexCenterCenterRow(serviceTitle);

        // proses area
        changeClass.flexCenterCenterRow(prosesTitle);
    }
    if (document.documentElement.clientWidth > 600) {
        // hero section top
        changeClass.flexBetweenTop(topHeroSection);

        // btn container in hero section
        changeClass.flexLeftCenter(btnContainer);

        // service area
        changeClass.flexBetweenCenter(serviceTitle);

        // proses area
        changeClass.flexBetweenCenter(prosesTitle);
    }
}


window.addEventListener("resize", changeHero); // event listener for resize
changeHero(); // call function changeHero for first time & when page load