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

  componentDidUpdate() {
    console.log("Component Did Update -----", this.state)
  }

  changeClicked = id => {
    let heroes = this.state.heroes
    const hero =heroes.find((heroes) => {
      return heroes.id === id
    })
    console.log(hero)
    if (hero.clicked === false) {
      this.handleIncrement(id)
     
    } else if (hero.clicked === true) {
      this.handleReset()
    };
  }

  shuffleCards = (shuffArray) => {
    var j, x, i;
    for (i = shuffArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = shuffArray[i];
      shuffArray[i] = shuffArray[j];
      shuffArray[j] = x;
    }
    
    this.setState({
      heroes: shuffArray,
      score: this.state.score + 1
    })
    console.log(this.state)
  }

  handleIncrement = (id) => {
    let heroes = this.state.heroes;
    const newArray = heroes.map(newHero => {
      if (id === newHero.id) {
        console.log(newHero)
        console.log("Matching ID!")
        newHero.clicked = true;
      }
      return newHero;
    })
    console.log(newArray);
    this.shuffleCards(newArray)
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