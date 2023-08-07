import { useContext, useState } from "react";
import { BillContext } from "../App";

const ConsumerCalculation = () => {
  const [input, setInput] = useState(0);
  const { setConsumedUnits } = useContext(BillContext);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setConsumedUnits(input);
    }
  };
  return (
    <div className="consumer-calculation">
      <label className="" htmlFor="">
        Enter consumed units (kWh)
      </label>
      <input
        autoFocus
        type="number"
        placeholder="Eg: 250"
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setConsumedUnits(input)}>Calculate</button>
    </div>
  );
};

export default ConsumerCalculation;
