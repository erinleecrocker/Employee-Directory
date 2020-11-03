import React, { Component } from 'react';
import './displayEmployeesStyle.css';
import Employee from '../Employee/Employee';
import SearchBar from '../SearchBar/SearchBar';
import API from "../../utils/API";

class DisplayEmployees extends Component {
   
    // establish state
    state = {
        result: [],
    };
    // componentDidMount 
    componentDidMount() {
        this.searchEmployees();
    }
    // search Employees
    searchEmployees = (query) => {
        API.search(query).then((res) =>
            this.setState({
                result: res.data.results,
            })
        );
    };

    render() {
        return (
            <div>
                
                 <div className="Display-Employee">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {this.state.result.map((employee) => (
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