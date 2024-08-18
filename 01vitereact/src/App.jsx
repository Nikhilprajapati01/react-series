
import { useState } from "react"


function App() {
  let [counter , setcounter]  = useState(15)


  const Addval = ()=>{
    setcounter(counter+1);
  }
  const subval = ()=>{
    setcounter(counter-1);
  }

  return (
    <>

    <h2>counter = {counter}</h2>
    <button onClick={Addval}>next</button>
    <button onClick={subval}>prev</button>
    </>
     
  )
}

export default App
