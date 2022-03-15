import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
// import Api from '../../api/api';

import UICards from "../uicards/uiCards";

import './registrationConfirm.css'

function RegistrationConfirm(props) {
  const [ participantInfo, setParticipantInfo ] = useState({})
  const { personalCode } = useParams()
  console.log(personalCode)

  // Api.get(`userAuth/${personalCode}`)
  // .then((response) =>{
  //   setParticipantInfo(response.data)
  // })
  // .catch((error) =>{
  //   return <Navigate to="/"/>
  // })
    
  if(!personalCode){
    return <Navigate to="/"/>
  }

  return (
    <UICards card_name="ui-display-card">
      vwevwevwev
    </UICards>
  )
}

export default RegistrationConfirm