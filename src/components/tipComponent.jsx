import React from 'react'
import BillInput from './billComponent';

const Tip = ({percentage}) =>{

    return(
        <div className={`text-white text-xl font-bold text-center ${percentage !== 'Custom' ? 'p-2 bg-neutral-veryDarkCyan hover:bg-neutral-hoverCyan hover:text-neutral-veryDarkCyan justify-center items-center' : 'py-0'} h-11 flex  cursor-pointer rounded-md transition-all duration-300`}>
            {
                    (percentage === 'Custom') ?
                    <BillInput placeholder={"Custom"} /> :
                    <span>{`${percentage}%`}</span>
                    
            }
        </div>
    );
};

export default Tip;