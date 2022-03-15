import React from "react";
import { Link } from "react-router-dom";

import UICards from "./uicards/uiCards";
import Error404 from "../assets/ilustrations/404-Error.png";

import "./userInterface/infoCarruselDisplay/contentToDisplay.css";

function UrlError404() {
  return (
    <UICards card_name='ui-display-card'>
      <h2>Oops...</h2>
      <p className='normal-text'>Something weng wrong here :(</p>
      <img
        style={{ animation: "top-bottom-animation 2s both" }}
        className={`ilustration`}
        src={Error404}
        alt='Error image ilustration'
      />
      <p className='normal-text'>
        Sorry, we couldn't find the page you're looking for.{" "}
      </p>
      <p className='normal-text'>
        Try returning to the{" "}
        <Link className='link' to='/'>
          Homepage
        </Link>
      </p>
    </UICards>
  );
}

export default UrlError404;
