import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

function Applogin() {
    const mynav = useNavigate();

    // let a = "username";
    // let pass = "password";

    // const changefun = ()=>{
    //     alert("welcome");
    //     pass="text";
    //     a="enter user";
    // }

    const [a,b]=useState("usernameghjghjghjghj");
    const [x,y]=useState("password");
    const [abcd,updateabcd]=useState("none");
    const [bg,updatebg]=useState("lightgray");

    const changefun = ()=>{
       if(a==="app@gmail.com" && x==="1234")
       {
            toast.success("welcome to applist page",{autoClose:1000,theme:'dark'});
            setTimeout(()=>{
                mynav("/applist");
            },1000);

       }
    }

    const xyz = ()=>{
       if(abcd==="none")
       {
         updateabcd("block");
         updatebg("red");
       }
       else
       {
         updateabcd("none");
        updatebg("lightgray");
        }
    }
    const updateuser = (e)=>{
        b(e.target.value);
    }

    const passupdate = (p)=>{
        y(p.target.value);
    }



    



    return (
        <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center">
            <div
                className="card shadow-lg p-4"
                style={{ width: "400px", borderRadius: "15px",backgroundColor:bg }} >
                <h2 className="text-center mb-4">App Login</h2>
                <ToastContainer/>
                <div className="mb-3">
                    <label className="form-label">
                        Username
                    </label>

                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter Username"
                        value={a}
                        onInput={updateuser}
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label">
                        Password
                    </label>

                    <input
                        type={x}
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={x}
                        style={{display:abcd}}
                        onInput={passupdate}
                    
                    />
                </div>

                <div className="d-grid">
                    <button
                        type="button"
                        className="btn btn-primary btn-lg" onClick={changefun}>
                        Login
                    </button>
                    <input type="button" value="show/hide" className='btn btn-success' onClick={xyz}/>
                </div>
            </div>
        </div>
    );
}

export default Applogin