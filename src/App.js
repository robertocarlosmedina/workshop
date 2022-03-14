import React from "react";
import { Route, Routes } from "react-router-dom";

import FrontPage from "./components/userInterface/frontPage";
import Registration from './components/userInterface/registration';
import UICards from "./components//uicards/uiCards";
import AppHeader from "./components/headers/appHeader";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path={'/'} element={<FrontPage />} />
        <Route exact path={'/registration'} element={<Registration />} />
      </Routes>
      <UICards card_name="header-card">
        <AppHeader />
      </UICards>
    </React.Fragment>
  );
}

export default App;
