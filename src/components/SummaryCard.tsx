import { useContext, useEffect, useState } from "react";
import { GlobalArrayContext } from "../pages/CalculatorPage";

const SummaryCard = () => {
  const { globalArray, principalArray } = useContext(GlobalArrayContext)!;
  const [total, setTotal] = useState(
    Math.round(globalArray[globalArray.length - 1])
  );
  const [principal, setPrincipal] = useState(
    Math.round(principalArray[principalArray.length - 1])
  );
  const [growth, setGrowth] = useState(Math.round(total - principal));

  // calculate min, max and step
  useEffect(() => {
    setTotal(Math.round(globalArray[globalArray.length - 1]));
    setPrincipal(Math.round(principalArray[principalArray.length - 1]));
    setGrowth(
      Math.round(
        globalArray[globalArray.length - 1] -
          principalArray[principalArray.length - 1]
      )
    );
  }, [globalArray, principalArray]);
  return (
    <div className="summary-card-container">
      <div className="summary-total">Total: ${total}</div>
      <div className="break-down-container">
        <div className="summary-growth">Total Growth: ${growth}</div>
        <div className="summary-principal">Total Principal: ${principal}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
