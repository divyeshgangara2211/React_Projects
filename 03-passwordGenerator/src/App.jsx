import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [specialCharAllowed , setSpecialCharAllowed] = useState(false)
  const [password , setPassword] = useState('')

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 

    if(numberAllowed) str += "0123456789"
    if(specialCharAllowed) str += "!@#$%^&*-_+=~`"

    for(let i=1 ; i<Array.length ; i++){
      let index = Math.floor( Math.random()*Array.length + 1)

      pass += str.charAt(index)
    }
    
    setPassword(pass)

  } , [length , numberAllowed , specialCharAllowed , setPassword])

  return (
    <>
    <div className='flex items-center justify-center h-screen'>
      <div className="flex-col justify-center text-center">
        <h1 className="text-5xl text-center text-white">Password Generator</h1>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>Test</div>
      </div>  
    </div>
    </>
  )
}

export default App 
