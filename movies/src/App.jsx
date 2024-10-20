import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Createmovies from './components/Createmovies'
import Moviecard from './components/moviecard'
import data from "./components/moviedata.json"
import Addtask from './components/Addtask'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     {/* <Createmovies title={"Movie review"}/> */}
     <Createmovies title={"Add task"}/>

    </div>


    <div>
      <Addtask />
    </div>


     {/* <div className='moviecontainer'>
     {
      data.map((items, index)=> {return (
        <Moviecard 
        key={index}
        link={items.Poster} 
        title={items.Title} 
        year = {items.Year}
       />
    
      )})
     }
    
     </div> */}
    </>
  )
}

export default App
