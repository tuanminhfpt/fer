import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Number of Blog Per Month",
      backgroundColor: ["rgba(105, 0, 132, .2)"],
      borderColor: ["rgba(200, 99, 132, .7)"],
      borderWidth: 2,
      data: [3, 25, 42, 14, 33, 50, 60],
    },
  ],
};

function LineChart() {
  return (
    <div className="bg-white border border-secondary">
      <Line data={data}></Line>
    </div>
  );
}

export default LineChart;
