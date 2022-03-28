import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./frontPage.css";

import CodingWorkshopRafiki from "../assets/ilustrations/Coding-workshop-rafiki.png";

function FrontPage() {
  const [coordinators, setCoordinators] = useState([
    {
      name: "Roberto Medina",
      email: "rmedina@uta.cv",
      img_url: "",
    },
    {
      name: "Nuno iohoqr",
      email: "inuno@uta.cv",
      img_url: "",
    },
    {
      name: "Jorgue",
      email: "inuno@uta.cv",
      img_url: "",
    },
    {
      name: "Carlaos kdfn",
      email: "inuno@uta.cv",
      img_url: "",
    },
  ]);

  return (
    <main className='frontPage'>
      <section className='frontPage-conteiner'>
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
            <span className='mural-text-1'>
              Limited registration, register now
            </span>
            <br />
            <button className='button registration-button'>Register</button>
          </p>
        </div>
      </section>
      <section className='descritpion-conteiner'>
        <h1 className='session-tittle'>Description</h1>
        <p className='description-session-text'>
          Limited registration, register now Limited registration, register now
          Limited registration, register now Limited registration, register now
        </p>
      </section>
      <section className='coordinator-conteiner'>
        <h1 className='session-tittle'>Coordinators</h1>
        <div className='coordinator-list-display'>
          <ul className='coordinator-display'>
            {coordinators.map((coordinator, i) => (
              <li
                key={i}
                className={`coordinators-item ${i === 0 ? "firts-item" : ""}`}>
                <div>
                  <p>
                    <div className='coordinator-img'></div>
                  </p>
                  <p>
                    {coordinator.name} <br /> {coordinator.email}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <footer className="footer-item">
        <h1 className='session-tittle'>Contributors</h1>
        <p className='description-session-text'>
        A special thank you to
        </p>
        </footer> */}
      </section>
    </main>
  );
}

export default FrontPage;
