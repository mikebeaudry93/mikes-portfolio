import React, {Component} from 'react';

import './App.scss';

import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';

// Components
import  Hero  from './components/hero/Hero';
import About from './components/about/About';
import {Contact} from './components/footer/Contact';
import Projects from './components/projects/Projects';

// link-icons 
import facebook from '../src/assets/link-icons/facebook.svg';
import linkedin from '../src/assets/link-icons/linkedin-black.svg';
import github from '../src/assets/link-icons/github.svg';
import logo from '../src/assets/m-icon.png';


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
  };


  render() {


  return ( 
    <div className="App" name="test2">
      <div className="nav-container">
        <ul className="nav-bar">
          <Link activeClass="active" className="test1 about" to="test2" spy={true} smooth={true} duration={1200}>
            <img className='logo' src={logo} alt="logo"/>
          </Link>

          <div className='nav-links-mid'>
            <li className="about"><Link activeClass="active" className="test1 about" to="test1" spy={true} smooth={true} duration={1200}>About</Link></li>
            <li className="projects"><Link activeClass="active" className="test1 about" to="test3" spy={true} smooth={true} duration={1200}>Projects</Link></li>
            <li className="projects contact-nav"><Link activeClass="active" className="test1 about" to="test4" spy={true} smooth={true} duration={2500}>Contact</Link></li>
          </div>

          <div className='soc-links'>
            <a href="https://www.facebook.com/mikebeaudry93/"><img className='nav-logo-link' src={facebook} alt="facebook"/></a>
            <a href="https://www.linkedin.com/in/michael-beaudry/"><img className='nav-logo-link' src={linkedin} alt="linkedin"/></a>
            <a href="https://github.com/mikebeaudry93"><img className='nav-logo-link' src={github} alt="github"/></a>
        </div>
        </ul>
      </div>
      <Hero/>
        <About />
      <div name="test3"></div>
      <Projects />
      <Contact />
      <div name="test4"></div>
    </div>
  );
  };
}

export default App;
