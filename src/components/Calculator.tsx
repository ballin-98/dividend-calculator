import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const SummaryCard = () => {
  return (
    <Card>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
          border: "2px solid red",
        }}
      >
        <div>
          {/* Total Amount */}
          <strong>Total Amount:</strong> $1000
        </div>
        <div>
          {/* Dividend Earnings */}
          <strong>Dividend Earnings:</strong> $50
        </div>
        <div>
          {/* % Increase */}
          <strong>% Increase:</strong> 5%
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
