import { useContext, useState } from "react";
import { BillContext } from "../App";

const ReadingsCalculation = () => {
  const { setConsumedUnits } = useContext(BillContext);
  const [prevReading, setPrevReading] = useState(0);
  const [currReading, setCurrReading] = useState(0);
  return (
    <div className="readings-calculation">
      <label htmlFor="">Enter previous reading </label>
      <input
        type="number"
        placeholder="Eg:12230"
        onChange={(e) => setPrevReading(e.target.value)}
      />
      <label htmlFor="">Enter current reading </label>
      <input
        type="number"
        placeholder="Eg:12230"
        onChange={(e) => setCurrReading(e.target.value)}
      />
      <button onClick={() => setConsumedUnits(currReading - prevReading)}>
        Calculate
      </button>
      <label htmlFor="" id="note">
        note: you can find your previous reading in the previous bill or online
        at website
        <a
          href="https://www.tnebltd.gov.in/BillStatus/billstatus.xhtml"
          target="_blank"
          rel="noreferrer"
        >
          TNEB
        </a>
        and your current reading in your monitor.
      </label>
    </div>
  );
};

export default ReadingsCalculation;
