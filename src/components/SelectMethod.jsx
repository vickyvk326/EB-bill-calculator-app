import { useContext } from "react";
import { BillContext } from "../App";

const SelectMethod = () => {
  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );
  const days = arrayRange(1, 60, 1);
  const { calculationMethod, setCalculationMethod, setCalculationDays } =
    useContext(BillContext);

  const handleSelectMethod = () => {
    setCalculationMethod(!calculationMethod);
    console.log(calculationMethod);
  };

  const handleSelectDays = (e) => {
    setCalculationDays(e.target.value);
  };
  return (
    <div className="select-container">
      <label
        htmlFor="select"
        style={{ margin: "5px 0 2px 0", fontSize: "1.25rem" }}
      >
        Choose the calculation method
      </label>
      <select
        name="calculator-app"
        id="calculation-method"
        onChange={handleSelectMethod}
      >
        <option value={true}>Calculate by consumed units</option>
        <option value={false}>Calculate by readings</option>
      </select>
      <label
        htmlFor="select"
        style={{ margin: "5px 0 2px 0", fontSize: "1.25rem" }}
      >
        Choose the calculation period
      </label>
      <select
        name="calculator-app"
        id="calculation-days"
        onChange={(e) => {
          handleSelectDays(e);
        }}
      >
        {days.map((day) => {
          return (
            <>
              <option value={day} selected={day}>
                {day === 1
                  ? day + " day"
                  : day !== 60
                  ? day + " days"
                  : day + " days bi-monthly"}
              </option>
            </>
          );
        })}
        {/* <option value="30" selected>
          30 days single-month
        </option>
        <option value="60" selected>
          60 days bi-monthly
        </option> */}
      </select>
    </div>
  );
};

export default SelectMethod;
