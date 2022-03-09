import React from "react";
import './cards.css';

function UICards(props) {
  return <div className={props.card_name}>{props.children}</div>;
}

export default UICards;
