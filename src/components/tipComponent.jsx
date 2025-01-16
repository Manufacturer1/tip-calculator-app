import React from 'react';
import BillInput from './billComponent';

const Tip = ({ 
    percentage, 
    inputValue, 
    setInputValue, 
    tipActive, 
    handleTipActive 
}) => {
    const isCustom = percentage === 'Custom';

    return (
        <div 
            onClick={handleTipActive}
            className={`text-xl font-bold text-center flex items-center justify-center cursor-pointer rounded-md transition-all duration-300 h-11 ${
                isCustom
                    ? 'py-0'
                    : 'p-2 bg-neutral-veryDarkCyan hover:bg-neutral-hoverCyan'
            } ${
                tipActive && !isCustom
                    ? 'bg-primary-strongCyan text-neutral-veryDarkCyan'
                    : 'text-white'
            }`}
        >
            {isCustom ? (
                <BillInput 
                    label={''}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    placeholder="Custom" 
                />
            ) : (
                <span>{`${percentage}%`}</span>
            )}
        </div>
    );
};

export default Tip;
