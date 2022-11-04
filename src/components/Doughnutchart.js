import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

function DoughnutChart({ chartData }) {
  return <Doughnut data={chartData} />;
}

export default DoughnutChart;