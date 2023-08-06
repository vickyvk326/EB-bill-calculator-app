import { useContext } from "react";
import { BillContext } from "../App";

const SelectMethod = () => {
  const { calculationMethod, setCalculationMethod } = useContext(BillContext);
  const handleSelect = () => {
    setCalculationMethod(!calculationMethod);
    console.log(calculationMethod);
  };
  return (
    <div className="select-container">
      <select
        name="calculator-app"
        id="1"
        onChange={() => {
          handleSelect();
        }}
      >
        <option value={true}>Calculate by consumed units</option>
        <option value={false}>Calculate by readings</option>
      </select>
    </div>
  );
};

export default SelectMethod;
