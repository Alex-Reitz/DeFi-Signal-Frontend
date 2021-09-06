import React, { useState, useEffect } from "react";
import DeFiSignalApi from "../../api/api";
import Loading from "../Loading/Loading";
import "./EthGas.css";
import EthCoin from "../../images/ethereum-1.svg";

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
    <>
      <h1 className="ethgas-header">Ethereum Gas Data</h1>
      <div className="gas-container">
        <img className="gascard-image" src={EthCoin} alt="Eth" />
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
          <p className="gas-data eth-gas-time">
            <strong>Block Time:</strong> {gasData.gas.block_time} seconds
          </p>
          <p className="gas-data eth-gas-time">
            <strong>Latest Block Number:</strong> {gasData.gas.blockNum}
          </p>
        </div>
        <div className="gas-wait">
          <p className="gas-data eth-gas-wait">
            <strong>Safe Low Wait:</strong> {gasData.gas.safeLowWait} seconds
          </p>
          <p className="gas-data eth-gas-wait">
            <strong>Average Wait:</strong> {gasData.gas.avgWait} minutes
          </p>
          <p className="gas-data eth-gas-wait">
            <strong>Fast Wait:</strong> {gasData.gas.fastWait} minutes
          </p>
          <p className="gas-data eth-gas-wait">
            <strong>Fastest Wait:</strong> {gasData.gas.fastestWait} minutes
          </p>
        </div>
      </div>
    </>
  );
}

export default EthGas;
