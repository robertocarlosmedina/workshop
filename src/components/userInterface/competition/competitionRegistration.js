import React, { useState } from "react";

import UICards from "../../uicards/uiCards";
import TeamSpirit from "../../../assets/ilustrations/team-spirit-pana.png";

import "./competitionRegistration.css";

function CompetitionRegistration() {
  // just an example
  const [availableParticipants, setAvailableParticipants] = useState([
    {
      id: 1,
      name: "Carlos Medina",
    },
    {
      id: 2,
      name: "Carla Santos",
    },
    {
      id: 3,
      name: "José Fortes",
    },
  ]);
  const [teamName, setTeamName] = useState({ value: "", valid: false });
  const [personalCode, setPersonalCode] = useState({ value: "", valid: false });
  const [teamMember, setTeamMember] = useState({
    value: "",
    valid: false,
  });

  function validateEmptyString(string) {
    return string !== "" ? true : false;
  }

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
      console.log(
        teamName.value,
        personalCode.value,
        teamMember.value
      );
    }
  }

  return (
    <UICards card_name="ui-display-card">
      <img
        style={{ animation: "top-bottom-animation 2s both" }}
        className={`ilustration ilustration-ajust`}
        src={TeamSpirit}
        alt="Team spirit ilustration"
      />
      <p className="normal-text competition-text bold-text">Sign up your team</p>
      <form className="formulary">
        <ul className="registration-form">
          <li className="form-item">
            <p>
              <label>
                <span>*</span> Team Name
              </label>
            </p>
            <input
              type="text"
              value={teamName.value}
              onChange={teamNameFieldHandler}
              className={`resgistrion-input-field ${
                teamName.valid ? "valid" : "invalid"
              }`}
              required
              placeholder="Enter your full name"
            />
          </li>
          <li className="form-item">
            <p>
              <label>
                <span>*</span> Your Code
              </label>
            </p>
            <input
              type="text"
              value={personalCode.value}
              onChange={personalCodeFieldHandler}
              className={`resgistrion-input-field ${
                personalCode.valid ? "valid" : "invalid"
              }`}
              required
              placeholder="example@gmail.com"
            />
          </li>
          <li className="form-item">
            <p>
              <label>
                <span>*</span> Your Team Member
              </label>
            </p>
            <select
              onChange={teamMemberFieldHandler}
              className="resgistrion-input-field  selector"
            >
              {availableParticipants.map((participant, i) => (
                <option key={i} value={participant.id}>
                  {participant.name}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </form>
      <button
          className='button primary-button competition-ajust-button'
          onClick={submitTeamRegistration}>
          Register team
        </button>
    </UICards>
  );
}

export default CompetitionRegistration;
