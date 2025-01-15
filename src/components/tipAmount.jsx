import React from "react";

const TipAmount = ({label,amount}) =>{
    return(
        <div className="flex justify-between mb-6 items-center font-bold">
        <p className="text-white text-sm md:text-base leading-5">{label} <br /> <span className="text-neutral-darkGrayishCyan text-xs md:text-sm">/ person</span></p>
        <p className="text-primary-strongCyan text-3xl md:text-5xl">${amount}</p>
    </div> 
    )
};

export default TipAmount;
