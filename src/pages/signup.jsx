import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import authenapp from '../images/authenapp.png';
import { ref, getDatabase, set } from "firebase/database";
import { updateProfile, getAuth } from "firebase/auth";

export const Signup = () => {
  const [clickSignIn, setSignIn] = useState(false);
  const { signUp } = useUserAuth();
  const defaultPicture = "https://picsum.photos/200/300";

  function writeNewPost(uid, username, email, picture) {
    const db = getDatabase();   
  
    return set(ref(db, "User/"+uid), {
      UserName: username,
      email: email,
      bio: null,
      phoneNumber: null,
      ProfilePicture: picture,
    });
  }

  const onRegister = async (event) => {
    event.preventDefault();
    const userName = (new FormData(event.target).get("userName")); 
    console.log(userName);
    try {
      await signUp(email, password).then(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        updateProfile(user, {
          displayName: userName
        }).then(() => {
          writeNewPost(user.uid, user.displayName, user.email, defaultPicture)
          return <Redirect to="/profile" />
        }).catch((error) => {
          console.log(error);
        });

      });
    } catch (err) {
      console.log("Error");
    }
  };

  if(clickSignIn){
    return <Redirect to="/login" />
  }

  const onSignIn = () => {
    console.log("function called");
    setSignIn(true);
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
        <form className="loginForm" onSubmit={onRegister}>
            <fieldset className="login-label-container mb-5">
            <label className="login-label has-text-weight-bold has-text-black is-block mb-4">
                Create Account
            </label>
            </fieldset>
            <div className="field name-field">
            <p className="input-container control fname">
              <input
                className="input name-input"
                type="text"
                name="fname"
                placeholder="First Name"
                required
              />
            </p>
            <p className="input-container control lname">
              <input
                className="input name-input"
                type="text"
                name="lname"
                placeholder="Last Name"
                required
              />
            </p>
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
                type="password"
                name="pass"
                placeholder="Password"
                required
              />
            </p>
            </div>
            <div className="field cpass-field">
            <p className="input-container control has-icons-left has-icons-right">
              <input
                className="input email-input"
                type="password"
                name="cpass"
                placeholder="Confirm Password"
                required
              />
            </p>
            </div>
            <div className="login-buttons">
            <button
              type="submit"
              className="button has-background-primary get-email-button"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={onSignIn}
              className="button has-background-primary get-email-button"
            >
              Sign In
            </button>
            </div>
        </form>
        </article>
    </div>
    </section>
);
};

export default Signup;