import React from "react";
import Insurance from "./Insurance";
import LendingBorrowing from "./LendingBorrowing";
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
        <div className="links">
          <a className="page-link" href="#wallets">
            Wallets
          </a>
          <a className="page-link" href="#derivatives">
            Derivatives
          </a>
          <a className="page-link" href="#DEX">
            Dexes
          </a>
          <a className="page-link" href="#insurance">
            Insurance
          </a>
          <a className="page-link" href="#lendingandborrowing">
            Lending & Borrowing
          </a>
          <a className="page-link" href="#stablecoins">
            Stable Coins
          </a>
        </div>
      </section>
      <section id="wallets" className="item-section">
        <Wallets />
      </section>
      <section id="derivatives" className="item-section">
        <Derivatives />
      </section>
      <section id="DEX" className="item-section">
        <Dexes />
      </section>
      <section id="insurance" className="item-section">
        <Insurance />
      </section>
      <section id="lendingandborrowing" className="item-section">
        <LendingBorrowing />
      </section>
      <section id="stablecoins" className="item-section">
        <StableCoins />
      </section>
    </div>
  );
}

export default Learn;
