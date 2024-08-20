import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Bgchange from './components/bgchange'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h2 className='bg-green-400'>Tailwind css</h2> */}
       {/* <Card  Username ="Nikhil"/> */}
       {/* <Card /> */}
       <Bgchange />
    </>
  )
}

export default App
