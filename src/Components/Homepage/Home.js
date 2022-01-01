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
    async function getAllData() {
      const gasRes = await DeFiSignalApi.getGas();
      const ethMetricsRes = await DeFiSignalApi.getEthMetrics();
      const solMetricsRes = await DeFiSignalApi.getSolanaMetrics();
      const polygonMetricsRes = await DeFiSignalApi.getPolygonMetrics();
      const bnbMetricsRes = await DeFiSignalApi.getBNBMetrics();
      const TVLChartRes = await DeFiSignalApi.charts();
      const ethChartRes = await DeFiSignalApi.EthChart();
      const binanceChartRes = await DeFiSignalApi.BinanceChart();
      const solChartRes = await DeFiSignalApi.SolanaChart();
      const polygonChartRes = await DeFiSignalApi.PolygonChart();
      setPolygonChartData(polygonChartRes);
      setSolanaChartData(solChartRes);
      setBinanceChartData(binanceChartRes);
      setEthChartData(ethChartRes.slice(735));
      setTVLChartData(TVLChartRes.slice(735));
      setBNBData(bnbMetricsRes.metrics.data);
      setPolygonData(polygonMetricsRes.metrics.data);
      setSolData(solMetricsRes.metrics.data);
      setEthData(ethMetricsRes.metrics.data);
      setGasData(gasRes);
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getAllData();
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
