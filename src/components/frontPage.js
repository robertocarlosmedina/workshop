import React from "react";
import { Link } from "react-router-dom";

import "./frontPage.css";

import CodingWorkshopRafiki from "../assets/ilustrations/Coding-workshop-rafiki.png";

function FrontPage() {
  return (
    <main className='frontPage-conteiner'>
      <Link to={"/"}>
        <h1 className='app-tittle frontPage-tittle-ajust'>Workshop</h1>
      </Link>
      <div className='right-card-container'>
        <div className='right-card'></div>
      </div>
      <img
        className={`ilustration frontPage-ajust`}
        src={CodingWorkshopRafiki}
        alt={"Coding workshop"}
      />
      <div className='text-conteiner'>
        <p className='mural-text'>
          Be part of this <br />
          programming event
          <br />
          <span>Limited registration, register now</span>
          <br />
          <button className='button registration-button'>Register</button>
        </p>
        
      </div>
    </main>
  );
}

export default FrontPage;
