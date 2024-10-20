import React from "react";
import { useState } from "react";
import Renderdata from "./renderdata";
import "./addtask.css"

function Addtask({onClick}) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [data, setdata] = useState([]);

  function adddata(){
    setdata([...data ,{name , email}])
    
    setname("")
    setemail("")
}
function onClick(){
    setdata("")
}
console.log(data);
  return (
    <>
    <div className="task-data">
    <div className="inp-btn">
      <input
        type="text"
        id="namebase"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        id="emailbase"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <button
      onClick={adddata}
      >Add</button>
      </div>


      <div className="data">
        <div className="datastatic">
            <div>  <h1>Name</h1></div>
            <div> <h1>email</h1></div>
            <div><h1>remove</h1></div>
        </div>

      

         {
             data.map((e,i) =>{
                 return(
                     <Renderdata 
                     key={i}
                     name={e.name}
                     email={e.email}/>
                    )
                    
                })
            }
            
        </div>
    

    </div>

    </>
  );
}

export default Addtask;
