import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power2 } from "gsap";

import "./Hero.scss";

import cover from "../../assets/images/a-shooting.jpg";

function Hero() {
  let app = useRef(null);
  let image = useRef(null);
  let content = useRef(null);
  let slider = useRef(null);

  let tl = new TimelineLite();

  useEffect(() => {
    const contentImage = image;
    const contentSlider = slider;

    tl.fromTo(
      contentImage,
      1,
      { height: "0%" },
      { height: "65%", ease: Power2.easeInOut }
    )
      .fromTo(
        contentImage,
        1.2,
        { width: "100%" },
        { width: "85%", ease: Power2.easeInOut }
      )
      .fromTo(
        contentSlider,
        1.2,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeInOut }
      )
      .from(content, 1.2, { y: 20, opacity: 0, ease: Power2.easeInOut }, 2.1);

    TweenMax.to(app, 0, { css: { visibility: "visible" } });
  });

  return (
    <div className="hero-container">
      <div className="hero" ref={(el) => (app = el)}>
        <img
          className="image"
          src={cover}
          alt="shooting"
          ref={(el) => (image = el)}
        />
        <div className="hero-content" ref={(el) => (content = el)}>
          <h1 className="hero-title">Hi.</h1>
          <h4 className="hero-description">
            My name is <span className="d-name">Mike</span>, and I'm a{" "}
            <span className="design">Front-end Developer.</span>
          </h4>
        </div>
      </div>

      <div className="slider" ref={(el) => (slider = el)}></div>
    </div>
  );
}

export default Hero;
