import React from 'react';
import Book from './Book';

const BookShelf = props => {
    const { books, selectShelf } = props;

    /* 
    Map over the "books" props to render every single book with the Book Component
    and pass the Book Component "books", "book" and "selectShelf" as Props
    */
    return (
          <ol className="books-grid">
            {books.map(book => {
                return (
                    <Book key={book.title}
                        books={books}
                        book={book}
                        selectShelf={selectShelf}
                        />
                );
            })}
          </ol>
    );
}

export default BookShelf;