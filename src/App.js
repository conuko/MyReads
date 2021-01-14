import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import Library from './components/Library';
import SearchBooks from './components/SearchBooks';



class BooksApp extends React.Component {
  state = {
    books: [],


    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

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
        {this.state.showSearchPage ? (
          <SearchBooks
            books={books}
            onSelectShelf={this.onSelectShelf}
          />
        ) : (
          <div>
            <Library
              books={books}
              onSelectShelf={this.onSelectShelf}
            />
          <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp