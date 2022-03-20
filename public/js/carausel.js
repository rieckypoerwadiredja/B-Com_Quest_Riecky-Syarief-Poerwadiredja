// btn caraousel 

const leftBtnCarausel = document.querySelector('.left-btn-carausel');
const rightBtnCarausel = document.querySelector('.right-btn-caraosel');

const card = document.querySelector('.card-proses');
// get card width
let cardWidth = card.clientWidth;
let styleCard = window.getComputedStyle(card) // get the computed style of the element

let cardMarginLeft = styleCard.marginLeft;
let cardMarginRight = styleCard.marginRight;

const carauselContainer = document.querySelector('.carausel-container');


// real card width (minus margin)
let realCardWidth = cardWidth + (parseInt(cardMarginLeft) + parseInt(cardMarginRight) * 2);


// click left button carausel
leftBtnCarausel.addEventListener('click', () => {
    carauselContainer.scrollBy({
        left: -realCardWidth, // scroll to left ...
        behavior: 'smooth'
    });
});

// click right button carausel
rightBtnCarausel.addEventListener('click', () => {
    carauselContainer.scrollBy({
        left: realCardWidth, // scroll to right ...
        behavior: 'smooth'
    });
});