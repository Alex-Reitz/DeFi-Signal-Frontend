import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import DeFiSignalApi from "../../api/api";

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
  console.log(defiMarketdata);
  return (
    <>
      <h1>Market Data</h1>
      <div>{defiMarketdata.All.dominance_name}</div>
    </>
  );
}

export default Marketdata;
