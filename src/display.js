import { myLibrary }  from "./myLibrary";
import { setLibrary } from "./myLibrary";
import { getRating } from "./myLibrary";

const showButton = document.querySelector('.addBook');
const formContainer = document.querySelector('.formSection');

function displayBooks(array) {
    const library = document.querySelector('.library');
    library.textContent = '';
    setLibrary();
    for (let i = 0; i < array.length; i += 1) {
      const newBookDisplay = document.createElement('div');
      const buttonHolder = document.createElement('div');
      const removeButton = document.createElement('button');
      const toggleRead = document.createElement('button');
      const bookTextContainer = document.createElement('div');
      bookTextContainer.className = "bookText";
      //const rating = document.createElement('div');
      newBookDisplay.className = "bookDiv";
      buttonHolder.className = "buttonHolder";
      toggleRead.textContent = 'Toggle Read';
      toggleRead.className = i;

      toggleRead.addEventListener('click', () => {
        if (myLibrary[i].read === true) {
          myLibrary[i].read = false;
        } else {
          myLibrary[i].read = true;
          myLibrary[i].rating = getRating();
        }
        displayBooks(myLibrary);
      });
      removeButton.textContent = 'Remove';
      removeButton.className = i;

      removeButton.addEventListener('click', () => {
        myLibrary.splice(i, 1);
        displayBooks(myLibrary);
        
      });
      bookTextContainer.textContent = myLibrary[i].info();
      //newBookDisplay.textContent = myLibrary[i].info();
      buttonHolder.appendChild(removeButton);
      buttonHolder.appendChild(toggleRead);
      newBookDisplay.appendChild(bookTextContainer);
      newBookDisplay.appendChild(buttonHolder);
      library.appendChild(newBookDisplay);
    }
  }

  showButton.addEventListener('click', () => {
    if (formContainer.style.display !== 'block') {
      formContainer.style.display = 'block';
    } else {
      formContainer.style.display = 'none';
    }
  });

  export default displayBooks;