import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="flex-header">
          <div className="flex-header-top">
            <div>Name</div>
            <input type="text" placeholder="Search"></input>
            <a href="#account">Your Account</a>
          </div>
          <div className="flex-header-bot">
            <div>Creighton University</div>
            <a href="#mission">Our Mission</a>
            <a href="#inspri">Instructions &amp; Pricing</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#cart">Cart</a>
          </div>
        </div>
        <div className="flex-info-container">
          <div className="flex-info" id="about">
            <h1>About Us</h1>
            <div>We are LyberX, your personal bookstore</div>
          </div>
          <div className="flex-info" id="mission">
            <h1>Our Mission</h1>
            <div>We provide a safe and easy environment for books</div>
          </div>
          <div className="flex-info" id="inspri">
            <h1>Instructions and Pricing</h1>
            <div>This thing costs 10 million usd</div>
          </div>
          <div className="flex-info" id="contact">
            <h1>Contact Us</h1>
            <div>yeah call khae</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;