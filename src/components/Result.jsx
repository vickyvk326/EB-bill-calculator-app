import { useContext, useEffect, useState } from "react";
import { BillContext } from "../App";
const Calculate = () => {
  const { consumedUnits } = useContext(BillContext);
  const [billAmount, setBillAmount] = useState(0);
  const handleCalculateBill = () => {
    if (consumedUnits <= 500 && consumedUnits > 0) {
      if (consumedUnits <= 100) {
        setBillAmount(0);
      } else if (consumedUnits <= 200) {
        setBillAmount((consumedUnits - 100) * 2.25);
      } else if (consumedUnits <= 400) {
        setBillAmount(100 * 2.25 + (consumedUnits - 200) * 4.5);
      } else {
        setBillAmount(100 * 2.25 + 200 * 4.5 + (consumedUnits - 400) * 6);
      }
    } else {
      if (consumedUnits <= 600) {
        setBillAmount(300 * 4.5 + 100 * 6 + (consumedUnits - 500) * 8);
      } else if (consumedUnits <= 800) {
        setBillAmount(
          300 * 4.5 + 100 * 6 + 100 * 8 + (consumedUnits - 600) * 9
        );
      } else if (consumedUnits <= 1000) {
        setBillAmount(
          300 * 4.5 + 100 * 6 + 100 * 8 + 200 * 9 + (consumedUnits - 800) * 10
        );
      } else {
        setBillAmount(
          300 * 4.5 +
            100 * 6 +
            100 * 8 +
            200 * 9 +
            200 * 10 +
            (consumedUnits - 1000)
        );
      }
    }
  };
  useEffect(() => {
    handleCalculateBill();
  }, [consumedUnits]);
  return (
    <div className="bill-container">
      <div>
        Consumed units: <span>{consumedUnits} kWh</span>
      </div>
      <div>
        Eb bill: <span> ₹ {billAmount} </span>
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
