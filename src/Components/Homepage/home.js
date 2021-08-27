import React from "react";
import EthGas from "./EthGas";
import "./Home.css";
import TotalTvl from "./TotalTvl";

function Home() {
  return (
    <div className="home-container">
      <EthGas />
      <section>
        <h1>Ethereum TVL</h1>
      </section>
      <section>
        <TotalTvl />
      </section>
      <section>
        <h1>Binance TVL</h1>
      </section>
      <section>
        <h1>Polygon TVL</h1>
      </section>
    </div>
  );
}

export default Home;
