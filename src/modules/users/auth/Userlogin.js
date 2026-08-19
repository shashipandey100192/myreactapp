import React,{useState} from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'

function Userlogin() {
    const mynav = useNavigate();
    const {register,handleSubmit,formState: { errors }} = useForm()

const myform = (myformdata)=>{
        console.log(myformdata);

       if(myformdata.username==="admin@gmail.com" && myformdata.pass==="kumar")
       {
        toast.success("wecome",{theme:'dark',autoClose:1000});
        setTimeout(()=>{
            mynav('/dashboard')
        },1000)
       }
}


    const [show, setShow] = useState(false);

    return (

        <form onSubmit={handleSubmit(myform)}>
        <div className="container-fluid login-bg">
            <div className="row vh-100 justify-content-center align-items-center">
                <ToastContainer/>
                <div className="col-12">
                    <div className="glass-card p-5">
                        <h2 className="text-center text-white mb-4">
                        
                            User Login
                        </h2>

                      

                            <div className="mb-4">
                                <label className="form-label text-white">
                                    Username
                                </label>

                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Username"
                                    {...register("username",{required:true})} />
                                    {errors.username && <p className="text-warning">User name is required</p>}
                            
                            </div>

                            <div className="mb-4">

                                <label className="form-label text-white">
                                    Password
                                </label>

                                <div className="input-group">

                                    <input
                                        type={show ? "text" : "password"}
                                        className="form-control form-control-lg"
                                        placeholder="Enter Password"
                                        {...register("pass",{required:true,minLength:5,maxLength:10,pattern:/^[A-Z0-9a-z]+$/g})}/>
                                        

                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        onClick={() => setShow(!show)}>
                                        <i className={`bi ${show ? "bi-eye-slash" : "bi-eye"}`}></i>
                                    </button>
                                </div>
                                {errors.pass?.type==="required" && <p className='text-warning'> password is required</p>}
                                 {errors.pass?.type==="maxLength" && <p className='text-warning'> too logn</p>}
                                  {errors.pass?.type==="minLength" && <p className='text-warning'>weak password</p>}
                                   {errors.pass?.type==="pattern" && <p className='text-warning'> mismatch pattern </p>}


                            </div>

                            <div className="d-grid">

                                <button className="btn login-btn btn-lg" type='submit'>
                                    Login
                                </button>

                            </div>

                 

                    </div>

                </div>

            </div>

        </div>
        </form>

    );
}

export default Userlogin