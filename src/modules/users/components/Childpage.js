import React from 'react'
import Subchildpage from './Subchildpage'

function Childpage(props) {
  return (
    <div className='bg-info p-3'>Childpage
        <h3>{props.xyz}</h3>
          <Subchildpage getfun={props.myfunc}></Subchildpage>
    </div>
  )
}

export default Childpage