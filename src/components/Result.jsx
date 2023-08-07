import { useContext, useEffect, useState } from "react";
import { BillContext } from "../App";
const Calculate = () => {
  const { consumedUnits, calculationDays } = useContext(BillContext);
  const [billAmount, setBillAmount] = useState(0);
  const handleCalculateBill = (calculatedConsumedUnits) => {
    if (calculatedConsumedUnits <= 500 && calculatedConsumedUnits > 0) {
      if (calculatedConsumedUnits <= 100) {
        setBillAmount(0);
      } else if (calculatedConsumedUnits <= 200) {
        setBillAmount((calculatedConsumedUnits - 100) * 2.25);
      } else if (calculatedConsumedUnits <= 400) {
        setBillAmount(100 * 2.25 + (calculatedConsumedUnits - 200) * 4.5);
      } else {
        setBillAmount(
          100 * 2.25 + 200 * 4.5 + (calculatedConsumedUnits - 400) * 6
        );
      }
    } else {
      if (calculatedConsumedUnits <= 600) {
        setBillAmount(
          300 * 4.5 + 100 * 6 + (calculatedConsumedUnits - 500) * 8
        );
      } else if (calculatedConsumedUnits <= 800) {
        setBillAmount(
          300 * 4.5 + 100 * 6 + 100 * 8 + (calculatedConsumedUnits - 600) * 9
        );
      } else if (calculatedConsumedUnits <= 1000) {
        setBillAmount(
          300 * 4.5 +
            100 * 6 +
            100 * 8 +
            200 * 9 +
            (calculatedConsumedUnits - 800) * 10
        );
      } else {
        setBillAmount(
          300 * 4.5 +
            100 * 6 +
            100 * 8 +
            200 * 9 +
            200 * 10 +
            (calculatedConsumedUnits - 1000)
        );
      }
    }
  };
  useEffect(() => {
    handleCalculateBill((consumedUnits / calculationDays) * 60);
  }, [consumedUnits, calculationDays]);
  return (
    <div className="bill-container">
      <div style={{ marginBottom: "5px" }}>
        {calculationDays !== 60 && "Predicted "}Consumed units for 60 days:{" "}
        <span>{((consumedUnits * 60) / calculationDays).toFixed(2)} kWh</span>
      </div>
      <div>
        {calculationDays !== 60 && "Predicted "}Eb bill for 60 days(bi-monthly):
        <span>{" ₹ " + billAmount.toFixed(2)} </span>
      </div>
    </div>
  );
};
const Result = () => {
  const { consumedUnits } = useContext(BillContext);
  return (
    <div className="result">
      {consumedUnits === 0 ? (
        <div style={{ width: "60%", fontSize: ".78rem", fontWeight: "300" }}>
          <span>
            note: this bill calculation app currently works for single phase
            domestic usage only.
          </span>
        </div>
      ) : (
        <Calculate />
      )}
    </div>
  );
};

export default Result;
