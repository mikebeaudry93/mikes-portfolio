import React, { Component } from 'react'

import './Contact.scss';

import  facebook  from '../../assets/link-icons/facebook.copy.svg';
import  linkedin  from '../../assets/link-icons/linkedin.copy.svg';
import  github  from '../../assets/link-icons/github.copy.svg';

export class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact-container">
                    <div className="footer-content-box">
                        <div className="footer-link-container">
                            <a href="https://www.facebook.com/mikebeaudry93">
                                <div className="footer-link">
                                    <img className='footer-img' src={facebook} alt="facebook"/>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/michael-beaudry/">
                                <div className="footer-link">
                                    <img className='footer-img' src={linkedin} alt="linkedin"/>
                                </div>
                            </a>
                            <a href="https://github.com/mikebeaudry93">
                                <div className="footer-link">
                                    <img className='footer-img' src={github} alt="github"/>
                                </div>
                            </a>
                        </div>
                        <div className="footer-copyright-box">
                            <div className="footer-copyright">© 2020 Michael Beaudry</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact