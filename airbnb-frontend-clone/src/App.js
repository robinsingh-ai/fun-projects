import React from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import UniqueSearchPage from "./components/UniqueSearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/search">
            <SearchPage />
          </Route>

          <Route exact path="/uniquestay">
            <UniqueSearchPage />
          </Route>
        </Switch>
        <Footer />

      
      </Router>
    </div>
  );
}

export default App;
