import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";

import "./App.scss";

class App extends React.Component {
  state = {
    isDarkTheme: false,
  };

  toggleThemeHandler = () => {
    this.setState((prevState) => ({
      isDarkTheme: !prevState.isDarkTheme,
    }));
  };

  render() {
    const { isDarkTheme } = this.state;

    return (
      <Router>
        <div className={`countries-app ${isDarkTheme ? "dark-mode" : ""}`}>
          <Header isDark = {isDarkTheme} toggleTheme={ this.toggleThemeHandler}/>
          <Switch>
            <Route exact path="/">
              {() => "listing page"}
            </Route>
            <Route path="/details">{() => "details"}</Route>

            <Route path="*">{() => "not found"}</Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
