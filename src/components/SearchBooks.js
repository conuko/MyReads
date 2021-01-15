import React from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';

class SearchBooks extends React.Component {
    state = {
        filteredBooks: [],
        searchText: '',
    };

    updateSearchText = searchText => {
        this.setState(() => ({
            searchText: searchText
        }));
        if (searchText !== '') {
            BooksAPI.search(searchText)
            .then(books => {
                books.length > 0
                ? this.setState({ filteredBooks: books })
                : this.setState({ filteredBooks: [] })
            });
        } else if (searchText === '') {
            this.setState(() => ({
                filteredBooks: [],
            }));
        }
    };

    render() {
        const { filteredBooks, searchText } = this.state;
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
                        value={searchText}
                        onChange={(event) => this.updateSearchText(event.target.value)}
                    />
                </div>
                </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {filteredBooks.map(book => {
                        return (
                            <Book key={book.title}
                                books={books}
                                book={book}
                                onSelectShelf={onSelectShelf}
                            />
                        )
                    })}
                </ol>
            </div>
          </div>
        );
    };
};

export default SearchBooks;