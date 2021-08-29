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
      <section>
        <h3 className="home-heading">What is Defi?</h3>
        <p className="home-intro">
          DeFi is short for “decentralized finance,” an umbrella term for a
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
            Ethereum.org
          </a>
          . Learning about Ethereum isn't required to learn about Defi, but it
          is recommended. Nothing seen here on DeFi Signal is financial advice.
        </p>
      </section>

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
