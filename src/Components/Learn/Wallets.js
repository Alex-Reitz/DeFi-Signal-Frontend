import React from "react";

function Wallets() {
  return (
    <div className="container">
      <h2>Wallets</h2>
      <p>
        There are two types of wallets, custodial and non-custodial. Custodial
        wallets are categorized as wallets where third parties hold onto and
        maintain control over your crypto. An example of this would be a wallet
        on an exchange such as Coinbase. Non-custodial wallets are wallets that
        you control yourself. An example of this would be wallet on your
        personal computer or phone.
      </p>
      <p>
        There are thousands of wallets out there from a large variety of
        companies and parties. One of the most popular wallets is MetaMask.
        MetaMask is non-custodial, and serves as both a wallet for Ethereum and
        ERC20 tokens, as well as an interaction bridge between protocols in the
        Defi space. MetaMask is a browser extension and uses a JavaScript
        library called Web3.js, made by the Ethereum core developers to interact
        with the Ethereum network. You can download Metamask{" "}
        <a rel="noreferrer" target="_blank" href="https://metamask.io/">
          here.
        </a>
      </p>
    </div>
  );
}

export default Wallets;
