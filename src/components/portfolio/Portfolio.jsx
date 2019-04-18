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
            <a href="https://outlayr.azurewebsites.net" className="aLink">
              <h3>OutlayR</h3>
            </a>
            <a
              href="https://github.com/kgstaley/personal-site"
              className="aLink"
            >
              <h3>Portfolio Website</h3>
            </a>
            <a href="https://github.com/kgstaley/playlistMe" className="aLink">
              <h3>PlaylistMe</h3>
            </a>
            <a href="https://github.com/kgstaley/journalApp" className="aLink">
              <h3>.DailyJournal.</h3>
            </a>
          </ul>
        </Card>
      </div>
    );
  };
}

export default Portfolio;
