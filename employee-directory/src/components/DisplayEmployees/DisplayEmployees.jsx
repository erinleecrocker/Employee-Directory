import React from 'react';
import './displayEmployeesStyle.css';
import Employee from '../Employee/Employee'

const DisplayEmployees = () => {
    return (
      <div className="container">
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
              <Employee />
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@fat</td>
            </tr> */}
            <tr>
              <th scope="row">Image</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">Image</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default DisplayEmployees;