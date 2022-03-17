import React from "react";
import { Link } from "react-router-dom";

import "./controllerButtons.css";

function ControlerButtons(props) {
  switch (props.currentIndex) {
    case 0:
      return (
        <ul className="controler-buttons">
          <li>
            <button
              onClick={() => {
                props.changePositionIndexANDanimation(props.currentIndex + 1);
              }}
              className="secundary-button controler-button  button"
            >
              Next
            </button>
          </li>
        </ul>
      );
    case 1:
      return (
        <ul className="controler-buttons">
          <li>
            <button
              onClick={() => {
                props.changePositionIndexANDanimation(props.currentIndex - 1);
              }}
              className="secundary-button controler-button button"
            >
              Back
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.changePositionIndexANDanimation(props.currentIndex + 1);
              }}
              className="secundary-button controler-button button"
            >
              Next
            </button>
          </li>
        </ul>
      );
    case 2:
      return (
        <ul className="controler-buttons">
          <li>
            <button
              onClick={() => {
                props.changePositionIndexANDanimation(props.currentIndex - 1);
              }}
              className="secundary-button controler-button button"
            >
              Back
            </button>
          </li>
          <li>
            <Link to="/registration">
              <button className="primary-button controler-button button">
                Register
              </button>
            </Link>
          </li>
        </ul>
      );
    default:
      props.changePositionIndexANDanimation(0);
      return <button>Next</button>;
  }
}

export default ControlerButtons;
