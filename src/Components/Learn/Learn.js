import React from "react";
import Governance from "./Governance";
import Insurance from "./Insurance";
import LendingBorrowing from "./LendingBorrowing";
import Lottery from "./Lottery";
import StableCoins from "./StableCoins";
import Wallets from "./Wallets";
import Derivatives from "./Derivatives";
import Dexes from "./Dexes";

function Learn() {
  return (
    <div>
      <Wallets />
      <Derivatives />
      <Dexes />
      <Governance />
      <Insurance />
      <LendingBorrowing />
      <Lottery />
      <StableCoins />
    </div>
  );
}

export default Learn;
