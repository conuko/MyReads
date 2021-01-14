import React from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';

class SearchBooks extends React.Component {
    state = {
        filteredBooks: [],
        searchText: ''
    }

    updateSearchText = searchText => {
        this.setState(() => ({
            searchText: searchText.trim()
        }));
        if (searchText === '') {
            this.setState(() => ({
                filteredBooks: []
            }));
        }
        BooksAPI.search(searchText)
            .then(books => {
                if (books.length > 0) {
                    this.setState(() => ({
                        filteredBooks: books
                    }));
                }
                this.setState(() => ({
                    filteredBooks: []
                }));
            });
    };

    render() {
        const { filteredBooks, searchText } = this.state;
        const { books, onSelectShelf } = this.props;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
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
                {filteredBooks.length > 0 && (
                    <ol className="books-grid">
                        {filteredBooks.map(book => {
                            return (
                                <Book key={book.title}
                                    books={books}
                                    book={book}
                                    onSelectShelf={onSelectShelf}
                                />
                            );
                        })};
                    </ol>
                )} 
            </div>
          </div>
        );
    };
}

export default SearchBooks;