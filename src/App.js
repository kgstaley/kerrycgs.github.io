import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
// import "./App.css";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
