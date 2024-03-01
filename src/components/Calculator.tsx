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
import { useState } from "react";

const Calculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [additionalInvestment, setAdditionalInvestment] = useState(100);
  const [additionalInvestmentFrequency, setAdditionalInvestmentFrequency] =
    useState(1);
  const [years, setYears] = useState(2);
  const [investmentReturn, setInvestmentReturn] = useState(5);
  const [dividendFrequency, setDividendFrequency] = useState(1);

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
    console.log("running");
    if (event.target) {
      console.log("here");
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
    console.log("running");
    if (event.target) {
      console.log("here");
      setDividendFrequency(event.target.value);
    }
  };

  const calculateDividend = () => {
    const investmentReturnDecimal = investmentReturn / 100;
    const rDivN = investmentReturnDecimal / dividendFrequency;
    const divNumYears = dividendFrequency * years;
    const compoundInterest =
      initialInvestment * Math.pow(1 + rDivN, divNumYears);
    console.log(compoundInterest);
    const additionalInterest =
      additionalInvestment *
      ((Math.pow(1 + rDivN, dividendFrequency * years) - 1) / rDivN);
    console.log(additionalInterest);
    const total = compoundInterest + additionalInterest;
    console.log("total made: ", total);
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
      >
        Calculate
      </Button>
    </div>
  );
};

export default Calculator;
