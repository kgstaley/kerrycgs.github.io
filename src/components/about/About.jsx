import React from "react";
import "./About.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="AboutContainer">
        <div className="aboutTextContainer">
          <h1 className="aboutMe">About Me:</h1>
          <p className="aboutText">
            Welcome to my website! My name is Kerry Staley and I am a passionate
            full stack developer from San Diego, CA. {"\n"}I received my
            bachelor's degree from the University of California, Santa Barbara
            majoring in Global Studies with an emphasis in Chinese Economics and
            Environmental Impact. However, my true passion and motivation lies
            within the tech industry. I found a passion for technology when I
            was young and taught myself how to code via online courses and my
            surrounding network. To further my programming experience and
            repertoire, I worked for an e-commerce start-up company called
            OutlayR, whose purpose is to connect social media influencers with
            online merchants. During my time with OutlayR, I worked on a team
            with 16 other engineers, practicing Agile / SCRUM methodology. The
            stack that our web-application was built in consisted of ASP.NET
            Core 2.2, Node.js, React.js and SQL Server Management Studio 2017.
          </p>
          <small className="aboutText">17 April 2019</small>
        </div>
      </div>
    );
  };
}

export default About;
