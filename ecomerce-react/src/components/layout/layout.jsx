import React from "react";

import "./styles.css";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        {props.children}
      </main>
      <Footer></Footer>
    </>
    // <div className="grid">
    //   <header>
    //     <Navbar />
    //   </header>

    //   <aside className="sidebar-left">Left Sidebar</aside>

    //   <article>{props.children}</article>

    //   <aside className="sidebar-right">Right Sidebar</aside>

    //   <footer>
    //     <Footer />
    //   </footer>
    // </div>
  );
};

export default Layout;
