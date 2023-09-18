import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brand from './components/Brand';
import LatestGame from './components/LatestGame';
import Features from './components/Features';
import Shop from './components/Shop';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BackTop from './components/BackTop';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero />
        <Brand />
        <LatestGame />
        <Features />
        <Shop />
        <Blog />
        <Newsletter />
        <Footer />
        <BackTop />
      </React.Fragment>
    );
  }
}

export default App;
