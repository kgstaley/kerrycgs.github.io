import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography
} from "@material-ui/core";
import Spa from "@material-ui/icons/Spa";
import * as styles from "./navbar.module.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className={styles.root}>
        <AppBar position="static" color="#79D9F3">
          <Toolbar>
            <IconButton className={styles.menuButton}>
              <Spa />
            </IconButton>
            <Typography variant="h6" color="inherit" className={styles.grow}>
              Kerry Staley
            </Typography>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
}

export default Navbar;
