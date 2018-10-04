import React from "react";
import "./Card.css"


const Card = (props) => (
  <div className="card">
  <div className="img-container">
    <img alt={props.name} src={props.image} value={props.value} onClick={props.changeClicked}/>
    </div>
  </div>
);
  
export default Card;

