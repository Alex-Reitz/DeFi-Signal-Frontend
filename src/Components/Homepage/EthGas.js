import React, { useState, useEffect } from "react";
import DeFiSignalApi from "../../api/api";
import Loading from "../Loading/Loading";
import "./EthGas.css";

function EthGas() {
  const [gasData, setGasData] = useState([]);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(() => {
    async function getGasData() {
      const res = await DeFiSignalApi.getGas();
      setGasData(res);
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getGasData();
  }, []);

  if (!infoLoaded) return <Loading />;

  return (
    <div className="gas-container">
      <i className="fab fa-ethereum"></i>
      <div className="gwei-fees">
        <p className="gas-data eth-gas">
          <strong>Average:</strong> {gasData.gas.average / 10} gwei
        </p>
        <p className="gas-data eth-gas">
          <strong>Fast:</strong> {gasData.gas.fast / 10} gwei
        </p>
        <p className="gas-data eth-gas">
          <strong>Fastest:</strong> {gasData.gas.fastest / 10} gwei
        </p>
        <p className="gas-data eth-gas">
          <strong>SafeLow: </strong>
          {gasData.gas.safeLow / 10} gwei
        </p>
      </div>
      <div className="gas-time">
        <p className="gas-data gas-metric">
          <strong>Block Time:</strong> {gasData.gas.block_time} seconds
        </p>
        <p className="gas-data gas-metric">
          <strong>Latest Block Number:</strong> {gasData.gas.blockNum}
        </p>
        <p className="gas-data gas-metric">
          <strong>Safe Low Wait:</strong> {gasData.gas.safeLowWait} seconds
        </p>
        <p className="gas-data gas-metric">
          <strong>Average Wait:</strong> {gasData.gas.avgWait} minutes
        </p>
        <p className="gas-data gas-metric">
          <strong>Fast Wait:</strong> {gasData.gas.fastWait} minutes
        </p>
        <p className="gas-data gas-metric">
          <strong>Fastest Wait:</strong>
          {gasData.gas.fastestWait} minutes
        </p>
      </div>
    </div>
  );
}

export default EthGas;
