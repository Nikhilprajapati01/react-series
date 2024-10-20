import React, { useState } from 'react'
import Data from './data'
import './addvedio.css'
import Vedio from './Vedio';

function Addvedio({addvedio}) {
    const [data, setdata] = useState({
        time:'1 months',
        channel:'code',
        verify:true,
      });
    
    function handling(e){
        console.log( e.target.name , e.target.value);
       setdata({...data,
        [e.target.name]:e.target.value
    })
        console.log(data);
        
    }

    function submit(e){
        e.preventDefault()
        addvedio(data)
    console.log(data);
    
    }
  return (
    <>
          <form action="" className='form'>
            <input type="text" name='title' onChange={handling} placeholder='vedio title'/>
            <input type="text" name='views'  onChange={handling} placeholder='views' />

            <button
            className='btn'
            onClick={submit}
        // onClick={()=> {setdata([...data,{id:data.length+1,
        //   title:'js tutorial',
        //   views:'1M',
        //   time: '1years',
        //   channel:'you tube',
        //   verify: true
          
        // }] );
        // }}
        >add vedio</button>
          </form>
    </>
  )
}

export default Addvedio