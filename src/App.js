import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import Library from './components/Library';
import SearchBooks from './components/SearchBooks';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  /* 
  set the initial state with the getAll method from the BooksAPI inside the
  componentDidMount lifecycle event:
  */
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }));
      });
  };
  /* 
  this callback method is used to move a book from one shelf to another with the
  select options from BookShelfChanger Component and the update method from
  the BooksAPI:
  */
  onSelectShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf)
      .then((res) => {
        /*
        the shelf property from the book API (passed as a callback as "newBook" from BookShelfChanger)
        is set to the newShelf poperty
        */
        newBook.shelf = newShelf;
        /*
        update the state with new book:
        */
        this.setState((currentState) => ({
          books: currentState.books
            /*
            remove the book from the old shelf:
            */
            .filter((book) => (book.id !== newBook.id))
            /*
            and add it to the new, selected shelf:
            */
            .concat([newBook])
        }));
      });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <div>
          <Route exact path="/" render={() => (
            <Library
              books={books}
              onSelectShelf={this.onSelectShelf}
            />
          )} />
          <div className="open-search">
            <Link to="/search">
              <button type="button">
                Add a book
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Route path="/search" render={() => (
              <SearchBooks
                books={books}
                onSelectShelf={this.onSelectShelf}
              />
          )} />
        </div>
      </div>
    );
  };
};

export default BooksApp