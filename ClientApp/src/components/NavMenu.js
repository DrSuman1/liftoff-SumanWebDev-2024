import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                    <NavbarBrand tag={Link} to="/">BloodBankManagmemntSystem</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav ml-auto">
                            <NavItem>
                                <NavLink tag={Link} className="text-white" to="/">Home</NavLink>
                            </NavItem>

                            <li className="nav-item dropdown">
                                <div className="LoginDropdown">
                                    <span className="nav-link text-white">User Login</span>
                                    <div className="DropdownContent">
                                        <NavItem>
                                            <NavLink tag={Link} className="text-white" to="/donor-login">Donor Login</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-white" to="/employee-login">Employee Login</NavLink>
                                        </NavItem>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="RegisterDropdown">
                                    <span className="nav-link text-white">User Register</span>
                                    <div className="DropdownContent">
                                        <NavItem>
                                            <NavLink tag={Link} className="text-white" to="/register-donor">Register Donor</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-white" to="/register-employee">Register Employee</NavLink>
                                        </NavItem>
                                    </div>
                                </div>
                            </li>
                        </ul>


                    </Collapse>
                </Navbar>
            </header>
        );
    }
}
