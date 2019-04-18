import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="ContactContainer">
        <h1 className="contactH">Contact:</h1>
        <ul>
          <a
            href="https://www.linkedin.com/in/kerry-staley-642319100/"
            className="contactA"
          >
            <h3 className="contactText">
              <i class="fab fa-linkedin-in" /> LinkedIn
            </h3>
          </a>
          <a href="mailto:kgstaley78@gmail.com" className="contactA">
            <h3 className="contactText">
              <i class="fas fa-envelope" /> Email
            </h3>
          </a>
          <a href="https://github.com/kgstaley" className="contactA">
            <h3 className="contactText">
              <i class="fab fa-github" /> GitHub
            </h3>
          </a>
        </ul>
      </div>
    );
  };
}

export default Contact;
