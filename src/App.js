import React, { Component } from 'react';
import logo from './logo.svg';
import './css/styles.css';
import PortfolioFixed from './portafolio-fixed/portafolioFixed.js';
import PortfolioContent from './portafolio-content/portafolioContent.js'


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
