import React, { useState, useEffect } from "react";
import {
  Flex,
  Center,
  VStack,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import DeFiSignalApi from "../../api/api";
import Loading from "../Loading/Loading";
import EthGas from "./EthGas";
import TotalTvl from "./TotalTvl";
import EthTvl from "./EthTvl";
import BinanceTvl from "./BinanceTvl";
import SolanaTvl from "./SolanaTvl";
import PolygonTvl from "./PolygonTvl";
import EthMetrics from "./EthMetrics";

function Home() {
  const [gasData, setGasData] = useState([]);
  const [ethData, setEthData] = useState([]);
  const [solData, setSolData] = useState([]);
  const [polygonData, setPolygonData] = useState([]);
  const [bnbData, setBNBData] = useState([]);
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
      setChartData(res.slice(735));
    }
    async function getEthChart() {
      const res = await DeFiSignalApi.EthChart();
      setEthChartData(res.slice(735));
    }
    async function getBinanceChart() {
      const res = await DeFiSignalApi.BinanceChart();
      setBinanceChartData(res.slice(735));
    }
    async function getSolanaChart() {
      const res = await DeFiSignalApi.SolanaChart();
      setSolanaChartData(res);
    }
    async function getPolygonChart() {
      const res = await DeFiSignalApi.PolygonChart();
      setPolygonChartData(res.slice(735));
    }

    setInfoLoaded(false);
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
        <TotalTvl chartData={chartData} />
      </Box>
      <Box>
        {" "}
        <EthTvl ethChartData={ethChartData} ethData={ethData} />
      </Box>
      <Box>
        {" "}
        <BinanceTvl binanceChartData={binanceChartData} />
      </Box>
      <Box>
        {" "}
        <SolanaTvl solanaChartData={solanaChartData} />
      </Box>
      <Box>
        <PolygonTvl polygonChartData={polygonChartData} />
      </Box>
    </Flex>
  );
}

export default Home;
