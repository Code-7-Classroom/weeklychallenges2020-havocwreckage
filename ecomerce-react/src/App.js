import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/layout/layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
// import Logo from './assets/img/logo.png';
// import Photo from './assets/img/Ibuypower-pro-prebuilt.jpg';
// import Ibuy from "./assets/img/Ibuypower-pro-prebuilt.jpg";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div style={{ padding: "128px 20px 20px" }}>
      <Router>
        <Switch>
          <Route path="/contact">
            <Layout>
              <Contact />
            </Layout>
          </Route>
          <Route path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
