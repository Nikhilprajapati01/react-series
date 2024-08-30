import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number , setNumber] =  useState(false)
  const[char , setChar] = useState(false)
  const [password, setpassword] = useState("")

  const passwordgenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(char) str += "!@#$%^&*()"

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() *  str.length+1)
      pass += str.charAt(char)

    }
    setpassword(pass)

  } , [length, number, setpassword , char])

  useEffect(()=>{
    passwordgenerator()
  },[length,number,char, passwordgenerator])

  return (
    <>
    <div className='w-full max-w-xl mx-auto  bg-slate-600 text-center shadow-md rounded-lg py-4 my-8  text-2xl' >
      <h3>passwordgenerator</h3>
      <div className='flex shadow rounded-lg overflow-hidden m-4'>
        <input 
        type="text"
        placeholder='password'
        value={password}
        className="outline-none w-full py-2 px-3 "
        readOnly
         />
         <button className='py-0.5 px-3 bg-blue-400 outline-none shrink-0'>Copy</button>

      </div>

      <div className='flex text-sm gap-x-10 m-4'>
        <div className='flex items-center gap-x-2'>
          <input 
          type="range" 
          min={8}
          max={16}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={number}
              id='Numberinput'
              onChange={()=> {setNumber((number) => !number)}}
              />
              <label>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={char}
              id='charinput'
              onChange={() => {setChar((char) => !char)}}
              />
              <label>Characters</label>
        </div>

      </div>

    </div>

    </>
  )
}

export default App
