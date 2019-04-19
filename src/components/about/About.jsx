import React from "react";
import { Card } from "@material-ui/core";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="AboutContainer">
        <Card>
          <div className="aboutTextContainer">
            <h1>About Me:</h1>
            <p>
              Welcome to my website! My name is Kerry Staley and I am a
              passionate full stack developer from San Diego, CA. I received my
              Bachelor of Arts from the University of California, Santa Barbara
              majoring in Global Studies with an emphasis in Chinese Economics
              and Environmental Impact.
            </p>
            <p>
              However, my true passion and motivation lies within the tech
              industry. I found a passion for technology when I was young and
              taught myself how to code via online courses and my surrounding
              network. To further my programming experience and repertoire, I
              worked for an e-commerce start-up company called OutlayR, whose
              purpose is to connect social media influencers with online
              merchants. During my time with OutlayR, I worked on a team with 16
              other engineers, practicing Agile / SCRUM methodology. The stack
              that our web-application was built in consisted of ASP.NET Core
              2.2, Node.js, React.js and SQL Server Management Studio 2017.
            </p>
            <p>
              Languages I which am familiar with include:{" "}
              <span className="aboutLanguages">Javascript, C#, T-SQL</span>
            </p>
            <small>17 April 2019</small>
          </div>
          <br />
        </Card>
      </div>
    );
  };
}

export default About;
