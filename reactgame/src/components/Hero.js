import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";

const Hero = () => {
	return (
	  <div>
	    <Jumbotron fluid>
	    	<Container fluid>
		    	<h1 className="display-3">Clicky Game!</h1>
        		<hr className="my-2" />
            	<p>Click on an image to earn points, but don't click on any more than once!</p>
		    </Container>
		</Jumbotron>
	  </div>
	)
};

export default Hero;
