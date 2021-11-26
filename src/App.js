import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Tutorial from "./Tutorial";
import CreateTutorial from "./CreateTutorial";
import Explore from "./Explore";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState();

  return (
    <Router>
      <div className="App">
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/tutorials/create/">
              <CreateTutorial currentUser={currentUser} />
            </Route>
            <Route exact path="/tutorials/explore/">
              <Explore />
            </Route>
            <Route path="/tutorials/:id">
              <Tutorial />
            </Route>
            <Route path="/login/">
              <Login setCurrentUser={setCurrentUser} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
