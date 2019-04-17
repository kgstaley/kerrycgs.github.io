import React from "react";
import { withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography
} from "@material-ui/core";
import Spa from "@material-ui/icons/Spa";
import "./Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  historyPush = route => {
    this.props.history.push(route);
  };

  render = () => {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className="menuButton"
              onClick={() => this.historyPush(`/`)}
            >
              <Spa />
            </IconButton>
            <Typography variant="h6" color="inherit" className="grow">
              Kerry Staley
            </Typography>
            <Button
              color="inherit"
              onClick={() => this.historyPush(`/contact`)}
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
