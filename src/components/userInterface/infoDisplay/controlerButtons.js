import React from "react";

import "./controlerButtons.css";

function ControlerButtons(props) {
  switch (props.current_index) {
    case 0:
      return <button>Next</button>;
      break;
    case 1:
      return (
        <ul className="controler-buttons">
          <li>
            <button>Back</button>
          </li>
          <li>
            <button>Next</button>
          </li>
        </ul>
      );
      break;
    case 2:
      return (
        <ul className="controler-buttons">
          <li>
            <button>Back</button>
          </li>
          <li>
            <button>Next</button>
          </li>
        </ul>
      );
      break;
    default:
      props.setPositionIndex(0);
      return <button>Next</button>;
  }
}

export default ControlerButtons;
