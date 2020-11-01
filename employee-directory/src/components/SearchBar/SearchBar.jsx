import React from 'react';
import './SearchBarStyle.css';

const SearchBar = () => {
    return (
        <div className = "row search-bar">
            <div className = "col-sm-2">
            <form className="form">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            </div>
        </div>
    );
};

export default SearchBar;