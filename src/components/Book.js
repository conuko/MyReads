import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = props => {
    const { books, book, onSelectShelf } = props;
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <img 
                        className="book-cover"
                        alt="book-cover"
                        style={{ width: 128, height: 193 }}
                        src={book.imageLinks ? book.imageLinks.thumbnail : ''}
                    /> 
                    <BookShelfChanger 
                        books={books}
                        book={book}
                        onSelectShelf={onSelectShelf}
                    />
                </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    )
}

export default Book;