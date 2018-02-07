import React from "react";

const styles = {
  cardStyle: {
    background: "#082c6d",
    color: "white",
    width: "170px",
    height: "170px",
    position: "relative",
    margin: "25px",
    boxShadow: "1px 1px 1px -1px rgb(8,19,40)"
  },
  imgStyle: {
    width: "70%",
    height: "90%"
  }
};

const Cardbody = props => (
    <button style={styles.cardStyle} onClick={props.scoreadd} >
      <img style={styles.imgStyle} src={props.image} />
    </button>
)

export default Cardbody;