import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useContext, useEffect, useState } from "react";
import { GlobalArrayContext } from "../pages/CalculatorPage";
import { getDefaultLabels } from "./getDefaultLabels";

const LineChart = () => {
  const { globalArray, principalArray } = useContext(GlobalArrayContext)!;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const [labels, setlabels] = useState(getDefaultLabels());

  const computeYears = (arr: number[]) => {
    const yearLabels = [];
    let currentYear = 2024;
    for (let i = 0; i < arr.length; i++) {
      yearLabels.push(String(currentYear));
      currentYear += 1;
    }
    return yearLabels;
  };

  useEffect(() => {
    if (globalArray.length > 2) {
      setlabels(computeYears(globalArray));
    } else {
      setlabels(getDefaultLabels());
    }
  }, [globalArray]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = {
    responsive: true,
    // fill: origin,
    tension: 0.1,
    backgroundColor: "rgba(226, 178, 178)",
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      x: {
        type: "category",
        labels: labels,
        title: {
          display: true,
          text: "MONTHS",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          suggestedMin: 0, // set the minimum value
          suggestedMax: 20, // set the maximum value
          stepSize: 5, // set the interval between ticks
        },
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Investment",
        data: globalArray,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.25)",
        fill: {
          target: "origin",
          // above: "rgb(166, 0, 0, 0.1)", // Area will be red above the origin
        },
      },
      {
        label: "Principal",
        data: principalArray,
        borderColor: "rgb(1, 1, 132)",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        fill: {
          target: "Investment",
          // above: "rgb(1, 0, 0)", // Area will be red above the origin
        },
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default LineChart;
