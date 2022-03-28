import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

import "./appHeader.css";

function AdminHeader() {

  const logOut = () => {

  }

  return (
    <header>
      <h1 className="app-tittle">Workshop</h1>
      <p className="normal-text admin-text-ajust" onClick={logOut}>Log out</p>
    </header>
  )
}

export default AdminHeader