import React from "react";
import { Line } from "react-chartjs-2";
import { Text, Center, Heading, HStack, Container } from "@chakra-ui/react";

function EthTvl({ ethChartData, ethData }) {
  const presentValue = ethChartData.pop().totalLiquidityUSD;
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
        backgroundColor: "#000521",
        pointBorderWidth: 1,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    layout: { padding: { bottom: 0.5 } },
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
      subtitle: {
        display: true,
        text: `TVL Today: $${presentValue.toLocaleString()}`,
        color: "black",
        font: {
          size: 12,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    interaction: {
      mode: "index",
      padding: 10,
      intersect: false,
    },
  };

  return (
    <>
      <Center mt={10}>
        <Heading color="black">Ethereum</Heading>
      </Center>
      <Center>
        <HStack spacing={{ xl: "3rem", sm: "5rem" }}>
          <Text
            display={{ xl: "flex", lg: "none", md: "none", sm: "none" }}
            fontSize="sm"
          >
            <strong> Current Price: </strong>$
            {ethData.market_data.price_usd.toLocaleString()}
          </Text>
          <Text
            display={{ xl: "flex", lg: "none", md: "none", sm: "none" }}
            fontSize="sm"
          >
            <strong>Circulating Supply:</strong>{" "}
            {ethData.supply.circulating.toLocaleString()}
          </Text>
          <Text
            display={{ xl: "flex", lg: "none", md: "none", sm: "none" }}
            fontSize="sm"
          >
            <strong>Current Market Cap USD:</strong> $
            {ethData.marketcap.current_marketcap_usd.toLocaleString()}
          </Text>
          <Text
            display={{ xl: "flex", lg: "none", md: "none", sm: "none" }}
            fontSize="sm"
          >
            <strong>Volume Past 24 Hours:</strong> $
            {ethData.market_data.volume_last_24_hours.toLocaleString()}
          </Text>
        </HStack>
      </Center>
      <Container
        maxW="container.xl"
        centerContent
        borderRadius={6}
        border="2px"
        borderColor="blue.900"
      >
        <Line display="flex" data={data} options={options} />
      </Container>
    </>
  );
}

export default EthTvl;
