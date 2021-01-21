import React from 'react'

class BookShelfChanger extends React.Component {
    
    handleChange = event => {
        const { value } = event.target
        /*
        Call the callback function that was passed to this component from App.js 
        with the book props and the book.shelf value selected by the user.
        This callback allows the child component BookShelfChanger to pass data
        back to the parent component App.js:
        */
        this.props.onSelectShelf(this.props.book, value);
    };

    render() {
        const { book, books } = this.props;

        /*
        When a book that is already on the bookshelf appears on the search page, it should have the same state.
        E.g if it is set to the 'Currently Reading' shelf then it should also have that option
        on the search page. Otherwise it should be set to 'None':
        */
        let currentBookShelf;
        books.forEach((item) => {
            // check, if a book (item) is on a shelf (book --> "book" are the books that are on a shelf)
            if (item.id === book.id) {
                /*
                if the checked book is already on a shelf, the status of the currentBookShelf of the book
                is set to the the name of the shelf, e.g 'currently reading':
                */
                currentBookShelf = item.shelf;
            }
        })

        return (
            <div className="book-shelf-changer">
                <select value={currentBookShelf ? currentBookShelf : "none"} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    };
};

export default BookShelfChanger;