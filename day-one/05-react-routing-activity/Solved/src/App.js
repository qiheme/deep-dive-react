import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Album from "./components/pages/Album";
import Blog from "./components/pages/Blog";
import Pricing from "./components/pages/Pricing";
import Dashboard from "./components/pages/Dashboard";

import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Album} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/pricing" component={Pricing} />
        {/* Bonus */}
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
