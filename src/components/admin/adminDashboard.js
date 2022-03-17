import React, { useState } from "react";

import UICards from "../uicards/uiCards";

import "./adminDashboard.css";

function AdminDashboard() {
  const [subMenu, setSubMenu] = useState([
    {
      name: "Teams",
      state: true,
    },
    {
      name: "Participants",
      state: false,
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
        <p>lklklklklklkl</p>
        <p>ff3f34f</p>
        <p>ff3f34f</p>
        <p>ff3f34f</p>
        <p>ff3f34f</p>
        <p>ff3f34f</p>
        <p>ff3f34f</p>
        <p>ff3f34f</p>
        <p>ff3f34f</p>
        <p>ff3f34f</p>
        <p>ff3f34f</p>
      </UICards>
    </div>
  );
}

export default AdminDashboard;
