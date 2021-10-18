import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../Button";
import "./Login.css";
import Alert from "../Alert/Alert";

function Login({ login }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  async function gatherInput(evt) {
    evt.preventDefault();
    let result = await login({ ...formData });
    if (result.success) {
      history.push("/");
    } else {
      setFormErrors(result.error);
    }
  }

  return (
    <div className="login-form">
      <h1 className="login-heading">Welcome Back</h1>
      <form onSubmit={gatherInput}>
        <div className="login-div">
          <label htmlFor="firstName">
            <h6 className="login-input-label"></h6>
          </label>
          <input
            className="login-input"
            autoFocus
            onChange={handleChange}
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            id="username"
          />
        </div>
        <div className="login-div">
          <label htmlFor="firstName">
            <h6 className="login-input-label"></h6>
          </label>
          <input
            className="login-input"
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            id="password"
          />
        </div>
        {formErrors.length ? <Alert messages={formErrors} /> : null}
        <div className="login-button">
          {" "}
          <Button>Login</Button>{" "}
        </div>
      </form>
    </div>
  );
}

export default Login;