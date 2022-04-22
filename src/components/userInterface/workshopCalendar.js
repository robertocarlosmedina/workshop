import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Link } from "react-router-dom";

import UICards from "../uicards/uiCards";
import HangoutsMeet from "../../assets/icons/hangouts-meet.png";

import "./workshopCalendar.css";

function WorkshopCalendar() {
  const [workshopSchedule, setWorkshopSchedule] = useState([
    {
      lesson: 1,
      date: "2/3/2022 12:30",
      location: "Isecmar-UTA",
      onlineLink: "https://www.google.com",
      content: "Python programming",
    },
    {
      lesson: 2,
      date: "2/3/2022 12:30",
      location: "Isecmar-UTA",
      onlineLink: "https://www.google.com",
      content: "Python programming",
    },
    {
      lesson: 3,
      date: "2/3/2022 12:30",
      location: "Isecmar-UTA",
      onlineLink: "https://www.google.com",
      content: "Python programming",
    },
    {
      lesson: 4,
      date: "2/3/2022 12:30",
      location: "Isecmar-UTA",
      onlineLink: "https://www.google.com",
      content: "Python programming",
    },
  ]);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <UICards card_name="ui-display-card">
      <h2 className="form-title schedule-ajust">Workshop Schedule</h2>
      <table className="normal-calendar-table">
        <thead className="normal-calendar-table-header">
          <tr>
            <th>Lesson</th>
            <th>Date</th>
            <th>Location</th>
            <th>Online</th>
            <th className="last-column">Content</th>
          </tr>
        </thead>
        <tbody className="normal-calendar-table-header-body">
          {workshopSchedule.map((schedule, i) => (
            <tr
              key={i}
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration={1000 + i * 600}
              className={`normal-column ${
                i + 1 === workshopSchedule.length ? "last-line" : ""
              }`}
            >
              <td>{schedule.lesson}</td>
              <td>{schedule.date}</td>
              <td>{schedule.location}</td>
              <td>
                <a href={schedule.onlineLink} target="_blank">
                  <img
                    style={{ animation: "top-bottom-animation 2s both" }}
                    className={`icon`}
                    src={HangoutsMeet}
                    alt="Hangouts Meet icon"
                  />
                </a>
              </td>
              <td className="last-column">{schedule.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </UICards>
  );
}

export default WorkshopCalendar;
