import {React,useEffect,useState} from "react"
import Header from './components/headerComponent';
import BillInput from "./components/billComponent";
import Tip from './components/tipComponent';
import Amount from "./components/totalAmountComponent";
import iconDollar from './images/icon-dollar.svg';
import iconPerson from './images/icon-person.svg';

function App() {

  const [billInputValue,setBillInputValue] = useState('');
  const [tipInputValue,setTipInputValue] = useState('');
  const [peopleInputValue,setPeopleInputValue] = useState('');
  const [tipActive,setTipActive] = useState(new Array(6).fill(false));
  const [currentTipActive,setCurrentTipActive] = useState(null);
  const [tipAmount,setTipAmount] = useState('0.00');
  const [total,setTotal] = useState('0.00');

  const tipPercentages = [
    '5','10','15','25','50','Custom'
  ];

  const handleTipActive = (index) =>{
      const tips = new Array(6).fill(false);

      tips[index] = true;
      setCurrentTipActive(index);
      setTipActive(tips);
  }

  const checkInputsHasValue = () => {
    return (
      !isNaN(parseFloat(billInputValue)) &&
      !isNaN(parseInt(peopleInputValue)) &&
      (currentTipActive !== null || !isNaN(parseFloat(tipInputValue)))
    );
  };
  

  const calculateTipAndTotal = () => {
    if (checkInputsHasValue()) {
      const billValue = parseFloat(billInputValue);
      const tipPercentage = tipInputValue === '' 
        ? parseFloat(tipPercentages[currentTipActive]) 
        : parseFloat(tipInputValue);
      const people = parseInt(peopleInputValue);
  
      if (people > 0 && tipPercentage > 0) {
        const tipPerPerson = (billValue * (tipPercentage / 100)) / people;
        const totalPerPerson = (billValue / people) + tipPerPerson;
  
        setTipAmount(tipPerPerson.toFixed(2));
        setTotal(totalPerPerson.toFixed(2));
      } else {
        setTipAmount("0.00");
        setTotal("0.00");
      }
    } else {
      setTipAmount("0.00");
      setTotal("0.00");
    }
  };

  const resetCalculator = () =>{
      setBillInputValue('');
      setTipActive(Array(6).fill(false));
      setCurrentTipActive(null);
      setPeopleInputValue('');
      setTipAmount('0.00');
      setTotal('0.00');
      setTipInputValue('');
  }
  
  useEffect(() => {
    calculateTipAndTotal();
  }, [billInputValue, peopleInputValue, currentTipActive, tipInputValue]);
  
  
  return (
    <>
      <div className="mb-10">
        <Header />
      </div>

      <div className="m-auto w-full md:max-w-[850px] p-8 bg-white flex flex-col md:flex-row gap-10 rounded-2xl">
          <div className="basis-[50%]">
            <div className="mb-8">
              <BillInput 
              inputValue={billInputValue} 
              setInputValue={setBillInputValue}
              label={"Bill"} 
              icon={iconDollar} 
              placeholder={"0"}
              />
            </div>
              <label className="text-neutral-darkGrayishCyan font-semibold block mb-2">Select Tip %</label>
              <div className="grid grid-cols-2 md:grid-cols-3 md:grid-row-2 gap-3 mb-8">
                  {
                    tipPercentages.map((tip,index) =>{
                        return(
                          <Tip
                          handleTipActive={() =>handleTipActive(index)}
                          tipActive={tipActive[index]}
                          inputValue={tipInputValue} 
                          setInputValue={setTipInputValue} 
                          key={index} 
                          percentage={tip}/>
                        )
                    })
                  }
              </div>
              <div>
                <BillInput 
                inputValue={peopleInputValue}
                setInputValue={setPeopleInputValue}
                label={"Number of People"} 
                icon={iconPerson} 
                placeholder={"0"}
                />
              </div>
          </div>
          <div className="bg-neutral-veryDarkCyan basis-[50%] rounded-xl py-10 px-7">
            <Amount 
            reset={resetCalculator}
            tipAmount={tipAmount}
            total={total}
            />
          </div>
      </div>
     
    </>
  )
}

export default App
