import React from "react";
import Governance from "./Governance";
import Insurance from "./Insurance";
import LendingBorrowing from "./LendingBorrowing";
import Lottery from "./Lottery";
import StableCoins from "./StableCoins";
import Wallets from "./Wallets";
import Derivatives from "./Derivatives";
import Dexes from "./Dexes";
import "./Learn.css";

function Learn() {
  return (
    <div className="learn-container">
      <section className="top-section">
        <h3 className="learn-heading">What is Defi?</h3>
        <p className="learn-intro">
          DeFi is short for “decentralized finance” an umbrella term for a
          variety of financial applications in cryptocurrency or blockchain
          geared toward disrupting financial intermediaries. Defi is not a
          single product or company, but rather a range of financial services
          which emulate traditional financial services. The decentralized
          financial services are provided via Decentralized Applications also
          called Dapps for short. Most of these Dapps are deployed on the
          Ethereum blockchain. If you aren't familiar with Ethereum, it will be
          beneficial for you to learn the basics of Ethereum before learning
          Defi. The best place to do this is{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://ethereum.org/en/what-is-ethereum/"
          >
            <em>Ethereum.org</em>
          </a>
          . Learning about Ethereum isn't required to learn about Defi, but it
          is recommended. Nothing seen here on DeFi Signal is financial advice.
        </p>
      </section>
      <section className="wallet-section">
        <Wallets />
      </section>
      <section className="derivatives-section">
        <Derivatives />
      </section>
      <section className="dexes-section">
        <Dexes />
      </section>
      <section className="governance-section">
        <Governance />
      </section>
      <section className="insurance-section">
        <Insurance />
      </section>
      <section className="lending-borrowing-section">
        <LendingBorrowing />
      </section>
      <section className="lottery-section">
        <Lottery />
      </section>
      <section className="stablecoins-section">
        <StableCoins />
      </section>
    </div>
  );
}

export default Learn;
