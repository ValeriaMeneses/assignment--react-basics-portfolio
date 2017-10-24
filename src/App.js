import React, { Component } from 'react';
import logo from './logo.svg';
import './css/styles.css';
import PortfolioFixed from './components/portafolioFixed.js';
import PortfolioContent from './components/portafolioContent.js'


class AppContainer extends Component {
  render() {
    return (
      <div id="app-container">
        <PortfolioFixed />
        <PortfolioContent />
      </div>
    );
  }
}

export default AppContainer;
