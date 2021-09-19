import React from "react";
import Collapsible from "./Collapsible";

function Governance() {
  return (
    <div className="item-container">
      <h1 className="learn-heading">Governance</h1>
      <p className="item-text">Governance description</p>
      <hr />
      <p className="item-text">Governance items.</p>

      <Collapsible className="collapsible-text" label="Ethereum Wallets">
        <div className="container">
          <h2 className="learn-heading">NA</h2>
          <p className="item-text">governance protocols</p>
        </div>
      </Collapsible>
    </div>
  );
}

export default Governance;
