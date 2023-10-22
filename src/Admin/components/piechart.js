import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const labels = ["Registers", "Blogs", "Ads", "Contacts"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"],
      borderColor: "rgb(255, 99, 132)",
      data: [300, 50, 100, 40],
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
