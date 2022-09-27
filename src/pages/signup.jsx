import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import authenapp from '../images/authenapp.png';

export const Signup = () => {
const [signupSuccess, setSignup] = useState(false);

async function onSubmit(e) {
    e.preventDefault();
    const pass = (new FormData(e.target).get("pass"));
    const cpass = (new FormData(e.target).get("cpass"));
    const firstname = (new FormData(e.target).get("fname"));
    const lastname = (new FormData(e.target).get("lname"));
    const email = (new FormData(e.target).get("email"));
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { 
        firstname: {firstname},
        lastname: {lastname},
        email: {email},
        password: {pass},
    };
    await fetch("https://data.mongodb-api.com/app/data-xczai/endpoint/data/v1/action/insertOne", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'SgP1lxErQIxCdemwypEKVNGQ5PjoMZnOu6PezcGwQ03harLqd5wd93C2HiHgTuf4',
      },
      body: {
        "dataSource": "AuthenticationApp",
      "database": "AuthenApp",
      "collection": "UserData",
      "document": {
        "name": "John Sample",
        "age": 42
      }
      }
    })
    .catch(error => {
      window.alert(error);
      return;
    });
    return (<Redirect to="/profile" />);
  }

const onSignup = (event) => {
    event.preventDefault();
    const pass = (new FormData(event.target).get("pass"));
    const cpass = (new FormData(event.target).get("cpass"));
    if(cpass == pass) {
        setSignup(true);
    }
}
if(signupSuccess){
    console.log("Password Matches");
    return <Redirect to="/profile" />
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
            </div>
        </form>
        </article>
    </div>
    </section>
);
};

export default Signup;