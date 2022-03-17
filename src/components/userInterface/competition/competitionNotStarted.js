import React from "react";

import UICards from "../../uicards/uiCards";
import TeamSpirit from "../../../assets/ilustrations/team-spirit-pana.png";

function CompetitionNotStarted() {
  return (
    <UICards card_name="ui-display-card">
      <img
        style={{ animation: "top-bottom-animation 2s both" }}
        className={`ilustration`}
        src={TeamSpirit}
        alt="Team spirit ilustration"
      />
      <p className="normal-text competition-text">
        The competition will start soon, make sure your team is ready...
      </p>
    </UICards>
  );
}

export default CompetitionNotStarted;
