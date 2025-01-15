import React from "react";

const TipAmount = ({label,amount}) =>{
    return(
        <div className="flex justify-between items-center font-bold">
        <p className="text-white text-base leading-5">{label} <br /> <span className="text-neutral-darkGrayishCyan text-sm">/ person</span></p>
        <p className="text-primary-strongCyan text-5xl">${amount}</p>
    </div> 
    )
};

export default TipAmount;
