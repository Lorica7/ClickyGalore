import React from 'react';
import Card from './Card';
import React, { Component } from 'react';


class Game extends Component {
    
  changeClicked = event => {
    console.log(event)
    console.log("What???");
    if (this.state.heroes.value = 1) {
      alert("Game Over")
    } else {
      this.dispatch(action);
    };
  };
  reducer = (state, action) => {
    var arrayH = this.state.heroes;
    switch (action.type) {
      case 'SHUFFLE_HANDLER':
        return {
          ...state,
          heroes: shuffle(arrayH),
          score: handleIncrement()
        }
      default:
    }; return state;
  };

  shuffle = (heroes) => {
    let heroes = this.state.heroes;
    var j, x, i;
    for (i = heroes.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = heroes[i];
      heroes[i] = heroes[j];
      heroes[j] = x;
    };
  };

  handleIncrement = () => {
    this.setState({ count: this.state.score + 1 });
  };

  handleReset = () => {
    this.setState({ score: 0 });
  }

  state = {
    heroes: [
      {
        "id": 1,
        "name": "Myrrh",
        "image": "/images/Myrrh.png",
        "clicked": "false"
      },

      {
        "id": 2,
        "name": "Lyn",
        "image": "/images/BraveLyn.png",
        "clicked": "false"
      },

      {
        "id": 3,
        "name": "Celica",
        "image": "/images/Celica.png",
        "clicked": "false"
      },

      {
        "id": 4,
        "name": "Ike",
        "image": "/images/Ike.png",
        "clicked": "false"
      },

      {
        "id": 5,
        "name": "Azura",
        "image": "/images/SpAzura.png",
        "clicked": "false"
      },

      {
        "id": 6,
        "name": "Quan",
        "image": "/images/Quan.png",
        "clicked": "false"
      },

      {
        "id": 7,
        "name": "Ninian",
        "image": "/images/Ninian.png",
        "clicked": "false"
      },

      {
        "id": 8,
        "name": "Linus",
        "image": "/images/Linus.png",
        "clicked": "false"
      },


      {
        "id": 9,
        "name": "Robin",
        "image": "/images/FellRobin.png",
        "clicked": "false"
      },

      {
        "id": 10,
        "name": "Fae",
        "image": "/images/Fae.png",
        "clicked": "false"
      },

      {
        "id": 11,
        "name": "Hinoka",
        "image": "/images/Hinoka1.png",
        "clicked": "false"
      },

      {
        "id": 12,
        "name": "Hector",
        "image": "/images/Hector.png",
        "clicked": "false"
      }
    ],
    score: 0,

    dispatch: action =>
      this.setState(state => reducer(state, action)),



  };

  render() {

    return (

      <div className="container">

        <div className="col-sm-4">
          {state.heroes.map(hero =>
            <Card
              key={Card.id}
              image={state.heroes[i].image}
              id={state.heroes[i].id}
              value={state.heroes[i].value}
              onClick={this.changeClicked} />
          )}
        </div>
        <div className="card text-center">
          <div className="card-header bg-primary text-white">
            Click Counter!
        </div>
          <div className="card-body">
            <p className="card-text">Click Count: {this.state.score}</p>
          </div>
        </div>
      </div>
    )
  }
};
export default Game;


