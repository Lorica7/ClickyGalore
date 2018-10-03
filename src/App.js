import React, { Component } from 'react';
import Game from './components/Game';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import {Provider} from './context';

export default class App extends Component {
  render() {
    return (
     <Provider>
     <div className= "App">
        <Welcome />
        <Game />
        <Counter/>
      </div>
      </Provider>
    );
  }
}


