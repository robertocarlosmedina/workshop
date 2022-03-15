import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";

// import Api from '../../api/api';
import CompletedIlustration from "../../assets/ilustrations/completed-pana.png";
import GoogleClassroom from "../../assets/icons/google-classroom.png";
import Calendar from "../../assets/icons/calendar.png";

import UICards from "../uicards/uiCards";

import "./registrationConfirm.css";

function RegistrationConfirm(props) {
  // const [participantInfo, setParticipantInfo] = useState({});
  const { personalCode } = useParams();
  console.log(personalCode);

  // Api.get(`userAuth/${personalCode}`)
  // .then((response) =>{
  //   setParticipantInfo(response.data)
  // })
  // .catch((error) =>{
  //   return <Navigate to="/"/>
  // })

  if (!personalCode) {
    return <Navigate to='/' />;
  }

  return (
    <UICards card_name='ui-display-card'>
      <img
        style={{ animation: "top-bottom-animation 2s both" }}
        className={`ilustration`}
        src={CompletedIlustration}
        alt='Registration completed ilustration'
      />
      <p className='normal-text'>
        Successfully registered!!!
        <br />
        Stay tunned to your email address
      </p>
      <p className='normal-text information-text'>
        <span>Personal Access Code</span> <br /> Save it for future use
      </p>
      <p className='normal-text personal-code'>{personalCode}</p>
      <ul className='participation-links'>
        <li>
          <img
            style={{ animation: "top-bottom-animation 2s both" }}
            className={`participant-icons`}
            src={GoogleClassroom}
            alt='Google classroom icon'
          />
        </li>
        <li>
          <img
            style={{ animation: "top-bottom-animation 2s both" }}
            className={`participant-icons`}
            src={Calendar}
            alt='Calendar icon'
          />
        </li>
      </ul>
    </UICards>
  );
}

export default RegistrationConfirm;
