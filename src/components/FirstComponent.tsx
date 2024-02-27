import { useState } from "react";
import Button from "@mui/material/Button";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

const ButtonComponent = () => {
  const doSomething = () => {
    console.log("what's good");
  };

  const [age, setAge] = useState(""); // Use the useState hook to create age state

  const handleChange = (event: any) => {
    setAge(event.target.value); // Update the age state when the select value changes
  };

  return (
    <div>
      <h1>Goated component</h1>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Dividend Payout Frequency
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Dividend Payout Frequency"
          onChange={handleChange}
        >
          <MenuItem value={1}>Yearly</MenuItem>
          <MenuItem value={4}>Quarterly</MenuItem>
          <MenuItem value={12}>Monthly</MenuItem>
        </Select>
      </FormControl>
      <div className="yield">
        <TextField
          id="standard-basic"
          label="Dividend Yield"
          variant="standard"
          type="number"
          inputProps={{ min: "0", step: "1" }}
        />
      </div>
      <div className="term">
        <TextField
          id="standard-basic"
          label="Term"
          variant="standard"
          type="number"
          inputProps={{ min: "0", step: "1" }}
        />
      </div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#ADBC9F" }}
        onClick={doSomething}
      >
        Calculate
      </Button>
    </div>
  );
};

export default ButtonComponent;
