import React from "react";
import Collapsible from "./Collapsible";

function Wallets() {
  return (
    <div className="item-container">
      <h1 className="learn-heading">Wallets</h1>
      <p className="item-text">
        Wallets are applications that allow you to interact with your crypto
        assets.There are two types of wallets, custodial and non-custodial.
        Custodial wallets are categorized as wallets where third parties hold
        onto and maintain control over your crypto. An example of this would be
        a wallet on an exchange such as Coinbase. Non-custodial wallets are
        wallets that you control yourself. An example of this would be wallet on
        your personal computer or phone. Having your wallet set up is the first
        step to doing anything in DeFi.
      </p>
      <hr />
      <p className="item-text">
        Wallets vary in type and in the level of security provided. Below are
        some options for Ethereum wallets.
      </p>

      <Collapsible className="collapsible-text" label="Ethereum Wallets">
        <div className="container">
          <h2 className="learn-heading">MetaMask</h2>
          <p className="item-text">
            One of the most popular wallets is MetaMask. MetaMask is
            non-custodial, and serves as both a wallet for Ethereum and ERC20
            tokens, as well as an interaction bridge between protocols in the
            Defi space. MetaMask is a browser extension and uses a JavaScript
            library called Web3.js, made by the Ethereum core developers, to
            interact with the Ethereum network. You can download Metamask{" "}
            <a rel="noreferrer" target="_blank" href="https://metamask.io/">
              <em>here.</em>
            </a>
          </p>
        </div>
      </Collapsible>
    </div>
  );
}

export default Wallets;
