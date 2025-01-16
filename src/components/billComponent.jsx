import {React,useState,useCallback} from "react";


const BillInput = ({label,icon,placeholder}) =>{
    const [inputValue,setInputValue] = useState('');
    const [error,setError] = useState('');

    const handleInputChange = useCallback((e) => {
        setError("");
        let value = e.target.value;

        if (value === "") {
            setInputValue("");
            return;
        }
        if (parseFloat(value) > 0) {
            setInputValue(value);
        } else if (parseFloat(value) === 0) {
            setError("Can't be zero");
            setInputValue("");
        }
    }, []);

    const handleKeyDown = useCallback((e) => {
        if (e.key === "-") {
            e.preventDefault();
        }
    }, []);
        
    return(
    <div className="relative">
        <div className="flex justify-between mb-2">
            <label className="block text-base text-neutral-darkGrayishCyan     font-semibold">{label}
            </label>
            {
                (placeholder !== 'Custom' && error !== '') ? <p className=" text-base font-semibold text-orange-600">{error}</p> : ''
            }
        </div>
   
        <input value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={(e) => handleInputChange(e)} onWheel={(e) => e.target.blur()} className={`bg-neutral-veryLightGrayishCyan    ${(placeholder === 'Custom' ? 'text-2xl py-[.17rem]' : 'pl-[40px] text-xl py-[.4rem]')} px-[.8rem] text-right w-full rounded-md hover:border-primary-strongCyan border-2 border-solid transition-border duration-500 font-bold text-neutral-veryDarkCyan ${(error === '' || placeholder === 'Custom') ? ' border-neutral-100' : 'border-2 border-solid border-orange-600'}`}
         type="number" placeholder={placeholder} />
            
         <img className="absolute top-[46px] left-[15px]" src={icon} />
    </div>
    );
};

export default BillInput;
