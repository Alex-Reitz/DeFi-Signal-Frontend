import React from "react";
import Collapsible from "./Collapsible";

function Derivatives() {
  return (
    <Collapsible label="Derivatives">
      <div>
        <p>
          Derivatives are contracts whose value is derived from another
          underlying asset. There are a variety of DeFi deriviative protocols
          and the main two are Synthetix and Opyn.
        </p>
        <p>
          Synthetix serves as a protocol for synthetic assets and it's built on
          Ethereum.
        </p>
        <p>
          Opyn uses options to protect against smart contract failures and
          financial or admin risks. Users can buy Put or Call options on assets
          at a specific strike price within a particular period of time.
        </p>
      </div>
    </Collapsible>
  );
}

export default Derivatives;
