import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./About.scss";

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
            Hello. My name is Mike Beaudry, nice to meet you! 
            <br/><br/>I'm a Front-end developer with back-end experience and a natural eye for
            clean design. I enjoy building projects from the ground up and love
            using React to do it. I graduated from Brainstation for Web Development in 2019 and have had a passion for coding ever since. <br></br>
            <br /> If you'd like to collaborate and work on a project together, I'd love to get in touch! <br/><br/> Tech skills: React.js, Redux, HTML, CSS, SCSS, Javascript,
            Node.js, Express. <br /> <br /> Phone number: 647-269-5512 <br />{" "}
            Email: michaelbeaudry93@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
