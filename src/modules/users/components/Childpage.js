import React from 'react'

function Childpage(props) {
  return (
    <div className='bg-info p-3'>Childpage
        <h3>{props.xyz}</h3>
    </div>
  )
}

export default Childpage