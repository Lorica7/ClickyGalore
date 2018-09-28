import React, {Component} from 'react';
import Card from './Card';


const Game = () => ( 

    <div className = "container">
<div className="row">
  <div className="col-sm-3"><Card /></div>
  <div className="col-sm-3"><Card /></div>
  <div className="col-sm-3"><Card /></div>
<div className="col-sm-3"><Card /></div>
</div>

<div className="row">
  <div className="col-sm-3"><Card /></div>
  <div className="col-sm-3"><Card /></div>
  <div className="col-sm-3"><Card /></div>
<div className="col-sm-3"><Card /></div>
</div>

<div className="row">
  <div className="col-sm-3"><Card /></div>
  <div className="col-sm-3"><Card /></div>
  <div className="col-sm-3"><Card /></div>
<div className="col-sm-3"><Card /></div>
</div>
    </div>
    
);
    
export default Game;