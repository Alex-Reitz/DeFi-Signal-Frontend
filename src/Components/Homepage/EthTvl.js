import React from "react";
import { Line } from "react-chartjs-2";
import {
  Box,
  Text,
  Center,
  Heading,
  Flex,
  VStack,
  HStack,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";

function EthTvl({ ethChartData, ethData }) {
  const data = {
    labels: ethChartData.map(function (a) {
      var date = new Date(a.date * 1000);
      return date.toLocaleDateString();
    }),
    datasets: [
      {
        data: ethChartData.map(function (a) {
          return a.totalLiquidityUSD;
        }),
        fill: true,
        backgroundColor: "black",
        pointBorderColor: "#8884d8",
        pointBorderWidth: 2,
        showLine: true,
        pointRadius: 0,
        tension: 0.6,
        borderColor: "black",
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    layout: { padding: { bottom: 50 } },
    plugins: {
      title: {
        display: true,
        align: "p",
        text: "Total Value Locked",
        color: "black",
        font: {
          size: 20,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "black",
          callback: function (value) {
            return "$" + value.toLocaleString();
          },
        },
        grid: {
          display: false,
        },
      },
      x: {
        borderColor: "black",
        grid: {
          display: false,
        },
        ticks: {
          color: "black",
        },
      },
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  return (
    <Container maxW="container.xl">
      <Center>
        <Heading color="black">Ethereum</Heading>
      </Center>
      <HStack>
        <Text fontSize="sm">
          Current Price: ${ethData.market_data.price_usd.toLocaleString()}
        </Text>
        <Text fontSize="sm">
          Circulating Supply: {ethData.supply.circulating.toLocaleString()}
        </Text>
        <Text fontSize="sm">
          Current Market Cap USD: $
          {ethData.marketcap.current_marketcap_usd.toLocaleString()}
        </Text>
        <Text fontSize="sm">
          Volume Past 24 Hours: $
          {ethData.market_data.volume_last_24_hours.toLocaleString()}
        </Text>
        <Text fontSize="sm">
          All Time High: ${ethData.all_time_high.price.toLocaleString()}
        </Text>
        <Text fontSize="sm">
          Percent Change Past Month:{" "}
          {ethData.roi_data.percent_change_last_1_month.toLocaleString()}%
        </Text>
      </HStack>
      <VStack></VStack>

      <Line data={data} options={options} />
    </Container>
  );
}

export default EthTvl;
