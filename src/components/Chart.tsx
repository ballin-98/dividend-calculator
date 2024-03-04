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
import { useContext, useEffect } from "react";
import { GlobalArrayContext } from "../pages/CalculatorPage";

const LineChart = () => {
  const { globalArray } = useContext(GlobalArrayContext)!;

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

  const updateChartValues = (arr: number[]) => {};

  useEffect(() => {
    // Example: Log the global array when it changes
    console.log("Global Array changed:", globalArray);
    localArray = globalArray;
  }, [globalArray]);

  let localArray = globalArray;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = {
    responsive: true,
    // fill: origin,
    tension: 0.1,
    backgroundColor: "rgba(255, 255, 255)",
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      x: {
        type: "category",
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "January",
          "February",
          "March",
        ],
        title: {
          display: true,
          text: "MONTHS",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          suggestedMin: 0, // set the minimum value
          suggestedMax: 25, // set the maximum value
          stepSize: 5, // set the interval between ticks
        },
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Investment",
        data: localArray,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: {
          target: "origin",
          above: "rgb(166, 0, 0, 0.1)", // Area will be red above the origin
        },
      },
      {
        // label: "Principal",
        // data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        // borderColor: "rgb(1, 1, 132)",
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        // fill: {
        //   target: "origin",
        //   above: "rgb(1, 0, 0)", // Area will be red above the origin
        // },
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default LineChart;
