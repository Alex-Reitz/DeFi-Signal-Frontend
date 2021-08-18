import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <h3 className="home-heading">What is Defi?</h3>
      <p className="home-intro">
        Defi is the niche within the crypto world where users can utilize
        financial services such as borrowing, lending, and trading without
        needing to utilize centralized entities such as banks. Defi is not a
        single product or company, but rather a range of financial services
        which emulate traditional financial services. The decentralized
        financial services are provided via Decentralized Applications also
        called Dapps for short. Most of these Dapps are deployed on the Ethereum
        blockchain. If you aren't familiar with Ethereum, it will be beneficial
        for you to learn the basics of Ethereum before learning Defi. The best
        place to do this is{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://ethereum.org/en/what-is-ethereum/"
        >
          Ethereum.org
        </a>
        . Learning about Ethereum isn't required to learn about Defi, but it is
        recommended. Nothing seen here on DeFi Signal is financial advice.
      </p>
    </div>
  );
}

export default Home;
