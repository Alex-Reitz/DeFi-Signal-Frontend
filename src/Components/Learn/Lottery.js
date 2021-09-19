import React from "react";
import Collapsible from "./Collapsible";

function Lottery() {
  return (
    <div className="item-container">
      <h1 className="learn-heading">Lottery</h1>
      <p className="item-text">DEFI lottery description</p>
      <hr />
      <p className="item-text">Options for DEFI lottery.</p>

      <Collapsible className="collapsible-text" label="Ethereum Wallets">
        <div className="container">
          <h2 className="learn-heading">NA</h2>
          <p className="item-text">DEFI lottery option</p>
        </div>
      </Collapsible>
    </div>
  );
}

export default Lottery;
