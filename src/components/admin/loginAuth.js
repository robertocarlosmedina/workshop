import React, { useState } from "react";
import { useNavigate } from "react-router";

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
    setEmail({ value: givenText, valid: validateEmptyString(givenText) });
  };

  const passwordFieldHandler = (event) => {
    const givenText = event.target.value;
    setPassword({ value: givenText, valid: validateEmptyString(givenText) });
  };

  function authenticateAdministrator(event) {
    event.preventDefault(); // Disable to form to send the request to the server and reload page
    if (email.valid && password.valid) {
      console.log(email.value, password.value);
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
              placeholder='Enter your full name'
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
              placeholder='example@gmail.com'
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
