import React, { useEffect, useState } from 'react'
import HelmetExport, { Helmet } from 'react-helmet'
import { Navbar } from './Navbar'
import { Taskbar2 } from './Taskbar2'

export const Dashboard = () => {

    // var scroll1 =
    // {
    //     maxHeight: "92vh",
    //     overflowX: "hidden",
    //     overflowY: "auto",
    //     behavior: 'smooth',
    // }
    useEffect(() => {
        console.log("---------Dashboard Page---------")
    }, [])
    return (
        <div>
            <Helmet>
                <title>Dashboard </title>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/app-logistics-dashboard.css" />

                <script src="../assets/vendor/js/helpers.js"></script>
                {/* <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/core.css" class="template-customizer-core-css" /> */}
                {/* <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/theme-semi-dark.css" class="template-customizer-theme-css" /> */}

                <script type="text/javascript" src="https://a.omappapi.com/app/js/api.min.js" async="" data-user="252882" data-account="269977"></script>                
                <link rel="stylesheet" href="https://a.omappapi.com/app/js/api.min.css" id="omapi-css" media="all" />
                <link rel="stylesheet" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/pages/app-logistics-dashboard.css" />
            </Helmet>
            {/* // <div lang="en" class="light-style layout-navbar-fixed layout-compact layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="vertical-menu-template"> */}
            {/* <Navbar_u /> */}

            <div className="layout-wrapper layout-content-navbar">

                <Helmet>
                    <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                    
                    <link rel="stylesheet" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/theme-semi-dark.css" className="template-customizer-theme-css" />
                    
                    
                    

                </Helmet>
                <div className="layout-container">
                    <Navbar />
                    {/* <Taskbar /> */}
                    {/* <Taskbar2 /> */}

                    {/* <aside id="layout-menu" className="layout-menu menu-vertical menu"
                        style={{ width: "330px", backgroundColor: "rgba(255,255,255,.85)" }}>



                        <div style={{ outlineStyle: "solid", padding: "15px", borderRadius: "0.375rem", marginTop: "27px", marginLeft: "30px", marginRight: "30px", color: "#32333754" }} >
                            <div className="me-3" style={{
                                position: "relative",
                                display: "flex",
                                flexWrap: "wrap",
                                color: "#697a8de0",
                                padding: "9px"
                            }}>
                                <i className='bx bxs-info-circle'></i>
                                <div className="text-body" style={{ marginLeft: "10px" }}>
                                    Select a task in the list.
                                </div>
                            </div>
                        </div>

                    </aside> */}
                    <div className="layout-page" >
                        <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                            <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none "><a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)"><i class="bx bx-menu bx-sm"></i></a></div>
                            <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                <div class="navbar-nav align-items-center">
                                    <div class="nav-item d-flex align-items-center"><i class="bx bx-search fs-4 lh-0"></i>
                                        <input type="text" class="form-control border-0 shadow-none ps-1 ps-sm-2" placeholder="Search..." aria-label="Search..." />
                                    </div>
                                </div>
                                <ul class="navbar-nav flex-row align-items-center ms-auto">
                                    <li class="nav-item lh-1 me-3"><span></span></li>
                                    <li class="nav-item navbar-dropdown dropdown-user dropdown">
                                        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <div class="avatar avatar-online"><img src="../assets/img/avatars/1.png" alt="" class="w-px-40 h-auto rounded-circle" /></div>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0 me-3">
                                                            <div class="avatar avatar-online">
                                                                <img src="../assets/img/avatars/1.png" alt="" class="w-px-40 h-auto rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1"><span class="fw-medium d-block">John Doe</span><small class="text-muted">Admin</small></div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div class="dropdown-divider"></div>
                                            </li>
                                            <li><a class="dropdown-item" href="#"><i class="bx bx-user me-2"></i><span class="align-middle">My Profile</span></a></li>
                                            <li><a class="dropdown-item" href="#"><i class="bx bx-cog me-2"></i><span class="align-middle">Settings</span></a></li>
                                            <li><a class="dropdown-item" href="#"><span class="d-flex align-items-center align-middle"><i class="flex-shrink-0 bx bx-credit-card me-2"></i><span class="flex-grow-1 align-middle ms-1">Billing</span><span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span></span></a></li>
                                            <li>
                                                <div class="dropdown-divider"></div>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-power-off me-2"></i><span class="align-middle">Log Out</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div class="content-wrapper">
                            <div class="flex-grow-1 container-p-y container-fluid">
                                <div class="row">
                                    <div class="col-sm-6 col-lg-3 mb-4">
                                        <div class="card card-border-shadow-primary h-100">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center mb-2 pb-1">
                                                    <div class="avatar me-2">
                                                        <span class="avatar-initial rounded bg-label-primary"><i class="bx bxs-truck"></i></span>
                                                    </div>
                                                    <h4 class="ms-1 mb-0">42</h4>
                                                </div>
                                                <p class="mb-1">On route vehicles</p>
                                                <p class="mb-0">
                                                    <span class="fw-medium me-1">+18.2%</span>
                                                    <small class="text-muted">than last week</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 mb-4">
                                        <div class="card card-border-shadow-warning h-100">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center mb-2 pb-1">
                                                    <div class="avatar me-2">
                                                        <span class="avatar-initial rounded bg-label-warning"><i class="bx bx-error"></i></span>
                                                    </div>
                                                    <h4 class="ms-1 mb-0">8</h4>
                                                </div>
                                                <p class="mb-1">Vehicles with errors</p>
                                                <p class="mb-0">
                                                    <span class="fw-medium me-1">-8.7%</span>
                                                    <small class="text-muted">than last week</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 mb-4">
                                        <div class="card card-border-shadow-danger h-100">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center mb-2 pb-1">
                                                    <div class="avatar me-2">
                                                        <span class="avatar-initial rounded bg-label-danger"><i class="bx bx-git-repo-forked"></i></span>
                                                    </div>
                                                    <h4 class="ms-1 mb-0">27</h4>
                                                </div>
                                                <p class="mb-1">Deviated from route</p>
                                                <p class="mb-0">
                                                    <span class="fw-medium me-1">+4.3%</span>
                                                    <small class="text-muted">than last week</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 mb-4">
                                        <div class="card card-border-shadow-info h-100">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center mb-2 pb-1">
                                                    <div class="avatar me-2">
                                                        <span class="avatar-initial rounded bg-label-info"><i class="bx bx-time-five"></i></span>
                                                    </div>
                                                    <h4 class="ms-1 mb-0">13</h4>
                                                </div>
                                                <p class="mb-1">Late vehicles</p>
                                                <p class="mb-0">
                                                    <span class="fw-medium me-1">-2.5%</span>
                                                    <small class="text-muted">than last week</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">                            
                                <div style={{ outlineStyle: "solid", padding: "25px", borderRadius: "0.375rem", color: "#32333754" }} >
                                    <div className="me-3" style={{
                                        position: "relative",
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "stretch",
                                        width: "100%",
                                        color: "#697a8de0"
                                    }}>
                                        <i className='bx bxs-info-circle'></i>
                                        <div className="text-body" style={{ marginLeft: "10px" }}>
                                            Select a task in the list.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
