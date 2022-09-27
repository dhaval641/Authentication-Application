import React, { useState, useEffect } from "react";
import googlebtn from '../images/googlebtn.png';
import authenapp from '../images/authenapp.png';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { Link, Redirect, useLocation } from "react-router-dom";
import useCredStore from '../stores/useCredStore.js';

export const Login = () => {
  const [clickSignUp, setClick] = useState(false);
  
  const [
    setProfileName, 
    setProfileFName, 
    setProfileLName, 
    setProfileEmail, 
    setProfileImage, 
    clientId, 
    isLogedIn, 
    setLoginStatus
  ] = useCredStore((state) => [
    state.setProfileName,
    state.setProfileFName,
    state.setProfileLName,
    state.setProfileEmail,
    state.setProfileImage,
    state.clientId,
    state.isLogedIn,
    state.setLoginStatus,
  ]);

  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: ''
        });
      };
      gapi.load('client:auth2', initClient);
  });
  const onSuccess = (response) => {
    setProfileName(response.profileObj.name);
    setProfileFName(response.profileObj.givenName);
    setProfileLName(response.profileObj.familyName);
    setProfileEmail(response.profileObj.email);
    setProfileImage(response.profileObj.imageUrl);
    setLoginStatus(true);
    console.log("success", response);
  }
  const onFailure = () => {
    console.log("failed");
  }
  if(isLogedIn){
    return <Redirect to="/profile" />
  }
  if(clickSignUp){
    return <Redirect to="/signup" />
  }

  const onSignUp = () => {
    console.log("function called");
    setClick(true);
  }

  return (
    <section id="login" className={`columns loginPage`}>
      <div>
        <header>
          <div className="content logo-container">
              <img className="logo" src={authenapp} alt="" />
          </div>
        </header>
      </div>
      <div className="loginCard-container">
        <article
          className={`card column is-one-third has-text-centered loginForm`}
        >
          <form className="loginForm">
            <fieldset className="login-label-container mb-5">
              <label className="login-label has-text-weight-bold has-text-black is-block mb-4">
                Login To Your Account
              </label>
            </fieldset>
            <GoogleLogin
              className="img"
              clientId={clientId}
              render={renderProps => (
                <button className="loginWithGoogle" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <img src={googlebtn} alt="" />
                </button>
              )}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              jsSrc="https://apis.google.com/js/api.js"
              cookiePolicy={'single_host_origin'}
              isSignedIn={isLogedIn}
            />
            <div className="login-divider divider has-text-black is-black">
              OR
            </div>
            <div className="field email-field">
              <p className="input-container control has-icons-left has-icons-right">
                <input
                  className="input email-input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="field pass-field">
              <p className="input-container control has-icons-left has-icons-right">
                <input
                  className="input email-input"
                  type="pass"
                  name="pass"
                  placeholder="Password"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="login-buttons">
              <button
                type="submit"
                className="button has-background-primary get-email-button"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={onSignUp}
                className="button has-background-primary get-email-button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
};

export default Login;