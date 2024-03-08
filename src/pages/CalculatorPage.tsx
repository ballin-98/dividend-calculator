/* eslint-disable @typescript-eslint/no-unused-vars */
import Calculator from "../components/Calculator";
import LineChart from "../components/Chart";
import { ReactNode, createContext, useState } from "react";
import SummaryCard from "../components/SummaryCard";

export interface GlobalArrayContextType {
  globalArray: number[];
  setGlobalArray: React.Dispatch<React.SetStateAction<number[]>>;
  principalArray: number[];
  setPrincipalArray: React.Dispatch<React.SetStateAction<number[]>>;
  initialInvestment: number;
  setInitialInvestment: React.Dispatch<React.SetStateAction<number>>;
  additionalInvestment: number;
  setAdditionalInvestment: React.Dispatch<React.SetStateAction<number>>;
  additionalInvestmentFrequency: number;
  setAdditionalInvestmentFrequency: React.Dispatch<
    React.SetStateAction<number>
  >;
  years: number;
  setYears: React.Dispatch<React.SetStateAction<number>>;
  returnRate: number;
  setReturnRate: React.Dispatch<React.SetStateAction<number>>;
  dividendPayoutFrequency: number;
  setDividendPayoutFrequency: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalArrayContext = createContext<
  GlobalArrayContextType | undefined
>(undefined);

export interface GlobalArrayProviderProps {
  children: ReactNode;
}

export const GlobalArrayProvider = ({ children }: GlobalArrayProviderProps) => {
  const [globalArray, setGlobalArray] = useState<number[]>([1, 2, 3, 4, 5]);
  const [principalArray, setPrincipalArray] = useState<number[]>([
    1, 2, 3, 4, 5,
  ]);
  const [initialInvestment, setInitialInvestment] = useState<number>(1000);
  const [additionalInvestment, setAdditionalInvestment] = useState<number>(100);
  const [additionalInvestmentFrequency, setAdditionalInvestmentFrequency] =
    useState<number>(12);
  const [years, setYears] = useState<number>(5);
  const [returnRate, setReturnRate] = useState<number>(7);
  const [dividendPayoutFrequency, setDividendPayoutFrequency] =
    useState<number>(12);

  return (
    <GlobalArrayContext.Provider
      value={{
        globalArray,
        setGlobalArray,
        principalArray,
        setPrincipalArray,
        initialInvestment,
        setInitialInvestment,
        additionalInvestment,
        setAdditionalInvestment,
        additionalInvestmentFrequency,
        setAdditionalInvestmentFrequency,
        years,
        setYears,
        returnRate,
        setReturnRate,
        dividendPayoutFrequency,
        setDividendPayoutFrequency,
      }}
    >
      {children}
    </GlobalArrayContext.Provider>
  );
};

const CalculatorPage = () => {
  return (
    <GlobalArrayProvider>
      <div className="calculator-page-container">
        <Calculator />
        <div className="right-side">
          <SummaryCard />
          <div className="chart-container">
            <LineChart />
          </div>
        </div>
      </div>
    </GlobalArrayProvider>
  );
};

export default CalculatorPage;
