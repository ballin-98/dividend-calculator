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
import { getMonths, getQuarters, getYears } from "../composables/LabelHelper";

const LineChart = () => {
  const {
    globalArray,
    principalArray,
    years,
    additionalInvestmentFrequency,
    dividendPayoutFrequency,
  } = useContext(GlobalArrayContext)!;

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

  const [labels, setlabels] = useState(getMonths());
  const [max, setMax] = useState(3000);
  const [min, setMin] = useState(0);
  const [step, setStep] = useState(500);

  const computeMax = (arr: number[]) => {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }

    return Math.round(max);
  };

  const computeSteps = (max: number, min: number, step: number = 6) => {
    return Math.round((max + min) / step);
  };

  const computeMin = (arr: number[]) => {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }

    return Math.round(min);
  };

  // calculate the labels to use on the chart
  useEffect(() => {
    if (years.toString() === "1") {
      if (
        dividendPayoutFrequency === 12 ||
        additionalInvestmentFrequency === 12
      ) {
        setlabels(getMonths());
      } else if (
        dividendPayoutFrequency === 4 ||
        additionalInvestmentFrequency === 4
      ) {
        setlabels(getMonths());
      } else {
        setlabels(getMonths());
      }
    } else {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      setlabels(getYears(currentYear, years));
    }
  }, [
    additionalInvestmentFrequency,
    dividendPayoutFrequency,
    globalArray,
    years,
  ]);

  // calculate min, max and step
  useEffect(() => {
    const computedMax = computeMax(globalArray);
    setMax(computedMax);
    const computedMin = computeMin(globalArray);
    setMin(computedMin);
    setStep(computeSteps(computedMax, computedMin));
  }, [globalArray]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = {
    responsive: true,
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
          suggestedMin: min, // set the minimum value
          suggestedMax: max, // set the maximum value
          stepSize: step, // set the interval between ticks
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
        },
        pointRadius: 6, // Set the radius of the dots
        pointHoverRadius: 10, // Set the radius of the dots on hover
      },
      {
        label: "Principal",
        data: principalArray,
        borderColor: "rgb(1, 1, 132)",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        fill: {
          target: "Investment",
        },
        pointRadius: 6, // Set the radius of the dots
        pointHoverRadius: 10, // Set the radius of the dots on hover
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default LineChart;
