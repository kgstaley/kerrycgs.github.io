import React from "react";
import { Card } from "@material-ui/core";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="PortfolioContainer">
        <Card>
          <h1>Portfolio:</h1>
          <ul>
            <h3>OutlayR</h3>
            <h3>Portfolio Website</h3>
          </ul>
        </Card>
      </div>
    );
  };
}

export default Portfolio;
