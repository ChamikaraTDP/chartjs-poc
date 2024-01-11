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
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  Colors,
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
      max: 1100
    }
  },
  chartArea: {
    backgroundColor: 'rgba(251, 85, 85, 0.4)'
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      // backgroundColor: "rgba(255, 99, 132, 0.5)",
      backgroundColor: [
        pattern.draw('square', '#ff6384'),
        pattern.draw('circle', '#36a2eb'),
        pattern.draw('diamond', '#cc65fe'),
        pattern.draw('triangle', '#ffce56')
      ],
      fill: false,
      borderColor: "rgba(73, 255, 135, 0.5)",
      tension: 0.1,
    },
  ],
};

function App() {
  return (
    <div>
      <div style={{ width: "800px", height: "400px" }}>
        <Bar options={options} data={data} />
      </div>

      <div style={{ width: "800px", height: "400px" }}>
        <Line options={options} data={data2} />
      </div>
    </div>
  );
}

export default App;
