import React, { useState } from "react";

const Bgchange = ()=>{
    const [color , setcolor] = useState("")
  return(
    <>
      <div className=" w-full h-screen " style={{backgroundColor:color}}>
                <div className="  flex  justify-center " >
                      <div className="w-3/5 flex-row flex-wrap  bg-white m-5 rounded-xl text-center">
                        <button className="px-8 py-2 bg-red-700 m-3 rounded-3xl text-white shadow-md" onClick={()=>{setcolor("red")}}>Red</button>
                        <button className="px-8 py-2 bg-purple-600 m-3 rounded-3xl text-white shadow-md"  onClick={()=>{setcolor("purple")}}>Purple</button>
                        <button className="px-8 py-2 bg-orange-600 m-3 rounded-3xl text-white shadow-md"  onClick={()=>{setcolor("orange")}}>Orange</button>
                        <button className="px-8 py-2 bg-blue-600 m-3 rounded-3xl text-white shadow-md"  onClick={()=>{setcolor("blue")}}>Purple</button>
                        <button className="px-8 py-2 bg-gray-700 m-3 rounded-3xl text-white shadow-md"  onClick={()=>{setcolor("gray")}}>Gray</button>
                        <button className="px-8 py-2 bg-sky-300 m-3 rounded-3xl text-white shadow-md"  onClick={()=>{setcolor("skyblue")}}>Sky blue</button>
                      </div>
                </div>
      </div>
    </>
  )
}

export default Bgchange