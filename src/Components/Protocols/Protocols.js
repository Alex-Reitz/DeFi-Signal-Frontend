import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import DeFiSignalApi from "../../api/api";
import "./Protocols.css";

function Protocols() {
  const [protocols, setProtocols] = useState([]);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(() => {
    async function getProtocolData() {
      const res = await DeFiSignalApi.getProtocols();
      setProtocols(res.protocols);
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getProtocolData();
  }, []);

  if (!infoLoaded) return <Loading />;

  return (
    <div className="protocol-container">
      <h1 className="protocol-heading">Protocols from DeFi Llama</h1>
      <table className="protocol-table">
        <thead>
          <tr>
            <th className="col-header">Ranking</th>
            <th className="col-header">Symbol</th>
            <th className="col-header">Name</th>
            <th className="col-header">Category</th>
            <th className="col-header">Chain</th>
            <th className="col-header">Market Cap</th>
            <th className="col-header">Fully Dilute Value</th>
            <th className="col-header">Total Value Locked</th>
          </tr>
        </thead>
        <tbody>
          {protocols.map((protocol, index) => {
            return (
              <tr key={protocol.id}>
                <td>{index + 1}</td>
                <td>{protocol.symbol}</td>
                <td>{protocol.name}</td>
                <td>{protocol.category}</td>
                <td>{protocol.chain}</td>
                <td>{protocol.mcap}</td>
                <td>{protocol.fdv}</td>
                <td>{protocol.tvl}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Protocols;
