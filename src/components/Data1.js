import React, { Fragment } from 'react'



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
    const xyz = ()=>
    {
     fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((res)=>{
            console.log(res.json())
        },[]);

    }
return(
        <Fragment>
    <h1>welcome</h1>
    <button type='button' onClick={xyz}>fetch data using </button>
    </Fragment>
)


}