import React, {Component} from 'react';
import './App.css';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';

import {Contact} from './components/Contact'
import {Projects} from './components/Projects'

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
      duration: 4000,
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
        {/* <button onClick={() => scroll.scrollToBottom(4000)} className="name-btn">Get In Touch!</button> */}
        <button className="name-btn"><Link activeClass="active" className="test1 about" to="test4" spy={true} smooth={true} duration={2500}>Get In Touch!</Link></button>
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
      <div name="test3"></div>
      <Projects />
      <Contact />
      <div name="test4"></div>
    </div>
  );
  };
}

export default App;
