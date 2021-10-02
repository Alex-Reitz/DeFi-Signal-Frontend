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
      <h1 className="metrics-header">Ethereum Stats</h1>
      <div className="metrics-data-container">
        <div className="eth-data">
          <span>Current Price: </span>
          <span>${ethData.market_data.price_usd.toLocaleString()}</span>
        </div>
        <div className="eth-data">
          <span>Circulating Supply: </span>
          <span>{ethData.supply.circulating.toLocaleString()}</span>
        </div>
        <div className="eth-data">
          <span>Current Market Cap USD:</span>
          <span>
            ${ethData.marketcap.current_marketcap_usd.toLocaleString()}
          </span>
        </div>
        <div className="eth-data">
          <span>Marketcap Dominance Percentage:</span>
          <span>
            {ethData.marketcap.marketcap_dominance_percent.toLocaleString()}%
          </span>
        </div>
        <div className="eth-data">
          <span>Volume Past 24 Hours:</span>
          <span>
            ${ethData.market_data.volume_last_24_hours.toLocaleString()}
          </span>
        </div>
        <div className="eth-data">
          <span>Circulating Supply:</span>
          <span>{ethData.supply.circulating.toLocaleString()}</span>
        </div>
        <div className="eth-data">
          <span>Annual Inflation</span>
          <span>
            {ethData.supply.annual_inflation_percent.toLocaleString()}%
          </span>
        </div>
        <div className="eth-data">
          <span>All Time High:</span>
          <span>${ethData.all_time_high.price.toLocaleString()}</span>
        </div>
        <div className="eth-data">
          <span>Percent Change Past Week:</span>
          <span>
            {ethData.roi_data.percent_change_last_1_week.toLocaleString()}%
          </span>
        </div>
        <div className="eth-data">
          <span>Percent Change Past Month:</span>
          <span>
            {ethData.roi_data.percent_change_last_1_month.toLocaleString()}%
          </span>
        </div>
        <div className="eth-data">
          <span>Percent Change Past 3 Months:</span>
          <span>
            {ethData.roi_data.percent_change_last_3_months.toLocaleString()}%
          </span>
        </div>
        <div className="eth-data">
          <span>Percent Change Past Year:</span>
          <span>
            {ethData.roi_data.percent_change_last_1_year.toLocaleString()}
          </span>
        </div>
        <div className="eth-data">
          <span>Average Fee USD:</span>
          <span>
            $ {ethData.on_chain_data.average_fee_usd.toLocaleString()}
          </span>
        </div>
        <div className="eth-data">
          <span>Median Fee USD:</span>
          <span>${ethData.on_chain_data.median_fee_usd.toLocaleString()}</span>
        </div>
      </div>
    </>
  );
}

export default EthMetrics;
