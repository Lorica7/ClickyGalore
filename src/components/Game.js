
import Card from './Card';
import React, { Component } from 'react';
import heroes from "../assets/heroes.json"

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: heroes,
      score: 0,
    };

    this.setState = this.setState.bind(this);
  }



  changeClicked = id => {
    let hero = this.state.heroes[id - 1];

    console.log(hero)
    if (hero.clicked === false) {
      this.scoreUp()
      this.handleIncrement(id)
        .then((heroesCopy) => {
          this.setState({ heroes: heroesCopy })
        })
        .then(() => {
          return this.shuffleCards()
        })
        .then(() => {
          console.log("shuffled")
        })
    } else if (hero.clicked === true) {
      this.handleReset()
    };
  }


  shuffleCards = () => {
    return new Promise(function (resolve, reject) {
      var j, x, i;
      for (i = heroes.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = heroes[i];
        heroes[i] = heroes[j];
        heroes[j] = x;
        resolve(heroes)
      };
    });
  }

  scoreUp = () => {
    this.setState({ score: this.state.score + 1 });
  }

  handleIncrement = (id) => {
    let heroes = this.state.heroes;
    let heroesCopy = JSON.parse(JSON.stringify(heroes))
    return new Promise(function (resolve, reject) {
      for (let i = 0; i < heroes.length; i++) {
        if (id === heroes[i].id) {
          heroesCopy[id - 1].clicked = true
          console.log("Matching ID!")
        } else console.log("no match")
      }
      resolve(heroesCopy)
    })
  }

  handleReset = () => {
    let heroes = this.state.heroes;
    this.setState({ score: 0 });
    this.setState(heroes.clicked = false)
    alert("You've already clicked that one. Try Again")
    this.shuffleCards(heroes)
  }


  render() {

    return (

      <div className="container">

        <div className="col-sm-4">
          {this.state.heroes.map(hero => (
            <Card
              key={hero.id}
              image={hero.image}
              id={hero.id}
              clicked={hero.clicked}
              changeClicked={this.changeClicked.bind(this)}
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


