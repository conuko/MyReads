import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

const SearchButton = () => {

    return(
        <Route exact path="/" render={() => (
        <div className="open-search">
            <Link to="/search">
              <button type="button">
                Add a book
              </button>
            </Link>
        </div>
        )}/>
    );
}

export default SearchButton;