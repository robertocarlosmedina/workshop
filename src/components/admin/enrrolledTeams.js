import React, { useState } from "react";

import "./enrrolledTeams.css";

function EnrrolledTeams() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Losers",
      members: [
        {
          id: 3,
          name: "Carlos Sousa",
          email: "carlos@gmail.com",
        },
        {
          id: 6,
          name: "José Ferreira",
          email: "Ferreira01@gmail.com",
        },
      ],
      gradeInfo: [
        {
          matricID: 1,
          matricName: "Code readability",
          matricValue: 0,
          matricPercentage: 15,
        },
        {
          matricID: 2,
          matricName: "Algorithm Efficiency",
          matricValue: 0,
          matricPercentage: 20,
        },
        {
          matricID: 3,
          matricName: "Completed Tasks",
          matricValue: 0,
          matricPercentage: 30,
        },
        {
          matricID: 4,
          matricName: "Creativity",
          matricValue: 0,
          matricPercentage: 5,
        },
        {
          matricID: 5,
          matricName: "Results Analysis",
          matricValue: 0,
          matricPercentage: 30,
        },
      ],
    },
    {
      id: 2,
      name: "Capols",
      members: [
        {
          id: 1,
          name: "Ana Maria",
          email: "amar@gmail.com",
        },
        {
          id: 2,
          name: "Carlos Santos",
          email: "santoscar@gmail.com",
        },
      ],
      gradeInfo: [
        {
          matricID: 8,
          matricName: "Code readability",
          matricValue: 0,
          matricPercentage: 15,
        },
        {
          matricID: 20,
          matricName: "Algorithm Efficiency",
          matricValue: 0,
          matricPercentage: 20,
        },
        {
          matricID: 33,
          matricName: "Completed Tasks",
          matricValue: 0,
          matricPercentage: 30,
        },
        {
          matricID: 41,
          matricName: "Creativity",
          matricValue: 0,
          matricPercentage: 5,
        },
        {
          matricID: 51,
          matricName: "Results Analysis",
          matricValue: 0,
          matricPercentage: 30,
        },
      ],
    },
  ]);

  const addingShowHiddeVariable = () => {
    return teams.map((team, i) => ({ ...team, showGradeForm: false }));
  };

  const [enrrolledTeams, setEnrrolledTeams] = useState(
    addingShowHiddeVariable()
  );

  const showHiddeTeamGradeForm = (event) => {
    const timeID = parseInt(event.target.getAttribute("data-id"));
    setEnrrolledTeams(
      enrrolledTeams.map((team, i) =>
        team.id === timeID
          ? { ...team, showGradeForm: !team.showGradeForm }
          : { ...team, showGradeForm: false }
      )
    );
  };

  const matricGradeInputHanlder = (event) => {
    const teamID = parseInt(event.target.getAttribute("data-id"));
    const matricID = parseInt(event.target.getAttribute("data-matricid"));
    const value = parseFloat(event.target.value);
    console.log(teamID, matricID, value);
    setEnrrolledTeams(
      enrrolledTeams.map((team, i) =>
        team.id === teamID
          ? {
              ...team,
              gradeInfo: team.gradeInfo.map((matric, i) =>
                matric.matricID === matricID
                  ? { ...matric, matricValue: value }
                  : { ...matric }
              ),
            }
          : { ...team }
      )
    );
  };

  const gradeTeam = (event) => {
    // event.preventDefault(); // Disable to form to send the request to the server and reload page
    const timeID = parseInt(event.target.getAttribute("data-id"));
    console.log(timeID);
  };

  return (
    <div>
      <ul className="participants-display">
        {enrrolledTeams.map((team, i) => (
          <li key={team.id} className="participant-element team-ajust">
            <p className="display-team-name">{team.name}</p>

            <div className="group-members">
              <span className="members-tittle">Members:</span>
              {team.members.map((member, i) => (
                <div key={member.id}>
                  <br />
                  <span className="team-element-name">{member.name}</span>
                  <br />
                  <span className="team-element-email">{member.email}</span>
                </div>
              ))}
            </div>
            <p></p>
            <form>
              <div
                className={`team-grade-form ${
                  team.showGradeForm ? "show" : "hidde"
                }`}
              >
                <p className="grade-title">Grade this team</p>
                {team.gradeInfo.map((matric, i) => (
                  <ul key={matric.matricID} className="grade-matrics">
                    <li className="grade-matrics-item">
                      <span>{matric.matricName}</span>
                    </li>
                    <li>
                      <input
                        data-id={team.id}
                        data-matricid={matric.matricID}
                        onChange={matricGradeInputHanlder}
                        type="number"
                        min="0"
                        placeholder="0.0"
                        max="10"
                        step=".1"
                        required
                        className="grade-matrics-input"
                      />{" "}
                      x {matric.matricPercentage}%
                    </li>
                  </ul>
                ))}
              </div>

              <p>
                {team.showGradeForm && (
                  <input
                    type="submit"
                    className="button primary-button team-button-ajust"
                    data-id={team.id}
                    onClick={gradeTeam}
                    value="Grade Team"
                  />
                )}
                <br />
                <input
                  type="button"
                  className={`button ${
                    team.showGradeForm ? "secundary-button" : "primary-button"
                  } team-button-ajust`}
                  data-id={team.id}
                  onClick={showHiddeTeamGradeForm}
                  value={!team.showGradeForm ? "Grade" : "Hide"}
                />
              </p>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EnrrolledTeams;
