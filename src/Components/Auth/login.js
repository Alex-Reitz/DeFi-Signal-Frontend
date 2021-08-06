import React, { useContext, useState } from "react";

function Signup({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    login({ ...formData });
    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="login-form">
      <h1>Welcome back</h1>
      <form onSubmit={gatherInput}>
        <div className="login-div">
          <label htmlFor="firstName">
            <h6 className="login-input-label">Username</h6>
          </label>
          <input
            className="login-input"
            onChange={handleChange}
            type="text"
            name="username"
            value={formData.username}
            id="username"
          />
        </div>
        <div className="login-div">
          <label htmlFor="firstName">
            <h6 className="login-input-label">Password</h6>
          </label>
          <input
            className="login-input"
            onChange={handleChange}
            type="password"
            name="password"
            value={formData.password}
            id="password"
          />
        </div>

        <button id="login">Login</button>
      </form>
    </div>
  );
}

export default Signup;
