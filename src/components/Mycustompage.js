import React, { useState } from 'react'
import Mynav from './Mynav';
import '../style.css';


function Mycustompage() {


const [u,f]=useState(0);

const a=1100;
const b="about page";
const c= <h1 className='abc'>this is jsx format{a} </h1>
const d = <Mynav/>
    if(a>5000)
    {
        return c
    }

    // localStorage.setItem('mydata',a);

const myinput=(p)=>{
    f(p.target.value);
    localStorage.setItem('mydata',u);

}

  return (
    <div>

<h1>welcome</h1>
    <h2>{a}</h2>
    <h2>{b}</h2>
    {c}
    {d}
    <input type="text" value={u} onInput={myinput}/>
    </div>
  )
}

export default Mycustompage