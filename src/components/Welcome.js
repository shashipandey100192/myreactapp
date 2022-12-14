import React from 'react'

function Welcome() {

const a= ()=>{
    alert("welcome to page");
}

let c =10;
let d = 80;
const b = ()=>
{
    console.log("hi"+ (c+d));
}


  return (
    <div>
<button type='button' onClick={a}>submit</button>
<a href='https://i.pinimg.com/originals/be/93/9a/be939ac0e8c051b2a120292a011b0f2c.png'>templates</a>
<input type="button" value="submit" onClick={b} />




    </div>
  )
}

export default Welcome