import React from 'react';
import './EmployeeStyle.css';

const employee = (props) => {
    return (
        <tr>
          <th scope="row"><img src={props.picture} alt="No Image" /></th>
          <td>{props.name.first + ' ' + props.name.last}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td>{props.dob}</td>
        </tr>
    );
};

export default employee;


// import React, { Component } from 'react';
// import './EmployeeStyle.css';

// class Employee extends Component {

    
//     render(props) {
//         return (
//             <tr>
//               <th scope="row">{props.picture}</th>
//               <td>{props.name.first + ' ' + props.name.last}</td>
//               <td>{props.phone}</td>
//               <td>{props.email}</td>
//               <td>{props.dob}</td>
//             </tr>
//         );
//     }
// }

// export default Employee;