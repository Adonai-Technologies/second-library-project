let pEl = document.getElementById("p-el")


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
    let myNewBook = new Book("The Big Elephant", "Perry Lokko", 234)
    myLibrary.push(myNewBook)
    console.log(myLibrary)

}
addBookToLibrary()





function display() {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i] === "The Hobbit") {
            pEl.innerHTML = myLibrary[i]
        }
    }
}
display()


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }