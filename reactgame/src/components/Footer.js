import React from "react";

const styles = {
  footer: {
    background: "#5133a4",
    color: "white",
    height: "50px",
    position: "relative",
    float: ""
  },
  clickStyle: {
    float: "center"
  }
};

const Footer = () => (
  <div style={styles.footer}>
    <a>
      Clicky Game!
    </a>
  </div>
);

export default Footer;
