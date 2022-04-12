import React, { useState } from "react";
import Api from "../../api/api";
import { useNavigate } from "react-router";

import UICards from "../uicards/uiCards";

import "./registration.css";

function Registration() {
  const urlChanger = useNavigate();
  const [loadingRegistrationHandler, setLoadingRegistrationHandler] = useState({
    startRegistrationRequest: false,
    registrationSuccess: false,
    registrationRequestFinished: false,
  });
  const [fullName, setFullName] = useState({ value: "", valid: false });
  const [email, setEmail] = useState({ value: "", valid: false });
  const [schoolYear, setSchoolYear] = useState({
    value: "1º Ano",
    valid: true,
  });
  const [participationType, setParticipationType] = useState({
    value: "Presential",
    valid: true,
  });
  const [degreeType, setDegreeType] = useState({
    value: "Bachelor",
    valid: true,
  });
  const [enrolledCourse, setEnrolledCourse] = useState({
    value: "",
    valid: false,
  });

  function validateEmptyString(string) {
    return string !== "" && string.includes(" ") ? true : false;
  }

  const fullNameFieldHandler = (event) => {
    const givenText = event.target.value;
    setFullName({ value: givenText, valid: validateEmptyString(givenText) });
  };

  const emailFieldHandler = (event) => {
    const givenText = event.target.value;
    const validEmail =
      givenText.includes("@") && givenText.includes(".") ? true : false;
    setEmail({ value: givenText, valid: validEmail });
  };

  const schoolYearFieldHandler = (event) => {
    setSchoolYear({ value: event.target.value, valid: true });
  };

  const participationTypeFieldHandler = (event) => {
    setParticipationType({ value: event.target.value, valid: true });
  };

  const degreeTypeFieldHandler = (event) => {
    setDegreeType({ value: event.target.value, valid: true });
  };

  const enrolledCourseFieldHandler = (event) => {
    const givenText = event.target.value;
    setEnrolledCourse({
      value: givenText,
      valid: validateEmptyString(givenText),
    });
  };

  /**
   * 
   * @param {*} event 
   * @returns null 
   * @description Method to call the API to make the registration
   */
  const submitRegistration = async (event) => {
    event.preventDefault(); // Disable to form to send the request to the server and reload page
    if (fullName.valid && email.valid && enrolledCourse.valid) {
      try {
        Api.post("/user_register/make_registration", {
          email: email.value,
          full_name: fullName.value,
          scholar_year: schoolYear.value,
          degree_type: degreeType.value,
          course_name: enrolledCourse.value,
          presential: `${
            participationType.value === "Presential" ? true : false
          }`,
        }).then((res) => {
          const newRegistre = res.data;

          if (newRegistre.statusCode !== 200) {
            console.log(newRegistre.errorMessage);
            return;
          }
          if (newRegistre) {
            // console.log(newRegistre);
            // console.log(newRegistre.data.userPersonalCode);
            urlChanger(`participant/${newRegistre.data.userPersonalCode}`);
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <UICards card_name="ui-display-card">
      <h2 className="form-title">Make your own registration</h2>
      <form className="formulary">
        <ul className="registration-form">
          <li className="form-item">
            <p>
              <label>
                <span>*</span> Full Name
              </label>
            </p>
            <input
              type="text"
              value={fullName.value}
              onChange={fullNameFieldHandler}
              className={`resgistrion-input-field ${
                fullName.valid ? "valid" : "invalid"
              }`}
              required
              placeholder="Enter your full name"
            />
          </li>
          <li className="form-item">
            <p>
              <label>
                <span>*</span> Email
              </label>
            </p>
            <input
              type="email"
              value={email.value}
              onChange={emailFieldHandler}
              className={`resgistrion-input-field ${
                email.valid ? "valid" : "invalid"
              }`}
              required
              placeholder="example@gmail.com"
            />
          </li>
          <li className="form-item">
            <p>
              <label>
                <span>*</span> School Year
              </label>
            </p>
            <select
              onChange={schoolYearFieldHandler}
              className="resgistrion-input-field  selector"
            >
              <option value="1º Ano">1º Ano</option>
              <option value="2º Ano">2º Ano</option>
              <option value="3º Ano">3º Ano</option>
              <option value="4º Ano">4º Ano</option>
            </select>
          </li>
          <li className="form-item">
            <p>
              <label>
                <span>*</span> Participation Type
              </label>
            </p>
            <select
              onChange={participationTypeFieldHandler}
              className="resgistrion-input-field  selector"
            >
              <option value="Presential">Presential</option>
              <option value="Online">Online</option>
            </select>
          </li>
          <li className="form-item">
            <p>
              <label>
                <span>*</span> Degree / Current Degree
              </label>
            </p>
            <select
              onChange={degreeTypeFieldHandler}
              className="resgistrion-input-field selector"
            >
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="Doctoral">Doctoral</option>
            </select>
          </li>
          <li className="form-item">
            <p>
              <label>
                <span>*</span> Degree Name / Enrolled Course
              </label>
            </p>
            <input
              type="text"
              value={enrolledCourse.value}
              onChange={enrolledCourseFieldHandler}
              className={`resgistrion-input-field ${
                enrolledCourse.valid ? "valid" : "invalid"
              }`}
              placeholder="Current course"
              required
            />
          </li>
        </ul>
        <button
          className="button primary-button ajust-button"
          onClick={submitRegistration}
        >
          Register
        </button>
      </form>
    </UICards>
  );
}

export default Registration;
