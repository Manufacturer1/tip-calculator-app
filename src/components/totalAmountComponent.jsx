import React from "react";
import TipAmount from "./tipAmount";

const Amount = ({tipAmount,total,reset}) => {

  return (
    <div className="flex flex-col h-full"> 
      <div className="flex-grow">
        <div className="mb-8">
          <TipAmount label={"Tip Amount"} amount={tipAmount} />
        </div>
        <div>
          <TipAmount label={"Total"} amount={total} />
        </div>
      </div>
      <button onClick={reset}
      className={`text-center w-full text-neutral-veryDarkCyan ${(total !== '0.00' ? 'bg-primary-strongCyan hover:bg-neutral-hoverCyan' : 'bg-neutral-hoverDarckCyan cursor-not-allowed')} font-bold uppercase p-2 rounded-sm  transition-bg duration-300`}>
        Reset
      </button>
    </div>
  );
};

export default Amount;
