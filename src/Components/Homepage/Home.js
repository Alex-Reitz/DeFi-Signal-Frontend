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

  //Get gas data
  useEffect(() => {
    async function getGasData() {
      const res = await DeFiSignalApi.getGas();
      setInfoLoaded(true);
      setGasData(res);
    }
    setInfoLoaded(false);
    getGasData();
  }, []);
  //Get Eth metrics
  useEffect(() => {
    async function ethMetrics() {
      const res = await DeFiSignalApi.getEthMetrics();
      setInfoLoaded(true);
      setEthData(res.metrics.data);
    }
    setInfoLoaded(false);
    ethMetrics();
  }, []);
  //Get sol metrics
  useEffect(() => {
    async function solMetrics() {
      const res = await DeFiSignalApi.getSolanaMetrics();
      setInfoLoaded(true);
      setSolData(res.metrics.data);
    }
    setInfoLoaded(false);
    solMetrics();
  }, []);
  //Get polygon metrics
  useEffect(() => {
    async function polygonMetrics() {
      const res = await DeFiSignalApi.getPolygonMetrics();
      setInfoLoaded(true);
      setPolygonData(res.metrics.data);
    }
    setInfoLoaded(false);
    polygonMetrics();
  }, []);
  //Get BNB metrics
  useEffect(() => {
    async function bnbMetrics() {
      const res = await DeFiSignalApi.getBNBMetrics();
      setInfoLoaded(true);
      setBNBData(res.metrics.data);
    }
    setInfoLoaded(false);
    bnbMetrics();
  }, []);
  //Get Charts
  useEffect(() => {
    async function getTVLChart() {
      const res = await DeFiSignalApi.charts();
      setInfoLoaded(true);
      setTVLChartData(res.slice(735));
    }
    setInfoLoaded(false);
    getTVLChart();
  }, []);
  //Get Eth Chart
  useEffect(() => {
    async function getEthChart() {
      const res = await DeFiSignalApi.EthChart();
      setInfoLoaded(true);
      setEthChartData(res.slice(735));
    }
    setInfoLoaded(false);
    getEthChart();
  }, []);
  //Get binance chart
  useEffect(() => {
    async function getBinanceChart() {
      const res = await DeFiSignalApi.BinanceChart();
      setInfoLoaded(true);
      setBinanceChartData(res);
    }
    setInfoLoaded(false);
    getBinanceChart();
  }, []);
  //Get solana chart
  useEffect(() => {
    async function getSolanaChart() {
      const res = await DeFiSignalApi.SolanaChart();
      setInfoLoaded(true);
      setSolanaChartData(res);
    }
    setInfoLoaded(false);
    getSolanaChart();
  }, []);
  //Get polygon chart
  useEffect(() => {
    async function getPolygonChart() {
      const res = await DeFiSignalApi.PolygonChart();
      setInfoLoaded(true);
      setPolygonChartData(res);
    }
    setInfoLoaded(false);
    getPolygonChart();
  }, []);
  console.log(gasData);
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
