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

const Calculator = () => {
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
        >
          <MenuItem value={1}>Yearly</MenuItem>
          <MenuItem value={4}>Quarterly</MenuItem>
          <MenuItem value={12}>Monthly</MenuItem>
        </Select>
      </FormControl>

      <div className="additional-initial-invesetment">
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
        />
      </div>

      <FormControl>
        <InputLabel id="demo-simple-select-label">
          {DIVIDEND_PAYOUT_FREQUENCY}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label={DIVIDEND_PAYOUT_FREQUENCY}
          // onChange={handleChange}
        >
          <MenuItem value={1}>Yearly</MenuItem>
          <MenuItem value={4}>Quarterly</MenuItem>
          <MenuItem value={12}>Monthly</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        style={{ backgroundColor: "#ADBC9F", height: "100px" }}
      >
        Calculate
      </Button>
    </div>
  );
};

export default Calculator;
