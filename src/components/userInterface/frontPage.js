import { useState, useRef, React } from "react";

import UICards from "../uicards/uiCards";
import AppHeader from "../headers/appHeader";
import ControllerButtons from "./infoDisplay/controllerButtons";
import PositionController from "./infoDisplay/positionController";
import ContentToDisplay from "./infoDisplay/contentToDisplay";
import PairProgrammingIlustration from "../../assets/ilustrations/pair-programming.png";
import digitalPresentationIlustration from "../../assets/ilustrations/digital-presentation.png";
import subscribeBroIlustration from "../../assets/ilustrations/subscriber-bro.png";

function FrontPage() {
  const [positionIndex, setPositionIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("top-bottom-animation")
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
    }
  ];

  const changePositionIndexANDanimation = ( index ) =>{
    const lastIndex = positionIndex
    setPositionIndex(index)
    console.log(`${lastIndex}, ${index}, ${parseInt(lastIndex) - parseInt(index)}`)
    if(parseInt(lastIndex) - parseInt(index) < parseInt(index)){
      setAnimationClass("right-left-animation")
      console.log(`Firts: ${animationClass}`)
    }
    else{
      setAnimationClass("left-right-animation")
      console.log(`Secund: ${animationClass}`)

    }
  }

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
          animationClass={animationClass}
        />
        <p>{positionIndex}</p>
        <p>{animationClass}</p>
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
