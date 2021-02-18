import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { colors, fonts, mediaQueries } from "./shared/config";
import Header from "./components/Header";
import BlogPage from "./pages/BlogPage";
import ArticleExample from "./pages/ArticleExample";
import matcha from "./images/matcha-latte.PNG";
import LandingPage from "./pages/LandingPage";

import "./App.css";
function AppRouter() {
  return (
    <Router>
      <div className="App">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/" component={Header} />
        </Switch>

        <Route path="/blog/" component={BlogPage} />
        <Route path="/projects/" component={BlogPage} />
        <Route path="/resume/" component={BlogPage} />
        <Route path="/post1/" component={ArticleExample} />
      </div>
    </Router>
  );
}

export default AppRouter;
