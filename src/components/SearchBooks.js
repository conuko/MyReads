import React, { useState, useEffect } from 'react'
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';

const SearchBooks = (props) => {
    const { books, onSelectShelf } = props;
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [query, setQuery] = useState('');
    const [error, setError] = useState(false);

    /* 
    Method to update the query state with the onChange input,
    given by the user:
    */
   const updateQuery = event => {
    setQuery(event.target.value);
    };

    /* 
    I wrap the functionality of fetching data into a useEffect Lifecycle hook
    to fix the error, that my search results still show even if I deleted the
    search text inside the query state:
    */
    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            try {
                if (query) {
                    BooksAPI.search(query)
                        .then((data) => {
                            if (data.length > 0) {
                                setFilteredBooks(data);
                                setError(false);
                            } else {
                                setFilteredBooks([]);
                                setError(true);
                            }
                        })
                    } else {
                        setFilteredBooks([]);
                        setError(false);
                    }
                } catch (error) {
                    setError(true);
                }
            };
            fetchData();
        }, [query]);

    return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/my-reads">
                        <button type="button" className="close-search">
                        Close
                        </button>   
                </Link>
                <div className="search-books-input-wrapper">
                    <input 
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={updateQuery}
                    />
                </div>
            </div>
            <div className="search-books-results">
                { filteredBooks.length > 0 && (
                    <div>
                        <ol className="books-grid">
                        {filteredBooks.map((book) => (
                                <Book key={book.id}
                                    books={books}
                                    book={book}
                                    onSelectShelf={onSelectShelf}
                                />
                            ))}
                        </ol>
                    </div>
                )}
                { error && (
                    <h3 className="error-message">No books found. Please try again!</h3>
                )}
            </div>
        </div>
    );
};

export default SearchBooks;