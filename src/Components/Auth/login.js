import React, { useState } from "react";
import { Button } from "../Button";
import "./Login.css";

function Login({ login }) {
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
      <h1 className="heading">Welcome Back</h1>
      <form onSubmit={gatherInput}>
        <div className="login-div">
          <label htmlFor="firstName">
            <h6 className="login-input-label">Username</h6>
          </label>
          <input
            className="login-input"
            autoFocus
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

        <Button className="btn">Login</Button>
      </form>
    </div>
  );
}

export default Login;
