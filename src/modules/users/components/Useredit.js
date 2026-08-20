import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';

function Useredit() {

const {id} =useParams();
const mynav = useNavigate();

const [user,updateuser]=useState({
    email:"",
    username:""
})

const singledata = ()=>{

    axios.get(`http://localhost:5800/users/${id}`).then((r)=>{
       console.log(r.data);
       updateuser(r.data);
    })
}

useEffect(()=>{
    singledata();
},[])


const fieldupdate = (s)=>{
    updateuser({
    ...user,
    [s.target.name]: s.target.value
  });
}

const submitupdate = ()=>{
    axios.patch(`http://localhost:5800/users/${id}`,user).then((d)=>{
        console.log(d);
        toast.success("update successfully",{autoClose:800,theme:'dark'});
        setTimeout(()=>{
            mynav("/dashboard/userlistpage");
        },800)
    })
}


  return (
    <div className='container-fluid card bg-dark text-white p-3'>
            <div className='row'>
                <div className='col-md-6'>
                    <ToastContainer/>
                    <div class="mb-3">
                        <label class="form-label">User name {id}</label>
                        <input type="text" class="form-control" value={user.username} name='username' onInput={fieldupdate}/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" value={user.email} name='email' onInput={fieldupdate}/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="mb-3">
                        <input type="button" class="btn btn-success" value="update" onClick={submitupdate}/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Useredit