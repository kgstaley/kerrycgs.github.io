import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
  withStyles,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/MenuIcon";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="NavbarContainer">
        <AppBar>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Kerry Staley
            </Typography>
            <Button>Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
}

export default withRouter(Navbar);
