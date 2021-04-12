import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

const SearchButton = () => {

  return (
    <Route exact path="/MyReads" render={() => (
      <div className="open-search">
        <Link to="MyReads/search">
          <button type="button">
            Add a book
              </button>
        </Link>
      </div>
    )} />
  );
}

export default SearchButton;