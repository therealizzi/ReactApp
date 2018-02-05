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

  state = {
    friends
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Hero />
          <Body>
          {this.state.friends.map(friend => (

            <Cardbody 
              image = {friend.image}

            />

            ))}
          </Body>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
