import React, { Component } from "react";

import "./Contact.scss";

import facebook from "../../assets/link-icons/facebook.copy.svg";
import linkedin from "../../assets/link-icons/linkedin.copy.svg";
import github from "../../assets/link-icons/github.copy.svg";

export class Contact extends Component {
  state = {
    showText: false,
  };

  toggleShowText = () => {
    this.setState({
      showText: !this.state.showText,
    });
  };

  render() {
    return (
      <div>
        <div className="contact-container">
          <div className="footer-content-box">
            <div className="footer-link-container">
              <a href="https://www.facebook.com/mikebeaudry93">
                <div
                  onMouseOver={this.toggleShowText}
                  onMouseOut={this.toggleShowText}
                  className="footer-link"
                >
                  {this.state.showText ? (
                    <div className="link-txt">Facebook</div>
                  ) : (
                    ""
                  )}
                  <img className="footer-img" src={facebook} alt="facebook" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/michael-beaudry/">
                <div
                  onMouseOver={this.toggleShowText}
                  onMouseOut={this.toggleShowText}
                  className="footer-link"
                >
                  {this.state.showText ? (
                    <div className="link-txt">LinkedIn</div>
                  ) : (
                    ""
                  )}
                  <img className="footer-img" src={linkedin} alt="linkedin" />
                </div>
              </a>
              <a href="https://github.com/mikebeaudry93">
                <div
                  onMouseOver={this.toggleShowText}
                  onMouseOut={this.toggleShowText}
                  className="footer-link"
                >
                  {this.state.showText ? (
                    <div className="link-txt">Github</div>
                  ) : (
                    ""
                  )}
                  <img className="footer-img" src={github} alt="github" />
                </div>
              </a>
            </div>
            <div className="footer-copyright-box">
              <div className="footer-copyright">© 2020 Michael Beaudry</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
