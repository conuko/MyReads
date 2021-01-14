import React from 'react'

class BookShelfChanger extends React.Component {
    

    handleChange = event => {
        this.props.onSelectShelf(this.props.book, event.target.value);
    }


    render() {
        const { book } = this.props;

        return (
            <div className="book-shelf-changer">
                <select value={book.shelf ? book.shelf : 'none'} onChange={this.handleChange}>
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