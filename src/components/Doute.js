import React from 'react'
import { Link } from 'react-router-dom';

const a=500;
const b=300;
let d=0;
let y=30;
let c=0;

function Doute() {
 

if(a>=100)
{
 c=a;
}
else
{
 c=b;
}
  if(y>=40)
  {
    d=20;
  }
  else
  {
    d=100;
  }



return (
  <div>
<h1 style={{color:'red'}}>welcome to doute page {c}</h1>
<h1 style={{color:'red',fontSize:`${d}px`}}>welcome to doute page {c}</h1>
<h2>this is sub heading</h2>
  <Link to="/myhomepage">Homepage</Link>

  </div>
)


 
}

export default Doute