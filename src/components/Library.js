import React from 'react';
import BookShelf from './BookShelf';



const Library = props => {
    const { books, selectShelf } = props;
    /*     
    create an object for the 3 different shelfes and their ID which can be matched with the "shelf"
    property from the books from the BooksAPI: */
    const bookShelfs = [
        { id: "currentlyReading", name: "Currently Reading" },
        { id: "wantToRead", name: "Want to Read" },
        { id: "read", name: "Read" }
    ];

    /* 
    first: map over the bookShelfs object
    second: create the booksOnTheShelf constant to filter only the books that belong to the particular shelf.
    third: return a BookShelf Component for each of the three bookShelfs from the bookShelfs object.
     */
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {bookShelfs.map((bookShelf) => {
                    const booksOnTheShelf = books.filter(book => book.shelf === bookShelf.id);
                    return(
                        <div className="bookshelf" key={bookShelf}>
                            <h2 className="bookshelf-title">{bookShelf.name}</h2>
                            <div className="bookshelf-books">
                                <BookShelf
                                    books={booksOnTheShelf}
                                    selectShelf={selectShelf}
                                />
                            </div>
                        </div>
                    );
                })
                }
            </div>
        </div>
    );
};

export default Library;