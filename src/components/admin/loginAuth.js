import React, { useState } from "react";
import { useNavigate } from "react-router";
import Api from "../../api/api";

import UICards from "../uicards/uiCards";

import "./loginAuth.css";

function LoginAuth() {
  const urlChanger = useNavigate();
  const [email, setEmail] = useState({ value: "", valid: false });
  const [password, setPassword] = useState({ value: "", valid: false });

  function validateEmptyString(string) {
    return string !== "" ? true : false;
  }

  const emailFieldHandler = (event) => {
    const givenText = event.target.value;
    const validMail = givenText.includes("@") && givenText.includes(".") && !givenText.includes("@.") ? true : false;
    setEmail({ value: givenText, valid: validMail });
  };

  const passwordFieldHandler = (event) => {
    const givenText = event.target.value;
    setPassword({ value: givenText, valid: validateEmptyString(givenText) });
  };

  const  authenticateAdministrator =  async (event) => {
    event.preventDefault();
    if (email.valid && password.valid) {
      try {
        Api.post("/user_auth/auth", {
          email_or_username: `${email.value}`,
          password: password.value,
        }).then((res) => {
          const newRegistre = res.data;
          if (newRegistre.statusCode !== 200) {
            console.log(newRegistre.errorMessage);
            return;
          }
          if (newRegistre) {
            setInterval(() => {
              urlChanger(`${newRegistre.data.accessToken}`);
            }, 1000);
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  return (
    <UICards card_name='login-card'>
        <h2 className="form-title">Admin Account</h2>
      <form>
        <ul className='login-registration-form'>
          <li className='form-item login-form-item'>
            <p>
              <label>
                <span>*</span> Email
              </label>
            </p>
            <input
              type='email'
              value={email.value}
              onChange={emailFieldHandler}
              className={`resgistrion-input-field ${
                email.valid ? "valid" : "invalid"
              }`}
              required
              placeholder='Your email'
            />
          </li>
          <li className='form-item login-form-item'>
            <p>
              <label>
                <span>*</span> Password
              </label>
            </p>
            <input
              type='password'
              value={password.value}
              onChange={passwordFieldHandler}
              className={`resgistrion-input-field ${
                password.valid ? "valid" : "invalid"
              }`}
              required
              placeholder='........'
            />
          </li>
        </ul>
        <button
          className="button primary-button login-ajust-button"
          onClick={authenticateAdministrator}
        >
          Register
        </button>
      </form>
    </UICards>
  );
}

export default LoginAuth;
