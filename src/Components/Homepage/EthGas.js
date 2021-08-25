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
  console.log(gasData);

  return (
    <div className="gas-container">
      <div className="gwei-fees">
        <p className="gas-data">
          Average price {gasData.gas.average / 10} gwei
        </p>
        <p className="gas-data">Fast: {gasData.gas.fast / 10} gwei</p>
        <p className="gas-data">Fastest: {gasData.gas.fastest / 10} gwei</p>
        <p className="gas-data">safeLow: {gasData.gas.safeLow / 10} gwei</p>
      </div>
      <div className="gas-time">
        <p className="gas-data">Block Time: {gasData.gas.block_time} seconds</p>
        <p className="gas-data">Latest Block Number: {gasData.gas.blockNum}</p>
        <p className="gas-data">
          Speed - smallest value of gasUsed/gasLimit from last ten blocks:{" "}
          {gasData.gas.speed}
        </p>
        <p className="gas-data">
          Safe Low Wait: {gasData.gas.safeLowWait} seconds
        </p>
        <p className="gas-data">Average Wait: {gasData.gas.avgWait} minutes</p>
        <p className="gas-data">Fast Wait: {gasData.gas.fastWait} minutes</p>
        <p className="gas-data">
          Fastest Wait: {gasData.gas.fastestWait} minutes
        </p>
      </div>
    </div>
  );
}

export default EthGas;
