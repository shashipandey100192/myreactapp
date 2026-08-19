import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

function Addusers() {

    const{register,handleSubmit}=useForm()

    const submitdata = (formdata)=>{
        
        axios.post("http://localhost:5800/users",formdata).then((s)=>{
            console.log(s)
        })

    }

    return (
        <div className='container-fluid card bg-dark text-white p-3'>
            <div className='row'>
                <div className='col-md-6'>
                    <div class="mb-3">
                        <label class="form-label">User name</label>
                        <input type="text" class="form-control" {...register("username")}/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" {...register("email")}/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="mb-3">
                        <input type="button" class="btn btn-success" value="add" onClick={handleSubmit(submitdata)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addusers