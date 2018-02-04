import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Body from './components/Body';
import Cardbody from './components/Cardbody';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Jumbotron></Jumbotron>
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
