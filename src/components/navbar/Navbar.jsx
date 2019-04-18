import React from "react";
import { withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography
} from "@material-ui/core";
import "./Navbar.css";

import $ from "jquery";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  historyPush = route => {
    this.props.history.push(route);
    if (route === `/#contact`) {
      this.scrollToElement(".ContactContainer");
    } else if (route === `/#portfolio`) {
      this.scrollToElement(".PortfolioContainer");
    } else if (route === `/`) {
      this.scrollToElement(".headerContainer");
    }
  };

  scrollToElement = el => {
    if (el === ".ContactContainer") {
      window.scrollTo(0, 1000);
    } else {
      window.scrollTo(0, $(`${el}`).offsetTop);
    }
  };

  render = () => {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className="menuButton"
              onClick={() => this.historyPush(`/`)}
              color="secondary"
            >
              <i className="fas fa-coffee" />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className="grow"
              onClick={() => this.historyPush(`/`)}
            >
              Kerry Staley
            </Typography>
            <Button
              color="inherit"
              onClick={() => this.historyPush(`/#resume`)}
            >
              Download Résumé
            </Button>
            <Button
              color="inherit"
              onClick={() => this.historyPush(`/#contact`)}
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
}

export default withRouter(Navbar);
