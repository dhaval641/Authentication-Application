import React from "react";
import { Redirect } from "react-router-dom";
import authenapp from '../images/authenapp.png';
import useCredStore from '../stores/useCredStore.js';

export default function NavBar() {
  const [
    isLogedIn, 
    setLoginStatus, 
    setEditStatus, 
    setSaveStatus, 
    isEditOn, 
    isUpdatePassword, 
    setUpdatePassword,
  ] = useCredStore((state) => [
    state.isLogedIn,
    state.setLoginStatus,
    state.setEditStatus,
    state.setSaveStatus,
    state.isEditOn,
    state.isUpdatePassword,
    state.setUpdatePassword,
  ]);
  const logout = () => {
    console.log(isLogedIn);
    setLoginStatus(false);
    console.log(isLogedIn);
  }
  const edit = () => {
    setEditStatus(true);
    setSaveStatus(false);
  }
  const save = () => {
    setSaveStatus(true);
    setEditStatus(false);
  }
  const changePassword = () => {
    setUpdatePassword(true);
  }
  if(!isLogedIn){
    return <Redirect to="/login" />
  }
  return (
    
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
        <div className="navbar-logo">
            <img src={authenapp} height={75} alt="" />
        </div>
        <div className="navbar-content">
            {!isEditOn ? (
              <div>
                <button className="nav-button" onClick={edit}>Edit Profile</button>
                <button className="nav-button" onClick={logout}>
                  Log Out
                </button>
              </div>
            ) : (
              <div>
                <button className="nav-button" onClick={save}>Save Profile</button>
                <button className="nav-button" onClick={changePassword}>
                  Change Password
                </button>
              </div>
            )}
        </div>
    </nav>
  )
}