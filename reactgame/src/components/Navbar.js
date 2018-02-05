import React from "react";

const styles = {
  navbarStyle: {
    position: "fixed",
    width: "100%",
    background: "#3b4f65",
    color: "white",
    boxShadow: " 3px 3px 4px 2px rgb(8,19,40)"
  },
  anchorStyle: {
    float: "center"
  }
};

const Navbar = (props) => (
  <nav style={styles.navbarStyle} className="navbar navbar-light bg-faded">Clicky Game
    <a style={styles.anchorStyle} className="">
      {props.title}
    </a>
    <span>Score: 0 | Top Score: 0</span>
  </nav>
);

export default Navbar;
