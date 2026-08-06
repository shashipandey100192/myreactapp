import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const {id} = useParams()

const [user, sf] = useState({})

    const myapi = () => {
        fetch(`https://dummyjson.com/users/${id}`).then((r) => {
            return r.json();
        }).then((d) => {
            console.log(d);
            sf(d);
        })
    }

    useEffect(() => {
        myapi();
    }, []);



  return (
     <div className="container py-4">

            <div className="card shadow-lg border-0">

                <div className="card-header bg-primary text-white text-center">
                    <h2>User Details Page {user.id}</h2>
                </div>

                <div className="card-body">

                    <div className="row">

                        {/* Left Side */}

                        <div className="col-md-6 mb-4">

                            <div className="card h-100 shadow-sm">

                                <div className="card-header bg-secondary text-white">
                                    Company Details
                                </div>

                                <div className="card-body">

                                    <table className="table table-bordered">

                                        <tbody>

                                            <tr>
                                                <th>Company</th>
                                                <td>{user.company?.name}</td>
                                            </tr>

                                            <tr>
                                                <th>Department</th>
                                                <td>{user.company?.department}</td>
                                            </tr>

                                            <tr>
                                                <th>Designation</th>
                                                <td>{user.company?.title}</td>
                                            </tr>

                                            <tr>
                                                <th>Address</th>
                                                <td>
                                                    {user.company?.address?.address},
                                                    {" "}
                                                    {user.company?.address?.city},
                                                    {" "}
                                                    {user.company?.address?.state}
                                                </td>
                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                        {/* Right Side */}

                        <div className="col-md-6 mb-4">

                            <div className="card h-100 shadow-sm">

                                <div className="card-header bg-success text-white">
                                    Bank Details
                                </div>

                                <div className="card-body">

                                    <table className="table table-bordered">

                                        <tbody>

                                            <tr>
                                                <th>Card Number</th>
                                                <td>{user.bank?.cardNumber}</td>
                                            </tr>

                                            <tr>
                                                <th>Card Type</th>
                                                <td>{user.bank?.cardType}</td>
                                            </tr>

                                            <tr>
                                                <th>Card Expire</th>
                                                <td>{user.bank?.cardExpire}</td>
                                            </tr>

                                            <tr>
                                                <th>Currency</th>
                                                <td>{user.bank?.currency}</td>
                                            </tr>

                                            <tr>
                                                <th>IBAN</th>
                                                <td>{user.bank?.iban}</td>
                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
  )
}

export default UserDetails