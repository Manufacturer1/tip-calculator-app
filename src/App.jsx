import React from "react"
import Header from './components/headerComponent';
import BillInput from "./components/billComponent";
import Tip from './components/tipComponent';
import Amount from "./components/totalAmountComponent";
import iconDollar from './images/icon-dollar.svg';
import iconPerson from './images/icon-person.svg';

function App() {

  const tipPercentages = [
    '5','10','15','25','50','Custom'
  ];

  return (
    <>
      <div className="mb-10">
        <Header />
      </div>
      <div className="m-auto w-full md:max-w-[850px] p-8 bg-white flex flex-col md:flex-row gap-10 rounded-2xl">
          <div className="basis-[50%]">
            <div className="mb-8">
              <BillInput label={"Bill"} icon={iconDollar}/>
            </div>
              <label className="text-neutral-darkGrayishCyan font-semibold block mb-2">Select Tip %</label>
              <div className="grid grid-cols-2 md:grid-cols-3 md:grid-row-2 gap-3 mb-8">
                  {
                    tipPercentages.map((tip,index) =>{
                        return(
                          <Tip key={index} percentage={tip}/>
                        )
                    })
                  }
              </div>
              <div>
                <BillInput label={"Number of People"} icon={iconPerson}/>
              </div>
          </div>
          <div className="bg-neutral-veryDarkCyan basis-[50%] rounded-xl py-10 px-7">
            <Amount/>
          </div>
      </div>
     
    </>
  )
}

export default App
