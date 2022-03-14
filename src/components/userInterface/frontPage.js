import { useState, React } from "react";

import UICards from "../uicards/uiCards";
import ControllerButtons from "./infoCarruselDisplay/controllerButtons";
import PositionController from "./infoCarruselDisplay/positionController";
import ContentToDisplay from "./infoCarruselDisplay/contentToDisplay";
import PairProgrammingIlustration from "../../assets/ilustrations/pair-programming.png";
import digitalPresentationIlustration from "../../assets/ilustrations/digital-presentation.png";
import subscribeBroIlustration from "../../assets/ilustrations/subscriber-bro.png";

function FrontPage() {
  const [positionIndex, setPositionIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("top-bottom-animation");
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

  const changePositionIndexANDanimation = (index) => {
    const lastIndex = positionIndex;
    setPositionIndex(index);
    if (parseInt(lastIndex) - parseInt(index) < parseInt(index)) {
      checkDuobleSlideInSameDirection("right-left-animation");
    } else {
      checkDuobleSlideInSameDirection("left-right-animation");
    }
  };

  const checkDuobleSlideInSameDirection = (slideDirection) => {
    if (animationClass === slideDirection) {
      setAnimationClass(`${slideDirection}-1`);
      return;
    }
    setAnimationClass(slideDirection);
  };

  return (
    <main>
      <UICards card_name="ui-display-card">
        <ContentToDisplay
          ilustrationUrl={carroselPartes[positionIndex].ilustrationUrl}
          ilustrationDescription={carroselPartes[positionIndex].altText}
          textToDisplay={carroselPartes[positionIndex].text}
          animationClass={animationClass}
          positionIndex={positionIndex}
        />
        <p></p>
        <PositionController
          currentIndex={positionIndex}
          changePositionIndexANDanimation={changePositionIndexANDanimation}
        />

        <ControllerButtons
          currentIndex={positionIndex}
          changePositionIndexANDanimation={changePositionIndexANDanimation}
        />
      </UICards>
    </main>
  );
}

export default FrontPage;
