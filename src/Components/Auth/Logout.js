import React from "react";
import { Button } from "../Button";
import "./Logout.css";

function Logout({ logout }) {
  return (
    <div className="logout-container">
      <Button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default Logout;
