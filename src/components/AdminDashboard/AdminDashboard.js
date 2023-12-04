import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import menuItems from '../../data/nav2.json';
// import { Nav, NavDropdown } from 'react-bootstrap';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';
import AdminNav from './AdminNav';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {

    const [openMenu, setOpenMenu] = useState(null);
    const [activeMenu, setActiveMenu] = useState('dashboards');
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const handleMenuEnter = (menuId) => {
        setOpenMenu(menuId);
    };

    const handleMenuLeave = () => {
        setOpenMenu(null);
    };

    const handleMenuClick = (menuId) => {
        setActiveMenu((prevActiveMenu) => (prevActiveMenu === menuId ? null : menuId));
        // setActiveMenu(menuId);
    };

    const handleSubmenuClick = (submenuId) => {
        setActiveSubmenu(submenuId);
    };
    // console.log("menuItems",menuItems)

    return (
        <div lang="en" class="light-style layout-compact layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="horizontal-menu-template">
            <Helmet>
                <title> Admin Dashboard </title>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                {/* <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" /> */}
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/app-logistics-dashboard.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href='../assets/vendor/css/rtl/core.css' className="template-customizer-core-css"/>
                <link rel="stylesheet" href='../assets/vendor/css/rtl/theme-default.css' className="template-customizer-theme-css"/>
                {/* <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" /> */}
                {/* <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" /> */}

            </Helmet>


            <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
                <div className="layout-container">
                    {/* <AdminNav /> */}
                    <aside
                        id="layout-menu"
                        className="layout-menu-horizontal menu menu-horizontal container-fluid flex-grow-0 bg-menu-theme"
                        data-bg-class="bg-menu-theme"

                        style={{
                            touchAction: "none",
                            userSelect: "none",
                            position: "fixed",
                            WebkitUserDrag: "none",
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                        }}
                    >
                        <div className="container-xxl d-flex h-100">
                            <a href="#" className="menu-horizontal-prev d-none" />
                            <div className="menu-horizontal-wrapper">
                                <ul className="menu-inner" style={{ marginLeft: 0 }}>
                                    <li className={`menu-item ${activeMenu === 'dashboards' ? 'active' : ''} ${openMenu === 'dashboards' ? 'open' : ''}`}
                                        onMouseEnter={() => handleMenuEnter('dashboards')}
                                        onMouseLeave={handleMenuLeave}
                                        onClick={() => handleMenuClick('dashboards')}>
                                        <Link
                                            to="/AdminDashboard"
                                            className="menu-link"
                                        >
                                            <i className="menu-icon tf-icons bx bx-home-circle" />
                                            <div data-i18n="Dashboards">Dashboards</div>
                                        </Link>
                                    </li>
                                    <li className={`menu-item ${openMenu === 'layouts' ? 'open' : ''}`}
                                        onMouseEnter={() => handleMenuEnter('layouts')}
                                        onMouseLeave={handleMenuLeave}>
                                        <a
                                            href="javascript:void(0)"
                                            className="menu-link menu-toggle"
                                        >
                                            <i className="menu-icon tf-icons bx bx-layout" />
                                            <div data-i18n="Layouts">User</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <Link to="/AdminDashboard/CreateUser" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-menu" />
                                                    <div data-i18n="Without menu">User Create</div>
                                                </Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link
                                                    to="/AdminDashboard/ListUser"
                                                    className="menu-link"
                                                    target="_blank"
                                                >
                                                    <i className="menu-icon tf-icons bx bx-vertical-center" />
                                                    <div data-i18n="Vertical">User List</div>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>                                   
                                </ul>
                            </div>
                            <a href="#" className="menu-horizontal-next disabled d-none" />
                        </div>
                    </aside>

                    <div className="layout-page" style={{ marginTop: "60px" }}>
                        <div className="content-wrapper">
                            {/* <AdminNav/> */}
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
                                                <div className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">My Profile</h5>
                                                </div>
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
                                                <div className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">Create New Group</h5>
                                                </div>
                                                <div className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-3.5">List Of Group</h5>
                                                </div>
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
