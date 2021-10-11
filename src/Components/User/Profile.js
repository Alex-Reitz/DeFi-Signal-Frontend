import React, { useContext } from "react";
import UserContext from "../Auth/UserContext";
import "./Profile.css";
import Catch from "../Auth/Catch";

function UserProfile() {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  if (!currentUser) {
    return (
      <div className="profile-blank">
        <Catch />
      </div>
    );
  } else {
    return (
      <div className="profile-container">
        <div className="profile-data">
          <h4 className="profile-header">Your Information</h4>
          <p className="user-data">
            <strong>Username: </strong>
            <span className="user-data-info">{currentUser.username}</span>
          </p>
          <p className="user-data">
            <strong>Email: </strong>
            <span className="user-data-info">{currentUser.email}</span>
          </p>
          <p className="user-data">
            <strong> First name: </strong>
            <span className="user-data-info">{currentUser.firstName}</span>
          </p>
          <p className="user-data">
            <strong> Last name: </strong>
            <span className="user-data-info">{currentUser.lastName}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default UserProfile;
