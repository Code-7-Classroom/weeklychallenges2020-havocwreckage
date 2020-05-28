import React from "react";
import { Link } from "react-router-dom";

import Intel from '../assets/img/christian-wiediger-c3ZWXOv1Ndc-unsplash.jpg'
import Amd from '../assets/img/christian-wiediger-Htfy7TaDBgo-unsplash.jpg'
import "../components/home/styles.css";

const Home = () => {
  return (
    <>
      <main class="hero">
        <h1 class="hero-text">
          Hyper Machine Building for the Future of Gaming
        </h1>
      </main>
      <div class="only">
        <div class="container">
          <div class="cell">
            <Link to="/products">
              <img
                src={Intel}
                alt="AMD chipset"
              />
              <p>AMD Power Machine</p>
              </Link>
          </div>
          <div class="cell">
          <Link to="/products">
              <img
                src={Amd}
                alt="Intel Chipset"
              />
              <p>Intel Power Machine</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
