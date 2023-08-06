import { useContext } from "react";
import ConsumerCalculation from "./ConsumerCalculation";
import ReadingsCalculation from "./ReadingsCalculation";
import { BillContext } from "../App";
const Input = () => {
  const { calculationMethod } = useContext(BillContext);
  return (
    <div className="input-container">
      {!calculationMethod ? <ConsumerCalculation /> : <ReadingsCalculation />}
    </div>
  );
};

export default Input;
