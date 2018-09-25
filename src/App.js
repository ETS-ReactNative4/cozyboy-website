import React, { Component } from 'react';
import CozyBedroomStory from './components/CozyBedroomStory';
import CozyLinks from './components/CozyLinks';
import HomePage from './components/HomePage';
import DividerLine from './components/DividerLine';

import './App.css';

export default class App extends Component {
  render() {
    const  {
      ContentWrapper,
    } = this;

    return (
      <div className="appContainer">
        <CozyBedroomStory />

        <DividerLine />

        <CozyLinks />

        <HomePage />

        <div className="cozyFooter">made by cøzybøy with <span>💙</span></div>
      </div>
    );
  }
}
