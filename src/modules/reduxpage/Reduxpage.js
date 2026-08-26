import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,cname } from './Myactionslist';

function Reduxpage() {
const userpro = useSelector((state) => state.counter.username);
const age = useSelector((state) => state.counter.userage);
const mydec = useDispatch();




  return (
    <div>
        <h1>Reduxpage</h1>
        <h2>{userpro}</h2>
        <h2>{age}</h2>

        <input type='button' value="change name" onClick={() => mydec(increment())}/>


    </div>
  )
}

export default Reduxpage