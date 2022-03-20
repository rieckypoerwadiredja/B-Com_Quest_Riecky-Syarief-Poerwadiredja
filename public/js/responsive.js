// -------------------------- HERO SECTION ---------------------------------
let browserWidth = document.documentElement.clientWidth;
const topHeroSection = document.querySelector('.top-hero-section');
const btnContainer = document.querySelector('.btn-container');
const serviceTitle = document.querySelector('.service .title-service');
const benefiteArea = document.querySelector('.benefit');
const contentBenefit = benefiteArea.querySelector('.content');
const prosesTitle = document.querySelector('.proses .title-proses');

const arrayClass = [
    'flex-between-center',
    'flex-between-top',
    'flex-center-center',
    'flex-left-center',
    'flex-evenly-center',
    'flex-center-center-row',
    'flex-evenly-center-row',
    'flex-left-center-row',
    'flex-top-center-row',
    'flex-left-between-row',
    'flex-center-center-wrap',
    'flex-center-center-row-reverse'
];

// function to change class
class ChangeClass {
    flexBetweenTop(e) {
        arrayClass.forEach(item => {
            if (e.classList.contains(item)) {
                e.classList.remove(item);
                e.classList.add('flex-between-top');
            }
        });
    }

    flexBetweenCenter(e) {
        arrayClass.forEach(item => {
            if (e.classList.contains(item)) {
                e.classList.remove(item);
                e.classList.add('flex-between-center');
            }
        });
    }

    flexCenterCenter(e) {
        arrayClass.forEach(item => {
            if (e.classList.contains(item)) {
                e.classList.remove(item);
                e.classList.add('flex-center-center');
            }
        });
    }

    flexLeftCenter(e) {
        arrayClass.forEach(item => {
            if (e.classList.contains(item)) {
                e.classList.remove(item);
                e.classList.add('flex-left-center');
            }
        });
    }

    flexEvenlyCenter(e) {
        arrayClass.forEach(item => {
            if (e.classList.contains(item)) {
                e.classList.remove(item);
                e.classList.add('flex-evenly-centerflex-left-center');
            }
        });
    }

    flexCenterCenterRow(e) {
        arrayClass.forEach(item => {
            if (e.classList.contains(item)) {
                e.classList.remove(item);
                e.classList.add('flex-center-center-row');

            }
        });
    }

    flexEvenlyCenterRow(e) {
        arrayClass.forEach(item => {
            if (e.classList.contains(item)) {
                e.classList.remove(item);
                e.classList.add('flex-evenly-center-row');

            }
        });
    }

    flexLeftCenterRow(e) {
        arrayClass.forEach(item => {
            if (e.classList.contains(item)) {
                e.classList.remove(item);
                e.classList.add('flex-left-center-row');

            }
        });
    }

    flexTopCenterRow(e) {
        arrayClass.forEach(item => {
            if (e.classList.contains(item)) {
                e.classList.remove(item);
                e.classList.add('flex-top-center-row');
            }
        });
    }

    flexLeftBetweenRow(e) {
        arrayClass.forEach(item => {
            if (e.classList.contains(item)) {
                e.classList.remove(item);
                e.classList.add('flex-left-between-row');
            }
        });
    }

    flexCenterCenterWrap(e) {
        arrayClass.forEach(item => {
            if (e.classList.contains(item)) {
                e.classList.remove(item);
                e.classList.add('flex-center-center-wrap');
            }
        });
    }

    flexCenterCenterRowReverse(e) {
        arrayClass.forEach(item => {
            if (e.classList.contains(item)) {
                e.classList.remove(item);
                e.classList.add('flex-center-center-row-reverse');
            }
        });
    }
}

const changeClass = new ChangeClass();

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