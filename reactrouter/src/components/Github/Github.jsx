import React, { useEffect, useState } from 'react'

function Github() {
  const[data, setdata] = useState([])
  useEffect(()=>{
    try {
      fetch('https://api.github.com/users/Nikhilprajapati01')
      .then((res)=> res.json())
      .then((data)=>{
        console.log(data);
        setdata(data);
        
      })
      
    } catch (error) {
      
    }

  },[Github])
  return (
    <div className='p-4 bg-gray-600 text-center text-2xl'>Githun Name: {data.name}</div>
  )
}

export default Github