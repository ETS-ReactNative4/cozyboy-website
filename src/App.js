import React, { Component } from 'react';
import CozyLinks from './components/CozyLinks';
import HomePage from './components/HomePage';

import './App.css';

export default class App extends Component {
  render() {
    const  {
      ContentWrapper,
    } = this;

    return (
      <div className="appContainer">
        <CozyLinks />
        <HomePage />

        <div className="cozyFooter">made by cøzybøy with 💙</div>
      </div>
    );
  }
}
