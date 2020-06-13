import React, {Component} from 'react';
import './App.css';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';

import {Contact} from './components/Contact'

import ttcimg from './assets/tic-tac-toe.png'
import tasklist from './assets/tasklist.png'
import expenseTracker from './assets/expense-tracker.png'
import quiz from './assets/js-quiz.png'
import car from './assets/car.jpg'

export class App extends Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
  return (
    <div className="App" name="test2">
      <div className="nav-container">
        <ul className="nav-bar">
          <li className="home"><Link activeClass="active" className="test1 about" to="test2" spy={true} smooth={true} duration={1200}>Home</Link></li>
          <li className="about"><Link activeClass="active" className="test1 about" to="test1" spy={true} smooth={true} duration={1200}>About</Link></li>
          <li className="projects"><Link activeClass="active" className="test1 about" to="test3" spy={true} smooth={true} duration={1200}>Projects</Link></li>
          <li className="projects contact-nav"><Link activeClass="active" className="test1 about" to="test4" spy={true} smooth={true} duration={2500}>Contact</Link></li>
        </ul>
      </div>
      <div className="name-container">
        <h1 className="name">MICHAEL BEAUDRY</h1>
        <h5 className="positions">Web Developer / Marketing</h5>
        {/* <div name="test1" className="scroll-to-about"></div> */}
      </div>
      <div className="about-container-main" name="test1">
        <div className="about-container-left">
          <div className="black-box"></div>
          <img className="car-image" src={car} alt="car"/>
        </div>
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <p className="about-me"> Western University Marketing grad with sales experience but transitioned into being a Web Developer through Brainstation to follow my true passion. I love learning new things and I look forward to advancing the world through innovative technologies.</p>
        </div>
      </div>
      <div className="projects-big-container">
        <div className="projects-container-main" name="test3">
          <div className="projects-title-container">
          <h1 className="projects-title">Projects</h1>
          </div>
          <div className="projects-container">
            <div className="box">
              <div className="imgbox">
                <img className="projects-img" src={ttcimg}alt="p1"/>
              </div>
              <a href="https://youthful-beaver-86231a.netlify.com/">
                <div className="caption">
                  <h5 className="caption-h">Classic Tic-Tac-Toe</h5>
                  <p className="caption-p">React/Javascript/HTML/SCSS</p>
                </div>
              </a>
            </div>
            <div className="box">
              <div className="imgbox">
                <img className="projects-img" src={tasklist} alt="p1"/>
              </div>
              <a href="https://cranky-lamarr-f3677e.netlify.app/">
                <div className="caption">
                  <h5 className="caption-h">Task List</h5>
                  <p className="caption-p">Javascript/HTML/CSS</p>
                </div>
              </a>
            </div>
            <div className="box">
              <div className="imgbox">
                <img className="projects-img" src={expenseTracker} alt="p1"/>
              </div>
              <a href="https://distracted-borg-6e81db.netlify.app/">
                <div className="caption">
                  <h5 className="caption-h">Expense Tracker</h5>
                  <p className="caption-p">React/Javascript/HTML/CSS</p>
                </div>
              </a>
            </div>
            <div className="box">
              <div className="imgbox">
                <img className="projects-img" src={quiz} alt="p1"/>
              </div>
              <a href="https://compassionate-northcutt-2baef9.netlify.app/">
                <div className="caption">
                  <h5 className="caption-h">JS Quiz</h5>
                  <p className="caption-p">Javascript/HTML/CSS</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <div name="test4"></div>
    </div>
  );
  };
}

export default App;
