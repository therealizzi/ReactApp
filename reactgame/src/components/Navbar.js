import React from "react";

const styles = {
  navbarStyle: {
    background: "#5133a4",
    color: "white"
  },
  anchorStyle: {
    float: "center"
  }
};

const Navbar = () => (
  <nav style={styles.navbarStyle} className="navbar navbar-light bg-faded">Navbar
    <a style={styles.anchorStyle} className="">
      You guessed correctly
    </a>
    <span>Score: 0 | Top Score: 0</span>
  </nav>
);

export default Navbar;
