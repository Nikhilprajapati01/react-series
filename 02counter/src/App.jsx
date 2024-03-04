import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let counter = 15;
  const addcounter = ()=>{
    console.log("value", Math.random());<q></q>
     counter = counter + 1
  }
  const addvalue = () =>{
  console.log("value", Math.random());
  }
  return (
    <>
    <h2>nikhil and react</h2>
    <h3>counter value : {counter}</h3>

    <button
    onClick={addvalue} 
    >add value</button>
    <br />
    <button
    onClick={addcounter}>remove value</button>
    </>
  )
}

export default App
