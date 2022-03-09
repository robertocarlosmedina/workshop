import React from "react"
import { FaCalendarAlt } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'

import "./appHeader.css";

function AppHeader() {
  return (
    <header>
      <h1 className="app-tittle">Workshop</h1>
      <ul className="header-menu">
        <li>
          <RiTeamFill />
        </li>
        <li>
          <FaCalendarAlt />
        </li>
      </ul>
    </header>
  );
}

export default AppHeader
