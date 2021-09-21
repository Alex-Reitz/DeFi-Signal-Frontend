import React from "react";
import Collapsible from "./Collapsible";

function Insurance() {
  return (
    <div className="item-container">
      <h1 className="learn-heading">Insurance</h1>
      <p className="item-text">
        DEFI Insurance is in a nascent stage. As DeFi continues to grow in
        popularity, a system for reducing risk for users interacting with
        decentralized protocols will be crucial.
      </p>
      <hr />

      <Collapsible className="collapsible-text" label="Insurance Protocols">
        <div className="container">
          <h2 className="learn-heading">Decentralized Insurance Protocols</h2>
          <p className="item-text">Nexus Mutual</p>
          <p className="item-text">Cover Protocol</p>
          <p className="item-text">Unslashed Finance</p>
          <p className="item-text">Nsure Network</p>
        </div>
      </Collapsible>
    </div>
  );
}

export default Insurance;
