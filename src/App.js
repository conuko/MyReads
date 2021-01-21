import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import Library from './components/Library';
import SearchBooks from './components/SearchBooks';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
      id:"read", 
      name: "Read"
  }
];

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  
  /* 
  set the initial state with the getAll method from the BooksAPI inside the
  componentDidMount lifecycle event:
  */
  async componentDidMount() {
    const books = await BooksAPI.getAll()
        this.setState(() => ({
          books: books
        }));
  };
  /* 
  this callback method is used to move a book from one shelf to another with the
  select options from BookShelfChanger Component and the update method from
  the BooksAPI:
  */
  onSelectShelf = async (newBook, value) => {
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
        this.setState((currentState) => ({
          books: currentState.books.filter((b) => (b.id !== newBook.id)).concat(newBook),
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
              bookShelfs={bookShelfs}
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