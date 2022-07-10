const readBtn = document.querySelector('.read');
const descCard = document.querySelector('.desc-card');

readBtn.addEventListener('click', function () {

    if (readBtn.classList.contains('read-more')) {
        // change the text of the button to 'Read Less' 
        // and add a class of 'read-less'
        readBtn.classList.remove('read-more');
        readBtn.classList.add('read-less');
        readBtn.innerHTML = 'Read Less';
        // add a class of 'less' to the description container
        descCard.classList.remove('less');
    } else {
        // change the text of the button to 'Read More'
        // and add a class of 'read-more'
        readBtn.classList.remove('read-less');
        readBtn.classList.add('read-more');
        readBtn.innerHTML = 'Read More';
        // remove the class of 'less' from the description container
        descCard.classList.add('less');
    }
});