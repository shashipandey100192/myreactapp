import React from 'react'
import Childpage from './Childpage'

function Userreport() {
  const username = "ravi singh";

  const msg = () => {
    alert("welcome to props driling");
  }

  

  return (
    <div>Userreport
      <Childpage xyz={username} myfunc={msg}></Childpage>

    </div>
  )
}

export default Userreport