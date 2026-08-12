import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Appdata() {

    const [sv, sf] = useState([])
    const [cy,updatecy]=useState([]);

    const myapi = () => {
        fetch("https://dummyjson.com/users").then((r) => {
            return r.json();
        }).then((d) => {
            console.log(d.users);
            sf(d.users);
           const abc = d.users.map((c)=>{
                return c.address.city
            });
            const que = [...new Set(abc)]
           updatecy(que);
           localStorage.setItem("dropdata",JSON.stringify(que));

            

        })
    }

    useEffect(() => {
        myapi();
    }, []);


    return (
        <div className='container-fluid mycontainer'>
            <div className='row'>
                <div className='col-md-4'>
                    {cy.length}
                    <select className='form-select'>
                        {cy.map((c)=>{
                            return(
                                <option key={c}>{c}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className='row'>
                {sv.map((c) => {
                    return (
                        <div className='col-md-3' key={c.id}>
                            <div className="card bg-light shadow mt-3">
                                <div className="card-body">
                                    <img src={c.image} alt={c.id} />
                                    <h5 className="card-title">Name: {c.username}</h5>
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