import React from "react";


const BillInput = ({label,icon,placeholder}) =>{
 
    return(
    <div className="relative">
        <label className="block text-base text-neutral-darkGrayishCyan font-semibold mb-1">{label}</label>
        <input onWheel={(e) => e.target.blur()} className={` bg-neutral-veryLightGrayishCyan border-2 border-solid border-neutral-100  ${(placeholder === 'Custom' ? 'text-2xl py-[.17rem]' : 'pl-[40px] text-xl py-[.4rem]')} px-[.8rem] text-right w-full rounded-md hover:border-primary-strongCyan transition-border duration-300 font-bold text-neutral-veryDarkCyan `}
         type="number" placeholder={placeholder} />
         <img className="absolute top-[41px] left-[15px]" src={icon} />
    </div>
    );
};

export default BillInput;
