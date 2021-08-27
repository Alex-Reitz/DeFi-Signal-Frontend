import React from "react";
import EthGas from "./EthGas";
import "./Home.css";
import TotalTvl from "./TotalTvl";
import EthTvl from "./EthTvl";
import BinanceTvl from "./BinanceTvl";
import SolanaTvl from "./SolanaTvl";
import PolygonTvl from "./PolygonTvl";

function Home() {
  return (
    <div className="home-container">
      <section>
        <EthGas />
      </section>
      <section>
        <h5>Total TVl</h5>
        <TotalTvl />
      </section>
      <section>
        <h5>Ethereum TVl</h5>
        <EthTvl />
      </section>
      <section>
        <h5>Binance TVl</h5>
        <BinanceTvl />
      </section>
      <section>
        <h5>Solana TVL</h5>
        <SolanaTvl />
      </section>
      <section>
        <h5>Polygon TVL</h5>
        <PolygonTvl />
      </section>
    </div>
  );
}

export default Home;
