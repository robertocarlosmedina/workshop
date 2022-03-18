import React, { useState } from 'react'

import './enrrolledParticipants.css'

function EnrrolledParticipants() {
    const [allParticipants, setallParticipants] = useState([
        {
            name: "Roberto Medina",
            email: "rmedina@uta.cv",
            personalCode: "Njei122",
            schoolYear: "4º Ano",
            course: "Engenharia Informática e de Telecomunicações"
        },
        {
            name: "Roberto Medina",
            email: "rmedina@uta.cv",
            personalCode: "Njei122",
            schoolYear: "4º Ano",
            course: "Engenharia Informática e de Telecomunicações"
        },
        {
            name: "Roberto Medina",
            email: "rmedina@uta.cv",
            personalCode: "Njei122",
            schoolYear: "4º Ano",
            course: "Engenharia Informática e de Telecomunicações"
        },
    ])

    return (
        <div>
            <ul className="participants-display">
                { allParticipants.map((participant, i) =>
                    <li key={i} className="participant-element">
                        <p className="titlte-text">{ participant.name } <br/><span className="normal-text participant-mail">{ participant.email }</span></p>
                        <p className="normal-text personal-code">{ participant.personalCode }</p>
                        <p className="normal-text display-ajust">{ participant.schoolYear } de { participant.course }</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default EnrrolledParticipants
