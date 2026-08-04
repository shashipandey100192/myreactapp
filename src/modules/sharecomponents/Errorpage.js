import React from 'react'
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
   <div  className='container'>
    <div className='row'>
        <div className='col-12 text-center'>
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link to="/applist" className='btn btn-danger btn-sm'>Back to App</Link>
        </div>
    </div>
   </div>
  )
}

export default Errorpage