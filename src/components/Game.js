import React from 'react';
import Card from './Card';
import heroes from '../assets/heroes.json'


const Game = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <Card image={heroes[0].image}
          name={heroes[0].name}
          clicked={heroes[0].clicked}
        />
      </div>
      <div className="col-sm-4"><Card image={heroes[1].image} /></div>
      <div className="col-sm-4"><Card image={heroes[2].image} /></div>

    </div>

    <div className="row">
      <div className="col-sm-4"><Card image={heroes[3].image} /></div>
      <div className="col-sm-4"><Card image={heroes[4].image} /></div>
      <div className="col-sm-4"><Card image={heroes[5].image} /></div>

    </div>

    <div className="row">
      <div className="col-sm-4"><Card image={heroes[6].image} /></div>
      <div className="col-sm-4"><Card image={heroes[7].image} /></div>
      <div className="col-sm-4"><Card image={heroes[8].image} /></div>

    </div>
    <div className="row">

      <div className="col-sm-4"><Card image={heroes[9].image} /></div>
      <div className="col-sm-4"><Card image={heroes[10].image} /></div>
      <div className="col-sm-4"><Card image={heroes[11].image} /></div>
    </div>
  </div>

);

export default Game;