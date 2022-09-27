import React, { useState, useEffect } from "react";
import NavBar from "../constants/NavBar";
import useCredStore from '../stores/useCredStore.js';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { TextArea } from "semantic-ui-react";
import PopUp from "../constants/PopUp.jsx";

export const Profile = () => {
    const [
        ProfileName, 
        ProfileFName, 
        ProfileLName, 
        ProfileEmail, 
        ProfileImage, 
        ProfilePhone, 
        ProfileBio,
        isEditOn,
        setProfileName,
        setProfileFName,
        setProfileLName,
        setProfileEmail,
        setProfilePhone,
        setProfileBio,
        setProfileImage,
        isUpdatePassword,
    ] = useCredStore((state) => [
        state.ProfileName,
        state.ProfileFName,
        state.ProfileLName,
        state.ProfileEmail,
        state.ProfileImage,
        state.ProfilePhone,
        state.ProfileBio,
        state.isEditOn,
        state.setProfileName,
        state.setProfileFName,
        state.setProfileLName,
        state.setProfileEmail,
        state.setProfilePhone,
        state.setProfileBio,
        state.setProfileImage,
        state.isUpdatePassword,
      ]);
    const onEditFullName = event => {
        setProfileName(event.target.value);
    }
    const onEditFirstName = event => {
        setProfileFName(event.target.value);
    }
    const onEditLastName = event => {
        setProfileLName(event.target.value);
    }
    const onEditEmail = event => {
        setProfileEmail(event.target.value);
    }
    const onEditPhone = event => {
        setProfilePhone(event.target.value);
    }
    const onEditBio = event => {
        setProfileBio(event.target.value);
    }
    const onEditImage = event => {
        setProfileImage(URL.createObjectURL(event.target.files[0]));
    }
    // console.log(URL.createObjectURL(ProfileImage));
    
    return (
      <section id="profile" className={`columns profilePage`}>
        <div className="nav-container">
            <NavBar />
        </div>
        <div className="profile-container">
            <PopUp />
            <Card className="image-data-container">
                {!isEditOn ? (
                    <Card.Img variant="top" src={ProfileImage} className="image-container" />
                ): (
                    <input className="upload-image" type="file" name="image" onChange={onEditImage} />
                )}
                {!isEditOn ? (
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Full Name: {ProfileName}</ListGroup.Item>
                        <ListGroup.Item>First Name: {ProfileFName}</ListGroup.Item>
                        <ListGroup.Item>Last Name: {ProfileLName}</ListGroup.Item>
                        <ListGroup.Item>Email: {ProfileEmail}</ListGroup.Item>
                        <ListGroup.Item>Phone: {ProfilePhone}</ListGroup.Item>
                    </ListGroup>
                ) : (
                    <ListGroup className="list-group-flush update-list">
                        <ListGroup.Item>
                            Full Name: 
                            <input className="upload-fullname" type="text" name="full-name" onChange={onEditFullName} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            First Name: 
                            <input type="text" className="upload-firstname" name="first-name" onChange={onEditFirstName} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Last Name: 
                            <input type="text" className="upload-lastname" name="last-name" onChange={onEditLastName} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Email: 
                            <input type="email" className="upload-email" name="email" onChange={onEditEmail} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Phone: 
                            <input type="tel" className="upload-phone" name="phone" onChange={onEditPhone} />
                        </ListGroup.Item>
                    </ListGroup>
                )}
            </Card>
            <Card className="data-container">
                <ListGroup className="list-group-flush bio-list">
                    <ListGroup.Item className="bio-tag">Bio: </ListGroup.Item>
                    {!isEditOn ? (
                        <ListGroup.Item>
                            {ProfileBio}
                        </ListGroup.Item>
                    ) : (
                        <ListGroup.Item className="bio"> 
                            <TextArea type="text" className="upload-bio" name="bio" onChange={onEditBio} />
                        </ListGroup.Item>
                    )} 
                </ListGroup>
            </Card>
        </div>
      </section>
    );
};

export default Profile;