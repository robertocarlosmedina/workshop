import React from "react";

import "./controllerButtons.css";

function ControlerButtons(props) {
  switch (props.currentIndex) {
    case 0:
      return (
        <ul className='controler-buttons'>
          <li>
            <button
              onClick={() => {
                props.changePositionIndexANDanimation(props.currentIndex + 1);
              }}
              className='secundary-button controler-button  button'>
              Next
            </button>
          </li>
        </ul>
      );
      break;
    case 1:
      return (
        <ul className='controler-buttons'>
          <li>
            <button
              onClick={() => {
                props.changePositionIndexANDanimation(props.currentIndex - 1);
              }}
              className='secundary-button controler-button button'>
              Back
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.changePositionIndexANDanimation(props.currentIndex + 1);
              }}
              className='secundary-button controler-button button'>
              Next
            </button>
          </li>
        </ul>
      );
      break;
    case 2:
      return (
        <ul className='controler-buttons'>
          <li>
            <button
              onClick={() => {
                props.changePositionIndexANDanimation(props.currentIndex - 1);
              }}
              className='secundary-button controler-button button'>
              Back
            </button>
          </li>
          <li>
            <button className='primary-button controler-button button'>
              Register
            </button>
          </li>
        </ul>
      );
      break;
    default:
      props.changePositionIndexANDanimation(0);
      return <button>Next</button>;
  }
}

export default ControlerButtons;
