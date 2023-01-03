import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function DataFatch() {
  
//     axios.get('https://jsonplaceholder.typicode.com/posts').then( (res)=>{
//     const mydata = res.data;  
//   console.log(res.data);
const [datavariable,datafunction]=useState([]);

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=>{
        // console.log(res.data);
        datafunction(res.data);
    })

  });
  
    return (
      <div className='container-fluid'>
      <div className='row'>
      {datavariable.map((r)=>(
            <div className='col-3 mt-2' key={r.id}>
            <div className="card">
              <div className="card-body">
                <img src={r.thumbnailUrl} alt="imgs" />
                <h5 className="card-title">{r.title}</h5>
                <p className="card-text">{r.body}</p>
                <h1 className='text-center'>{r.albumId}</h1>
                <a href="#" className="btn btn-primary">{r.id} Go somewhere</a>
              </div>
            </div>
            </div>
      ))}

    </div>
    </div>
  )
}

export default DataFatch