import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import DeFiSignalApi from "../../api/api";
import Loading from "../Loading/Loading";

function PolygonTvl() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function getEthChart() {
      const res = await DeFiSignalApi.PolygonChart();
      setChartData(res);
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getEthChart();
  }, []);

  const data = {
    labels: chartData.map(function (a) {
      var date = new Date(a.date * 1000);
      return date.toLocaleDateString();
    }),
    datasets: [
      {
        data: chartData.map(function (a) {
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
        text: "Total Value Locked - Polygon",
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

  if (!infoLoaded) return <Loading />;
  return (
    <div className="line-polygontvl">
      <Line data={data} options={options} />
    </div>
  );
}

export default PolygonTvl;
