let pEl = document.getElementById("p-el")
let bookInputEl = document.getElementById("bookInput-el")
let newBook1 = document.getElementById("newBook1")
const ulEl = document.getElementById("ul-el")

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = " not read yet. "
    this.info = function () {
        return `${this.title} by ${this.author}  ${this.pages} pages ${this.isRead}`
    }
}


let libraryFromLocalStorage = JSON.parse( localStorage.getItem("myLibrary") )

if(libraryFromLocalStorage){
 myLibrary= libraryFromLocalStorage
 displayBook()
}







function addBookToLibrary() {
    myLibrary.push[bookInputEl.value]
    bookInputEl.value = ""
    localStorage.setItem("myLibrary")
    displayBook()
    console.log( localStorage.getItem("myLibrary", JSON.stringify(myLeads)))

}




function displayBook() {
    let libraryItems = ""
    for (let i = 0; i < myLibrary.length; i++) {
        libraryItems += `<li>
     <a target='_blank' href=' ${myLibrary[i]} '> ${myLibrary[i]}</a>
     </li>`
    }
    ulEl.innerHTML = libraryItems
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}