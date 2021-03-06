import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import UICards from "../../uicards/uiCards";
import "./competitionResults.css";

function CompetitionResults() {
  // just for test
  const [teamsResults, setTeamsResults] = useState([
    {
      name: "lJNjCard",
      grade: 5.6,
    },
    {
      name: "carodMO",
      grade: 5.4,
    },
    {
      name: "Pinkers",
      grade: 5.3,
    },
    {
      name: "CarosT",
      grade: 4.3,
    },
    {
      name: "Coders",
      grade: 1.2,
    },
  ]);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <UICards card_name='ui-display-card-1'>
      <h2 className='form-title competition-ajust'>Competition Results</h2>
      <table className='results-table'>
        <tbody>
          {teamsResults.map((team, i) => (
            <tr key={i}>
              <td
                data-aos='fade-up'
                data-aos-easing='ease-in-out'
                data-aos-duration={1000 + i * 600}
                className={`results-colunm ${
                  i <= 2 ? "top-three" : "not-in-top-three"
                } `}>
                <span className='team-id'>{i + 1}</span>
                <span className='team-name'>{team.name}</span>
                <span
                  className={`team-grade ${
                    i <= 2 ? "grade-top-three" : "grade-not-top-three"
                  }`}>
                  {team.grade}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </UICards>
  );
}

export default CompetitionResults;
