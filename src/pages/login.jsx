import React, { useState, useEffect } from "react";
import googlebtn from '../images/googlebtn.png';
import authenapp from '../images/authenapp.png';
import { Link, Redirect, useLocation } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";


export const Login = () => {
  const [clickSignUp, setSignUp] = useState(false);
  const { logIn, googleSignIn } = useUserAuth();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await logIn(email, password);

      <Redirect to="/profile" />
    } catch (err) {
      console.log("Error");
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn().then(() => {
        <Redirect to="/profile" />
      });
    } catch (err) {
      console.log("Error");
    }
  };

  if(clickSignUp){
    return <Redirect to="/signup" />
  }

  const onSignUp = () => {
    console.log("function called");
    setSignUp(true);
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
          <form className="loginForm" onSubmit={onSubmit}>
            <fieldset className="login-label-container mb-5">
              <label className="login-label has-text-weight-bold has-text-black is-block mb-4">
                Login To Your Account
              </label>
            </fieldset>
            <button className="loginWithGoogle" onClick={handleGoogleSignIn}>
              <img src={googlebtn} alt="" />
            </button>
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