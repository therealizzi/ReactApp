import React from "react";

const styles = {
  cardStyle: {
    background: "#5133a4",
    color: "white",
    width: "170px",
    height: "170px",
    position: "relative",
    float: ""
  },
  clickStyle: {
    float: "center"
  }
};


const Cardbody = props => (
  	<div style={styles.cardStyle}>
    	<span onClick={() => props.removeFriend(props.id)} className="remove">
	    	<div className="img-container"> Card Body
    	  		<img alt={props.name} src={props.image} />
    		</div>
    	</span>
  	</div>
);

export default Cardbody;
