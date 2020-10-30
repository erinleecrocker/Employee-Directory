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
            <div>
                 <div className = "row">
                <div class="col-sm-12 d-flex" id="employee-container">
                    <div class="col-1 p-2 flex-fill">Image</div>
                    <div class="col-3 p-2 flex-fill">Erin Crocker</div>
                    <div class="col-3 p-2 flex-fill">706.765.3058</div>
                    <div class="col-4 p-2 flex-fill">erindowns1@me.com</div>
                    <div class="col-1 p-2 flex-fill">12/01/92</div>
                </div>
            </div>
            </div>
        );
    }
}

export default Employee;