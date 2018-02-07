import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Body from './components/Body';
import Cardbody from './components/Cardbody';
import Footer from './components/Footer';
import friends from './components/friends.json';

let score = 0;
let highscore = 0;
let clickedImg = [];

class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    friends,
    score,
    highscore
  };

  shuffle() {
      // shuffles the friends
    let currentIndex = friends.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = friends[currentIndex];
      friends[currentIndex] = friends[randomIndex];
      friends[randomIndex] = temporaryValue;
    }
    return friends;
  }  

  gameLogic(id) {
    console.log(id);
    console.log("friends.id" + this.state.id);
    for (let i=0; i<clickedImg.length; i++){
      if (friends.id === clickedImg[i]) {
        this.setState({ score: 0});
      } 
      else {
        clickedImg.push(this.state.friends.id);
      }
    }
  }

  handleClick(id) {
    this.shuffle();
    this.gameLogic(id);
    this.setState({ score: this.state.score + 1 });
    this.setState({ highscore: this.state.score + 1});
  }

  render() {
    return (
      <Wrapper>
        <Navbar tries = {this.state.score} highscore = {this.state.highscore}/>
        <Hero />
          <Body>
          {this.state.friends.map(friend => (
            <Cardbody image = {friend.image} id = {friend.id} scoreadd = {this.handleClick} />
            ))}
          </Body>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
