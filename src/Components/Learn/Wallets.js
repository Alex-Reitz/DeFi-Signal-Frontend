import React from "react";
import Collapsible from "./Collapsible";

function Wallets() {
  return (
    <div>
      <h1 className="learn-heading">Wallets</h1>
      <p>
        Wallets are applications that allow you to interact with your crypto
        assets.There are two types of wallets, custodial and non-custodial.
        Custodial wallets are categorized as wallets where third parties hold
        onto and maintain control over your crypto. An example of this would be
        a wallet on an exchange such as Coinbase. Non-custodial wallets are
        wallets that you control yourself. An example of this would be wallet on
        your personal computer or phone. Having your wallet set up is the first
        step to doing anything in DeFi.
      </p>
      <p>
        Wallets vary in type and in the level of security provided. Below are
        some options for Ethereum wallets.
      </p>

      <Collapsible label="Ethereum Wallets">
        <div className="container">
          <h2>MetaMask</h2>
          <p>
            One of the most popular wallets is MetaMask. MetaMask is
            non-custodial, and serves as both a wallet for Ethereum and ERC20
            tokens, as well as an interaction bridge between protocols in the
            Defi space. MetaMask is a browser extension and uses a JavaScript
            library called Web3.js, made by the Ethereum core developers, to
            interact with the Ethereum network. You can download Metamask{" "}
            <a rel="noreferrer" target="_blank" href="https://metamask.io/">
              here.
            </a>
          </p>
        </div>
      </Collapsible>
      <hr />
    </div>
  );
}

export default Wallets;
