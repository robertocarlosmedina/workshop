import { useState, React } from "react";

import UICards from "../uicards/uiCards";
import AppHeader from "../headers/appHeader";
import ControllerButtons from "./infoDisplay/controllerButtons";
import PositionController from "./infoDisplay/positionController";
import ContentToDisplay from "./infoDisplay/contentToDisplay";
import PairProgrammingIlustration from "../../assets/ilustrations/pair-programming.png";
import digitalPresentationIlustration from "../../assets/ilustrations/digital-presentation.png";
import subscribeBroIlustration from "../../assets/ilustrations/subscriber-bro.png";

function FrontPage() {
  const [positionIndex, setPositionIndex] = useState(1);
  const carroselPartes = [
    {
      id: 1,
      name: "part 1",
      text: "Let’s learn and share Knowleght...",
      ilustrationUrl: PairProgrammingIlustration,
      altText: "",
    },
    {
      id: 2,
      name: "part 2",
      text: "Let’s learn and share Knowleght... Let’s learn and share Knowleght...",
      ilustrationUrl: digitalPresentationIlustration,
      altText: "",
    },
    {
      id: 3,
      name: "part 3",
      text: "blabLet’s learn and share Knowleght... Let’s learn and share Knowleght... labla",
      ilustrationUrl: subscribeBroIlustration,
      altText: "",
    },
  ];

  return (
    <main>
      <UICards card_name='header-card'>
        <AppHeader />
      </UICards>
      <UICards card_name='ui-display-card'>
        <ContentToDisplay
          ilustrationUrl={carroselPartes[positionIndex].ilustrationUrl}
          ilustrationDescription={carroselPartes[positionIndex].altText}
          textToDisplay={carroselPartes[positionIndex].text}
        />
        <p></p>
        <PositionController
          currentIndex={positionIndex}
          setPositionIndex={setPositionIndex}
        />

        <ControllerButtons
          currentIndex={positionIndex}
          setPositionIndex={setPositionIndex}
        />
      </UICards>
    </main>
  );
}

export default FrontPage;
