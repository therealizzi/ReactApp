import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Body from './components/Body';
import Cardbody from './components/Cardbody';
import Footer from './components/Footer';

class App extends Component {
  render() {
    const score = "You're score is: "
    const scoreVal = "5"

    return (
      <Wrapper>
        <Navbar title={score + scoreVal}/>
        <Hero />
          <Body>
            <Cardbody />
          </Body>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
