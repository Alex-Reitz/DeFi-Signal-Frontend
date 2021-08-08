import React, { useState } from "react";
import { Button } from "../Button";
import "./Signup.css";

function Signup({ signup }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    signup({ ...formData });
    setFormData({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div className="Signup">
      <form onSubmit={gatherInput}>
        <div className="signup-div">
          <label htmlFor="username">
            <h6 className="signup-input-label">Username</h6>
          </label>
          <input
            className="signup-input"
            onChange={handleChange}
            autoFocus
            type="text"
            name="username"
            placeholder="Max 30 Characters"
            value={formData.username}
            id="username"
          />
        </div>
        <div className="signup-div">
          <label htmlFor="password">
            <h6 className="signup-input-label">Password</h6>
          </label>
          <input
            className="signup-input"
            onChange={handleChange}
            placeholder="Between 5 and 20 Characters"
            type="password"
            name="password"
            value={formData.password}
            id="password"
          />
        </div>
        <div className="signup-div">
          <label htmlFor="firstname">
            <h6 className="signup-input-label">First Name</h6>
          </label>
          <input
            className="signup-input"
            onChange={handleChange}
            type="text"
            placeholder="Max 30 Characters"
            name="firstName"
            value={formData.firstName}
            id="firstName"
          />
        </div>
        <div className="signup-div">
          <label htmlFor="lastname">
            <h6 className="signup-input-label">Last Name</h6>
          </label>
          <input
            className="signup-input"
            onChange={handleChange}
            placeholder="Max 30 Characters"
            type="text"
            name="lastName"
            value={formData.lastName}
            id="lastName"
          />
        </div>
        <div className="signup-div">
          <label htmlFor="email">
            <h6 className="signup-input-label">Email</h6>
          </label>
          <input
            className="signup-input"
            onChange={handleChange}
            type="text"
            placeholder="Max 60 Characters"
            name="email"
            value={formData.email}
            id="email"
          />
        </div>

        <Button>Signup</Button>
      </form>
    </div>
  );
}

export default Signup;
