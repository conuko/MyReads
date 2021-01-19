import React from 'react';
import BookShelf from './BookShelf';

const Library = props => {
    const { books, onSelectShelf, bookShelfs } = props;

    /* 
    first: map over the bookShelfs object, imported as props from the App Component.
    second: return a BookShelf Component for each of the three bookShelfs from the bookShelfs object.
     */
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {bookShelfs.map((bookShelf) => {
                    return(
                        <BookShelf key={bookShelf.id}
                            books={books}
                            bookShelf={bookShelf}
                            onSelectShelf={onSelectShelf}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Library;