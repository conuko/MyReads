import React from 'react'

class BookShelfChanger extends React.Component {
    

    handleChange = event => {
        const { value } = event.target
        this.props.onSelectShelf(this.props.book, value);
    }


    render() {
        const { book } = this.props;

        return (
            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={this.handleChange}>
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