import React, { Component } from 'react';
import './displayEmployeesStyle.css';
import Employee from '../Employee/Employee';
import SearchBar from '../SearchBar/SearchBar';
import API from "../../utils/API";

class DisplayEmployees extends Component {
   
    // establish state
    state = {
        result: [],
        filterResult: [],
        search: "",
        ascending: true,
    };
    // componentDidMount 
    componentDidMount() {
        this.searchEmployees();
    }

    // search Employees
    searchEmployees = (query) => {
        API.search(query)
        .then((res) => this.setState({ result: res.data.results, filterResult: res.data.results}))
        .catch(err => console.log(err));
    };
    // handle input change
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.filterEmployee(value);

        this.setState({
          [name] : value
        });
    };
    // search
    
    // sort by name on click and return without click
    handleNameSort = () => {
        const compare = (a, b) => {
            if (this.state.ascending) {
                if (a.name.first > b.name.first) return 1;
                if (a.name.first < b.name.first) return -1;
                return 0;
          } else {
                if (a.name.first < b.name.first) return 1;
                if (a.name.first > b.name.first) return -1;
                return 0;
          }
        };
    
        const Order = this.state.result.sort(compare);
        this.setState({
          ascending: !this.state.ascending,
          alteredResult: Order,
        });
    };

    render() {
        return (
            <div>
                <SearchBar 
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit} 
                />
                 <div className="Display-Employee">
                    <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" onClick={this.handleNameSort}>Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filterResult.map((employee) => (
                        <Employee
                            picture={employee.picture.thumbnail}
                            name={employee.name}
                            phone={employee.phone}
                            email={employee.email}
                            dob={employee.dob.date.substr(0, 10)}
                            key={employee.dob.date}/>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DisplayEmployees;

// import React from 'react';
// import './displayEmployeesStyle.css';
// import Employee from '../Employee/Employee'

// const DisplayEmployees = () => {

//     return (
    //   <div className="Display-Employee">
    //     <table className="table table-striped">
    //       <thead>
    //         <tr>
    //           <th scope="col">Image</th>
    //           <th scope="col">Name</th>
    //           <th scope="col">Number</th>
    //           <th scope="col">Email</th>
    //           <th scope="col">DOB</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //           <Employee />
    //         {/* <tr>
    //           <th scope="row">1</th>
    //           <td>Mark</td>
    //           <td>Otto</td>
    //           <td>@mdo</td>
    //           <td>@fat</td>
    //         </tr> */}
    //         <tr>
    //           <th scope="row">Image</th>
    //           <td>Jacob</td>
    //           <td>Thornton</td>
    //           <td>@fat</td>
    //           <td>@fat</td>
    //         </tr>
    //         <tr>
    //           <th scope="row">Image</th>
    //           <td>Larry</td>
    //           <td>the Bird</td>
    //           <td>@twitter</td>
    //           <td>@fat</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
//     );
// };

// export default DisplayEmployees;