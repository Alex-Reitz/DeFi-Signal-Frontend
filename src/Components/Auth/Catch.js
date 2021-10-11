import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./Catch.css";

function Catch() {
  return (
    <div className="catch-container">
      <h3 className="catch-header">Please Login or Signup</h3>
      <div className="catch-buttons">
        <Link exact to="login">
          <Button>Login</Button>
        </Link>
        <Link exact to="signup">
          <Button>Signup</Button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Catch;
