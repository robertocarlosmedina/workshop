import React, { useState, useEffect } from "react";

import UICards from "../../uicards/uiCards";
import Api from "../../../api/api";
import TeamSpirit from "../../../assets/ilustrations/team-spirit-pana.png";

import "./competitionRegistration.css";

function CompetitionRegistration() {
  const [loadingRegistrationHandler, setLoadingRegistrationHandler] = useState({
    startAuthRequest: false,
    registrationSuccess: false,
    validCode: true,
  });
  const [teamName, setTeamName] = useState({ value: "", valid: false });
  const [personalCode, setPersonalCode] = useState({ value: "", valid: false });
  const [teamMember, setTeamMember] = useState({
    value: "",
    valid: false,
  });

  // just an example
  const [availableParticipants, setAvailableParticipants] = useState([]);

  useEffect(() => {
    try {
      Api.get(`/user_register/availableTeamMembers`).then((res) => {
        const requestResponse = res.data;
        if (requestResponse.statusCode !== 200) {
          setLoadingRegistrationHandler({
            ...loadingRegistrationHandler,
            validCode: false,
          });
        }
        if (requestResponse) {
          setAvailableParticipants(requestResponse.data);
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

  function validateEmptyString(string) {
    return string !== "" ? true : false;
  }

  const resetDefaultValues = () => {
    setTeamMember({ value: "", valid: false });
    setTeamName({ value: "", valid: false });
    setPersonalCode({ value: "", valid: false });
  };

  const teamNameFieldHandler = (event) => {
    const givenText = event.target.value;
    setTeamName({ value: givenText, valid: validateEmptyString(givenText) });
  };

  const personalCodeFieldHandler = (event) => {
    const givenText = event.target.value;
    setPersonalCode({
      value: givenText,
      valid: validateEmptyString(givenText),
    });
  };

  const teamMemberFieldHandler = (event) => {
    setTeamMember({ value: event.target.value, valid: true });
  };

  const submitTeamRegistration = async () => {
    if (teamName.valid && personalCode.valid && teamMember.valid) {
      const data = {
        team_name: teamName.value,
        code_first_member: personalCode.value,
        id_second_member: teamMember.value,
      };
      console.log(data);
      try {
        Api.post("/team/create_team", data).then((res) => {
          const newRegistre = res.data;
          if (newRegistre.statusCode !== 200) {
            console.log(newRegistre.errorMessage);
            return;
          }
          if (newRegistre) {
            console.log(newRegistre);
            resetDefaultValues();
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <UICards card_name='ui-display-card'>
      <img
        style={{ animation: "top-bottom-animation 2s both" }}
        className={`ilustration ilustration-ajust`}
        src={TeamSpirit}
        alt='Team spirit ilustration'
      />
      <p className='normal-text competition-text bold-text'>
        Sign up your team
      </p>
      {availableParticipants.length > 1 && (
        <form className='formulary'>
          <ul className='registration-form team-registraion-form'>
            <li className='form-item'>
              <p>
                <label>
                  <span>*</span> Team Name
                </label>
              </p>
              <input
                type='text'
                value={teamName.value}
                onChange={teamNameFieldHandler}
                className={`resgistrion-input-field ${
                  teamName.valid ? "valid" : "invalid"
                }`}
                required
                placeholder='Example coders...'
              />
            </li>
            <li className='form-item'>
              <p>
                <label>
                  <span>*</span> Your Code
                </label>
              </p>
              <input
                type='text'
                value={personalCode.value}
                onChange={personalCodeFieldHandler}
                className={`resgistrion-input-field ${
                  personalCode.valid ? "valid" : "invalid"
                }`}
                required
                placeholder='Your personal code...'
              />
            </li>
            <li className='form-item'>
              <p>
                <label>
                  <span>*</span> Your Team Member
                </label>
              </p>
              <select
                onChange={teamMemberFieldHandler}
                className='resgistrion-input-field  selector'>
                {availableParticipants.map((participant, i) => (
                  <option key={i} value={participant.participantId}>
                    {participant.name}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </form>
      )}

      {availableParticipants.length > 1 && (
        <button
          className='button primary-button competition-ajust-button'
          onClick={submitTeamRegistration}>
          Register team
        </button>
      )}
      {availableParticipants.length < 1 && (
        <div className='no-member-available'>
          <p>
            No members available!!
            <br />
            All teams have already been formed.
          </p>
        </div>
      )}
    </UICards>
  );
}

export default CompetitionRegistration;
