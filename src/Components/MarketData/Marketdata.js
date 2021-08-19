import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import DeFiSignalApi from "../../api/api";
import "./MarketData.css";

function Marketdata() {
  const [defiMarketdata, setDefiMarketdata] = useState([]);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await DeFiSignalApi.getMarketData();
      setDefiMarketdata(res.marketData);
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getData();
  }, []);

  if (!infoLoaded) return <Loading />;

  return (
    <>
      <h1 className="heading-market-data">Market Data</h1>
      <div class="row">
        <div class="column">
          <div class="card">
            <h3>
              <span>All: {defiMarketdata.All.dominance_name}</span>
            </h3>
            <p>Dominance Value: {defiMarketdata.All.dominance_value}</p>
            <p>Percent Dominance: {defiMarketdata.All.dominance_pct}</p>
            <p>Value in Ethereum: {defiMarketdata.All.value.total.ETH.value}</p>
            <p>TVL Ethereum Locked: {defiMarketdata.All.value.tvl.ETH.value}</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>
              {" "}
              <span>Lending: {defiMarketdata.Lending.dominance_name}</span>
            </h3>
            <p>Dominance Value: {defiMarketdata.Lending.dominance_value}</p>
            <p>Percent Dominance: {defiMarketdata.Lending.dominance_pct}</p>
            <p>
              Value in Ethereum: {defiMarketdata.Lending.value.total.ETH.value}
            </p>
            <p>
              TVL Ethereum Locked: {defiMarketdata.Lending.value.tvl.ETH.value}
            </p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>
              <span>Dexes: {defiMarketdata.DEXes.dominance_name}</span>
            </h3>
            <p>Dominance Value: {defiMarketdata.DEXes.dominance_value}</p>
            <p>Percent Dominance: {defiMarketdata.DEXes.dominance_pct}</p>
            <p>
              Value in Ethereum: {defiMarketdata.DEXes.value.total.ETH.value}
            </p>
            <p>
              TVL Ethereum Locked: {defiMarketdata.DEXes.value.tvl.ETH.value}
            </p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>
              {" "}
              <span>
                Derivatives: {defiMarketdata.Derivatives.dominance_name}
              </span>
            </h3>
            <p>Dominance Value: {defiMarketdata.Derivatives.dominance_value}</p>
            <p>Percent Dominance: {defiMarketdata.Derivatives.dominance_pct}</p>
            <p>
              Value in Ethereum:{" "}
              {defiMarketdata.Derivatives.value.total.ETH.value}
            </p>
            <p>
              TVL Ethereum Locked:{" "}
              {defiMarketdata.Derivatives.value.tvl.ETH.value}
            </p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <h3>
            {" "}
            <span>Payments: {defiMarketdata.Payments.dominance_name}</span>
          </h3>
          <p>Dominance Value: {defiMarketdata.Payments.dominance_value}</p>
          <p>Percent Dominance: {defiMarketdata.Payments.dominance_pct}</p>
          <p>
            Value in Ethereum: {defiMarketdata.Payments.value.total.ETH.value}
          </p>
          <p>
            TVL Ethereum Locked: {defiMarketdata.Payments.value.tvl.ETH.value}
          </p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <h3>
            <span>Assets: {defiMarketdata.Assets.dominance_name}</span>
          </h3>
          <p>Dominance Value: {defiMarketdata.Assets.dominance_value}</p>
          <p>Percent Dominance: {defiMarketdata.Assets.dominance_pct}</p>
          <p>
            Value in Ethereum: {defiMarketdata.Assets.value.total.ETH.value}
          </p>
          <p>
            TVL Ethereum Locked: {defiMarketdata.Assets.value.tvl.ETH.value}
          </p>
        </div>
      </div>
    </>
  );
}

export default Marketdata;
