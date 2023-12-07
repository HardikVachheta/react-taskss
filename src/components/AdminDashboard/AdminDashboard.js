import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import menuItems from '../../data/nav2.json';
// import { Nav, NavDropdown } from 'react-bootstrap';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';
import AdminNav from './AdminNav';
import { Link, useParams } from 'react-router-dom';
import { AdminNav2 } from './AdminNav2';
import { AdminSideNav } from './AdminSideNav';
import TempSideNav from './TempSideNav';

export const AdminDashboard = () => {

    var id = localStorage.getItem("userId")
    // console.log("id", id)
    return (
        <div lang="en" class="light-style layout-menu-fixed layout-compact" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="vertical-menu-template-free">
            <Helmet>
                <title> Admin Dashboard </title>
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
            </Helmet>


            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <div style={{position:'fixed'}}>
                        <AdminSideNav />
                    </div>
                    {/* <TempSideNav/> */}
                    <div className="layout-page">
                        <div className="content-wrapper">                            
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 mb-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title m-0">Users</h4>
                                                <hr />
                                            </div>
                                            <div className="card-body">
                                                <Link to='/AdminDashboard/CreateUser' className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">Create User</h5>
                                                </Link>
                                                <Link to='/AdminDashboard/ListUser' className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">List Of Users</h5>
                                                </Link>
                                                <Link to={`/AdminDashboard/UpdateUser2/${id}`} className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">My Profile</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 mb-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title m-0">Groups</h4>
                                                <hr />
                                            </div>
                                            <div className="card-body">
                                                <Link to='/AdminDashboard/CreateGroup' className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">Create New Group</h5>
                                                </Link>
                                                <Link to='/AdminDashboard/ListGroup' className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-3.5">List Of Group</h5>
                                                </Link>
                                                <div className="d-flex justify-content-start align-items-center mb-4">
                                                    {/* <h5 className="mb-0">My Profile</h5> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 mb-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title m-0">Tenants</h4>
                                                <hr />
                                            </div>
                                            <div className="card-body">
                                                <Link to='/' className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">Create User</h5>
                                                </Link>
                                                <div className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">List Of Users</h5>
                                                </div>
                                                <div className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">My Profile</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
