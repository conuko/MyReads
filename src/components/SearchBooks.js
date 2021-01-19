import React from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';

class SearchBooks extends React.Component {
    state = {
        filteredBooks: [],
        query: "",
    };
    /* 
    Method to update the query state with the onChange input,
    given by the user:
    */
    updateQuery = query => {
        this.setState(() => ({
            query: query
        }));
        this.componentDidMount();
    };
    /* 
    I wrap the functionality of fetching data into a componentDidMount Lifecycle method
    to fix the error, that my search results still show even if I deleted the
    search text inside the query state:
    */
    componentDidMount() {
        const query = this.state.query;
        /* If the query state is not empty, invoke the BooksAPI.search method */
        if (query !== "") {
            BooksAPI.search(query)
            .then((query) => {
                if (query) {
                    this.setState(() => ({
                        filteredBooks: query,
                    }))
                } else {
                    this.setState(() => ({
                        filteredBooks: [],
                    }))
                }
            })
            .catch((err) => console.log(err));
            /* if the query state is empty again, the filteredBooks state will also be set back to empty: */
        } else if (query === "") {
            this.setState(() => ({
                filteredBooks: [],
            }));
        }
    };

    render() {
        const { filteredBooks, query } = this.state;
        const { books, onSelectShelf } = this.props;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                <Link
                    className="close-search"
                    to="/">
                        Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input 
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                </div>
            <div className="search-books-results">
                { filteredBooks.length > 0 && (
                    <ol className="books-grid">
                    {filteredBooks.map((book) => {
                        return (
                            <Book key={book.title}
                                books={books}
                                book={book}
                                onSelectShelf={onSelectShelf}
                            />
                        )
                    })}
                    </ol>
                )}
            </div>
          </div>
        );
    };
};

export default SearchBooks;