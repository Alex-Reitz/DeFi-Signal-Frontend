import React from "react";
import Collapsible from "./Collapsible";

function Derivatives() {
  return (
    <div className="item-container">
      <h1 className="learn-heading">Derivatives</h1>
      <p className="item-text">Derivative Description</p>
      <hr />
      <p className="item-text">Derivative options below.</p>

      <Collapsible className="collapsible-text" label="Ethereum Wallets">
        <div className="container">
          <h2 className="learn-heading">NA</h2>
          <p className="item-text">Derivatives</p>
        </div>
      </Collapsible>
    </div>
  );
}

export default Derivatives;
