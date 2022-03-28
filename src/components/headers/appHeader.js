import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

import "./appHeader.css";

function AppHeader() {
  const location = useLocation();
  
  return (
    <header>
      <Link to={"/"}>
        <h1 className="app-tittle">Workshop</h1>
      </Link>
      {location.pathname !== "/" && <ul className="header-menu">
        <li>
          <Link to={"/competition"}>
            <RiTeamFill className="icon" />
          </Link>
        </li>
        <li>
          <Link to={"/calendar"}>
            <FaCalendarAlt className="icon" />
          </Link>
        </li>
      </ul>}
    </header>
  );
}

export default AppHeader;
