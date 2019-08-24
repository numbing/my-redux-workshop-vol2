import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./Store";
import StarWars from "./components/StarWars";
import Weather from "./components/Weather";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={StarWars} />
            <Route exact path="/weather" component={Weather} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
