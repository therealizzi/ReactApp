import React from "react";

const styles = {
  cardStyle: {
    background: "#082c6d",
    color: "white",
    width: "170px",
    height: "170px",
    position: "relative",
    margin: "25px",
    boxShadow: " 3px 3px 4px 2px rgb(8,19,40)"
  },
  imgStyle: {
    width: "60%",
    height: "80%"
  }
};

const Cardbody = props => (
    <button style={styles.cardStyle} >
      <img style={styles.imgStyle} src={props.image} />
    </button>
)

export default Cardbody;