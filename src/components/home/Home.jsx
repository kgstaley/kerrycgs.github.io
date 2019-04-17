import React from "react";
import AvatarImg from "../../imgs/avatarImg.JPG";
import "./Home.css";

import About from "../about/About";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="HomeContainer">
        <div className="headerContainer">
          <img alt="Kerry Staley" src={AvatarImg} className="bigAvatar" />
          <h1 className="homeHeader">Kerry Staley</h1>
          <h3 className="homeHeader">Full Stack Developer</h3>
        </div>
        <About />
      </div>
    );
  };
}

export default Home;
