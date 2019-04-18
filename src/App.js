import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

import "./App.css";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Route path="/" component={Home} />
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
