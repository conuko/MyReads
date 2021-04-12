import React, { useState, useEffect } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import Library from './components/Library';
import SearchBooks from './components/SearchBooks';
import SearchButton from './components/SearchButton';
import { Route } from 'react-router-dom';

/*     
create an array for the 3 different shelfes with their id and name:
*/
const bookShelfs = [
  {
    id: "currentlyReading",
    name: "Currently Reading"
  },
  {
    id: "wantToRead",
    name: "Want to Read"
  },
  {
    id: "read",
    name: "Read"
  }
];

const BooksApp = () => {
  const [books, setBooks] = useState([]);

  /* 
  set the initial state with the getAll method from the BooksAPI inside the
  useEffect lifecycle hook:
  */
  useEffect(() => {
    BooksAPI.getAll()
      .then((data) => {
        setBooks((data));
      })
  }, []);

  /* 
  this callback method is used to move a book from one shelf to another with the
  select options from BookShelfChanger Component and the update method from
  the BooksAPI:
  */
  const onSelectShelf = async (newBook, value) => {
    await BooksAPI.update(newBook, value)
      .then(() => {
        /*
        update the shelf property of the BooksAPI (newBook) with the selected value (this value was updated as an 
        event in the BookShelfChanger and then passed back):
        */
        newBook.shelf = value;
        /*
        update the state with newBook and filter out the book (if it's there). The concat will add the book
        to the end of the array:
        */
        setBooks(books.filter((b) => (b.id !== newBook.id)).concat(newBook));
      });
  };

  return (
    <div className="app">
      <div>
        <Route exact path="/MyReads" render={() => (
          <Library
            books={books}
            onSelectShelf={onSelectShelf}
            bookShelfs={bookShelfs}
          />
        )} />
        <SearchButton />
      </div>
      <div>
        <Route path="/MyReads/search" render={() => (
          <SearchBooks
            books={books}
            onSelectShelf={onSelectShelf}
          />
        )} />
      </div>
    </div>
  );
};

export default BooksApp