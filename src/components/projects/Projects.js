import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

import './Projects.scss';

// Images 
import tictactoe from '../../assets/images/tic-tac-toe.png';
import tasklist from '../../assets/images/tasklist.png';
import expenseTracker from '../../assets/images/expense-tracker.png';
import quiz from '../../assets/images/quizpic.png';
import weatherapp from '../../assets/images/weather-app1.png';
import github from '../../assets/developer-icons/github2.jpg';
import cocktail from '../../assets/images/cocktail.png'

// Icons
import html from '../../assets/developer-icons/html.png';
import css from '../../assets/developer-icons/css.png';
import javascript from '../../assets/developer-icons/javascript.svg';
import node from '../../assets/developer-icons/node js.png';
import react from '../../assets/developer-icons/react.png';
import sass from '../../assets/developer-icons/sass.svg';
import redux from '../../assets/developer-icons/logo-redux.png';


function Projects() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

        return (
            <div className="projects-main">
                <h1 data-aos='fade-right' className='projects-main-title'>Projects</h1>
                <div data-aos='fade-left' className="projects-icon-container">
                    <img className="icon" src={html} alt="html"/>
                    <img className="icon" src={css} alt="css"/>
                    <img className="icon" src={javascript} alt="javascript"/>
                    <img className="icon" src={node} alt="node"/>
                    <img className="icon" src={react} alt="react"/>
                    <img className="icon" src={sass} alt="sass"/>
                    <img className="icon" src={redux} alt="redux"/>
                </div>
                <div className="projects-container">
                    <div data-aos='fade-right' className="project-card">
                        <a href="https://youthful-beaver-86231a.netlify.com/">
                            <img src={tictactoe} alt="project" className="projects-img"/>
                        </a>
                        <h3 className="project-title">Tic-Tac-Toe</h3>
                        <p className="project-description">Classic Tic-Tac-Toe. Players alternate turns and when you line up three X's or O'x in row you'll have a winner!</p>
                        <a href="https://github.com/mikebeaudry93/mikes-tic-tac-toe">
                            <img src={github} alt="#" className="github-link"/>
                        </a>
                    </div>
                    <div data-aos='zoom-in' className="project-card">
                        <a href="https://cranky-lamarr-f3677e.netlify.app/">
                            <img src={tasklist} alt="project" className="projects-img"/>
                        </a>
                        <h3 className="project-title">Task List</h3>
                        <p className="project-description">Build your own task list that saves to local storage. Allows you to add and delete tasks, as well as filter tasks.</p>
                        <a href="https://github.com/mikebeaudry93/mikes-task-list">
                        <img src={github} alt="#" className="github-link"/>
                        </a>
                    </div>
                    <div data-aos='fade-right' className="project-card">
                        <a href="https://distracted-borg-6e81db.netlify.app/">
                            <img src={expenseTracker} alt="project" className="projects-img"/>
                        </a>
                        <h3 className="project-title">Money Balance App</h3>
                        <p className="project-description">Tracks your income and expenses. Values from input fields get passed to the components that need them and all fields update dynamically.</p>
                        <a href="https://github.com/mikebeaudry93/expense-tracker-app">
                        <img src={github} alt="#" className="github-link"/>
                        </a>
                    </div>
                    <div data-aos='fade-left' className="project-card">
                        <a href="https://compassionate-northcutt-2baef9.netlify.app/">
                            <img src={quiz} alt="project" className="projects-img"/>
                        </a>
                        <h3 className="project-title">Quiz JS</h3>
                        <p className="project-description">Interactive multiple choice quiz game. Can only continue when you select the right answer. Restarting the game randomizes the questions.</p>
                        <a href="https://github.com/mikebeaudry93/quiz-game">
                        <img src={github} alt="#" className="github-link"/>
                        </a>
                    </div>
                    <div data-aos='zoom-in' className="project-card">
                        <a href="https://pensive-bell-4cd02e.netlify.app">
                            <img src={weatherapp} alt="project" className="projects-img"/>
                        </a>
                        <h3 className="project-title">Weather App</h3>
                        <p className="project-description">Clean weather application. Uses a weather api to gather data from cities around the world. Has module to change the selected city. Selected city saves to local storage. </p>
                        <a href="https://github.com/mikebeaudry93/weather-app">
                        <img src={github} alt="#" className="github-link"/>
                        </a>
                    </div>
                     <div data-aos='fade-left' className="project-card">
                        <a href="https://modest-mirzakhani-b9fb3f.netlify.app/">
                            <img src={cocktail} alt="project" className="projects-img"/>
                        </a>
                        <h3 className="project-title">A-list Cocktail Menu</h3>
                        <p className="project-description">Makes use of The Cocktail DBs api. Fetches drink data and displays it. Has filter capabilites. Can add a drink to a favorites list then remove it. Uses Redux to store state and manipulate it. Made with React. Next steps: Add local storage. </p>
                        <a href="https://github.com/mikebeaudry93/cocktail-finder">
                        <img src={github} alt="#" className="github-link"/>
                        </a>
                    </div>
                </div>
            </div>
        )
}

export default Projects