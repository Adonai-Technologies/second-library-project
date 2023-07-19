
const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const pages = document.querySelector('#pages').value;
const isRead = document.querySelector('#isRead').value;
const form = document.querySelector('#form');
form.addEventListener('submit', addBookToLibrary);


const addBookBtn = document.querySelector('.add-book-btn');
const modalOverlay = document.querySelector('.modal-overlay');
addBookBtn.addEventListener('click', function() {
  modalOverlay.classList.add('overlay-active');
});


let myLibrary = [];

function Book(title,author,pages){
this.title = title;
this.author = author;
this.pages = pages;

}

function addBookToLibrary() {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}


