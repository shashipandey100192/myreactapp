import React from 'react'
import { Link } from 'react-router-dom'

function Appsidebar() {
    return (
        <div class="flex-shrink-0 p-3 fixed-top cmt" >
            <a href="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none">
                <span class="fs-5 fw-semibold">Collapsible</span> </a>
            <ul class="list-unstyled ps-0">
                <li class="mb-1"> <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                    Home
                </button> <div class="collapse" id="home-collapse">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to="main" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Dashboard</Link></li>
                            <li><Link to="users" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Employee</Link></li>
                            <li><Link to="report" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</Link></li>
                        </ul>
                    </div> </li> <li class="mb-1"> <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Dashboard
                    </button> <div class="collapse" id="dashboard-collapse"> <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small"> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li> </ul> </div> </li> <li class="mb-1"> <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                        Orders
                    </button> <div class="collapse" id="orders-collapse">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
                            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
                            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
                            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
                        </ul>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Appsidebar