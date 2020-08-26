import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./About.scss";

// import profilepic from "../../assets/images/MikeProfile.png";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="about-container-main" name="test1">
      <div data-aos="fade-up" className="about-content">
        <div className="about-container">
          <h1 className="about-title">About</h1>
          <p className="about-me">
            {" "}
            Front-end developer with back-end capabilities and natural eye for
            good design. After completing my BMOS degree at Western University I
            then graduated from Brainstation in their Web Developement bootcamp.
            Am a fast-learner, excellent communicator, and a strong passion to
            build and create applications from the ground up. Looking forward to
            advancing the world through innovation and my creativity. <br></br>
            <br /> Tech skills: React.js, Redux, HTML, CSS, SCSS, Javascript,
            Node.js, Express. <br /> <br /> Phone number: 647-269-5512 <br />{" "}
            Email: michaelbeaudry93@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

// old left container
// <div className="about-container-left">
//           <div className="black-box"></div>
//           <img className="car-image" src={profilepic} alt="car" />
//         </div>
