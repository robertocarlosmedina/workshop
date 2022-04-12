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
          metricID: 1,
          metricName: "Code readability",
          metricValue: 0,
          metricPercentage: 15,
        },
        {
          metricID: 2,
          metricName: "Algorithm Efficiency",
          metricValue: 0,
          metricPercentage: 20,
        },
        {
          metricID: 3,
          metricName: "Completed Tasks",
          metricValue: 0,
          metricPercentage: 30,
        },
        {
          metricID: 4,
          metricName: "Creativity",
          metricValue: 0,
          metricPercentage: 5,
        },
        {
          metricID: 5,
          metricName: "Results Analysis",
          metricValue: 0,
          metricPercentage: 30,
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
          metricID: 8,
          metricName: "Code readability",
          metricValue: 0,
          metricPercentage: 15,
        },
        {
          metricID: 20,
          metricName: "Algorithm Efficiency",
          metricValue: 0,
          metricPercentage: 20,
        },
        {
          metricID: 33,
          metricName: "Completed Tasks",
          metricValue: 0,
          metricPercentage: 30,
        },
        {
          metricID: 41,
          metricName: "Creativity",
          metricValue: 0,
          metricPercentage: 5,
        },
        {
          metricID: 51,
          metricName: "Results Analysis",
          metricValue: 0,
          metricPercentage: 30,
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

  const metricGradeInputHanlder = (event) => {
    const teamID = parseInt(event.target.getAttribute("data-id"));
    const metricID = parseInt(event.target.getAttribute("data-metricid"));
    const value = parseFloat(event.target.value);
    setEnrrolledTeams(
      enrrolledTeams.map((team, i) =>
        team.id === teamID
          ? {
              ...team,
              gradeInfo: team.gradeInfo.map((metric, i) =>
                metric.metricID === metricID
                  ? { ...metric, metricValue: value }
                  : { ...metric }
              ),
            }
          : { ...team }
      )
    );
  };

  const gradeTeam = (event) => {
    event.preventDefault(); // Disable to form to send the request to the server and reload page
    const timeID = parseInt(event.target.getAttribute("data-id"));
    const gradedTeam = enrrolledTeams.filter((team) => {
      return team.id === timeID;
    });
    console.log(gradedTeam);
  };

  return (
    <div>
      <ul className='participants-display'>
        {enrrolledTeams.map((team, i) => (
          <li key={team.id} className='participant-element team-ajust'>
            <p className='display-team-name'>{team.name}</p>

            <div className='group-members'>
              <span className='members-tittle'>Members:</span>
              {team.members.map((member, i) => (
                <div key={member.id}>
                  <br />
                  <span className='team-element-name'>{member.name}</span>
                  <br />
                  <span className='team-element-email'>{member.email}</span>
                </div>
              ))}
            </div>
            <p></p>
            <form>
              <div
                className={`team-grade-form ${
                  team.showGradeForm ? "show" : "hidde"
                }`}>
                <p className='grade-title'>Grade this team</p>
                {team.gradeInfo.map((metric, i) => (
                  <ul key={metric.metricID} className='grade-matrics'>
                    <li className='grade-matrics-item'>
                      <span>{metric.metricName}</span>
                    </li>
                    <li>
                      <input
                        data-id={team.id}
                        data-metricid={metric.metricID}
                        onChange={metricGradeInputHanlder}
                        type='number'
                        min='0'
                        placeholder='0.0'
                        max='10'
                        step='.1'
                        required
                        className='grade-matrics-input'
                      />{" "}
                      x {metric.metricPercentage}%
                    </li>
                  </ul>
                ))}
              </div>

              <p>
                {team.showGradeForm && (
                  <input
                    type='submit'
                    className='button primary-button team-button-ajust'
                    data-id={team.id}
                    onClick={gradeTeam}
                    value='Grade Team'
                  />
                )}
                <br />
                <input
                  type='button'
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
