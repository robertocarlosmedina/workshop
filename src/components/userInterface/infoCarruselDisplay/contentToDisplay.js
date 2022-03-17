import React from "react";

import "./contentToDisplay.css";

function ContentToDisplay(props) {
  const animationKeyFrame = `${props.animationClass} 2s both`;
  return (
    <div className="content-display" key={props.positionIndex}>
      <img
        style={{ animation: "none", animation: animationKeyFrame }}
        className={`ilustration`}
        src={props.ilustrationUrl}
        alt={props.ilustrationDescription}
        key={props.positionIndex}
      />
      <p className={`desciption-text`} style={{ animation: animationKeyFrame }}>
        {props.textToDisplay}
      </p>
    </div>
  );
}

export default ContentToDisplay;
