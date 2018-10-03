import React from 'react';
import Card from './Card';
import heroes from '../assets/heroes.json'
// import Counter from "./Counter";
import Consumer from "../context"

class Game extends React.Component {

  changeClicked = event => {
    console.log(event)
    console.log("What???");
  };

  render() {
    
      return (
      <Consumer>
        { wholeObject => {
          const { heroes } = wholeObject,
          <div className="col-sm-4">
            {heroes.map(heroes =>
              <Card
                key={Card.id}
                image={heroes[i].image}
                id={heroes[i].id}
                value={heroes[i].value}
                onClick={this.changeClicked} />
            )}
          </div>
        }}
        } </Consumer>
    )

  //   return (
  //     <div id="container">
  //       <div className="row">
  //         <div className="col-sm-4"> <Card image={heroes[0].image} id={heroes[0].id} value={heroes[0].value} onClick={this.changeClicked.bind(this)} /></div>
  //         <div className="col-sm-4"><Card image={heroes[1].image} id={heroes[1].id} value={heroes[1].value} onClick={this.changeClicked} /></div>
  //         <div className="col-sm-4"><Card image={heroes[2].image} id={heroes[2].id} value={heroes[2].value} onClick={this.changeClicked} /></div>
  //       </div>

  //       <div className="row">
  //         <div className="col-sm-4">  <Card image={heroes[3].image} id={heroes[3].id} value={heroes[3].value} onClick={this.changeClicked} /></div>
  //         <div className="col-sm-4" >  <Card image={heroes[4].image} id={heroes[4].id} value={heroes[4].value} onClick={this.changeClicked} /></div>
  //         <div className="col-sm-4" > <Card image={heroes[5].image} id={heroes[5].id} value={heroes[5].value} onClick={this.changeClicked} /></div>
  //       </div>

  //       <div className="row">
  //         <div className="col-sm-4"> <Card image={heroes[6].image} id={heroes[6].id} value={heroes[6].value} onClick={this.changeClicked} /></div>
  //         <div className="col-sm-4" >  <Card image={heroes[7].image} id={heroes[7].id} value={heroes[7].value} onClick={this.changeClicked} /></div>
  //         <div className="col-sm-4" > <Card image={heroes[8].image} id={heroes[8].id} value={heroes[8].value} onClick={this.changeClicked} /></div>
  //       </div>

  //       <div className="row">
  //         <div className="col-sm-4" >  <Card image={heroes[9].image} id={heroes[9].id} value={heroes[9].value} onClick={this.changeClicked} /></div>
  //         <div className="col-sm-4" >  <Card image={heroes[10].image} id={heroes[10].id} value={heroes[10].value} onClick={this.changeClicked} /></div>
  //         <div className="col-sm-4">  <Card image={heroes[11].image} id={heroes[10].id} value={heroes[11].value} onClick={this.changeClicked} /></div>
  //       </div>
  //     </div>

  //   );
  };
};
export default Game;

