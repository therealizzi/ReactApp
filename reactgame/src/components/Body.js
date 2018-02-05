import React from "react";
import { Container } from "reactstrap";

const styles = {
  body: {
  	height: "125%",
  	width: "80%"
  },
  anchorStyle: {
    float: "center"
  }
};

const Body = (props) => (
  <Container style={styles.body}>
      {props.children}
  </Container>
);

export default Body;
