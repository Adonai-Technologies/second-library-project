let pEl = document.getElementById("p-el")
let bookInputEl = document.getElementById("bookInput-el")
let newBook1 = document.getElementById("newBook1")


let myLibrary = ["The Hobbit", "The runAway Bride", "Beauty and the Beast"];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = " not read yet. "
    this.info = function () {
        return `${this.title} by ${this.author}  ${this.pages} pages ${this.isRead}`
    }
}




function addBookToLibrary() {
    myLibrary.push[bookInputEl.value]
    pEl.innerHTML = bookInputEl.value = "";

}
addBookToLibrary()



function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        let myNewBook1 = new Book(myLibrary[i], "Jony Jones", 123)
        console.log(myNewBook1.info())
        newBook1.innerText = myNewBook1.info()
    }

}


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}