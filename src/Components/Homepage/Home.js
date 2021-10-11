import React from "react";
import EthGas from "./EthGas";
import "./Home.css";
import TotalTvl from "./TotalTvl";
import EthTvl from "./EthTvl";
import BinanceTvl from "./BinanceTvl";
import SolanaTvl from "./SolanaTvl";
import PolygonTvl from "./PolygonTvl";
import EthMetrics from "./EthMetrics";

function Home() {
  return (
    <div className="home-container">
      <section>
        <div className="initial-container">
          <EthGas />
          <EthMetrics />
        </div>
      </section>
      <section>
        <TotalTvl />
      </section>
      <section>
        <EthTvl />
      </section>
      <section>
        <BinanceTvl />
      </section>
      <section>
        <SolanaTvl />
      </section>
      <section>
        <PolygonTvl />
      </section>
    </div>
  );
}

export default Home;
