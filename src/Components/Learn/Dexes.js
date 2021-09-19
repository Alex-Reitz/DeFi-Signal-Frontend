import React from "react";
import Collapsible from "./Collapsible";

function Dexes() {
  return (
    <div className="item-container">
      <h1 className="learn-heading">DEXes</h1>
      <p className="item-text">DEX description</p>
      <hr />
      <p className="item-text">DEX options below</p>

      <Collapsible className="collapsible-text" label="Ethereum Wallets">
        <div className="container">
          <h2 className="learn-heading">NA</h2>
          <p className="item-text">DEX option</p>
        </div>
      </Collapsible>
    </div>
  );
}

export default Dexes;
