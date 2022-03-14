import React from "react";

import "./positionController.css";

function PositionController(props) {
  return (
    <ul className='carrossel-position-controler'>
      <li
        onClick={() => {
          props.setPositionIndex(0);
        }}
        className='positional-circle'
        id={props.currentIndex === 0 ? "active" : ""}></li>
      <li
        onClick={() => {
          props.setPositionIndex(1);
        }}
        className='positional-circle'
        id={props.currentIndex === 1 ? "active" : ""}></li>
      <li
        onClick={() => {
          props.setPositionIndex(2);
        }}
        className='positional-circle'
        id={props.currentIndex === 2 ? "active" : ""}></li>
    </ul>
  );
}

export default PositionController;
