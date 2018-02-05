import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";

const bgImage = "/chicagoImg.jpg";

const styles = {
  jumbotron: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "110%"
  },
  letters: {
    marginTop: "20px",
  	color: "white",
  	textAlign: "center"
  }
};

const Hero = () => {
	return (
	  <div>
	    <Jumbotron fluid style={styles.jumbotron} >
	    	<Container fluid>
		    	<h1 className="display-3" style={styles.letters}>Clicky Game!</h1>
        		<hr className="my-2" />
            	<p style={styles.letters}>Click on an image to earn points, but don't click on any more than once!</p>
		    </Container>
		</Jumbotron>
	  </div>
	)
};

export default Hero;
