import React from 'react'
import { FcBusinessman } from "react-icons/fc";
import { toast,ToastContainer } from 'react-toastify';

function Usermainpage() {
    const msg = ()=>{
        toast.success("welcome",{autoClose:800,theme:'dark',position:'top-center'});
    }


    return (
        <div className='container-fluid mycontainer'>
            <div className='row'>
                <div className='col-md-3'>
                    <div class="card bg-light shadow mt-3">
                        <div class="card-body">
                            <h5 class="card-title"> <FcBusinessman/> Total Employee</h5>
                            <h3>1200</h3>
                            <button type='button' onClick={msg}>submit</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card bg-light shadow mt-3">
                        <div class="card-body">
                            <ToastContainer/>
                            <h5 class="card-title"> <FcBusinessman/> Total Employee</h5>
                            <h3>1200</h3>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card bg-light shadow mt-3">
                        <div class="card-body">
                            <h5 class="card-title"> <FcBusinessman/> Total Employee</h5>
                            <h3>1200</h3>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card bg-light shadow mt-3">
                        <div class="card-body">
                            <h5 class="card-title"> <FcBusinessman/> Total Employee</h5>
                            <h3>1200</h3>
                        </div>
                    </div>
                </div>

                <div className='col-md-9'>
                    <div class="card bg-light shadow mt-3">
                        <div class="card-body">
                            <h5 class="card-title"> <FcBusinessman/> Total Employee</h5>
                            <h3>1200</h3>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div class="card bg-light shadow mt-3">
                        <div class="card-body">
                            <h5 class="card-title"> <FcBusinessman/> Total Employee</h5>
                            <h3>1200</h3>
                        </div>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div class="card bg-light shadow mt-3">
                        <div class="card-body">
                            <h5 class="card-title"> <FcBusinessman/> Total Employee</h5>
                            <h3>1200</h3>
                        </div>
                    </div>
                </div>

                <div className='col-md-7'>
                    <div class="card bg-light shadow mt-3">
                        <div class="card-body">
                            <h5 class="card-title"> <FcBusinessman/> Total Employee</h5>
                            <h3>1200</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Usermainpage