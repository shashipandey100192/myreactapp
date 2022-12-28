import React, { useEffect, useState } from 'react'


function Home() {
  const [svariable, sfunction] =useState(0);
useEffect( ()=>{
  sfunction(localStorage.getItem('mydata'));


})


  return (
    <div>welcome to home components
      <button className='btn btn-primary'>submit</button>
    <h1>{svariable}</h1>

      
    </div>
  )
}

export default Home