import React from "react";

const styles = {
  cardStyle: {
    background: "#082c6d",
    color: "white",
    width: "170px",
    height: "170px",
    position: "relative",
    margin: "20px",
    boxShadow: " 3px 3px 4px 2px rgb(8,19,40)"
  },
  clickStyle: {
    float: "center"
  }
};

var attempt = 0;

const Cardbody = props => (
  	<div >
    	<button onClick={() => {attempts: attempt++}} className="remove" style={styles.cardStyle}>
	    	<div className="img-container" > Card Body
    	  		<img alt={props.name} src={props.image} />
        </div>
      </button>
  	</div>
);

export default Cardbody;
