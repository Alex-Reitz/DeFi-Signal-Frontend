import React from "react";
import Collapsible from "./Collapsible";

function Derivatives() {
  return (
    <div className="item-container">
      <h1 className="learn-heading">Derivatives</h1>
      <p className="item-text">
        DeFi derivatives are more sophisticated financial products allowing
        users or traders access to leveraged positions, spot trading, margin
        trading, and synthetic assets.
      </p>
      <hr />

      <Collapsible className="collapsible-text" label="Derivatives">
        <div className="container">
          <h2 className="learn-heading">DeFi Derivatives</h2>
          <p className="item-text">Synthetix</p>
          <p className="item-text">Perpetual Protocol</p>
          <p className="item-text">Hegic</p>
          <p className="item-text">dYdX</p>
          <p className="item-text">Opyn</p>
        </div>
      </Collapsible>
    </div>
  );
}

export default Derivatives;
