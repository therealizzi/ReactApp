import React from "react";

const styles = {
  navbarStyle: {
    position: "fixed",
    zIndex: "1",
    width: "100%",
    background: "#3b4f65",
    color: "white",
    boxShadow: " 1px 1px 1px 1px rgb(8,19,40)"
  },
  anchorStyle: {
    float: "center"
  }
};

const Navbar = (props) => (
  <nav style={styles.navbarStyle} className="navbar navbar-light bg-faded">Clicky Game
    <a style={styles.anchorStyle} className="">
    </a>
    <span>Score: {props.tries} | Top Score: {props.highscore}</span>
  </nav>
);

export default Navbar;
