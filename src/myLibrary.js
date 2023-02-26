let myLibrary = [];

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


function setLibrary() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}
function getLibrary() {
    let storageLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    for(let i=0;i<storageLibrary.length;i+=1){
       myLibrary[i] = new Book (storageLibrary[i].title, storageLibrary[i].author, storageLibrary[i].pages, storageLibrary[i].read);
   }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    setLibrary();
  }
console.log(JSON.parse(localStorage.getItem("myLibrary")));
console.log(myLibrary);
getLibrary();
export {myLibrary, addBookToLibrary, setLibrary};