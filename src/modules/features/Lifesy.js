import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Lifesy() {
    const xyz = useNavigate();

const [sv,sf]=useState("user");
const [pv,pf]=useState("123456");

const myele = (r)=>{
    sf(r.target.value);
}

const pupdate  = (e)=>{
    pf(e.target.value);
}

const submitform = ()=>{
    if(sv==="" || pv==="")
    {
        alert("user and password empty");
    }
    else
    {
        if(sv==="admin@gmail.com" && pv==="admin")
        {
            alert("welcome");
            // window.location.href="http://localhost:3000/applist";
            xyz("/applist");
        }
        else
        {
            alert("user and password wrong");
            
        }

    }
}


  return (
    <Fragment>
    <input type='text' value={sv} onInput={myele}/>
    <input type='password' value={pv} onInput={pupdate}/>
    <input type='button' value="submit" onClick={submitform}/>
    </Fragment>
  )
}

export default Lifesy