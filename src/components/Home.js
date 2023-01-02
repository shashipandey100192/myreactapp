import React, { useEffect, useState } from 'react'



function Home() {
  const [svariable, sfunction] =useState(0);
useEffect( ()=>{
  sfunction(localStorage.getItem('mydata'));
})
sessionStorage.setItem('myssision','ducat india');







  return (
    <div>welcome to home components
      <button className='btn btn-primary'>submit</button>
    <h1>{svariable}</h1>
    <h1>this is session </h1>
      
    </div>
  )
}

export default Home