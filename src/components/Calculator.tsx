/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import {
  INITIAL_INVESTMENT,
  ADDITIONAL_INVESTMENT,
  DIVIDEND_INVESTMENT_FREQUENCY,
  YEARS_TO_GROW,
  RATE_OF_RETURN,
  DIVIDEND_PAYOUT_FREQUENCY,
} from "../constants/InputConstants";
import { useContext, useState } from "react";
import { GlobalArrayContext } from "../pages/CalculatorPage";

const Calculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [additionalInvestment, setAdditionalInvestment] = useState(100);
  const [additionalInvestmentFrequency, setAdditionalInvestmentFrequency] =
    useState(1);
  const [years, setYears] = useState(2);
  const [investmentReturn, setInvestmentReturn] = useState(5);
  const [dividendFrequency, setDividendFrequency] = useState(1);

  const { setGlobalArray } = useContext(GlobalArrayContext)!;

  const handleInitialInvestment = (event: any) => {
    if (event.target) {
      setInitialInvestment(event.target.value);
    }
  };

  const handleAdditionalInvestment = (event: any) => {
    if (event.target) {
      setAdditionalInvestment(event.target.value);
    }
  };

  const handleAdditionalInvestmentFrequency = (event: any) => {
    if (event.target) {
      setAdditionalInvestmentFrequency(event.target.value);
    }
  };

  const handleYears = (event: any) => {
    if (event.target) {
      setYears(event.target.value);
    }
  };

  const handleReturn = (event: any) => {
    if (event.target) {
      setInvestmentReturn(event.target.value);
    }
  };

  const handleDividendFrequency = (event: any) => {
    if (event.target) {
      setDividendFrequency(event.target.value);
    }
  };

  const calculateDividend = () => {
    const numArr = calculateInvestmentByYear(
      initialInvestment,
      years,
      investmentReturn / 100,
      dividendFrequency,
      additionalInvestment,
      additionalInvestmentFrequency
    );
    setGlobalArray(numArr);
  };

  const calculateInvestmentByYear = (
    p: number,
    n: number,
    investmentReturn: number,
    dividendFrequency: number,
    additionalInvestment: any,
    additionalInvestmentFrequency: number
  ) => {
    const totalByYear: number[] = [];
    const additionalInvestmentNum = parseInt(additionalInvestment, 10);
    const months = n * 12;
    const dividendPayouts = mapDividendFrequencyToNumMonths(dividendFrequency);
    const freq = mapDividendFrequencyToNumMonths(additionalInvestmentFrequency);
    for (let i = 1; i <= months; i++) {
      if (i % dividendPayouts === 0 || (i === 1 && dividendPayouts === 4)) {
        p = p * (1 + investmentReturn / dividendFrequency);
      }
      if (i % freq === 0 || (i === 1 && dividendPayouts === 4)) {
        p += additionalInvestmentNum;
      }
      // add the yearly total to an array
      if (i % 12 === 0) {
        totalByYear.push(p);
      }
    }
    console.log(totalByYear);
    console.log("total: ", p);
    return totalByYear;
  };

  const mapDividendFrequencyToNumMonths = (dividendFrequency: number) => {
    console.log("dividend frequency: ", dividendFrequency);
    if (dividendFrequency == 12) {
      return 1;
    }
    if (dividendFrequency == 4) {
      return 4;
    }
    return 12;
  };

  return (
    <div className="calculator-container">
      <div className="calculator-title">Investment Details</div>
      <div className="calculator-initial-invesetment">
        <TextField
          fullWidth
          id="standard-basic"
          label={INITIAL_INVESTMENT}
          variant="standard"
          type="number"
          inputProps={{ min: "0", step: "1" }}
          InputLabelProps={{
            style: { paddingLeft: "12px" }, // Adjust the left padding as needed
          }}
          value={initialInvestment}
          onChange={handleInitialInvestment}
        />
      </div>
      <div className="additional-initial-invesetment">
        <TextField
          fullWidth
          id="standard-basic"
          label={ADDITIONAL_INVESTMENT}
          variant="standard"
          type="number"
          inputProps={{ min: "0", step: "1" }}
          InputLabelProps={{
            style: { paddingLeft: "12px" }, // Adjust the left padding as needed
          }}
          value={additionalInvestment}
          onChange={handleAdditionalInvestment}
        />
      </div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {DIVIDEND_INVESTMENT_FREQUENCY}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={DIVIDEND_INVESTMENT_FREQUENCY}
          value={additionalInvestmentFrequency}
          onChange={handleAdditionalInvestmentFrequency}
        >
          <MenuItem value={1}>Yearly</MenuItem>
          <MenuItem value={4}>Quarterly</MenuItem>
          <MenuItem value={12}>Monthly</MenuItem>
        </Select>
      </FormControl>

      <div>
        <TextField
          fullWidth
          id="standard-basic"
          label={YEARS_TO_GROW}
          variant="standard"
          type="number"
          inputProps={{ min: "0", step: "1" }}
          InputLabelProps={{
            style: { paddingLeft: "12px" }, // Adjust the left padding as needed
          }}
          value={years}
          onChange={handleYears}
        />
      </div>

      <div className="additional-initial-invesetment">
        <TextField
          fullWidth
          id="standard-basic"
          label={RATE_OF_RETURN}
          variant="standard"
          type="number"
          inputProps={{ min: "0", step: "1" }}
          InputLabelProps={{
            style: { paddingLeft: "12px" }, // Adjust the left padding as needed
          }}
          value={investmentReturn}
          onChange={handleReturn}
        />
      </div>

      <FormControl>
        <InputLabel id="demo-simple-select-label">
          {DIVIDEND_PAYOUT_FREQUENCY}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dividendFrequency}
          label={DIVIDEND_PAYOUT_FREQUENCY}
          onChange={handleDividendFrequency}
        >
          <MenuItem value={1}>Yearly</MenuItem>
          <MenuItem value={4}>Quarterly</MenuItem>
          <MenuItem value={12}>Monthly</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        style={{ backgroundColor: "#ADBC9F", height: "100px" }}
        onClick={calculateDividend}
        className="calculate-button"
      >
        Calculate
      </Button>
    </div>
  );
};

export default Calculator;
