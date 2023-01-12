import React, { Fragment, useEffect, useState } from 'react'



function Data1() {
    const abc = ()=>
    {
        fetch(`https://jsonplaceholder.typicode.com/photos`).then((res)=>{
            console.log(res.json())
        },[]);

    }

    return (
    <div>
        <h1>fatch api</h1>
        <button type='button' onClick={abc}>fatch data from api</button>
        <Mysecond/>
    </div>
  )
}

export default Data1









export const Mysecond= ()=>{

    const [myd,myf]=useState([]);
    const xyz = async ()=>
    {
     const ducat = await fetch("https://jsonplaceholder.typicode.com/photos")
     const mydata = await  ducat.json();
     myf(mydata);

     console.log(ducat);
    }

    useEffect(()=>{
        xyz()
    },[])

return(
        <Fragment>
    <h1>welcome</h1>
    <button type='button' onClick={xyz}>fetch data using100 </button>
    {myd.map((u)=>{
        return <p key={u.id}>{u.id}</p>
    })};
    </Fragment>
)


}