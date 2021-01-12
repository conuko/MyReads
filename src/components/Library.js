import React from 'react';
import BookShelf from './BookShelf';

const bookShelfs = ["Currently Reading", "Want to Read", "Read"];

const Library = props => {
    const { books } = props;

    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {bookShelfs.map((bookShelf, index) => (
                    <BookShelf
                        key={bookShelf}
                        title={bookShelf}
                        books={books}
                    />
                ))}
                {/* <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div> */}
            </div>
        </div>
    )
}

export default Library;