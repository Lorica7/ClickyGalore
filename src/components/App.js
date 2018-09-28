import React, { Component } from 'react';

import '../assets/App.css';

//********************** cannot click a card more than once!..... must keep track of cards that you clicked
// user clicks a card....then run a shuffle function

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React, {Component} from 'react';
import Game from './components/Game';

export default class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}


