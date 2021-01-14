import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import Library from './components/Library';



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
  componentDidMount lifecycle event:*/

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
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
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