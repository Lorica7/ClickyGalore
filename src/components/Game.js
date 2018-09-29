import React from 'react';
import Card from './Card';
import heroes from '../assets/heroes.json'
import Counter from "./Counter";

class Game extends React.component {

  
 render() {
  return(
  <div className="container">
    <div className="row">
      <div className="col-sm-4"> <Card image={heroes[0].image} id={heroes[0].id} clicked={heroes[0].clicked} onClick={this.changeClicked} /></div>
      <div className="col-sm-4"><Card image={heroes[1].image} id={heroes[1].id} clicked={heroes[1].clicked} onClick={this.changeClicked} /> </div>
      <div className="col-sm-4"><Card image={heroes[2].image} id={heroes[2].id} clicked={heroes[2].clicked} onClick={this.changeClicked}/></div>

    </div>

    <div className="row">
      <div className="col-sm-4"><Card image={heroes[3].image} id={heroes[3].id} clicked={heroes[3].clicked} onClick={this.changeClicked}/></div>
      <div className="col-sm-4"><Card image={heroes[4].image} id={heroes[4].id} clicked={heroes[4].clicked} onClick={this.changeClicked}/></div>
      <div className="col-sm-4"><Card image={heroes[5].image} id={heroes[5].id} clicked={heroes[5].clicked} onClick={this.changeClicked}/></div>

    </div>

    <div className="row">
      <div className="col-sm-4"><Card image={heroes[6].image} id={heroes[6].id} clicked={heroes[6].clicked} onClick={this.changeClicked}/></div>
      <div className="col-sm-4"><Card image={heroes[7].image} id={heroes[7].id} clicked={heroes[7].clicked} onClick={this.changeClicked}/></div>
      <div className="col-sm-4"><Card image={heroes[8].image} id={heroes[8].id} clicked={heroes[8].clicked} onClick={this.changeClicked}/></div>

    </div>
    <div className="row">
      <div className="col-sm-4"><Card image={heroes[9].image} id={heroes[9].id} clicked={heroes[9].clicked} onClick={this.changeClicked}/></div>
      <div className="col-sm-4"><Card image={heroes[10].image} id={heroes[10].id} clicked={heroes[10].clicked} onClick={this.changeClicked}/></div>
      <div className="col-sm-4"><Card image={heroes[11].image} id={heroes[10].id} clicked={heroes[11].clicked} onClick={this.changeClicked}/></div>
    </div>
  </div>
  );
 }



 state = {
  heroes,
  score: 0,
  
}

changeClicked = (id) => {
  let hero = [...this.state.heroes];
		
  for(let i = 0; i < hero.length; i++) {
      if(hero[i].clicked === true){
        alert("Sorry, you clicked that already. Game over.")
        this.setState({heroes: shuffle(hero)})
        this.setState(this.clicked, false)
        return Counter.handlereset();
      }else{ 
        hero[i].clicked === false;
        this.setState({heroes: shuffle(hero)})
        this.setState(this.clicked, false)
        return Counter.handleIncrement;
      }
} 
};

};

export default Game;

function shuffle(heroes) {
  var j, x, i;
  for (i = heroes.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = heroes[i];
      heroes[i] = heroes[j];
      heroes[j] = x;
  }
  return heroes;
}