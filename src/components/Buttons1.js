import React, { useState } from 'react';
import '../style.css';

export const Btns= ()=> {
const c = 50;
  return (
    <div>Buttons1 {c}</div>
  )
}


export const Myobj = ()=>
{
    const d = 40;
    const [sv,sf]=useState('black');

    const xyz =()=>
    {
       
        console.log(sv);
    }
    return(

<h1 className='abc' onClick={xyz} style={{backgroundColor:{sv}}}>webpage {d}</h1>

    )
}



