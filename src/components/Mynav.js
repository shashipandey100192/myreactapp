import React from 'react';
import { Link } from 'react-router-dom';


function Mynav() {
  return (
    <div>
        {/* <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="other">Other</Link> */}

<div className="container-fluid bg-info">
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="home" className="nav-link active" aria-current="page">Home</Link></li>
        <li className="nav-item"><Link to="about" className="nav-link">Features</Link></li>
        <li className="nav-item"><Link to="mymap" className="nav-link">Data list</Link></li>
        <li className="nav-item"><Link to="service" className="nav-link">FAQs</Link></li>
        <li className="nav-item"><Link to="form" className="nav-link">About</Link></li>
      </ul>
    </header>
  </div>



    </div>
  )
}

export default Mynav