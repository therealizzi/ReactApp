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

class App extends Component {

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

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.shuffle();
    this.setState({ score: this.state.score + 1 });
    console.log('Click happened');
    console.log(this.state.score);
    this.setState({ highscore: this.state.score + 1});
  }

  state = {
    friends,
    score,
    highscore
  };

  render() {
    return (
      <Wrapper>
        <Navbar tries = {this.state.score} highscore = {this.state.highscore}/>
        <Hero />
          <Body>
          {this.state.friends.map(friend => (
            <Cardbody image = {friend.image} scoreadd = {this.handleClick} />
            ))}
          </Body>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
