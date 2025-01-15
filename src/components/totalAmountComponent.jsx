import React, { useState } from "react";
import TipAmount from "./tipAmount";

const Amount = () => {
  const [tipAmount,setTipAmount] = useState(0.00);
  const [total,setTotal] = useState(0.00);

  return (
    <div className="flex flex-col h-full"> 
      <div className="flex-grow">
        <div className="mb-8">
          <TipAmount label={"Tip Amount"} amount={parseFloat(tipAmount).toFixed(2)} />
        </div>
        <div>
          <TipAmount label={"Total"} amount={parseFloat(total).toFixed(2)} />
        </div>
      </div>
      <button className={`text-center w-full text-neutral-veryDarkCyan ${(total !== 0 ? 'bg-primary-strongCyan hover:bg-neutral-hoverCyan' : 'bg-neutral-hoverDarckCyan cursor-not-allowed')} font-bold uppercase p-2 rounded-sm  transition-bg duration-300`}>
        Reset
      </button>
    </div>
  );
};

export default Amount;
