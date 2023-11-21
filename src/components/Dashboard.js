import React, { useEffect, useState } from 'react'
import HelmetExport, { Helmet } from 'react-helmet'
import { Navbar } from './Navbar'
import { Taskbar2 } from './Taskbar2'
// import { Doughnut } from 'react-chartjs-2';
import { Chart } from "react-google-charts";
import axios from 'axios';
import '../data/chart.css'


export const Dashboard = () => {

    // var scroll1 =
    // {
    //     maxHeight: "92vh",
    //     overflowX: "hidden",
    //     overflowY: "auto",
    //     behavior: 'smooth',
    // }

    const [assginuser, setAssginuser] = useState('');
    const [unassginuser, setUnAssginuser] = useState('');
    const [withcandidategroups, setwithcandidategroups] = useState('');
    const [unfinishedprocessinstance, setunfinishedprocessinstance] = useState('');
    const [latestprocessdefinition, setlatestprocessdefinition] = useState('');
    const [deployments, setdeployments] = useState('');

    const getAssginuser = () => {
        axios.get("http://localhost:3000/api/taskcount/assignuser").then(res => {
            console.log("assignuser :", res.data.taskCount.count)
            setAssginuser(res.data.taskCount.count)
        })
    }

    const getUnAssginuser = () => {
        axios.get("http://localhost:3000/api/taskcount/unassignnuser").then(res => {
            console.log("unassignnuser :", res.data.unassignedTaskCount.count)
            setUnAssginuser(res.data.unassignedTaskCount.count)
        })
    }

    const getwithcandidategroups = () => {
        axios.get("http://localhost:3000/api/taskcount/withcandidategroups").then(res => {
            console.log("withcandidategroups :", res.data.taskCount.count)
            setwithcandidategroups(res.data.taskCount.count)
        })
    }
    const getunfinishedprocessinstance = () => {
        axios.get("http://localhost:3000/api/count/unfinishedprocessinstance").then(res => {
            console.log("unfinishedprocessinstance :", res.data.unfinishedProcessInstanceCount.count)
            setunfinishedprocessinstance(res.data.unfinishedProcessInstanceCount.count)
        })
    }
    const getlatestprocessdefinition = () => {
        axios.get("http://localhost:3000/api/count/latestprocessdefinition").then(res => {
            console.log("latestprocessdefinition :", res.data.processDefinitionCount.count)
            setlatestprocessdefinition(res.data.processDefinitionCount.count)
        })
    }
    const getdeployments = () => {
        axios.get("http://localhost:3000/api/count/deployments").then(res => {
            console.log("deployments :", res.data.processDefinitionCount.count)
            setdeployments(res.data.processDefinitionCount.count)
        })
    }


    const data = [
        ["Task", "Hours per Day"],
        ["Assginuser", assginuser],
        ["UnAssginuser", unassginuser],
        ["assigned to 1 or more groups", withcandidategroups],
    ];

    const options = {
        title: "Assignments by type",
        pieHole: 0.4,
        is3D: false,
    };

    const data2 = [
        ["Task", "Hours per Day"],
        ["unfinishedprocessinstance", unfinishedprocessinstance],
        ["deployments", deployments],
        ["latestprocessdefinition", latestprocessdefinition],
    ];

    const options2 = {
        title: "Assignments by type",
        pieHole: 0.4,
        is3D: false,
    };



    useEffect(() => {
        console.log("---------Dashboard Page---------")
        getAssginuser()
        getUnAssginuser()
        getwithcandidategroups()
        getunfinishedprocessinstance()
        getdeployments()
        getlatestprocessdefinition()

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
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />

                <link rel="stylesheet" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/theme-semi-dark.css" className="template-customizer-theme-css" />

                <script src="../assets/vendor/js/helpers.js"></script>
            </Helmet>
            {/* // <div lang="en" className="light-style layout-navbar-fixed layout-compact layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="vertical-menu-template"> */}
            {/* <Navbar_u /> */}

            <div className="layout-wrapper layout-content-navbar">

                <Helmet>




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
                        <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none "><a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)"><i className="bx bx-menu bx-sm"></i></a></div>
                            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                <div className="navbar-nav align-items-center">
                                    <div className="nav-item d-flex align-items-center"><i className="bx bx-search fs-4 lh-0"></i>
                                        <input type="text" className="form-control border-0 shadow-none ps-1 ps-sm-2" placeholder="Search..." aria-label="Search..." />
                                    </div>
                                </div>
                                <ul className="navbar-nav flex-row align-items-center ms-auto">
                                    <li className="nav-item lh-1 me-3"><span></span></li>
                                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                        <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <div className="avatar avatar-online"><img src="../assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" /></div>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar avatar-online">
                                                                <img src="../assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1"><span className="fw-medium d-block">John Doe</span><small className="text-muted">Admin</small></div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li><a className="dropdown-item" href="#"><i className="bx bx-user me-2"></i><span className="align-middle">My Profile</span></a></li>
                                            <li><a className="dropdown-item" href="#"><i className="bx bx-cog me-2"></i><span className="align-middle">Settings</span></a></li>
                                            <li><a className="dropdown-item" href="#"><span className="d-flex align-items-center align-middle"><i className="flex-shrink-0 bx bx-credit-card me-2"></i><span className="flex-grow-1 align-middle ms-1">Billing</span><span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span></span></a></li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li><a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-power-off me-2"></i><span className="align-middle">Log Out</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="content-wrapper" style={{overflow:"auto" , height:"420px"}} >
                            <div className="flex-grow-1 container-p-y container-fluid">
                                <div className="row">

                                    <div className="col-sm-6 col-lg-3 mb-4">
                                        <div className="card card-border-shadow-primary h-100">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-2 pb-1">
                                                    <div className="avatar me-2">
                                                        <span className="avatar-initial rounded bg-label-primary"><i className="bx bxs-truck"></i></span>
                                                    </div>
                                                    <h4 className="ms-1 mb-0">{latestprocessdefinition}</h4>
                                                    <p className="mb-0" style={{ marginLeft: "6px" }}>Process Definition</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-3 mb-4">
                                        <div className="card card-border-shadow-danger h-100">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-2 pb-1">
                                                    <div className="avatar me-2">
                                                        <span className="avatar-initial rounded bg-label-danger"><i className="bx bx-git-repo-forked"></i></span>
                                                    </div>
                                                    <h4 className="ms-1 mb-0">27</h4>
                                                    <p className="mb-0" style={{ marginLeft: "6px" }}>Decision Definitions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-4">
                                        <div className="card card-border-shadow-info h-100">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-2 pb-1">
                                                    <div className="avatar me-2">
                                                        <span className="avatar-initial rounded bg-label-info"><i className="bx bx-time-five"></i></span>
                                                    </div>
                                                    <h4 className="ms-1 mb-0">13</h4>
                                                    <p className="mb-0" style={{ marginLeft: "6px" }}>Case Definitions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-4">
                                        <div className="card card-border-shadow-warning h-100">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-2 pb-1">
                                                    <div className="avatar me-2">
                                                        <span className="avatar-initial rounded bg-label-warning"><i className="bx bx-error"></i></span>
                                                    </div>
                                                    <h4 className="ms-1 mb-0">{deployments}</h4>
                                                    {/* Deployments */}
                                                    <p className="mb-0" style={{ marginLeft: "6px" }}>Deployments</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <Chart
                                        chartType="PieChart"
                                        width="100%"
                                        height="400px"
                                        data={data}
                                        options={options}
                                    />
                                </div>
                                <div className="row">
                                    <Chart
                                        chartType="PieChart"
                                        width="100%"
                                        height="400px"
                                        data={data2}
                                        options={options2}
                                    />
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
