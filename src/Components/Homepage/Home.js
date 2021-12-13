import React, { useState, useEffect } from "react";
import { Flex, Center, Box } from "@chakra-ui/react";
import DeFiSignalApi from "../../api/api";
import Loading from "../Loading/Loading";
import EthGas from "./EthGas";
import TotalTvl from "./TotalTvl";
import EthTvl from "./EthTvl";
import BinanceTvl from "./BinanceTvl";
import SolanaTvl from "./SolanaTvl";
import PolygonTvl from "./PolygonTvl";

function Home() {
  const [gasData, setGasData] = useState([]);
  const [ethData, setEthData] = useState([]);
  const [solData, setSolData] = useState([]);
  const [polygonData, setPolygonData] = useState([]);
  const [bnbData, setBNBData] = useState([]);
  const [TVLChartData, setTVLChartData] = useState([]);
  const [ethChartData, setEthChartData] = useState([]);
  const [binanceChartData, setBinanceChartData] = useState([]);
  const [solanaChartData, setSolanaChartData] = useState([]);
  const [polygonChartData, setPolygonChartData] = useState([]);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(() => {
    async function getGasData() {
      const res = await DeFiSignalApi.getGas();
      setGasData(res);
    }
    async function ethMetrics() {
      const res = await DeFiSignalApi.getEthMetrics();
      setEthData(res.metrics.data);
    }
    async function solMetrics() {
      const res = await DeFiSignalApi.getSolanaMetrics();
      setSolData(res.metrics.data);
    }
    async function polygonMetrics() {
      const res = await DeFiSignalApi.getPolygonMetrics();
      setPolygonData(res.metrics.data);
    }
    async function bnbMetrics() {
      const res = await DeFiSignalApi.getBNBMetrics();
      setBNBData(res.metrics.data);
    }
    async function getTVLChart() {
      const res = await DeFiSignalApi.charts();
      setTVLChartData(res.slice(735));
    }
    async function getEthChart() {
      const res = await DeFiSignalApi.EthChart();
      setEthChartData(res.slice(735));
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

    getGasData();
    ethMetrics();
    solMetrics();
    polygonMetrics();
    bnbMetrics();
    getTVLChart();
    getEthChart();
    getBinanceChart();
    getSolanaChart();
    getPolygonChart();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInfoLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!infoLoaded) return <Loading />;

  return (
    <Flex w={["100%"]} p="3%" flexDir="column" overflow="auto" minH="100vh">
      <Box>
        <Center>
          {" "}
          <EthGas gasData={gasData} />
        </Center>
      </Box>
      <Box>
        <TotalTvl TVLChartData={TVLChartData} />
      </Box>
      <Box>
        {" "}
        <EthTvl ethChartData={ethChartData} ethData={ethData} />
      </Box>
      <Box>
        {" "}
        <BinanceTvl binanceChartData={binanceChartData} bnbData={bnbData} />
      </Box>
      <Box>
        {" "}
        <SolanaTvl solanaChartData={solanaChartData} solData={solData} />
      </Box>
      <Box>
        <PolygonTvl
          polygonChartData={polygonChartData}
          polygonData={polygonData}
        />
      </Box>
    </Flex>
  );
}

export default Home;
