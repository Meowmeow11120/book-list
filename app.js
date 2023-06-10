const popupContainer = document.querySelector('.popup-container');
const add = document.querySelector('.add');
const card = document.querySelector('.card');
const bookName = document.querySelector('.book-name');
const bookAuthor = document.querySelector('.book-author');
const page = document.querySelector('.book-page');
const status = document.querySelector('.status');
const remove = document.querySelector('.remove');
const radioButton = document.querySelectorAll('.radiobutton');
const book = document.querySelector('#book');
const author = document.querySelector('.author');
const pageInput = document.querySelector('.page-input');
const form = document.querySelector('.form');
const gridContainer = document.querySelector('.grid-container');

// logic add new card when hit done
let myLibrary = [];

class Book {
    constructor(book = 'Unknown', author = 'Unknown', page = '0', status = 'unread') {
        this.book = book;
        this.author = author;
        this.page = page;
        this.status = status;
    }
}

function addBookToLibrary() {
    let bookInput = book.value;
    let authorInput = author.value;
    let page = pageInput.value;
    let status = '';

    if (!radioButton[0].checked) {
        status = 'unread';
    } else {
        status = 'read';
    }

    const newBook = new Book(bookInput, authorInput, page, status);
    myLibrary.push(newBook); // Add the new book object to the library array
}
// make card whenever hit done
function makeCard() {
    let newCard = document.createElement("div");
    newCard.classList.add('card');
    gridContainer.append(newCard);

    let name = document.createElement("h3");
    name.classList.add('book-name');
    name.textContent = myLibrary[myLibrary.length - 1].book;
    newCard.append(name);

    let author = document.createElement("h3");
    author.classList.add('book-author');
    author.textContent = myLibrary[myLibrary.length - 1].author;
    newCard.append(author);

    let pageContainer = document.createElement('div');
    let newInput = document.createElement('input');
    newInput.classList.add('book-page');
    newInput.type = 'number';
    newInput.value = myLibrary[myLibrary.length - 1].page;
    pageContainer.append(newInput);

    let pageText = document.createElement('span');
    pageText.textContent = 'pages';
    pageContainer.append(pageText);

    newCard.append(pageContainer);

    let status = document.createElement('h2');
    status.classList.add('status');
    status.textContent = myLibrary[myLibrary.length - 1].status;
    newCard.append(status);
    status.addEventListener('click', (e) => {
        console.log(e.target.textContent)
        if (e.target.textContent === 'read') {
            e.target.textContent = 'unread'
        } else if (e.target.textContent === 'unread') {
            e.target.textContent = 'read'
        }
    });

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.textContent = 'Remove';
    newCard.append(removeBtn);
    // Attach the remove event listener to the remove button
    removeBtn.addEventListener('click', (e) => {
        e.target.closest('.card').remove();
    });
}




// logic show popup when click add button
add.addEventListener('click', (e) => {
    e.stopPropagation();
    popupContainer.classList.add('show');
});

document.addEventListener('click', (e) => {
    const clickedElement = e.target;
    const isInsidePopup = clickedElement.closest('.popup');
    if (!isInsidePopup) {
        popupContainer.classList.remove('show');
    }
});

//clear
function clear() {
    book.value = '';
    author.value = '';
    pageInput.value = '';
    radioButton[0].checked = true;
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission and page refresh
    addBookToLibrary();
    makeCard();
    popupContainer.classList.remove('show');
    clear();
});
