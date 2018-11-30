
import Card from './Card';
import React, { Component } from 'react';
import heroes from "../assets/heroes.json";
import "./Card.css";
import "./Container.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes,
      score: 0,
    };

    this.setState = this.setState.bind(this);
   
  }

  changeClicked = key => {
    console.log(key)
    
   for (let i = 0; i < this.state.heroes.length; i ++){
    if (key === this.state.heroes[i].key) {
     console.log(key)
     var hero = this.state.heroes[i]
    } 
   }
    console.log(hero)
    if (hero.clicked === false) {
      this.handleIncrement(key)
      this.shuffleCards(heroesCopy)
      this.setState({
        heroes: heroesCopy,
        score: this.state.score + 1
      })
    
    } else if (hero.clicked === true) {
      this.handleReset()
    };  
    
  }
   
shuffleCards = (array) => {
  
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
      // x = heroes;
    } return arrayShuff
  
}

handleIncrement = (key) => {
  let heroes = this.state.heroes;
  let heroesCopy = JSON.parse(JSON.stringify(heroes))
  console.log(heroesCopy)
  
    for (let i = 0; i < heroesCopy.length; i++) {
      if (key === heroesCopy[i].key) {
        console.log("Matching name")
        heroesCopy[i].clicked = true

        //return HeroesCopy.....use the HeroesCopy variable as much as possible

        // take out all promises

        // maybe uses ComponentDidMount

        // the setState in the handleReset is not working

      } 
      console.log(heroesCopy)
    }
    return heroesCopy;
  
}

handleReset = () => {
  let heroes = this.state.heroes;
  this.setState({ score: 0, heroes: { clicked: false } });  
  console.log(this.state)
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
            name ={hero.name}
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


