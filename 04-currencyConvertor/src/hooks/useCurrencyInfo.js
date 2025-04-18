import { useEffect, useState } from 'react';

// Create a custom hook to fetch currency information.
// API response mostly send string type data ,so convert in json format.

function useCurrencyInfo(currency){
    const [data, setData] = useState({});

    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then( (Response) => Response.json())
        .then( (Response) => setData(Response[currency]))
        // console.log(data);
    } , [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;