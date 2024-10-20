import React from 'react'

function Renderdata({name,email}) {
  return (
    <>    
      <div className="datadynamic">
        <div><h2>{name}</h2></div>
        <div> <h2>{email}</h2></div>
        {/* <div> <button onClick={clear}>Remove</button></div> */}
        
       
      </div>
    </>
  )
}

export default Renderdata