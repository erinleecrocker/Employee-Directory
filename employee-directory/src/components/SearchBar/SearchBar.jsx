import React, { Component } from 'react';
import './SearchBarStyle.css';

class SearchBar extends Component {

    // establish state
    state ={
        search: "",
        results: []
    };
    // When this component mounts, search the Employee data for matching information
    // componentDidMount() {
    //     this.searchEmployees()
    // }

    // searchEmployees = query => {
    //     API.search(query)

    // }
    // handle the input change
    
    // 

    
    render() {
        return (
            <div className = "row search-bar">
                <div className = "col-sm-2">
                    <form className="form">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;