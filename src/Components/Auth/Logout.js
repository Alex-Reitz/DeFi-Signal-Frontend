import React from "react";
import { Button } from "../Button";

function Logout({ logout }) {
  return (
    <div className="logout-container">
      <h4 className="exit-message">Logout, See you next time!</h4>
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
