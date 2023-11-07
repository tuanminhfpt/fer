import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const labels = ["Registers", "Blogs", "Ads", "Contacts"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Quantity",
      backgroundColor: ["#FF5733", "#FFD700", "#FF7F50", "#FF1493"],
      hoverBackgroundColor: ["#FF5733", "#FFD700", "#FF7F50", "#FF1493"],
      borderColor: "rgb(255, 99, 132)",
      data: [123, 56, 319, 47],
    },
  ],
};

function PieChart() {
  return (
    <div className="bg-white border border-secondary">
      <Pie data={data}></Pie>
    </div>
  );
}

export default PieChart;
