import React from "react";
import Collapsible from "./Collapsible";

function StableCoins() {
  return (
    <div className="item-container">
      <h1 className="learn-heading">Stable Coins</h1>
      <p className="item-text">Stable Coin Descriptions</p>
      <hr />
      <p className="item-text">Stable coin options</p>

      <Collapsible className="collapsible-text" label="Ethereum Wallets">
        <div className="container">
          <h2 className="learn-heading">NA</h2>
          <p className="item-text">Links to stable coin web sites</p>
        </div>
      </Collapsible>
    </div>
  );
}

export default StableCoins;
