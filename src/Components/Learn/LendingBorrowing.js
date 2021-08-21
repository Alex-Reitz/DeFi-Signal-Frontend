import React from "react";
import Collapsible from "./Collapsible";

function LendingBorrowing() {
  return (
    <Collapsible label="Lending and Borrowing">
      <div>
        <p>
          Lending and borrowing are two of the biggest services offered in the
          traditional finance system. In the DeFi economy, bankless lending and
          borrowing mechanisms exist through decentralized protocols. Two of the
          most used platforms are Compound Finance and Aave. Interest rates for
          both are determined algorithmically based on supply and demand.
        </p>
        <p>
          Compound finance is an ethereum based money market protocol. Compound
          operates as a liquidity pool on the ethereum blockchain. Users can
          stake their assets to the liquidity pool to earn interest, while
          borrowers take a loan from the liquidity pool and pay interest on
          their debt.
        </p>
        <p>
          Aave is another decentralized money market protocol widely used in the
          DeFi economy. Aave operates in a similar way to Compound Finance.
          Users can supply their crypto assets to a liquidity pool or borrow
          assets by taking a loan and paying interest on that loan. Aave differs
          from Compound Finance in that it offers both stable APR and variable
          APR. Stable APR is similar to a fixed rate but can change depending on
          market conditions while variable APR is determined algorithmically
          based on supply and demand.
        </p>
      </div>
    </Collapsible>
  );
}

export default LendingBorrowing;
