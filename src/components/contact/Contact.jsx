import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="ContactContainer">
        <div className="contactTextContainer">
          <h1>Contact:</h1>
          <ul>
            <a
              href="https://www.linkedin.com/in/kerry-staley-642319100/"
              className="aLink"
            >
              <h3 className="contactText">
                <i className="fab fa-linkedin-in" /> LinkedIn
              </h3>
            </a>
            <a href="mailto:kgstaley78@gmail.com" className="aLink">
              <h3 className="contactText">
                <i className="fas fa-envelope" /> Email
              </h3>
            </a>
            <a href="https://github.com/kgstaley" className="aLink">
              <h3 className="contactText">
                <i className="fab fa-github" /> GitHub
              </h3>
            </a>
            <a
              href="https://www.dropbox.com/s/kqgp53t0u0ku1lv/resume_kgstaleyV2.pdf?dl=0"
              className="aLink"
            >
              <h3 className="contactText">
                <i className="fas fa-address-card" /> Résumé
              </h3>
            </a>
          </ul>
        </div>
      </div>
    );
  };
}

export default Contact;
