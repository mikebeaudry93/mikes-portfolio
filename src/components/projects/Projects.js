import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Projects.scss";

// Images
import tictactoe from "../../assets/images/tic-tac-toe.png";
import github from "../../assets/developer-icons/github2.jpg";
import musicStore from "../../assets/images/music-store-cover-2.png";

// Icons
import html from "../../assets/developer-icons/html.png";
import css from "../../assets/developer-icons/css.png";
import javascript from "../../assets/developer-icons/javascript.svg";
import node from "../../assets/developer-icons/node js.png";
import react from "../../assets/developer-icons/react.png";
import sass from "../../assets/developer-icons/sass.svg";
import redux from "../../assets/developer-icons/logo-redux.png";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="projects-main">
      <h1 data-aos="zoom-in" className="projects-main-title">
        Projects
      </h1>
      <div data-aos="zoom-in" className="projects-icon-container">
        <img className="icon" src={html} alt="html" />
        <img className="icon" src={css} alt="css" />
        <img className="icon" src={javascript} alt="javascript" />
        <img className="icon" src={node} alt="node" />
        <img className="icon" src={react} alt="react" />
        <img className="icon" src={sass} alt="sass" />
        <img className="icon" src={redux} alt="redux" />
      </div>
      <div data-aos="fade-up" className="projects-container">
        <div className="project-card">
          <a
            className="project-link"
            href="https://react-music-store-supreme.netlify.app/"
          >
            <img src={musicStore} alt="project" className="projects-img" />
            <div className="card-content">
              <h3 className="project-title">Music Supreme</h3>
              <p className="project-description">
                E-Commerce music store. Uses strapi for backend which stores
                users info, products and orders (hosted on heroku so may take a
                minute to boot up). Uses stripe for payments. Responsive for mobile. 
              </p>
            </div>
          </a>
          <a
            className="project-git-link"
            href="https://github.com/mikebeaudry93/music-store"
          >
            <img src={github} alt="#" className="github-link" />
          </a>
        </div>
        <div className="project-card">
          <a
            className="project-link"
            href="https://youthful-beaver-86231a.netlify.com/"
          >
            <img src={tictactoe} alt="project" className="projects-img" />
            <div className="card-content">
              <h3 className="project-title">Tic-Tac-Toe</h3>
              <p className="project-description">
                Classic Tic-Tac-Toe. Players alternate turns and when you line
                up three X's or O'x.
              </p>
            </div>
          </a>
          <a
            className="project-git-link"
            href="https://github.com/mikebeaudry93/mikes-tic-tac-toe"
          >
            <img src={github} alt="#" className="github-link" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;

