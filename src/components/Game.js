
import Card from './Card';
import React, { Component } from 'react';
import heroes from "../assets/heroes.json"

class Game extends Component {
  constructor(props){
    super(props);
   this.state = {
    heroes: heroes,
    score: 0,
  };
  }

  changeClicked = id => {
    let hero = this.state.heroes[id - 1];
    console.log(hero)
    if (hero.clicked === false) {
      this.handleIncrement(id)
      .then(function(){
        return this.scoreUp()
        
      })
      .then(function(res){
         this.shuffleCards()
         return (res)
      })
      .then (function(res){
        console.log(res,"shuffled")
      })
    } else if (hero.clicked === true) {
      this.handleReset()
    };
  }

  
  shuffleCards = function () {
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

   scoreUp = function () {
  return new Promise(function (resolve, reject) {
    this.setState({ score: this.state.score + 1 });
    resolve(console.log('Increased Score'));
  });
};

handleIncrement = function (id) {
  let heroes = this.state.heroes;
  return new Promise(function (resolve, reject) {
   
    for (var i = 0; i < heroes.length; i++) {
      if (id === heroes[i].id) {
        let heroesCopy = JSON.parse(JSON.stringify(this.state.heroes))
        heroesCopy[id - 1].clicked = true
        this.setState({ heroes: heroesCopy })
        console.log("Matching ID!")
      } resolve(console.log("no match"))
    }
  });
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


