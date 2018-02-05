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
    // float: "center"
  }
};

export default class Cardbody extends React.Component {
  
  constructor() {
    super()
    this.state = {count: 3};
  }

  onButtonPress = (type) => {
    this.setState(prevState => { 
      return { count: type == 'add' ? prevState.count + 1 : prevState.count -1 }
    })
  }

  render() {
    return (
    	<div >
        <div className="img-container" >Count: {this.state.count}</div>
      	<button onClick={this.onButtonPress.bind(this, 'add')} value='add' className="remove" style={styles.cardStyle}>Increment</button>
        <button onClick={this.onButtonPress.bind(this, 'sub')} value='sub' className="remove" style={styles.cardStyle}>Decrement</button>
   	</div>
    )
  }
}
