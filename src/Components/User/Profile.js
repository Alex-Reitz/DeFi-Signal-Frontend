import React, { useContext } from "react";
import UserContext from "../Auth/UserContext";

function UserProfile() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) {
    return (
      <div className="profile-blank">
        <h2>Please login</h2>
      </div>
    );
  } else {
    return (
      <div className="profile-container">
        <h4 className="profile-header">Here is your profile information</h4>
        <p className="profile-info">Your username: {currentUser.username}</p>
        <p className="profile-info">Your first name: {currentUser.firstName}</p>
        <p className="profile-info">Your last name: {currentUser.lastName}</p>
        <p className="profile-info">Your favorites: </p>
        <p className="profile-info">Your Notes: </p>
      </div>
    );
  }
}

export default UserProfile;
