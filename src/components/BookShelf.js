import React from 'react';
import Book from './Book';

const BookShelf = props => {
    const { books, onSelectShelf } = props;

    /* 
    Map over the "books" props to render every single book with the Book Component
    and pass the Book Component "books", "book" and "selectShelf" as Props
    */
    return (
          <ol className="books-grid">
            {books.map(book => {
                return (
                    <Book key={book.id}
                        books={books}
                        book={book}
                        onSelectShelf={onSelectShelf}
                    />
                )
            })}
          </ol>
    );
};

export default BookShelf;