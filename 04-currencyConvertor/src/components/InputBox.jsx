import React , {useId}  from 'react'
// useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

function InputBox( {
    label , 
    amount ,
    onAmmountChange ,
    onCurrrencyChange ,
    currencyOptions = [],
    selectCurrency = "usd", 
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {   

    const uniqueId = useId();
    
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={uniqueId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={uniqueId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisabled}
                    value={amount}
                    onChange={(e) => onAmmountChange && onAmmountChange(Number(e.target.value))}
                    // Here we Check if onAmountChange has value then we call it otherwise we don't call it.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled = {currencyDisabled}
                    value = {selectCurrency}
                    onChange={ (e) => onCurrrencyChange && onCurrrencyChange(e.target.value)}
                    // Here we Check if onCurrrencyChange has value then we call it otherwise we don't call it.
                >
                    
                        {currencyOptions.map( (currentCurrency) => (
                            //If we need performance then we must pass key.
                            // Remeber the key in loops in React.

                            <option key={currentCurrency} value={currentCurrency}>
                            {currentCurrency}
                            </option>

                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
