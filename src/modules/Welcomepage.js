import React from 'react'
import { AiFillDashboard } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { myapp } from './controls/Apmenu';

function Welcomepage() {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 text-center p-3'>
                    <h3>Application List</h3>
                </div>
                <div className='col-6 text-center p-3'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="search" />
                        <button className="btn btn-outline-secondary" type="button">Button</button>
                    </div>
                </div>
            </div>
            <div className='row'>

                {myapp.map((d,x) => {
                    return (
                        <div className='col-md-3' key={x}>
                            <Link to={"/"+d.approute} className='card text-center p-2 bg-light shadow mt-4'>
                                <h1><AiFillDashboard /></h1>
                                <h5>{d.appmenu}</h5>
                            </Link>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Welcomepage