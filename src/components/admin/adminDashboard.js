import React, { useState, useEffect } from "react";
import { Navigate, useParams } from 'react-router-dom'

import UICards from "../uicards/uiCards";
import EnrrolledParticipants from './enrrolledParticipants'
import EnrrolledTeams from './enrrolledTeams'
import Api from '../../api/api'

import "./adminDashboard.css";

function AdminDashboard(props) {
  const [loadingRegistrationHandler, setLoadingRegistrationHandler] = useState({
    startAuthRequest: false,
    registrationSuccess: false,
    validCode: true,
  });
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
  const { accessToken } = useParams();

  useEffect(() => {
    try {
      Api.get(`/user_auth/authAccessToken/${accessToken}`)
      .then((res) => {
        const requestResponse = res.data;
        if (requestResponse.statusCode !== 200) {
          setLoadingRegistrationHandler({
            ...loadingRegistrationHandler,
            validCode: false,
          });
        }
        if (requestResponse) {
          setLoadingRegistrationHandler({
            ...loadingRegistrationHandler,
            validCode: true,
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  // check if the code is not valid to navegate back to the registration page
  if (!loadingRegistrationHandler.validCode) {
    return <Navigate to="/admin" />;
  }

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
          <div key={i}>
            {option.state && <option.Component ></option.Component>}
          </div>
        )}
      </UICards>
    </div>
  );
}

export default AdminDashboard;
