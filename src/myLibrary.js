let myLibrary = [];

function Book(title, author, pages, read, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.rating = rating;
  }
  
  Book.prototype.info = function () {
    if (this.read === true) {
      return `${this.title} by ${this.author}, ${this.pages} pages, read. Rating: ${this.rating}`;
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, not read.`;
  };

  function newBookEntry() {
    const bookForm = document.querySelector('#bookForm');
    return new Book(
        bookForm.elements.bookTitle.value,
        bookForm.elements.bookAuthor.value,
        bookForm.elements.bookPages.value,
        bookForm.elements.read.checked,
        bookForm.element.rating.value,
      );
  }


function setLibrary() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function getLibrary() {
    let storageLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
    for(let i=0;i<storageLibrary.length;i+=1){
        myLibrary[i] = new Book (storageLibrary[i].title, storageLibrary[i].author, storageLibrary[i].pages, storageLibrary[i].read, storageLibrary[i].rating);   
    }
}

function addBookToLibrary(book) {
    console.log(book);
    myLibrary.push(book);
    setLibrary();
  }

function getRating() {
    return prompt("Please enter your rating for this book.");
}

getLibrary();

export {myLibrary, addBookToLibrary, setLibrary, newBookEntry, getRating };