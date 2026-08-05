import React from 'react'
import Lifesy from '../features/Lifesy'
import Appheader from '../sharecomponents/Appheader'
import Appsidebar from '../sharecomponents/Appsidebar'
import Usermainpage from '../users/components/Usermainpage'
import Appfooter from '../sharecomponents/Appfooter'
import { Outlet } from 'react-router-dom'

function Landingpage() {
  return (
    <div>
    
      <Appheader/>
      <div className='container-fluid cmt'>
        <div className='row'>
          <div className='col-md-2'>
              <Appsidebar/>
          </div>
          <div className='col-md-10 '>
            <Outlet></Outlet>
            <Appfooter/>

          </div>
        </div>
      </div>

     
      
      </div>
  )
}

export default Landingpage