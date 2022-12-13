import React, { Fragment } from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Abc()
{
const a="sdfhjshdfjshdf";
const b = 8787;

    return(
        <Fragment>
        <h1>welcome</h1>
        <h2 className="first">welcome1</h2>
        {80+40}
        <h3>{a} hello {b}</h3>

        <div className="home">page</div>

        <div className="container">
            <div className="row">
                <div className="col-4">one</div>
                <div className="col-4">two</div>
                <div className="col-4">three</div>
                </div>    
        </div>

        <div className="container bg-danger">
            <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            </ul>
            </header>
        </div>
        </Fragment>
    )
}

export default Abc
