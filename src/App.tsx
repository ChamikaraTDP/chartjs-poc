import "./App.css";
import { Bar, Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  Colors,
  Filler,
  ChartData,
  ChartArea,
  TimeScale,
} from "chart.js";
import { useEffect, useRef, useState } from "react";
import 'chartjs-adapter-luxon';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  Filler,
  Colors,
  TimeScale
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
  // aspectRatio: 1,
  scales: {
    y: {
      max: 1100,
    },
  },
  chartArea: {
    backgroundColor: "rgba(251, 85, 85, 0.4)",
  },
};

const options2 = {
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "day",
        displayFormats: {
          day: "MMM D",
        },
      },
      title: {
        display: true,
        text: "Date",
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Value",
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
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Dataset 3",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(73, 255, 135, 0.5)",
    },
  ],
};

const data2 = {
  datasets: [
    {
      fill: true,
      // data: [
      //   { x: "2016-12-25", y: 620 },
      //   { x: "2016-12-26", y: 810 },
      //   { x: "2016-12-27", y: 520 },
      //   { x: "2016-12-28", y: 440 },
      //   { x: "2016-12-29", y: 670 },
      //   { x: "2016-12-30", y: 910 },
      // ],
      data: [
        { x: "2023-01-01T00:00:00", y: 20 },
        { x: "2023-01-03T00:00:00", y: 26 },
        { x: "2023-01-04T00:00:00", y: 30 },
        { x: "2023-01-08T00:00:00", y: 40 },
        { x: "2023-01-15T00:00:00", y: 25 },
        { x: "2023-02-01T00:00:00", y: 35 },
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(73, 255, 135, 0.5)",
      tension: 0.4,
      label: "Heart-Rate",
      borderWidth: 4,
    },
  ],
};

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, "#ffffff");
  // gradient.addColorStop(0.5, "#3a6021");
  gradient.addColorStop(1, "#4D9236");

  return gradient;
}

function App() {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data2,
      datasets: data2.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <div>
      <div style={{ width: "800px", height: "400px" }}>
        <Bar options={options} data={data} />
      </div>

      <div style={{ width: "800px", height: "400px" }}>
        <Line ref={chartRef} options={options2} data={chartData} />
      </div>
    </div>
  );
}

export default App;
