import React from 'react'
import { Link } from 'react-router-dom'

function AdminHeader() {
  const history = History()

  const goToHome = () =>{
    console.log("Okoko")
    history.push("/")
  }
  return (
    <header>
      <button onClick={goToHome}>Workshop</button>
      <ul>
        <li>teams</li>
        <li>Calendar</li>
      </ul>
    </header>
  )
}

export default AdminHeader