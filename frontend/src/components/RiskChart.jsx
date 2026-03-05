import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

import { Bar } from "react-chartjs-2";
import "../styles/dashboard.css";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
);

function RiskChart({ events }) {

  const speeding = events.filter(e => e.event_type === "speeding").length;
  const braking = events.filter(e => e.event_type === "harsh_braking").length;
  const drowsy = events.filter(e => e.event_type === "drowsy").length;

  const data = {
    labels: ["Speeding", "Braking", "Drowsy"],
    datasets: [
      {
        label: "Violations",
        data: [speeding, braking, drowsy],
        backgroundColor: ["red","orange","purple"]
      }
    ]
  };

  return (

    <div className="chart-box">
      <h3>Violation Analytics</h3>
      <Bar data={data} />
    </div>

  );
}

export default RiskChart;