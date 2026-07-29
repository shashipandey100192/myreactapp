import React from 'react'
import { AiFillDashboard } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Welcomepage() {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 text-center p-3'>
                    <h3>Application List</h3>
                </div>
                <div className='col-6 text-center p-3'>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="search" />
                        <button class="btn btn-outline-secondary" type="button">Button</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3'>
                    <Link to="/users" className='card text-center p-2 bg-light shadow mt-4'>
                        <h1><AiFillDashboard /></h1>
                        <h5>User Management</h5>
                    </Link>
                </div>
                <div className='col-md-3'>
                    <div className='card text-center p-2 bg-light shadow mt-4'>
                        <h1><AiFillDashboard /></h1>
                        <h5>Admin Management</h5>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card text-center p-2 bg-light shadow mt-4'>
                        <h1><AiFillDashboard /></h1>
                        <h5>Sales Management</h5>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card text-center p-2 bg-light shadow mt-4'>
                        <h1><AiFillDashboard /></h1>
                        <h5>Report Card</h5>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card text-center p-2 bg-light shadow mt-4'>
                        <h1><AiFillDashboard /></h1>
                        <h5>Invoice</h5>
                    </div>
                </div>
                <div className='col-md-3'>
                    <Link to="/dashboard" className='card text-center p-2 bg-light shadow mt-4'>
                        <h1><AiFillDashboard /></h1>
                        <h5>Dashboard</h5>
                    </Link>
                </div>
                <div className='col-md-3'>
                    <div className='card text-center p-2 bg-light shadow mt-4'>
                        <h1><AiFillDashboard /></h1>
                        <h5>Dashboard</h5>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card text-center p-2 bg-light shadow mt-4'>
                        <h1><AiFillDashboard /></h1>
                        <h5>Dashboard</h5>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card text-center p-2 bg-light shadow mt-4'>
                        <h1><AiFillDashboard /></h1>
                        <h5>Dashboard</h5>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card text-center p-2 bg-light shadow mt-4'>
                        <h1><AiFillDashboard /></h1>
                        <h5>Dashboard</h5>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card text-center p-2 bg-light shadow mt-4'>
                        <h1><AiFillDashboard /></h1>
                        <h5>Dashboard</h5>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card text-center p-2 bg-light shadow mt-4'>
                        <h1><AiFillDashboard /></h1>
                        <h5>Dashboard</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcomepage