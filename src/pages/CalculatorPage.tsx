/* eslint-disable @typescript-eslint/no-unused-vars */
import Calculator from "../components/Calculator";
import LineChart from "../components/Chart";
import { ReactNode, createContext, useState } from "react";

export interface GlobalArrayContextType {
  globalArray: number[];
  setGlobalArray: React.Dispatch<React.SetStateAction<number[]>>;
}

export const GlobalArrayContext = createContext<
  GlobalArrayContextType | undefined
>(undefined);

export interface GlobalArrayProviderProps {
  children: ReactNode;
}

export const GlobalArrayProvider = ({ children }: GlobalArrayProviderProps) => {
  const [globalArray, setGlobalArray] = useState<number[]>([1, 2, 3, 4, 5]);

  return (
    <GlobalArrayContext.Provider value={{ globalArray, setGlobalArray }}>
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
          <div className="chart-container">
            <LineChart />
          </div>
        </div>
      </div>
    </GlobalArrayProvider>
  );
};

export default CalculatorPage;
