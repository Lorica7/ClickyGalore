
import Card from './Card';
import {React, Component } from 'react';
import heroes from "./assets/heroes.json"

class Game extends Component {

  state = {
    heroes: heroes,
    score: 0,
  };

  changeClicked = id => {

    if (this.state.heroes.clicked = false) {
      this.handleIncrement(id)
      // shuffleCards()
    } else {
      this.handleReset()
    }
  };



  // shuffleCards = (heroes) => {
  //   let heroes = this.state.heroes;
  //   var j, x, i;
  //   for (i = heroes.length - 1; i > 0; i--) {
  //     j = Math.floor(Math.random() * (i + 1));
  //     x = heroes[i];
  //     heroes[i] = heroes[j];
  //     heroes[j] = x;
  //   };
  // };

  handleIncrement = (id) => {
    let heroes = this.state.heroes;
    this.setState({ score: this.state.score + 1 });
    heroes.forEach(() => {
      if (id = heroes.id)
        this.setState({ value: this.state.friends.clicked = true });
    })

  };

  handleReset = () => {
    this.setState({ score: 0 });
    alert("You've already clicked that one. Try Again")
    // shuffleCards()
  };


  render() {

    return (

      <div className="container">

        <div className="col-sm-4">
          {this.state.heroes.map( hero => (
            <Card
              key={hero.id}
              image={hero.image}
              id={hero.id}
              clicked={hero.clicked}
              onClick={this.changeClicked}
            />
          )
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


