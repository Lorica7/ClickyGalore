import React from "react";
import "./Card.css"


const Card = ({id, name, image, value, changeClicked}) => (
  <div className="card" value={value} >
    <div className="img-container">
      <img alt={name} src={image} onClick={() => changeClicked(id)} />
    </div>
  </div>
);

export default Card;

