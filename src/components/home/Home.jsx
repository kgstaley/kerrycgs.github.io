import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import AvatarImg from "../../imgs/avatarImg.JPG";
import * as styles from "./home.module.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="HomeContainer">
        <h1>Welcome to Kerry Staley's Website</h1>
        <Grid container justify="center" alignItems="center">
          <Avatar
            alt="Kerry Staley"
            src={AvatarImg}
            className={styles.bigAvatar}
          />
        </Grid>
      </div>
    );
  };
}

export default Home;
