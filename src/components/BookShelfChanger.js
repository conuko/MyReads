import React from 'react'

class BookShelfChanger extends React.Component {
    
    handleChange = event => {
        const { value } = event.target
        this.props.onSelectShelf(this.props.book, value);
    }

    render() {
        const { book, books } = this.props;

        /* The option "None" is selected as default, if a book has not been assigned to a shelf: */
        let defaultShelf = "none";

        /*         
        If a book is assigned to a shelf on the main page and that book appears on
        the search page, the correct shelf is be selected on the search page:
        */
        books.forEach((element) => {
            if (element.title === book.title) {
                defaultShelf = element.shelf
            }
        })

        return (
            <div className="book-shelf-changer">
                <select value={defaultShelf} onChange={this.handleChange}>
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