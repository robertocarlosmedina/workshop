import React from "react";
import { Route, Routes } from "react-router-dom";

import FrontPage from "./components/userInterface/frontPage";
import Registration from "./components/userInterface/registration";
import UICards from "./components//uicards/uiCards";
import AppHeader from "./components/headers/appHeader";
import RegistrationConfirm from "./components/userInterface/registrationConfirm";
import UrlError404 from "./components/urlError404";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path={"/"} element={<FrontPage />} />
        <Route exact path={"/registration"} element={<Registration />} />
        <Route
          exact
          path={"/participant/:personalCode"}
          element={<RegistrationConfirm />}
        />
        <Route
          exact
          path={"/participant/"}
          element={<RegistrationConfirm />}
        />
        <Route exact path='*' element={<UrlError404 />}/>
      </Routes>
      <UICards card_name='header-card'>
        <AppHeader />
      </UICards>
    </React.Fragment>
  );
}

export default App;
