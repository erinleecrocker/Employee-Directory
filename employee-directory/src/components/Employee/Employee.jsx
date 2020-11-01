import React, { Component } from 'react';
import './EmployeeStyle.css';

class Employee extends Component {

    state = {
        image: "",
        name: "",
        number: 0,
        emailAddress: "",
        DOB: "",
    };

    
    render() {
        return (
            <tr>
              <th scope="row">Image</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@fat</td>
            </tr>
        );
    }
}

export default Employee;