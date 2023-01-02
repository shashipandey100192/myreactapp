import React, { useEffect } from 'react'
import axios from 'axios';

function DataFatch() {
  
//     axios.get('https://jsonplaceholder.typicode.com/posts').then( (res)=>{
//     const mydata = res.data;  
//   console.log(res.data);

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then( (res)=>{
        const mydata = res.data;  
    //   console.log(res.data);
      console.log(mydata);
});

  });
  
    return (
    <div>
     


    </div>
  )
}

export default DataFatch