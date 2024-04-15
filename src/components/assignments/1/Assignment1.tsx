import React, { FunctionComponent, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// styles
import "../style.scss";

const Task1: FunctionComponent = () => {
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [canShowPassword, setCanShowPassword] = useState(false);
  const [isEmailFormatWrong, setIsEmailFormatWrong] = useState(false);
  const [isPasswordFieldEmpty, setIsPasswordFieldEmpty] = useState(false);
  
  const submitForm = (event: any) => {
    event.preventDefault();
    let canSubmitForm = true;

    if (!email) {
      setIsEmailFormatWrong(true);
      canSubmitForm = false;
    }

    if (!password) {
      setIsPasswordFieldEmpty(true);
      canSubmitForm = false;
    }

    if (isEmailFormatWrong || isPasswordFieldEmpty || !canSubmitForm) {
      return;
    }

    console.log('There is nothing to prevent us from submitting the form and sending the email and password to backend');
  };

  const togglePasswordVisibility = () => {
    setCanShowPassword(!canShowPassword);
  };
  
  const handleEmailFocusChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsEmailFormatWrong(event.type === "blur" && event.target.value === '')
  };

  const handlePasswordFocusChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsPasswordFieldEmpty(event.type === "blur" && event.target.value === '');
  };

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
    if (isEmailFormatWrong) {
      setIsEmailFormatWrong(isEmailValid(event.currentTarget.value) ? false : true);
    }
  };

  const handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!isEmailValid(event.target.value)) {
      setIsEmailFormatWrong(true);
    }
  };

  return (
    <div id="assignment-1">
      <form onSubmit={(event) => submitForm(event)}>
        <div className="login__container">
          <div className="form-row">
            <div>
              <label className="field__label">Email</label>
              <span className="form-required">*</span>
            </div>
            <input
                className={`input-field ${isEmailFormatWrong ? 'input-field--error' : ''}`}
                name="email"
                onFocus={handleEmailFocusChange}
                onBlur={handleEmailBlur}
                onChange={handleEmailChange}
                value={email}
            />
            {isEmailFormatWrong && <span className="form-error">Please enter a valid email address</span>}
          </div>

          <div className="form-row">
            <div>
              <label className="field__label">Password</label>
              <span className="form-required">*</span>
            </div>
            <div className="password-field__container">
              <input
                type={canShowPassword ? 'text' : 'password'}
                className={`input-field ${isPasswordFieldEmpty ? 'input-field--error' : ''}`}
                name="password"
                onFocus={handlePasswordFocusChange}
                onBlur={handlePasswordFocusChange}
                onChange={(event) => setPassword(event.currentTarget.value)}
                value={password}         
              />
              <span className="password-toggle__icon" onClick={togglePasswordVisibility}>
                {canShowPassword ? <FaEyeSlash /> : <FaEye />}
              </span>            
            </div>
            {isPasswordFieldEmpty && <span className="form-error">Please enter your password</span>}
          </div>

          <div className="form-row">
            <button className="button">Login</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Task1;
