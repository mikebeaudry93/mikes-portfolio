import React, {Component} from 'react';
import './App.css';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';

import ttcimg from './assets/tic-tac-toe.png'
import tasklist from './assets/tasklist.png'

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
          <li className="contact">Contact</li>
        </ul>
      </div>
      <div className="name-container">
        <h1 className="name">MICHAEL BEAUDRY</h1>
        <h5 className="positions">Web Developer / Marketing</h5>
        {/* <div name="test1" className="scroll-to-about"></div> */}
      </div>
      <div className="about-container-main" name="test1">
        <div className="about-container-left"></div>
        <div className="about-container">
            <h3 className="about-title">About Me</h3>
            <p className="about-me"> Western Marketing grad with sales experience but transitioned into being Web Developer to follow my true passion. I love learning new things and I look forward to progressing the world through innovative technologies.</p>
        </div>
      </div>
      <div className="projects-container-main" name="test3">
        <h3 className="projects-title">Projects</h3>
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
        </div>
      </div>
    </div>
  );
  };
}

export default App;
