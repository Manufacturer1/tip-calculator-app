import React from "react";
import TipAmount from "./tipAmount";

const Amount = () => {
  return (
    <div className="flex flex-col h-full"> 
      <div className="flex-grow">
        <div className="mb-8">
          <TipAmount label={"Tip Amount"} amount={"0.00"} />
        </div>
        <div>
          <TipAmount label={"Total"} amount={"0.00"} />
        </div>
      </div>
      <button className="text-center w-full text-neutral-veryDarkCyan bg-primary-strongCyan font-bold uppercase p-2 rounded-sm">
        Reset
      </button>
    </div>
  );
};

export default Amount;
