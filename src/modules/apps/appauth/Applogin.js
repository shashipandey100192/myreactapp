import React,{useState} from 'react'

function Applogin() {

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
        b("ooooooooooooooo");
        y("text");
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




    



    return (
        <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center">
            <div
                className="card shadow-lg p-4"
                style={{ width: "400px", borderRadius: "15px",backgroundColor:bg }} >
                <h2 className="text-center mb-4">App Login</h2>
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
                        value={a}
                        style={{display:abcd}}
                    
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