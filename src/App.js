import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import FrontPage from "./components/frontPage";
import Platform from "./components/userInterface/platform";
import Registration from "./components/userInterface/registration";
import UICards from "./components//uicards/uiCards";
import AppHeader from "./components/headers/appHeader";
import AdminHeader from "./components/headers/adminHeader";
import RegistrationConfirm from "./components/userInterface/registrationConfirm";
import Competition from "./components/userInterface/competition/competition";
import WorkshopCalendar from "./components/userInterface/workshopCalendar";
import AdminDashboard from "./components/admin/adminDashboard";
import LoginAuth from "./components/admin/loginAuth";
import UrlError404 from "./components/urlError404";

function App() {
  const location = useLocation()
  const [showBorder, setShowBorder] = useState(false)

  const addNavbarBorder = () =>{
    if(window.scrollY >= 10){
      setShowBorder(true)
    }
    else{
      setShowBorder(false)
    }
  }

  window.addEventListener('scroll', addNavbarBorder)

  return (
    <React.Fragment>
      <Routes>
        <Route exact path={"/"} element={<FrontPage />} />
        <Route exact path={"/registrationPlatform"} element={<Platform />} />
        <Route exact path={"/registration"} element={<Registration />} />
        <Route
          exact
          path={"/participant/:personalCode"}
          element={<RegistrationConfirm />}
        />
        <Route
          exact
          path={"/registration/participant/:personalCode"}
          element={<RegistrationConfirm />}
        />
        <Route exact path={"/participant/"} element={<RegistrationConfirm />} />
        <Route exact path={"/competition"} element={<Competition />} />
        <Route exact path={"/calendar"} element={<WorkshopCalendar />} />
        <Route exact path={"/admin"} element={<LoginAuth />} />
        <Route exact path={"/admin/:userToken"} element={<AdminDashboard />} />
        <Route exact path="*" element={<UrlError404 />} />
      </Routes>
      {location.pathname !== "/" && <UICards card_name={`${ showBorder ? "header-card active-scroll" : "header-card"}`}>
        {window.location.pathname.includes("admin") ? (
          <AdminHeader />
        ) : (
          <AppHeader />
        )}
      </UICards>}
    </React.Fragment>
  );
}

export default App;
