import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Appdata() {

    const [sv, sf] = useState([])

    const myapi = () => {
        fetch("https://dummyjson.com/users").then((r) => {
            return r.json();
        }).then((d) => {
            console.log(d.users);
            sf(d.users);
        })
    }

    useEffect(() => {
        myapi();
    }, []);


    return (
        <div className='container-fluid mycontainer'>

            <div className='row'>
                {sv.map((c) => {
                    return (
                        <div className='col-md-3'>
                            <div class="card bg-light shadow mt-3">
                                <div class="card-body">
                                    <img src={c.image} alt={c.id} />
                                    <h5 class="card-title">Name: {c.username}</h5>
                                    <h3>Age: {c.id}</h3>
                                    <Link to={"userdetails/"+c.id} className='btn btn-success'>more Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Appdata