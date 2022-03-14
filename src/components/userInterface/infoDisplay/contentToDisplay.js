import React from "react";

import './contentToDisplay.css'

function ContentToDisplay(props) {
  return (
    <div className="content-display">
      <img
        className='ilustration'
        src={props.ilustrationUrl}
        alt={props.ilustrationDescription}
      />
      <p className="desciption-text">{props.textToDisplay}</p>
    </div>
  );
}

export default ContentToDisplay;
