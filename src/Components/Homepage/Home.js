import React, { useState, useEffect } from "react";
import DeFiSignalApi from "../../api/api";
import Loading from "../Loading/Loading";
import EthGas from "./EthGas";
import "./Home.css";
import TotalTvl from "./TotalTvl";
import EthTvl from "./EthTvl";
import BinanceTvl from "./BinanceTvl";
import SolanaTvl from "./SolanaTvl";
import PolygonTvl from "./PolygonTvl";
import EthMetrics from "./EthMetrics";

function Home() {
  const [gasData, setGasData] = useState([]);
  const [ethData, setEthData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [ethChartData, setEthChartData] = useState([]);
  const [binanceChartData, setBinanceChartData] = useState([]);
  const [solanaChartData, setSolanaChartData] = useState([]);
  const [polygonChartData, setPolygonChartData] = useState([]);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(() => {
    async function getGasData() {
      const res = await DeFiSignalApi.getGas();
      setGasData(res);
      setInfoLoaded(true);
    }
    async function ethMetrics() {
      const res = await DeFiSignalApi.getEthMetrics();
      setEthData(res.metrics.data);
    }
    async function getCharts() {
      const res = await DeFiSignalApi.charts();
      setChartData(res.slice(600));
    }
    async function getEthChart() {
      const res = await DeFiSignalApi.EthChart();
      setEthChartData(res.slice(600));
    }
    async function getBinanceChart() {
      const res = await DeFiSignalApi.BinanceChart();
      setBinanceChartData(res);
    }
    async function getSolanaChart() {
      const res = await DeFiSignalApi.SolanaChart();
      setSolanaChartData(res);
    }
    async function getPolygonChart() {
      const res = await DeFiSignalApi.PolygonChart();
      setPolygonChartData(res);
    }
    setInfoLoaded(false);
    getGasData();
    ethMetrics();
    getCharts();
    getEthChart();
    getBinanceChart();
    getSolanaChart();
    getPolygonChart();
  }, []);
  if (!infoLoaded) return <Loading />;

  return (
    <div className="home-container">
      <section>
        <div className="initial-container">
          <EthGas gasData={gasData} />
          <EthMetrics ethData={ethData} />
        </div>
      </section>
      <section>
        <TotalTvl chartData={chartData} />
      </section>
      <section>
        <EthTvl ethChartData={ethChartData} />
      </section>
      <section>
        <BinanceTvl binanceChartData={binanceChartData} />
      </section>
      <section>
        <SolanaTvl solanaChartData={solanaChartData} />
      </section>
      <section>
        <PolygonTvl polygonChartData={polygonChartData} />
      </section>
    </div>
  );
}

export default Home;
