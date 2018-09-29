import React, { Component } from 'react';
import Game from './components/Game';
import Welcome from './components/Welcome';
import Counter from './components/Counter';


export default class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Game />
        <Counter/>
      </div>
    );
  }
}


