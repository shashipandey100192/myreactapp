import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'


function Userlist() {

    const [a, b] = useState([])

    const myuserdata = () => {
        axios.get("http://localhost:5800/users").then((d) => {
            console.log(d.data);
            b(d.data);
        })

    }

    useEffect(() => {
        myuserdata();
    }, [])


const UserDelete = (d)=>{
    console.log(d);
    axios.delete(`http://localhost:5800/users/${d}`).then((r)=>{
        toast.success("user is deleted",{autoClose:800,theme:'dark'});
        myuserdata();
    })

}


    return (

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 p-2'>
                    <p className='h4'>List of users</p>
                    <ToastContainer/>
                </div>
                <div className='col-md-6 text-end p-2'>
                    <Link to="adduser" className='btn btn-info'> Add User</Link>
                </div>
                <div className='col-12'>

                    <table class="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">Sno</th>
                                <th scope="col">Id</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Address</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {a.map((u,i) => {
                                return (
                                    <tr>
                                        <th scope="row">{++i}</th>
                                        <th scope="row">{u.id}</th>
                                        <td>{u.username}</td>
                                        <td>{u.email}</td>
                                        <td>@mdo</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>
                                            <button className='btn btn-danger btn-sm' onClick={()=>UserDelete(u.id)}>Del</button>
                                            <Link to={"useredit/"+u.id} className='btn btn-warning btn-sm'> Edit</Link>
                                        </td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Userlist