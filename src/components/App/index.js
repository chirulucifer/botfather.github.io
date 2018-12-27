import React, { Component } from 'react';
import './style.css';
import TopNav from '../TopNav';
import Content from './../Content';
import FootView from './../FootView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Content />
        <FootView />
      </div>
    );
  }
}

export default App;
