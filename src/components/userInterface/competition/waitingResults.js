import React from "react";

import UICards from "../../uicards/uiCards";
import LoadingRafiki from "../../../assets/ilustrations/loading-rafiki.png";

function WaitingResults() {
  return (
    <UICards card_name="ui-display-card">
      <img
        style={{ animation: "top-bottom-animation 2s both" }}
        className={`ilustration`}
        src={LoadingRafiki}
        alt="Loading ilustration"
      />
      <p className="normal-text competition-text">
        Results are being verified, they will be available soon...
      </p>
    </UICards>
  );
}

export default WaitingResults;
