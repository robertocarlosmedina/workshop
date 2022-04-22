import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { AiOutlineFileDone } from "react-icons/ai";

import Api from "../../api/api";

import "./enrrolledTeams.css";

function EnrrolledTeams() {
  const [loadingRegistrationHandler, setLoadingRegistrationHandler] = useState({
    startAuthRequest: false,
    registrationSuccess: false,
    validCode: true,
  });
  const [enrrolledTeams, setEnrrolledTeams] = useState([]);
  const { accessToken } = useParams();
  useEffect(() => {
    try {
      Api.get(`/team/allteams/${accessToken}`).then((res) => {
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
          addingShowHiddeVariable(requestResponse.data);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const addingShowHiddeVariable = (allTeams) => {
    setEnrrolledTeams(
      allTeams.map((team) => ({ ...team, showGradeForm: false }))
    );
  };

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

  const gradeATeam = async (event) => {
    event.preventDefault(); // Disable to form to send the request to the server and reload page
    const timeID = parseInt(event.target.getAttribute("data-id"));
    const gradedTeam = enrrolledTeams.filter((team) => {
      return team.id === timeID;
    })[0];
    try {
      Api.post(`/team/gradeTeam/${accessToken}`, {
        teamID: gradedTeam.id,
        codeReadability: gradedTeam.gradeInfo[0].metricValue,
        algorithmEfficiency: gradedTeam.gradeInfo[1].metricValue,
        completedTasks: gradedTeam.gradeInfo[2].metricValue,
        creactivity: gradedTeam.gradeInfo[3].metricValue,
        resultAnalisys: gradedTeam.gradeInfo[4].metricValue,
      }).then((res) => {
        const newRegistre = res.data;
        if (newRegistre.statusCode !== 200) {
          return <Navigate to="/admin" />;
        }

        if (newRegistre) {
          // console.log(newRegistre)
          window.location.reload();
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <ul className="participants-display">
        {enrrolledTeams.map((team, i) => (
          <li key={i} className="participant-element team-ajust">
            <AiOutlineFileDone
              className={`graded-icon ${
                team.teamGraded ? "team-graded" : "team-not-graded"
              }`}
            />
            <p className="display-team-name">{team.name}</p>

            <div className="group-members">
              <span className="members-tittle">Members:</span>
              {team.members.map((member, i) => (
                <div key={i}>
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
                {team.gradeInfo.map((metric, i) => (
                  <ul key={i} className="grade-matrics">
                    <li className="grade-matrics-item">
                      <span>{metric.metricName}</span>
                    </li>
                    <li>
                      <input
                        data-id={team.id}
                        data-metricid={metric.metricID}
                        onChange={metricGradeInputHanlder}
                        type="number"
                        min="0"
                        placeholder="0.0"
                        max="10"
                        step=".1"
                        required
                        className="grade-matrics-input"
                        value={metric.metricValue}
                      />{" "}
                      x {metric.metricPercentage}%
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
                    onClick={gradeATeam}
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
