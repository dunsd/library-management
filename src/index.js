import './style.css';
import displayBooks from './display';
import { myLibrary } from './myLibrary';
import { addBookToLibrary } from './myLibrary';

const bookForm = document.querySelector('#bookForm');



function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  if (this.read === true) {
    return `${this.title} by ${this.author}, ${this.pages} pages, read.`;
  }

  return `${this.title} by ${this.author}, ${this.pages} pages, not read.`;
};



bookForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents page submitting
    const newBook = new Book(
      bookForm.elements.bookTitle.value,
      bookForm.elements.bookAuthor.value,
      bookForm.elements.bookPages.value,
      bookForm.elements.read.checked,
    );
    addBookToLibrary(newBook);
    displayBooks(myLibrary);
  });
  // Prepopulate library with some books
  const lotr = new Book('Fellowship Of The Ring', 'J.R.R Tolkien', 300, false);
  const dune = new Book('Dune', 'Frank Herbert', 600, true);
  //addBookToLibrary(lotr);
  //addBookToLibrary(dune);
  //console.log(JSON.parse(localStorage.myLibrary));
  //myLibrary = JSON.parse(localStorage.myLibrary);
  //localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  displayBooks(myLibrary);

  

  