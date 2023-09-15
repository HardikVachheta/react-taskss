import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import data from '../data/dumpdata.json'

export const Taskbar = () => {


    var scroll1 =
    {
        maxHeight: "92vh",
        overflowX: "hidden",
        overflowY: "auto",
        behavior: 'smooth',
        // scrollbar-width: none;
        // MsOverflowStyle: 'none'
        // scrollbarWidth: 'none',
    }
    // width: "0

    const [users, setUsers] = useState()
    const getdata = () => {
        // e.stopPropagation();
        setUsers(data);
    }
    useEffect(() => {
        getdata()
    }, [])

    return (
        <>
            <aside id="layout-menu" class="layout-menu menu-vertical menu"
                style={{ width: "330px", height: "92vh", backgroundColor: "rgba(255,255,255,.85)" }}>
                {/* <Helmet>
                    <script src="../assets/vendor/js/bootstrap.js" data-react-helmet="true"></script>
                    <link rel="stylesheet" href="../assets/vendor/libs/dropzone/dropzone.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                    <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                    <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
                    <link rel="stylesheet" href="../assets_pro/vendor/css/rtl/theme-semi-dark.css" class="template-customizer-theme-css" />
                    <link rel="stylesheet" href="../assets/css/demo.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />

                </Helmet> */}

                <Helmet>

                    {/* <link rel="canonical" href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/" /> */}

                    {/* <script async="true" type="text/javascript" src="https://static.hotjar.com/c/hotjar-3067524.js?sv=7"></script> */}
                    {/* <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-5DDHKGP"></script> */}

                    <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />

                    {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
                    {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" /> */}
                    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
                        rel="stylesheet" />

                    <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                    <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                    <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />

                    <link rel="stylesheet" href="../assets/css/demo.css" />

                    <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/select2/select2.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/@form-validation/umd/styles/index.min.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/bs-stepper/bs-stepper.css" />

                    <script src="../assets/vendor/js/helpers.js"></script>

                    {/* <script src="../assets/vendor/js/template-customizer.js"></script> */}
                    {/* <script src="../assets/js/config.js"></script> */}
                    <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/core.css" class="template-customizer-core-css" />
                    <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/theme-semi-dark.css" class="template-customizer-theme-css" />
                    <script type="text/javascript" src="https://a.omappapi.com/app/js/api.min.js" async="" data-user="252882" data-account="269977"></script>
                    {/* <script async="" src="https://script.hotjar.com/modules.afe18b03a2724895a0ac.js" charset="utf-8"></script> */}
                    <link rel="stylesheet" href="https://a.omappapi.com/app/js/api.min.css" id="omapi-css" media="all" />
                    {/* </head> */}
                </Helmet>
                <h4 class="fc-toolbar-title" id="fc-dom-1" style={{ marginTop: "15px" }}>
                    Task List &nbsp;
                    {/* <button type="button" class="" style={{
                        // border: "none",
                        // background: "none"
                    }}
                        data-bs-toggle="modal" data-bs-target="#editUser">
                        +
                    </button> */}
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
                        Launch modal
                    </button>

                </h4>

                <ul class="menu-inner py-1" style={scroll1}>
                    {
                        users?.map((u) => {
                            // console.log(u)
                            return (
                                <li class="menu-item bs-toast toast fade show" role="alert" aria-live="assertive" aria-atomic="true"
                                    style={{ margin: "5px", width: "300px" }}>
                                    <Link to={`/TaskbarPages/${u.task_id}`} style={{ color: "#697a8d" }} onClick={getdata}>
                                        {/* <Link to={`/AutoPages/${u.task_id}`} style={{ color: "#697a8d" }} onClick={getdata}> */}
                                        <div class="toast-header">
                                            <i class="bx bx-bell me-2"></i>
                                            <div class="me-auto fw-semibold" style={{ textAlign: "start" }}>
                                                {u?.task_name}</div>
                                            <small>11 mins ago</small>
                                        </div>
                                        <div class="toast-body" style={{ textAlign: "-webkit-left" }}>
                                            {u?.task_details}
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
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

        </>

    )
}
