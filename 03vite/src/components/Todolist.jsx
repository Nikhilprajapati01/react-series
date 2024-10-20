import React, { useState } from 'react'

function Todolist() {
    const [value, setvalue] = useState("")
    
    function getvalue (e){
        console.log(e.target.value);
        
    
        setvalue(()=> {
            e.target.value
        })
    }
    function additem(){

    }
  return (
    <>
     <div>Todolist</div>
     <input type="text" onChange={getvalue}/>
     <button onClick={getvalue} >Add</button>
     <div>
        <span>"my current value"{getvalue}</span>
     </div>
    </>
  )
}

export default Todolist