import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";

// import Api from '../../api/api';
import CompletedIlustration from "../../assets/ilustrations/completed-pana.png";
import GoogleClassroom from "../../assets/icons/google-classroom.png";
import Calendar from "../../assets/icons/calendar.png";
import UICards from "../uicards/uiCards";
import Api from "../../api/api";

import "./registrationConfirm.css";

function RegistrationConfirm(props) {
  const [loadingRegistrationHandler, setLoadingRegistrationHandler] = useState({
    startAuthRequest: false,
    registrationSuccess: false,
    validCode: true,
  });
  const { personalCode } = useParams();

  useEffect(() => {
    try {
      Api.post("/user_register/auth_participant", {
        userPersonalCode: personalCode,
      }).then((res) => {
        const requestResponse = res.data;
        if (requestResponse.statusCode !== 200) {
          setLoadingRegistrationHandler({
            ...loadingRegistrationHandler,
            validCode: false,
          });
        }
        if (requestResponse) {
          // console.log(requestResponse);
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
    return <Navigate to="/registration" />;
  }

  return (
    <UICards card_name="ui-display-card">
      <img
        style={{ animation: "top-bottom-animation 2s both" }}
        className={`ilustration`}
        src={CompletedIlustration}
        alt="Registration completed ilustration"
      />
      <p className="normal-text">
        Successfully registered!!!
        <br />
        Stay tunned to your email address
      </p>
      <p className="normal-text information-text">
        <span>Personal Access Code</span> <br /> Save it for future use
      </p>
      <p className="normal-text personal-code">{personalCode}</p>
      <ul className="participation-links">
        <li>
          <img
            style={{ animation: "top-bottom-animation 2s both" }}
            className={`participant-icons`}
            src={GoogleClassroom}
            alt="Google classroom icon"
          />
        </li>
        <li>
          <img
            style={{ animation: "top-bottom-animation 2s both" }}
            className={`participant-icons`}
            src={Calendar}
            alt="Calendar icon"
          />
        </li>
      </ul>
    </UICards>
  );
}

export default RegistrationConfirm;
