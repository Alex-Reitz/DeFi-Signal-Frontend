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
      setChartData(res.slice(600));
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCharts();
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
        text: "Total Value Locked - All Chains",
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
  };

  if (!infoLoaded) return <Loading />;
  return (
    <div className="line-totaltvl">
      <Line data={data} options={options} />
    </div>
  );
}

export default TotalTvl;
