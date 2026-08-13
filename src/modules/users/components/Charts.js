import React, { Fragment, useEffect, useState } from 'react'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

function Charts() {

  const [x, y] = useState([]);
  const [cat,updatecat]=useState([]);
  const [sv,sf]=useState([])

  const myapidata = () => {
    axios.get("https://dummyjson.com/products?limit=100").then((d) => {
      console.log(d.data.products);
      y(d.data.products);
      sf(d.data.products);
    

      const a = d.data.products.map((r)=>{
          return r.category
      });
 
      const quevlue = [...new Set(a)];
      console.log(quevlue);
      updatecat(quevlue);
    })
  }


  const myopt = (e)=>{
    console.log(e.target.value);
    const xyz = sv.filter((f)=>{
      return f.category===e.target.value;
    });
    console.log(xyz);
    y(xyz);

  }




  useEffect(() => {
    myapidata();
  }, []);


  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <select className='form-select' onChange={myopt}>
             {cat.map((d)=>{
              return(
                <option>{d}</option>
              )
             })}
            </select>
          </div>
        </div>
      </div>

      <BarChart
        style={{ width: '100%', maxWidth: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
        responsive
        data={x}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="category" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Bar dataKey="stock" fill="#ff0000" />
        <Bar dataKey="price" fill="#0066ff" />
      </BarChart>
    </Fragment>
  )
}

export default Charts