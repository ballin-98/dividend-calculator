import Calculator from "../components/Calculator";
import LineChart from "../components/Chart";

const CalculatorPage = () => {
  return (
    <div className="calculator-page-container">
      <Calculator />
      <div className="right-side">
        <div className="chart-container">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
