import React, { Component } from 'react'

// Images 
import tictactoe from '../assets/tic-tac-toe.png'
import tasklist from '../assets/tasklist.png'
import expenseTracker from '../assets/expense-tracker.png'
import quiz from '../assets/quizpic.png'
import weatherapp from '../assets/weather-app1.png'
import github from '../assets/github2.jpg'

// Icons
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.svg'
import node from '../assets/node js.png'
import react from '../assets/react.png'
import sass from '../assets/sass.svg'


export class Projects extends Component {
    render() {
        return (
            <div className="projects-main">
                <h1 className='projects-main-title'>Projects</h1>
                <div className="projects-icon-container">
                    <img className="icon" src={html} alt="html"/>
                    <img className="icon" src={css} alt="css"/>
                    <img className="icon" src={javascript} alt="javascript"/>
                    <img className="icon" src={node} alt="node"/>
                    <img className="icon" src={react} alt="react"/>
                    <img className="icon" src={sass} alt="sass"/>
                </div>
                <div className="projects-container">
                    <div className="project-card">
                        <a href="https://youthful-beaver-86231a.netlify.com/">
                            <img src={tictactoe} alt="project" className="projects-img"/>
                        </a>
                        <h3 className="project-title">Tic-Tac-Toe</h3>
                        <p className="project-description">Classic Tic-Tac-Toe. Players alternate turns and when you line up three X's or O'x in row we'll have a winner!</p>
                        <a href="https://github.com/mikebeaudry93/mikes-tic-tac-toe">
                            <img src={github} alt="#" className="github-link"/>
                        </a>
                    </div>
                    <div className="project-card">
                        <a href="https://cranky-lamarr-f3677e.netlify.app/">
                            <img src={tasklist} alt="project" className="projects-img"/>
                        </a>
                        <h3 className="project-title">Task List</h3>
                        <p className="project-description">Build your own task list that saves to local storage. Allows you to add and delete tasks, as well as filter tasks.</p>
                        <a href="https://github.com/mikebeaudry93/mikes-task-list">
                        <img src={github} alt="#" className="github-link"/>
                        </a>
                    </div>
                    <div className="project-card">
                        <a href="https://distracted-borg-6e81db.netlify.app/">
                            <img src={expenseTracker} alt="project" className="projects-img"/>
                        </a>
                        <h3 className="project-title">Money Balance App</h3>
                        <p className="project-description">Tracks your income and expenses. Values from input fields get passed to the components that need them and all fields update dynamically.</p>
                        <a href="https://github.com/mikebeaudry93/expense-tracker-app">
                        <img src={github} alt="#" className="github-link"/>
                        </a>
                    </div>
                    <div className="project-card">
                        <a href="https://compassionate-northcutt-2baef9.netlify.app/">
                            <img src={quiz} alt="project" className="projects-img"/>
                        </a>
                        <h3 className="project-title">Quiz JS</h3>
                        <p className="project-description">Interactive multiple choice quiz game. Can only continue when you select the right answer. Restarting the game randomizes the questions.</p>
                        <a href="https://github.com/mikebeaudry93/quiz-game">
                        <img src={github} alt="#" className="github-link"/>
                        </a>
                    </div>
                    <div className="project-card">
                        <img src={weatherapp} alt="project" className="projects-img"/>
                        <h3 className="project-title">Weather App</h3>
                        <p className="project-description">Clean weather application. Uses a weather api to gather data from cities around the world. Has module to change the selected city. Selected city saves to local storage. </p>
                        <a href="https://github.com/mikebeaudry93/weather-app">
                        <img src={github} alt="#" className="github-link"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
