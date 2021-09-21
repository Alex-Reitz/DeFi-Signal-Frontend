import React from "react";
import Collapsible from "./Collapsible";

function StableCoins() {
  return (
    <div className="item-container">
      <h1 className="learn-heading">Stable Coins</h1>
      <p className="item-text">
        In the cryptocurrency space there are both centralized and decentralized
        stable coins. Stable coins are assets that maintain a 1:1 peg to
        something else. Typically the something else is USD. Tether (USDT) is
        the most used centralized stable coin and has a peg to $1.
      </p>
      <p className="item-text">
        DAI is a stablecoin most commonly used with DeFi protocols. DAI is
        issued by the decentralized protocol Maker when collateral, usually ETH,
        is deposited into a Maker vault.
      </p>
      <hr />
      <p className="item-text">Stable coin options</p>

      <Collapsible className="collapsible-text" label="Stable Coins">
        <div className="container">
          <h2 className="learn-heading">Stable Coins</h2>
          <p className="item-text">Tether</p>
          <p className="item-text">DAI</p>
          <p className="item-text">USDC</p>
        </div>
      </Collapsible>
    </div>
  );
}

export default StableCoins;
