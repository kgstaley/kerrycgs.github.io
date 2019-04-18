import React from "react";
import { Card } from "@material-ui/core";
import "./Portfolio.css";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="PortfolioContainer">
        <Card>
          <h1 className="portFolioH">Portfolio:</h1>
          <ul>
              <h3 className="portfolioText">OutlayR</h3>
              <h3 className="portfolioText">Portfolio Website</h3>
          </ul>
        </Card>
      </div>
    );
  };
}

export default Portfolio;
