
import Card from './Card';
import React, { Component } from 'react';
import heroes from "../assets/heroes.json";
import "./Card.css";
import "./Container.css";

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
    return new Promise ((resolve, reject) => {
    let hero = this.state.heroes[id - 1];
    console.log(hero)
    if (hero.clicked === false) {
      this.handleIncrement(id)
      
      // console.log(heroes)
        // .then((heroes) => {
          this.shuffleCards(heroes)
        // })
    } else if (hero.clicked === true) {
      this.handleReset()
    };  
    resolve (console.log(heroes), 
    this.setState({
      heroes: heroes,
      score: this.state.score + 1
    }))
  })

  }
   
    

  
  
  

shuffleCards = (heroes) => {
  return new Promise(function (resolve, reject) {
    var j, x, i;
    for (i = heroes.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = heroes[i];
      heroes[i] = heroes[j];
      heroes[j] = x;
      // x = heroes;
    } resolve(console.log(heroes))
  })
}

handleIncrement = (id) => {
  let heroes = this.state.heroes;
  let heroesCopy = JSON.parse(JSON.stringify(heroes))
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < heroes.length; i++) {
      if (id === heroes[i].id) {
        console.log("Matching ID!")
        heroesCopy[id - 1].clicked = true
      } 
      heroesCopy = heroes
    }
    resolve(console.log(heroes),heroes)
  })
}

handleReset = () => {
  let heroes = this.state.heroes;
  this.setState({ score: 0, heroes: { clicked: false } });

  alert("You've already clicked that one. Try Again")
  this.shuffleCards(heroes)
}


render() {

  return (

    <div className="container">
      <div className="containerStyle">
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


