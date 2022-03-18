import React, { useState } from "react";

import UICards from "../uicards/uiCards";
import EnrrolledParticipants from './enrrolledParticipants'
import EnrrolledTeams from './enrrolledTeams'

import "./adminDashboard.css";

function AdminDashboard() {
  const [subMenu, setSubMenu] = useState([
    {
      name: "Teams",
      state: true,
      Component: EnrrolledTeams
    },
    {
      name: "Participants",
      state: false,
      Component: EnrrolledParticipants
    },
  ]);

  const navegateInSubMenu = (event) => {
    const subMenuIndex = subMenu.findIndex(
      (menu) => menu.name === event.target.textContent
    );
    setSubMenu(
      subMenu.map((menu, i) =>
        i === subMenuIndex
          ? { ...menu, state: true }
          : { ...menu, state: false }
      )
    );
  };
  return (
    <div>
      <div className='sub-menu'>
        <nav >
          <ul className='admin-sub-menu'>
            <h2 className='form-title'>Admin Dashboard</h2>
            {subMenu.map((element, i) => (
              <li
                key={i}
                className={`sub-menu-items normal-text ${
                  element.state ? "active-menu" : ""
                }`}
                onClick={navegateInSubMenu}>
                {element.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <UICards card_name='ui-display-card-background-null'>
        {subMenu.map((option, i) =>
          <div>
            {option.state && <option.Component ></option.Component>}
          </div>
        )}
      </UICards>
    </div>
  );
}

export default AdminDashboard;
