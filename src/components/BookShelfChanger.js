import React from 'react'

class BookShelfChanger extends React.Component {
    

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        const { books, book, selectShelf } = this.props;

        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }

}



export default BookShelfChanger;