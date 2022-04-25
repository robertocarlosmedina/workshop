import React, { useState, useEffect } from "react";

import Api from '../../api/api'

import "./enrrolledParticipants.css";

const EnrrolledParticipants = (props) => {
  const [loadingRegistrationHandler, setLoadingRegistrationHandler] = useState({
      startAuthRequest: false,
      registrationSuccess: false,
      validCode: true,
    });
  const [allParticipants, setallParticipants] = useState([]);

  useEffect(() => {
    try {
      Api.get(`/user_register/participantsInfo/${props.accessToken}`).then((res) => {
        const requestResponse = res.data;
        if (requestResponse.statusCode !== 200) {
          setLoadingRegistrationHandler({
            ...loadingRegistrationHandler,
            validCode: false,
          });
        }
        if (requestResponse.statusCode === 200) {
          // console.log(requestResponse);
          setLoadingRegistrationHandler({
            ...loadingRegistrationHandler,
            validCode: true,
          });
          setallParticipants(requestResponse.data)
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  // check if the code is not valid to navegate back to the registration page
  if (!loadingRegistrationHandler.validCode) {
    props.setAccessToken("")
  }

  return (
    <div>
      <ul className='participants-display'>
        {allParticipants.map((participant, i) => (
          <li key={i} className='participant-element'>
            <p className='titlte-text'>
              {participant.name} <br />
              <span className='normal-text participant-mail'>
                {participant.email}
              </span>
            </p>
            <p className='normal-text personal-code'>
              {participant.personalCode}
            </p>
            <p className='normal-text display-ajust'>
              {participant.schoolYear} de {participant.course}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EnrrolledParticipants;
