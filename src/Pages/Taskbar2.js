import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
import data from '../data/dumpdata.json'
import { Link } from 'react-router-dom'

export const Taskbar2 = () => {
    const [dataSource, setDataSource] = useState(Array.from({ length: 10 }))
    const [hasMore, setHasMore] = useState(true)
    var x = data.length

    console.log("x", x)
    const fetchMoreData = () => {
        if (dataSource.length < x) {
            setTimeout(() => {
                setDataSource(dataSource.concat(Array.from({ length: 5 })))
            }, 2000);
        } else {
            setHasMore(false);

        }
    }
    
    return (
<div>
        <aside id="layout-menu" class="layout-menu menu-vertical menu"
            style={{ width: "330px", backgroundColor: "rgba(255,255,255,.85)" }}>
            <Helmet>
                <title>Dashboard - Analytics | Sneat - Bootstrap 5 HTML Admin Template - Pro</title>
                <link rel="canonical" href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/" />
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />

                <link rel="stylesheet" href="../assets/vendor/css/rtl/core.css" class="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/css/theme-dark-default.css" class="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />

                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="https://a.omappapi.com/app/js/api.min.css" id="omapi-css" media="all" />

            </Helmet>
            <h4 class="fc-toolbar-title" id="fc-dom-1" style={{ marginTop: "15px" }}>
                Task List &nbsp;
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
                    Launch modal
                </button>

            </h4>
            <ul class="menu-inner py-1">
                <InfiniteScroll
                    dataLength={dataSource.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<p>Loading...</p>}
                    endMessage={<p>You are all set!</p>}
                    // height={341}
                    height={541}
                >
                    
                    {dataSource?.map((u, index) => {
                        const { task_name ,task_details ,task_time,task_id} = data[index % data.length]; // Use data from JSON

                        return (
                            <li class="menu-item bs-toast toast fade show" style={{ margin: "5px", width: "300px" }}>
                                <Link to={`/TaskbarPages/${task_id}`} style={{ color: "#697a8d" }}>
                                    <div class="toast-header">
                                        <i class="bx bx-bell me-2"></i>
                                        <div class="me-auto fw-semibold" style={{ textAlign: "start" }}>
                                            {task_name}</div>
                                        <small>{task_time}</small>
                                    </div>
                                    <div class="toast-body" style={{ textAlign: "-webkit-left" }}>
                                    {task_details}
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </InfiniteScroll>
            </ul>
        </aside>
        <div class="modal fade" id="basicModal" tabindex="-1" style={{ display: "none" }} aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col mb-3">
                            <label for="nameBasic" class="form-label">Name</label>
                            <input type="text" id="nameBasic" class="form-control" placeholder="Enter Name" />
                        </div>
                    </div>
                    <div class="row g-2">
                        <div class="col mb-0">
                            <label for="emailBasic" class="form-label">Email</label>
                            <input type="email" id="emailBasic" class="form-control" placeholder="xxxx@xxx.xx" />
                        </div>
                        <div class="col mb-0">
                            <label for="dobBasic" class="form-label">DOB</label>
                            <input type="date" id="dobBasic" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
