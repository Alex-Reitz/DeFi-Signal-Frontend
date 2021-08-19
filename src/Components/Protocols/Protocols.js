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
    <div className="table">
      <div className="tr th">
        <div className="td">Ranking</div>
        <div className="td">Symbol</div>
        <div className="td">Name</div>
        <div className="td">Category</div>
        <div className="td">Chain</div>
        <div className="td">Market Cap</div>
        <div className="td">Fully Dilute Value</div>
        <div className="td">Total Value Locked</div>
      </div>
      {protocols.map((protocol, index) => {
        return (
          <div key={protocol.id} className="tr">
            <div className="td">
              <span>{index + 1}</span>
            </div>
            <div className="td">
              <span>{protocol.symbol}</span>
            </div>
            <div className="td">
              <span>{protocol.name}</span>
            </div>
            <div className="td">
              <span>{protocol.category}</span>
            </div>
            <div className="td">
              <span>{protocol.chain}</span>
            </div>
            <div className="td">
              <span>{protocol.mcap}</span>
            </div>
            <div className="td">
              <span>{protocol.fdv}</span>
            </div>
            <div className="td">
              <span>{protocol.tvl}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Protocols;
