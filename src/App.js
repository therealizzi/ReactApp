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

class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    friends,
    score: 0,
    highscore: 0,
    clickedImg: [],
    headline: "Click to play!"
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
    if(this.state.clickedImg.indexOf(id) !== -1) {
    let hs = this.state.highscore < this.state.score ? this.state.score : this.state.highscore
     this.setState({
        score: 0,
        clickedImg: [],
        headline: "You lose!",
        highscore: hs
      })
    }
    else{
        this.state.clickedImg.push(id);
        let score = this.state.score + 1;
        let hs = this.state.highscore < score ? score : this.state.highscore
        this.setState({
          score: score,
          headline: "Keep playing!",
          highscore: hs
        })
    }
  }

  handleClick(id) {
    this.shuffle();
    this.gameLogic(id);
  }

  render() {
    return (
      <Wrapper>
        <Navbar tries = {this.state.score} headline = {this.state.headline} highscore = {this.state.highscore}/>
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
