import React from "react";

const styles = {
  navbarStyle: {
    background: "green"
  },
  anchorStyle: {
    float: "right"
  }
};

const Navbar = () => (
  <nav style={styles.navbarStyle} className="navbar">
    <a style={styles.anchorStyle} href="/">
      Navbar
    </a>
  </nav>
);

export default Navbar;
