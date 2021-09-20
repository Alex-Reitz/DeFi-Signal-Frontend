import React from "react";
import Collapsible from "./Collapsible";

function Dexes() {
  return (
    <div className="item-container">
      <h1 className="learn-heading">DEXs</h1>
      <p className="item-text">
        DEXs or decentralized exchanges are exchanges that allow for the trading
        or swapping of tokens without the need for an intermediary. Dexs are
        available 24 hours a day seven days a week unlike some centralized
        exchanges. Most Dexs are under the category of Automated Market Makers,
        meaning the exchanges don't use order books but instead rely on
        liquidity pools. Automated market makers serve as an incentive structure
        for users to become liquidity providers. Users who become liquidity
        providers can receive a share of transaction fees and free tokens.
      </p>
      <br />
      <p className="item-text">
        Users may choose to use a DEX to avoid the inconvenience of a KYC
        process or to gaub acess to a token not available on a centralized
        exchange.
      </p>
      <hr />
      <Collapsible className="collapsible-text" label="Dexs">
        <div className="container">
          <h2 className="learn-heading">Decentralized Exchanges</h2>
          <p className="item-text">Uniswap</p>
          <p className="item-text">SushiSwap</p>
          <p className="item-text">Balancer</p>
          <p className="item-text">Curve</p>
          <p className="item-text">Bancor Network</p>
        </div>
      </Collapsible>
    </div>
  );
}

export default Dexes;
