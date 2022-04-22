import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import "./frontPage.css";

import CodingWorkshopRafiki from "../assets/ilustrations/Coding-workshop-rafiki.png";
import WascalLogo from "../assets/icons/wascal.png";
import UTALogo from "../assets/icons/uta.png";

function FrontPage() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

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
          className='ilustration frontPage-ajust'
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
            <Link to={"/registrationPlatform"}>
              <button className='button registration-button'>Register</button>
            </Link>
          </p>
        </div>
      </section>
      <section className='descritpion-conteiner'>
        <h1 className='session-tittle'>Description</h1>
        <p
          className='description-session-text'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'>
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
                data-aos='fade-up'
                data-aos-easing='ease-in-out'
                data-aos-duration={800 + i * 600}
                key={i}
                className={`coordinators-item ${i === 0 ? "firts-item" : ""}`}>
                <div>
                  <p></p>
                    <div className='coordinator-img'></div>
                  <p>
                    {coordinator.name} <br /> {coordinator.email}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className='footer-item'>
        <h1 className='session-tittle footer-ajust-header'>Contributors</h1>
        <div className='footer-text-ajust'>
          <p className='text-ajust'>A special thank you to</p>
        </div>
        <div className='sponcer-logos'>
          <img
            data-aos='fade-up'
            data-aos-duration='1000'
            className='sponcer-img'
            data-aos-easing='ease-in-out'
            src={WascalLogo}
            alt={"Coding workshop"}
          />
          <p></p>
          <img
            data-aos='fade-up'
            data-aos-duration='1600'
            data-aos-easing='ease-in-out'
            className='sponcer-img'
            src={UTALogo}
            alt={"Coding workshop"}
          />
        </div>
        <p className='text-ajust copyrigth-text'>
          Copyrigth © 2022 by Roberto Medina & Raffaele Fiorillo
        </p>
      </div>
    </main>
  );
}

export default FrontPage;
