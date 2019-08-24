import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./Store";
import StarWars from "./components/StarWars";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <StarWars />
      </div>
    </Provider>
  );
}

export default App;
