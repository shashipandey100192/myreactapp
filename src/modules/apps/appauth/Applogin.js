import React from 'react'

function Applogin() {


    return (
        <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center">
            <div
                className="card shadow-lg p-4"
                style={{ width: "400px", borderRadius: "15px" }} >
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
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label">
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                    
                    />
                </div>

                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Applogin