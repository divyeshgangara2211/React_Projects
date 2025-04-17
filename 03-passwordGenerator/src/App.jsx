import { useCallback, useState,useEffect,useRef } from 'react'
import './App.css'

//useCallback is a React Hook that lets you cache a function definition between re-renders.
//useState is a Hook that lets you add React state to function components.
// useEffect is a React Hook that lets you synchronize a component with an external system.

function App() {
  const [length, setLength] = useState(8) ; // default value is 8
  const [numberAllowed , setNumberAllowed] = useState(false) ;
  const [specialCharAllowed , setSpecialCharAllowed] = useState(false) ;
  const [password , setPassword] = useState("") ;

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {  // It is responsible for run as well as memorizationa and put in cache.
    let pass = "" ;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  ;

    if(numberAllowed) str += "0123456789"
    if(specialCharAllowed) str += "!@#$%^&*-_+=~`"

    for(let i=1 ; i<length ; i++){
      let index = Math.floor( Math.random()*str.length + 1)

      pass += str.charAt(index)
    }
    
    setPassword(pass)   

  } , [length , numberAllowed , specialCharAllowed , setPassword]) ;

  const copyPasswordToClipboard = useCallback( () => {
    // In React Window object is available ,In NextJs window object is not available.

    passwordRef.current?.select() ; // select the text in the input field
    passwordRef.current?.setSelectionRange(0, 999) ; //select in range
    window.navigator.clipboard.writeText(password)
  } , [password]) ;

  useEffect( () => {
    passwordGenerator() ;
  } , [length,numberAllowed,specialCharAllowed,passwordGenerator]) ;

  useEffect(() => {
    // Calculate percentage based on the range value
    const min = 6;
    const max = 100;
    const percentage = ((length - min) / (max - min)) * 100;
    document.documentElement.style.setProperty('--range-progress', `${percentage}%`);
  }, [length]);

  return (
    <>  
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center text-center">

        <h1 className= ' text-center text-5xl my-3 text-orange-500'>Password generator</h1>

        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-10 py-7 my-8 bg-gray-800 text-orange-500"> 
            
          <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white ">
              <input
              type="text"
              value={password}
              className="outline-none w-full  py-1 px-3 placeholder-orange-400"
              placeholder="Password"
              readOnly
              ref={passwordRef} // give ref to useRef hook
              />

              <button
              onClick={copyPasswordToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600 cursor-pointer'
              >Copy</button>    
          </div>

          <div className='flex text-sm gap-x-2 '>

            <div className='flex items-center gap-x-1 '>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer custom-range '
              onChange={(e) => {setLength(e.target.value)}}
              />

              <label className=" min-w-fit">Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1 ">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                className="accent-blue-700 w-4 h-4 cursor-pointer"
                id="numberInput"
                onChange={() => {
                    setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>

            </div>
              
            <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={specialCharAllowed}
                  className="accent-blue-700 w-4 h-4 cursor-pointer"
                  id="characterInput"
                  onChange={() => {
                      setSpecialCharAllowed((prev) => !prev )
                  }}
                />
                <label htmlFor="characterInput">Characters</label>
            </div>

          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default App 

{/* <div className='flex items-center justify-center h-screen'>
      <div className="flex-col justify-center text-center">

        <h1 className="text-5xl text-center text-white my-3">Password Generator</h1>

        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'> 

          <div className='relative mb-4 text-white'>
            <input 
              type="text"
              value={password}
              className='outline-none w-full py-2 px-3 pr-20 rounded-lg'
              placeholder='Password'
              readOnly
            />

            <button 
              className='absolute right-2 top-1/2 -translate-y-1/2 bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-600'
            >
              Copy
            </button>
            
          </div>
          
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input  
              type="range"
              min={6}
              max={100}
              value={length}
              className='bg-white cursor-pointer'
              onChange={ (e) => {setLength(e.target.value)}} 
              />
              <label>Length: {length}</label>
            </div>
          </div>
        </div>
      </div>  
</div>  */}