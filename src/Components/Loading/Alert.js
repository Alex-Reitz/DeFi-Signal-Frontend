import React from "react";

function Alert({ type = "danger", messages = [] }) {
  return (
    <div>
      {messages.map((error) => (
        <p key={error}>{error}</p>
      ))}
    </div>
  );
}

export default Alert;
