import React, { useState } from "react";
import { Button } from "../Button";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import Alert from "../Alert/Alert";

function Signup({ signup }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
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
    const result = await signup({ ...formData });
    if (result.success) {
      history.push("/");
    } else {
      console.log(result.error);
      setFormErrors(result.error);
    }
  }

  return (
    <div className="signup">
      <form className="signup-form" onSubmit={gatherInput}>
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
        {formErrors.length ? <Alert messages={formErrors} /> : null}
        <div className="signup-button">
          {" "}
          <Button>Login</Button>{" "}
        </div>
      </form>
    </div>
  );
}

export default Signup;
