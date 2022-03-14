import React from "react";

import "./contentToDisplay.css";

function ContentToDisplay(props) {
  const animationKeyFrame = `${props.animationClass} 2s both`;
  return (
    <div className='content-display'>
      <img
        style={{ animation: "none", animation: animationKeyFrame }}
        className={`ilustration`}
        src={props.ilustrationUrl}
        alt={props.ilustrationDescription}
      />
      <p
        className={`desciption-text`}
        style={{ animation: animationKeyFrame }}>
        {props.textToDisplay}
      </p>
    </div>
  );
}

export default ContentToDisplay;
