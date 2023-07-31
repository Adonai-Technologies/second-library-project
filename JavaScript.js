let myLibrary = [];

let tdEl1 = document.getElementById("td-el1")
let addBookBtn = document.querySelector("#add-book-btn")



function Book(title, author, pages) {
    this.title = title,
        this.author = author,
        this.pages = pages
    this.info = function () {
        this.title + "by" + " " + this.autor + "with" + " " + this.pages + " " + " not read yet"
    }
}
let myNewBook = new Book("The run away Bride", "Jane Williams", "345")




function addBookToLibrary() {
    let bookTitleInput = document.getElementById("myBookTitle").value;
    tdEl1.innerHTML = bookTitleInput

}









