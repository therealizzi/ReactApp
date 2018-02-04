import React from "react";

const Cardbody = props => (
  	<div className="card">
    	<span onClick={() => props.removeFriend(props.id)} className="remove">
	    	<div className="img-container"> Card Body
    	  		<img alt={props.name} src={props.image} />
    		</div>
    	</span>
  	</div>
);

export default Cardbody;
