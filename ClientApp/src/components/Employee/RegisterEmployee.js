import React, { Component } from 'react';
import states from '../StatesList';
import './style.css';

export class RegisterEmployee extends Component {
    static displayName = RegisterEmployee.name;

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    };
    resetForm() {
        this.setState({
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        })
    }
    // this allows for the program to adjust the value of the the user's input after interacting with the html components
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }
    handleRegistration = (data) => console.log(data)

    handleSubmit(event) {
        event.preventDefault();
        const url = '/Employee/Register';

        if (this.state.password === this.state.confirmPassword) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: this.state.firstName.trim(),
                    lastName: this.state.lastName.trim(),
                    address: this.state.address.trim(),
                    city: this.state.city.trim(),
                    state: this.state.state,
                    email: this.state.email.trim(),
                    phone: this.state.phone.trim(),
                    password: this.state.password.trim()
                })
            });
            alert("User created successfully.")
            this.resetForm();
        }
        else {
            console.log("PASSWORDS DO NOT MATCH");
        }



       
    }

    render() {
        return (
            <div className="registration-form">
                <form onSubmit={this.handleSubmit}>
                    <h2>Register Employee</h2>

                      <div className="form-group">
                        <label>First Name: </label>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="Enter First Name"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            required="required"
                            oninvalid="this.setCustomValidity('Enter User First Name')"
                            oninput="this.setCustomValidity('')"
                        />
                    </div>
                   
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Enter Last Name"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            required="required"
                            oninvalid="this.setCustomValidity('Enter User Last Name')"
                            oninput="this.setCustomValidity('')"
                        />
                    </div>

                    <div className="form-group">
                        <label>Address: </label>
                        <input
                            id="address"
                            type="text"
                            placeholder="Enter Address"
                            value={this.state.address}
                            onChange={this.handleChange}
                            required="required"
                            oninvalid="this.setCustomValidity('Please Enter Address')"
                            oninput="this.setCustomValidity('')"
                        />
                    </div>

                    <div className="form-group">
                        <label>City: </label>
                        <input
                            id="city"
                            type="text"
                            placeholder="Enter City"
                            value={this.state.city}
                            onChange={this.handleChange}
                            required="required"
                            oninvalid="this.setCustomValidity('Please Enter City')"
                            oninput="this.setCustomValidity('')"
                        />
                    </div>

                    <div className="form-group">
                        <label>State: </label>
                        <select
                            id="state"
                            value={this.state.state}
                            onChange={this.handleChange}
                            required
                        >
                            <option value="">Select a state</option>
                            {states.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>E-mail: </label>
                        <input
                            id="email"
                            type="text"
                            placeholder="Enter E-Mail"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required="required"
                            oninvalid="this.setCustomValidity('Please Enter Email')"
                            oninput="this.setCustomValidity('')"
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input
                            id="phone"
                            type="text"
                            placeholder="(###)-###-###"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            required="required"
                            oninvalid="this.setCustomValidity('Please Enter Phone Number')"
                            oninput="this.setCustomValidity('')"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required="required"
                            oninvalid="this.setCustomValidity('Please Enter Password')"
                            oninput="this.setCustomValidity('')"
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password: </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            required="required"
                            oninvalid="this.setCustomValidity('Please Enter Confirm Password')"
                            oninput="this.setCustomValidity('')"
                        />
                    </div>

                    <button type="submit">Register</button>
                </form>
            </div>


            //<div>
            //    <form onSubmit={this.handleSubmit}>
            //        <h2>Register Employee</h2>


            //        <p>
            //            <label>First Name: </label>
            //            <input id="firstName" type="text" placeholder="Enter First Name" value={this.state.firstName} onChange={this.handleChange} required="required"
            //                oninvalid="this.setCustomValidity('Enter User First Name')"
            //                oninput="this.setCustomValidity('')" />
            //        </p>
            //        <p>
            //            <label>Last Name: </label>
            //            <input id="lastName" type="text" placeholder="Enter Last Name" value={this.state.lastName} onChange={this.handleChange} required="required"
            //                oninvalid="this.setCustomValidity('Enter User Last Name')"
            //                oninput="this.setCustomValidity('')" />
            //        </p>
            //        <p>
            //            <label>Address </label>
            //            <input id="address" type="text" placeholder="Enter Address" value={this.state.address} onChange={this.handleChange} required="required"
            //                oninvalid="this.setCustomValidity('Please Enter Address')"
            //                oninput="this.setCustomValidity('')" />
            //        </p>
            //        <p>
            //            <label>City </label>
            //            <input id="city" type="text" placeholder="Enter City" value={this.state.city} onChange={this.handleChange} required="required"
            //                oninvalid="this.setCustomValidity('Please Enter City')"
            //                oninput="this.setCustomValidity('')" />
            //        </p>
            //        <p>
            //            <label>State</label>
            //            <select id="state" value={this.state.state} onChange={this.handleChange} required>
            //                <option value="">Select a state</option>
            //                {states.map((state, index) => (<option key={index} value={state}>{state}</option>))}
            //            </select>
            //        </p>
            //        <p>
            //        <label>E-mail </label>
            //        <input id="email" type="text" placeholder="Enter E-Mail" value={this.state.email} onChange={this.handleChange} required="required"
            //            oninvalid="this.setCustomValidity('Please Enter Email')"
            //            oninput="this.setCustomValidity('')" />
            //    </p>
            //    <p>
            //        <label>Phone Number </label>
            //        <input id="phone" type="text" placeholder="(###)-###-###" value={this.state.phone} onChange={this.handleChange} required="required"
            //            oninvalid="this.setCustomValidity('Please Enter Phone Number')"
            //            oninput="this.setCustomValidity('')" />

            //    </p>

            //    <p>
            //        <label>Password </label>
            //        <input id="password" type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} required="required"
            //            oninvalid="this.setCustomValidity('Please Enter Password')"
            //            oninput="this.setCustomValidity('')" />
            //    </p>
            //    <p>
            //        <label>Confirm Password </label>
            //        <input id="confirmPassword" type="password" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange} required="required"
            //            oninvalid="this.setCustomValidity('Please Enter Confirm Password')"
            //            oninput="this.setCustomValidity('')" />
            //    </p>
            //        <button type="submit">Register</button>
            //    </form>
            //</div>
        );
    }
}


