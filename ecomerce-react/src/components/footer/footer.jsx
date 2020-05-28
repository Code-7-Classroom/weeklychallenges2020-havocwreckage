import React from "react";

import "./styles.css";

const Footer = () => {
  // TODO: use css grid on the page layout
  return (
    <div>
      <footer class="footer">
        <div class="social">
          <a href="https://facebook.com" class="link facebook" target="_parent">
            <span class="fa fa-facebook-square"></span>
          </a>
          <a href="https://twitter.com/" class="link twitter" target="_parent">
            <span class="fa fa-twitter"></span>
          </a>
          <a
            href="https://plus.google.com/"
            class="link google-plus"
            target="_parent"
          >
            <span class="fa fa-google-plus-square"></span>
          </a>
          <p>2020 &copy; Hyper Machine</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
