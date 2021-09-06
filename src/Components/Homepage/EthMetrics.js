import React, { useState, useEffect } from "react";
import DeFiSignalApi from "../../api/api";
import Loading from "../Loading/Loading";
import "./EthMetrics.css";

function EthMetrics() {
  const [ethData, setEthData] = useState([]);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(() => {
    async function getGasData() {
      const res = await DeFiSignalApi.getEthMetrics();
      setEthData(res.metrics.data);
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getGasData();
  }, []);

  if (!infoLoaded) return <Loading />;

  return (
    <>
      <h1 className="metrics-header">Ethereum Metrics</h1>
      <div className="metrics-data-container">
        <p className="eth-data">
          Current Price: ${ethData.market_data.price_usd.toLocaleString()}
        </p>
        <p className="eth-data">
          Circulating Supply:
          {ethData.supply.circulating.toLocaleString()}
        </p>
        <p className="eth-data">
          Current Market Cap USD: $
          {ethData.marketcap.current_marketcap_usd.toLocaleString()}
        </p>
        <p className="eth-data">
          Active Addresses:{" "}
          {ethData.on_chain_data.active_addresses.toLocaleString()}
        </p>
        <p className="eth-data">
          Vladimir Club Cost: $
          {ethData.misc_data.vladimir_club_cost.toLocaleString()}
        </p>
      </div>
    </>
  );
}

export default EthMetrics;
