import React from 'react'
import "./moviecard.css"
function Moviecard({title,year,link}) {
  return (
   <>
     <div className="container">
        <img src={link}alt="" />
        <div className="title">{title}</div>
        <div className="year">{year}</div>
     </div>
   </>
  )
}

export default Moviecard