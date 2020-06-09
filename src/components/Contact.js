import React, { Component } from 'react'
import logo from "../assets/linkedin.png"

export class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact-container">
                    <div className="contact-container-text">
                        <div className="email-container">
                            <h3 className="email-title">Email:</h3>
                            <p className="email">michaelbeaudry93@gmail.com</p>
                        </div>
                        <div className="phone-container">
                            <h3 className="phone-title">Mobile:</h3>
                            <p className="number">647 269 5512</p>
                        </div>
                    </div>
                    <div className="linkedin-box">
                        <a href="https://www.linkedin.com/in/michael-beaudry/">
                        <img src={logo} alt="linkedin-logo" className="linkedin-logo"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
