import { Chart } from "chart.js/auto";

const data = [
  { month: "Jan", events: 610 },
  { month: "Feb", events: 980 },
  { month: "Mar", events: 780 },
  { month: "Apr", events: 410 },
  { month: "May", events: 1000 },
  { month: "Jun", events: 570 },
  { month: "Jul", events: 850 },
  { month: "Aug", events: 380 },
  { month: "Sep", events: 840 },
  { month: "Oct", events: 620 },
  { month: "Nov", events: 910 },
  { month: "Dec", events: 600 },
];

export function renderChart() {
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.map((row) => row.month),
      datasets: [
        {
          data: data.map((row) => row.events),
          borderWidth: 2,
          backgroundColor: "#8576FF ",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          border: {
            dash: [5, 8],
          },
          beginAtZero: true,
          grid: {
            display: true,
            color: "#E2E8F0",
          },
        },
        x: {
          border: {
            dash: [5, 8],
          },
          beginAtZero: true,
          grid: {
            display: true,
            color: "#E2E8F0",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}
