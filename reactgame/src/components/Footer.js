import React from "react";

const styles = {
  footer: {
    background: "#3b4f65",
    color: "white",
    height: "30px",
    position: "relative",
    float: "",
    boxShadow: " -3px -3px 10px 10px rgb(8,19,40)"
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
