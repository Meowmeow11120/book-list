const popupContainer = document.querySelector('.popup-container');
const add = document.querySelector('.add');

add.addEventListener('click', (e) => {
    popupContainer.classList.add('show');
    console.log(e.target.id)

});

popupContainer.addEventListener('click', (e) => {
    if (e.target.id !== 'popup') {
        popupContainer.classList.remove('show');
    }

});

