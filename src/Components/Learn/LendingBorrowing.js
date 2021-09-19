import React from "react";
import Collapsible from "./Collapsible";

function LendingBorrowing() {
  return (
    <div className="item-container">
      <h1 className="learn-heading">Lending and Borrowing</h1>
      <p className="item-text">Lending and Borrowing Description</p>
      <hr />
      <p className="item-text">Lending and Borrowing Protocols</p>

      <Collapsible className="collapsible-text" label="Ethereum Wallets">
        <div className="container">
          <h2 className="learn-heading">NA</h2>
          <p className="item-text">Lend and borrow option</p>
        </div>
      </Collapsible>
    </div>
  );
}

export default LendingBorrowing;
