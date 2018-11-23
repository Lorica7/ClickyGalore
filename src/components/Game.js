
import Card from './Card';
import React, { Component } from 'react';
import heroes from "../assets/heroes.json"

class Game extends Component {

  state = {
    heroes: heroes,
    score: 0,
  };

  changeClicked = id => {
    let hero = this.state.heroes[id - 1];
    let heroStatus = hero.clicked
    let heroes = this.state.heroes
    console.log(hero)
    if (hero.clicked === false) {
      this.handleIncrement(id)
      this.componentDidUpdate(heroStatus)
      
      //// all this and componentDidUpdate is just to call shuffleCards synchronously, AFTER the incrementID 

    } else if (hero.clicked === true) {
      this.handleReset()
    }
  };

  componentDidUpdate = (heroStatus) => {
      let heroes = this.state.heroes
    if (heroStatus !== false) {

        return heroes
      }
    };
  


  shuffleCards = (heroes) => {
    
    var j, x, i;
    for (i = heroes.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = heroes[i];
      heroes[i] = heroes[j];
      heroes[j] = x;
    }
    return heroes
  };

  handleIncrement = (id) => {
    let heroes = this.state.heroes;
    
    this.setState({ score: this.state.score + 1 });
    for (var i = 0; i < heroes.length; i++) {
      if (id === heroes[i].id) {
        let heroesCopy = JSON.parse(JSON.stringify(this.state.heroes))
        heroesCopy[id - 1].clicked = true
        this.setState({heroes: heroesCopy})
        console.log("Matching ID!")
      }
    }

  };

  handleReset = () => {
    let heroes = this.state.heroes;

    this.setState({ score: 0 });
    this.setState(heroes.clicked = false)
    alert("You've already clicked that one. Try Again")
    this.shuffleCards(heroes)
  };


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
              changeClicked={this.changeClicked}
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


