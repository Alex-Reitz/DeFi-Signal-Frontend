import React from "react";
import Collapsible from "./Collapsible";

function StableCoins() {
  return (
    <Collapsible label="Stable Coins">
      <div>
        <p>
          Stablecoins are pegged to underlying assets such as the USD. There are
          three types of stablecoins fiat-collateralized, crypto-collateralized,
          and algorithmic stablecoins.
        </p>
        <p>
          One of the most used stablecoins in the DeFi economy is Dai. Dai is
          collateralized using cryptocurrencies like Bitcoin and Ethereum. It's
          value is pegged to $1 through protocols voted on by a decentralized
          autonomous organization and smart contracts. Therefore Dai is a
          decentralized crypto-collateralized stablecoin.
        </p>
      </div>
    </Collapsible>
  );
}

export default StableCoins;
