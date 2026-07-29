import React,{useState} from 'react'

function Userlogin() {

    const [show, setShow] = useState(false);

    return (

        <div className="container-fluid login-bg">

            <div className="row vh-100 justify-content-center align-items-center">

                <div className="col-12">

                    <div className="glass-card p-5">

                        <h2 className="text-center text-white mb-4">
                            User Login
                        </h2>

                        <form>

                            <div className="mb-4">
                                <label className="form-label text-white">
                                    Username
                                </label>

                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Username"
                                />
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
                                    />

                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        onClick={() => setShow(!show)}
                                    >
                                        <i className={`bi ${show ? "bi-eye-slash" : "bi-eye"}`}></i>
                                    </button>

                                </div>

                            </div>

                            <div className="d-grid">

                                <button className="btn login-btn btn-lg">
                                    Login
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Userlogin