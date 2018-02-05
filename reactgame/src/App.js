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
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Hero></Hero>
        <Body>
          <Cardbody>
          </Cardbody>
        </Body>
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
