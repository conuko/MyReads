import React from 'react';
import Book from './Book';

const BookShelf = props => {
    const { books, bookShelf, onSelectShelf } = props;
    /*
    create the booksOnTheShelf constant to filter 
    only the books that belong to a particular shelf:
    */
    const booksOnTheShelf = books.filter((book) => book.shelf === bookShelf.id);

    /* 
    Map over the "books" props to render every single book with the Book Component
    and pass the Book Component "books", "book" and "selectShelf" as Props
    */
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {booksOnTheShelf.map(book => {
                        return (
                            <Book key={book.id}
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

export default BookShelf;