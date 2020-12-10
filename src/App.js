import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DisplayBars from "./components/displayBars/displayBars";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <DisplayBars />
          </Route>

          {/* Use any routing here */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
