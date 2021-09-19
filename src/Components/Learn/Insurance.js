import React from "react";
import Collapsible from "./Collapsible";

function Insurance() {
  return (
    <div className="item-container">
      <h1 className="learn-heading">Insurance</h1>
      <p className="item-text">DEFI insurnace description</p>
      <hr />
      <p className="item-text">Insurance protocol options</p>

      <Collapsible className="collapsible-text" label="Ethereum Wallets">
        <div className="container">
          <h2 className="learn-heading">NA</h2>
          <p className="item-text">Insurance protocol</p>
        </div>
      </Collapsible>
    </div>
  );
}

export default Insurance;
