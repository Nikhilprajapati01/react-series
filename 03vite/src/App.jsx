import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Bgchange from './components/bgchange'
import Vedio from './components/Vedio'
import Resume from './components/Resume'
import Data from './components/data'
import Addvedio from './components/Addvedio'
import Todolist from './components/Todolist'
import Movie from './components/Movie'

function App() {
  const [data, setdata] = useState(Data)
  function addvedio(vedio){
    setdata([
      ...data,
      {...vedio, id: data.length+1}
    ])
  }



  return (
    <>
      {/* <h2 className='bg-green-400'>Tailwind css</h2> */}
       {/* <Card  Username ="Nikhil"/> */}
       {/* <Card /> */}
       {/* <Bgchange /> */}
        {/* <Addvedio  addvedio={addvedio} /> */}
        

       {/* {data.map((Data) => (<Vedio 
       key={Data.id}
            title={Data.title}
            views={Data.views}
            time={Data.time}
            channel={Data.channel}
            verify={Data.verify}

       />))} */}
      {/* <Todolist/> */}

       
       {/* <Vedio title="small version"/>
       <Vedio title="small 2 version"/>
      */}


      <Movie />
      
    </>
  )
}

export default App
