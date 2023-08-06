import { Navbar, SelectMethod, Input, Result } from "./components/index";
import "./app.scss";
import "./animista.css";
import { createContext, useState } from "react";
export const BillContext = createContext();
const App = () => {
  const [calculationMethod, setCalculationMethod] = useState(false);
  const [consumedUnits, setConsumedUnits] = useState(0);
  return (
    <div className="app">
      <Navbar />
      <div className="padding"></div>
      <div className="calculation">
        <BillContext.Provider
          value={{
            calculationMethod,
            setCalculationMethod,
            consumedUnits,
            setConsumedUnits,
          }}
        >
          <div className="left">
            <SelectMethod />
            <Input />
          </div>
          <div className="right">
            <Result />
          </div>
        </BillContext.Provider>
      </div>
    </div>
  );
};

export default App;
