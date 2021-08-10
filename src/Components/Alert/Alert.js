import React from "react";

function Alert(messages) {
  return (
    <div>
      {messages.messages.map((error) => (
        <p key={error} className="error">
          {error}
        </p>
      ))}
    </div>
  );
}

export default Alert;
