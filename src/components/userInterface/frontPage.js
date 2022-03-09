import { useState, React } from "react";
import UICards from "../uicards/uiCards";
import AppHeader from "../headers/appHeader";
import ControlerButtons from "./infoDisplay/controlerButtons";

function FrontPage() {
  const [positionIndex, setPositionIndex] = useState(0);
  const carroselPartes = [];

  return (
    <main>
      <UICards card_name="header_card">
        <AppHeader />
      </UICards>
      <UICards card_name="ui_display_card">
        ojoej
        <p></p>
        <ControlerButtons
          current_index={positionIndex}
          setPositionIndex={setPositionIndex}
        />
      </UICards>
    </main>
  );
}

export default FrontPage;
