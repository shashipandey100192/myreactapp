import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../style.css';


function MychildComponent() {
  return (
    <Fragment>
        <div className='mychild'>
        <Link to="blog1">Blog1</Link>
        <Link to="photo">Photo Gallery</Link>
        <Link to="product">Product list</Link>
        <Link to="contact">Contact us</Link>
        </div>

    <Outlet/>

    </Fragment>
  )
}

export default MychildComponent