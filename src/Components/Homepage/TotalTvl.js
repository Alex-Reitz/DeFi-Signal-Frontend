import React from "react";
import { Line } from "react-chartjs-2";
import { Container } from "@chakra-ui/react";

function TotalTvl({ TVLChartData }) {
  const presentValue = TVLChartData.pop().totalLiquidityUSD;
  const data = {
    labels: TVLChartData.map(function (a) {
      var date = new Date(a.date * 1000);
      return date.toLocaleDateString();
    }),
    datasets: [
      {
        data: TVLChartData.map(function (a) {
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
    layout: { padding: { bottom: 50 } },
    plugins: {
      title: {
        display: true,
        align: "p",
        text: "Total Value Locked - All Chains",
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
    <Container
      mt={10}
      maxW="container.xl"
      centerContent
      borderRadius={6}
      border="2px"
      borderColor="blue.900"
    >
      <Line data={data} options={options} />
    </Container>
  );
}

export default TotalTvl;
