import React from 'react';
import './displayEmployeesStyle.css';
import Employee from '../Employee/Employee'

const DisplayEmployees = () => {
    return (
        <div className = "container">
            <div className = "row">
                <div class="col-sm-12 d-flex" id="info-container">
                    <div class="col-1 p-2 flex-fill">Image</div>
                    <div class="col-3 p-2 flex-fill">Name</div>
                    <div class="col-3 p-2 flex-fill">Phone</div>
                    <div class="col-4 p-2 flex-fill">Email</div>
                    <div class="col-1 p-2 flex-fill">DOB</div>
                </div>
            </div>
            <Employee />
        </div>
    );
};

export default DisplayEmployees;