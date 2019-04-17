import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="FooterContainer">
        <p>Kerry Staley ©2019</p>
      </div>
    );
  };
}

export default Footer;
