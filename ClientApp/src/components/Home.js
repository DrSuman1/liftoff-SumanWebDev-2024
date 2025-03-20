import React, { Component } from 'react';
import './HomePage.css'; 

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    fetchData() {
        fetch('/Donor')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error connecting to the database:', error));
    }

    render() {
        const data = this.fetchData;
        return (
            <div className="homepage-container">
                <div className="hero-section">
                    <div className="hero-text">
                        <h1>Welcome to the Blood Bank Management System</h1>
                        <p>Your health, our priority. Donate blood and save lives.</p>
                    </div>
                    <div className="hero-image">
                        <img src="/path-to-your-image.jpg" alt="Blood Donation" className="animated-image" />
                    </div>
                </div>
            </div>
        );
    }
}
