import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = props => {
    const { books, book, selectShelf } = props;
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <img 
                        className="book-cover"
                        alt="book-cover"
                        style={{ width: 128, height: 193 }}
                        src={book.imageLinks.thumbnail}
                    /> 
                    <BookShelfChanger 
                        books={books}
                        book={book}
                        selectShelf={selectShelf}
                    />
                </div>
            <div className="book-title">{books.title}</div>
            <div className="book-authors">{books.authors}</div>
            </div>
        </li>
    )
}

export default Book;

