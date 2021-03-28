import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

const SearchButton = () => {

    return(
        <Route exact path="/my-reads" render={() => (
        <div className="open-search">
            <Link to="my-reads/search">
              <button type="button">
                Add a book
              </button>
            </Link>
        </div>
        )}/>
    );
}

export default SearchButton;