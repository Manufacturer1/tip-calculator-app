import React from "react";


const BillInput = ({label,icon}) =>{
 
    return(
    <div className="relative">
        <label className="block text-base text-neutral-darkGrayishCyan font-semibold mb-1">{label}</label>
        <input onWheel={(e) => e.target.blur()} className=" bg-neutral-veryLightGrayishCyan border-2 border-solid border-neutral-100 py-[.4rem] px-[.8rem] w-full rounded-md hover:border-primary-strongCyan transition-border duration-300 font-bold text-neutral-veryDarkCyan text-right text-xl pl-[40px]"
         type="number" placeholder="0" />
         <img className="absolute top-[41px] left-[15px]" src={icon} />
    </div>
    );
};

export default BillInput;
