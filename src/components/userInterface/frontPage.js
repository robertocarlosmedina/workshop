import { useState, React } from "react";

import UICards from "../uicards/uiCards";
import AppHeader from "../headers/appHeader";
import ControllerButtons from "./infoDisplay/controllerButtons";
import PositionController from "./infoDisplay/positionController";
import pair_programming from "../../assets/ilustrations/pair_programming.png";

function FrontPage() {
  const [positionIndex, setPositionIndex] = useState(0);
  const carroselPartes = [
    {
      name: "introduction",
      text: "blablabla",
      ilustration_url: "",
    },
  ];

  return (
    <main>
      <UICards card_name='header_card'>
        <AppHeader />
      </UICards>
      <UICards card_name='ui_display_card'>
        <img
          className='ilustration'
          src={pair_programming}
          alt='Pair programming ilustration'
        />
        <p>Let’s learn and share Knowleght...</p>
        <PositionController
          current_index={positionIndex}
          setPositionIndex={setPositionIndex}
        />
        <p></p>
        <ControllerButtons
          current_index={positionIndex}
          setPositionIndex={setPositionIndex}
        />
      </UICards>
    </main>
  );
}

export default FrontPage;
