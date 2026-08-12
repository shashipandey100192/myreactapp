import React, { useEffect, useState } from 'react'

function Subchildpage(props) {
    const [x,y]=useState([])

    const subc = ()=>{
    const mydata =JSON.parse(localStorage.getItem("dropdata"));
        y(mydata)
    }

useEffect(()=>{
    subc();
},[])


  return (
    <div className='p-3 bg-danger text-white'>
        <p className='h3'>Subchildpage</p>
            <button className='btn btn-warning' onClick={props.getfun}>submit</button>
                <select className='form-select'>
                {x.map((r)=>{
                    return(
                        <option>{r}</option>
                    )
                })}
                </select>
        </div>
  )
}

export default Subchildpage