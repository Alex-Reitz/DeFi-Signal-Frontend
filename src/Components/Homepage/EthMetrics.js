import React from "react";

function EthMetrics({ ethData }) {
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
          <span>Volume Past 24 Hours:</span>
          <span>
            ${ethData.market_data.volume_last_24_hours.toLocaleString()}
          </span>
        </div>
        <div className="eth-data">
          <span>All Time High:</span>
          <span>${ethData.all_time_high.price.toLocaleString()}</span>
        </div>
        <div className="eth-data">
          <span>Percent Change Past Month:</span>
          <span>
            {ethData.roi_data.percent_change_last_1_month.toLocaleString()}%
          </span>
        </div>
      </div>
    </>
  );
}

export default EthMetrics;
