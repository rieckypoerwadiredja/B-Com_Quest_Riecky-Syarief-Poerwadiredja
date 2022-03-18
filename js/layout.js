const navigation = document.querySelector('.navigation');


// ------------------------ NAVIGATION MOBILE ----------------------------
const burgerIcon = document.querySelector('.burger-icon');

burgerIcon.addEventListener('click', () => {
    document.querySelector('.mob-menu').classList.toggle('active');
    document.querySelector('.navigation .logo').classList.toggle('active-nav');
    burgerIcon.classList.toggle('active-nav');

    // animation for list items
    const listItems = document.querySelectorAll('.mob-menu .menu .list');
    listItems.forEach((item, idx) => {
        setTimeout(() => {
            item.classList.toggle('active-nav');
        }, (idx * 200) + 100);

    });
});

// scroll changed background navigation
function changeBgNavigation() {
    const scroll = window.scrollY;
    if (scroll >= 50) {
        navigation.classList.add('bg-nav');
    } else {
        navigation.classList.remove('bg-nav');
    }
};

window.addEventListener("scroll", changeBgNavigation);