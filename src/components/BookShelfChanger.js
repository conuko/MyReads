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
        const { book } = this.props;

        return (
            <div className="book-shelf-changer">
                <select value={book.shelf ? book.shelf : "none"} onChange={this.handleChange}>
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