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
            <div
              className={`team-grade-form ${
                team.showGradeForm ? "show" : "hidde"
              }`}
            >
                <p>Grade this team: </p>
              {team.gradeInfo.map((grade, i) => (
                <ul key={grade.matricID} className="grade-matrics">
                  <li className="grade-matrics-item">
                    <span>{grade.matricName}</span>
                  </li>
                  <li>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step=".1"
                      className="grade-matrics-input"
                    />{" "}
                    x {grade.matricPercentage}%
                  </li>
                </ul>
              ))}
            </div>
            <p>
              <button
                className="button primary-button team-button-ajust"
                data-id={team.id}
                onClick={showHiddeTeamGradeForm}
              >
                Grade
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EnrrolledTeams;
