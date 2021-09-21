import React from "react";
import Collapsible from "./Collapsible";

function LendingBorrowing() {
  return (
    <div className="item-container">
      <h1 className="learn-heading">Lending and Borrowing</h1>
      <p className="item-text">
        Lending and Borrowing protocols make it possible for anyone to access
        debt and leverage upon it. Users can place their cryptocurrency assets
        as collateral. These protocols allow suppliers to place their assets in
        a liquidity pool and earn interest. Borrowers can take loans and pay
        interest on their debt.
      </p>
      <p className="item-text"></p>
      <hr />

      <Collapsible className="collapsible-text" label="Protocols">
        <div className="container">
          <h2 className="learn-heading">Lending and Borrowing Protocols</h2>
          <p className="item-text">Compound</p>
          <p className="item-text">Maker</p>
          <p className="item-text">Aave</p>
          <p className="item-text">Cream</p>
        </div>
      </Collapsible>
    </div>
  );
}

export default LendingBorrowing;
