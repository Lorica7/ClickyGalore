import React from "react";
import "./Card.css"
import Consumer from "../context";

const Card = (props) => (
  console.log(props)
        const {changeClicked} = this.state;
  render() {

    return(

  <div className="card">
  <div className="img-container">
    <img alt={props.name} src={props.image} value={props.value} onClick={props.changeClicked}/>
    </div>
  </div>
);
  }
export default Card;

