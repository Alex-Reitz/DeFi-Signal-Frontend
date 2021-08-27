import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import DeFiSignalApi from "../../api/api";
import Loading from "../Loading/Loading";

function TotalTvl() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function getCharts() {
      const res = await DeFiSignalApi.charts();
      setChartData(res);
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCharts();
  }, []);

  const data = {
    labels: chartData.map(function (a) {
      return a.date;
    }),
    datasets: [
      {
        data: chartData.map(function (a) {
          return a.totalLiquidityUSD;
        }),
        fill: true,
        backgroundColor: "#2e4355",
        pointBorderColor: "#8884d8",
        pointBorderWidth: 0,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    layout: { padding: { bottom: 100 } },
    scales: {
      y: {
        ticks: {
          color: "white",
          font: {
            size: 10,
          },
        },
        grid: {
          color: "#243240",
        },
      },
      x: {
        ticks: {
          color: "white",
          font: {
            size: 10,
          },
        },
      },
    },
  };

  if (!infoLoaded) return <Loading />;
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default TotalTvl;
