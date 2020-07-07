import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './About.scss';

import profilepic from '../../assets/images/MikeProfile.png';

function About() {
    
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="about-container-main" name="test1">
            <div data-aos="fade-up" className='about-content'>
                <div className="about-container-left">
                    <div className="black-box"></div>
                    <img className="car-image" src={profilepic} alt="car"/>
                </div>
                <div className="about-container">
                    <h1 className="about-title">About</h1>
                    <p className="about-me"> Western University Marketing grad with sales experience but transitioned into being a Web Developer through Brainstation to follow my true passion. I love learning new things and I look forward to advancing theworld through innovative technologies.</p>
                </div>
            </div>
        </div>
    )
}

export default About
