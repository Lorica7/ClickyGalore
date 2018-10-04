import React, { Component } from 'react';
import Game from './components/Game';
import Welcome from './components/Welcome';



export default class App extends Component {
  render() {
    return (
     
     <div className= "App">
        <Welcome />
        <Game />
        
      </div>
     
    );
  }
}


