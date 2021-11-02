import React from "react";
import { Line } from "react-chartjs-2";

function BinanceTvl({ binanceChartData }) {
  const data = {
    labels: binanceChartData.map(function (a) {
      var date = new Date(a.date * 1000);
      return date.toLocaleDateString();
    }),
    datasets: [
      {
        data: binanceChartData.map(function (a) {
          return a.totalLiquidityUSD;
        }),
        fill: true,
        backgroundColor: "#2e4355",
        pointBorderColor: "#8884d8",
        pointBorderWidth: 2,
        showLine: true,
        pointRadius: 0,
        tension: 0.6,
        borderColor: "white",
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
        text: "Total Value Locked - Binance",
        color: "white",
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
          color: "white",
          callback: function (value) {
            return "$" + value.toLocaleString();
          },
        },
        grid: {
          display: false,
        },
      },
      x: {
        borderColor: "white",
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
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
    <div className="line-binancetvl">
      <Line data={data} options={options} />
    </div>
  );
}

export default BinanceTvl;
