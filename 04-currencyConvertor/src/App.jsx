import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import backgroundImage from './assets/CurrencyConverterImage.jpg';


function App() {

  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
//   console.log(currencyInfo)
  
  const options = currencyInfo ? Object.keys(currencyInfo) : [] ;
//   console.log(options)

const swap = () => {
    
    // Swap the currencies
    setFrom(to)
    setTo(from)
    // console.log(to)
    // console.log(from)

     // Swap the amounts
     setConvertedAmount(amount)
     setAmount(convertedAmount)
     //  console.log(amount)
    // console.log(convertedAmount)

  };
  

  const convert = () => {
    if (currencyInfo && currencyInfo[from] && currencyInfo[to]) {
        setConvertedAmount((amount / currencyInfo[from]) * currencyInfo[to])
    }
    // console.log(currencyInfo[to])
    // console.log(currencyInfo[from])
  };  
  

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-black"
        style={{
            backgroundImage: `url(${backgroundImage})`,
        }}
    > 
            
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount ={amount}
                            currencyOptions= {options}
                            onCurrrencyChange={ (currency) => setFrom(currency)}
                            selectCurrency= {from}
                            onAmmountChange={ (amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap} 
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions= {options}
                            onCurrrencyChange={ (currency) => setTo(currency)}
                            selectCurrency= {to}
                            amountDisabled
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        // onClick={() => convert()}
                        >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
};

export default App