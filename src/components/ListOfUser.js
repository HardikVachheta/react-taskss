import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import menuItems from '../data/nav2.json';
import axios from 'axios';

export const ListOfUser = () => {

    const [alluser, setAllUser] = useState([]);
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
    useEffect(() => {
        getAllUser()
    }, [])
    const getAllUser = () => {
        axios.get("http://localhost:3000/api/user/alluser").then((response) => {
            console.log("All User", response.data)
            setAllUser(response.data)
        }).catch(error => {
            if (error.response) {
                if (error.response.status === 404) {
                    console.log('List of User :- Resource not found');
                } else {
                    console.log('Server returned an error:', error.response.status);
                }
            } else if (error.request) {
                console.log('No response received from the server');
            } else {
                console.log('Error:', error.message);
            }
        });
    }
    console.log("alluser", alluser)

    const getUserDelete = (id) => {
        axios.delete(`http://localhost:3000/api/deleteuser?id=${id}`).then((response) => {
            console.log("delete user", response)
            getAllUser()
        })
        console.log("delete user id", id)
    }

    return (
        <div lang="en" class="light-style layout-compact layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="horizontal-menu-template">
            <Helmet>
                <title> Admin Dashboard </title>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
                <script src="../assets/vendor/js/helpers.js"></script>
                {/* <link rel="stylesheet" href="../assets/css/demo.css" /> */}
                {/* <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" /> */}
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/app-logistics-dashboard.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />

            </Helmet>


            <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
                <div className="layout-container">
                    {/* <AdminNav/> */}
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
                                            to='/AdminDashboard'
                                            className="menu-link menu-toggle"
                                        >
                                            <i className="menu-icon tf-icons bx bx-home-circle" />
                                            <div data-i18n="Dashboards">Dashboards</div>
                                        </Link>
                                        <ul className="menu-sub">
                                            <li className={`menu-item ${activeSubmenu === 'analytics' ? 'active' : ''}`}
                                                onClick={() => handleSubmenuClick('analytics')}>
                                                <a href="#" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-pie-chart-alt-2" />
                                                    <div data-i18n="Analytics">Analytics</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="dashboards-crm.html" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-shape-circle" />
                                                    <div data-i18n="CRM">CRM</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a
                                                    href="app-ecommerce-dashboard.html"
                                                    className="menu-link"
                                                >
                                                    <i className="menu-icon tf-icons bx bx-cart-alt" />
                                                    <div data-i18n="eCommerce">eCommerce</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a
                                                    href="app-logistics-dashboard.html"
                                                    className="menu-link"
                                                >
                                                    <i className="menu-icon tf-icons bx bx-car" />
                                                    <div data-i18n="Logistics">Logistics</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a
                                                    href="app-academy-dashboard.html"
                                                    className="menu-link"
                                                >
                                                    <i className="menu-icon tf-icons bx bx-book-open" />
                                                    <div data-i18n="Academy">Academy</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`menu-item ${openMenu === 'layouts' ? 'open' : ''}`}
                                        onMouseEnter={() => handleMenuEnter('layouts')}
                                        onMouseLeave={handleMenuLeave}>
                                        <a
                                            href="javascript:void(0)"
                                            className="menu-link menu-toggle"
                                        >
                                            <i className="menu-icon tf-icons bx bx-layout" />
                                            <div data-i18n="Layouts">Layouts</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="#" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-menu" />
                                                    <div data-i18n="Without menu">Without menu</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a
                                                    href="#"
                                                    className="menu-link"
                                                    target="_blank"
                                                >
                                                    <i className="menu-icon tf-icons bx bx-vertical-center" />
                                                    <div data-i18n="Vertical">Vertical</div>
                                                </a>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className={`menu-item ${openMenu === 'Apps' ? 'open' : ''}`}
                                        onMouseEnter={() => handleMenuEnter('Apps')}
                                        onMouseLeave={handleMenuLeave}>
                                        <a
                                            href="javascript:void(0)"
                                            className="menu-link menu-toggle"
                                        >
                                            <i className="menu-icon tf-icons bx bx-customize" />
                                            <div data-i18n="Apps">Apps</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="app-email.html" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-envelope" />
                                                    <div data-i18n="Email">Email</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="app-chat.html" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-chat" />
                                                    <div data-i18n="Chat">Chat</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="app-calendar.html" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-calendar" />
                                                    <div data-i18n="Calendar">Calendar</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="app-kanban.html" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-grid" />
                                                    <div data-i18n="Kanban">Kanban</div>
                                                </a>
                                            </li>


                                        </ul>
                                    </li>
                                    <li className={`menu-item ${openMenu === 'Pages' ? 'open' : ''}`}
                                        onMouseEnter={() => handleMenuEnter('Pages')}
                                        onMouseLeave={handleMenuLeave}>
                                        <a
                                            href="javascript:void(0)"
                                            className="menu-link menu-toggle"
                                        >
                                            <i className="menu-icon tf-icons bx bx-collection" />
                                            <div data-i18n="Pages">Pages</div>
                                        </a>
                                        <ul className="menu-sub">

                                            <li className="menu-item">
                                                <a href="pages-faq.html" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-help-circle" />
                                                    <div data-i18n="FAQ">FAQ</div>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="pages-pricing.html" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-diamond" />
                                                    <div data-i18n="Pricing">Pricing</div>
                                                </a>
                                            </li>

                                            <li className="menu-item">
                                                <a href="modal-examples.html" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-window-open" />
                                                    <div data-i18n="Modal Examples">Modal Examples</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`menu-item ${openMenu === 'Tables' ? 'open' : ''}`}
                                        onMouseEnter={() => handleMenuEnter('Tables')}
                                        onMouseLeave={handleMenuLeave}>
                                        <a
                                            href="javascript:void(0)"
                                            className="menu-link menu-toggle"
                                        >
                                            <i className="menu-icon tf-icons bx bx-grid-alt" />
                                            <div data-i18n="Tables">Tables</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <a href="tables-basic.html" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-table" />
                                                    <div data-i18n="Tables">Tables</div>
                                                </a>
                                            </li>
                                            <li
                                                className="menu-item
      "
                                            >
                                                <a
                                                    href="javascript:void(0);"
                                                    className="menu-link menu-toggle"
                                                >
                                                    <i className="menu-icon tf-icons bx bx-grid" />
                                                    <div data-i18n="Datatables">Datatables</div>
                                                </a>
                                                <ul className="menu-sub">
                                                    <li className="menu-item">
                                                        <a
                                                            href="tables-datatables-basic.html"
                                                            className="menu-link"
                                                        >
                                                            <div data-i18n="Basic">Basic</div>
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a
                                                            href="tables-datatables-advanced.html"
                                                            className="menu-link"
                                                        >
                                                            <div data-i18n="Advanced">Advanced</div>
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a
                                                            href="tables-datatables-extensions.html"
                                                            className="menu-link"
                                                        >
                                                            <div data-i18n="Extensions">Extensions</div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`menu-item ${openMenu === 'Charts' ? 'open' : ''}`}
                                        onMouseEnter={() => handleMenuEnter('Charts')}
                                        onMouseLeave={handleMenuLeave}>
                                        <a
                                            href="javascript:void(0)"
                                            className="menu-link menu-toggle"
                                        >
                                            <i className="menu-icon tf-icons bx bx-bar-chart-square" />
                                            <div data-i18n="Charts & Maps">Charts &amp; Maps</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li
                                                className="menu-item
      "
                                            >
                                                <a
                                                    href="javascript:void(0);"
                                                    className="menu-link menu-toggle"
                                                >
                                                    <i className="menu-icon tf-icons bx bx-chart" />
                                                    <div data-i18n="Charts">Charts</div>
                                                </a>
                                                <ul className="menu-sub">
                                                    <li className="menu-item">
                                                        <a href="charts-apex.html" className="menu-link">
                                                            <div data-i18n="Apex Charts">Apex Charts</div>
                                                        </a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="charts-chartjs.html" className="menu-link">
                                                            <div data-i18n="ChartJS">ChartJS</div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item">
                                                <a href="maps-leaflet.html" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-map-alt" />
                                                    <div data-i18n="Leaflet Maps">Leaflet Maps</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                            <a href="#" className="menu-horizontal-next disabled d-none" />
                        </div>
                    </aside>
                    {/* <aside id="layout-menu"
                        className="layout-menu-horizontal menu menu-horizontal container-fluid flex-grow-0 bg-menu-theme"
                        data-bg-class="bg-menu-theme"
                        style={{
                            touchAction: "none",
                            userSelect: "none",
                            WebkitUserDrag: "none",
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                        }}>
                        <ul className="menu-inner" style={{ marginLeft: 0 }}>
                            {menuItems?.menu.map((menuItem) => (
                                <li
                                    key={menuItem.id}
                                    className={`menu-item ${activeMenu === menuItem.id ? 'active' : ''} ${openMenu === menuItem.id ? 'open' : ''}`}
                                    onMouseEnter={() => handleMenuEnter(menuItem.id)}
                                    onMouseLeave={handleMenuLeave}
                                    onClick={() => handleMenuClick(menuItem.id)}
                                >
                                    <a href="javascript:void(0)" className="menu-link menu-toggle">
                                        <i className={`menu-icon ${menuItem.icon}`} />
                                        <div>{menuItem.label}</div>
                                    </a>
                                    <ul className="menu-sub">
                                        {menuItem?.submenu.map((subMenuItem) => (
                                            <li
                                                key={subMenuItem.id}
                                                className={`menu-item ${activeSubmenu === subMenuItem.id ? 'active' : ''}`}
                                                onClick={() => handleSubmenuClick(subMenuItem.id)}
                                            >
                                                <a href={subMenuItem.link} className="menu-link">
                                                    <i className={`menu-icon ${subMenuItem.icon}`} />
                                                    <div>{subMenuItem.label}</div>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </aside> */}
                    <div className="layout-page" style={{ marginTop: "60px" }}>
                        <div className="content-wrapper">
                            {/* <AdminNav/> */}
                            <div className="container-xxl flex-grow-1 container-p-y">

                                <div class="card">
                                    <div class="card-header border-bottom">
                                        <span className='d-flex align-items-center justify-content-between'>
                                            <h5 class="card-title md-5">Search Filter</h5>
                                            <div class="">
                                                {/* <div class="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0"> */}
                                                <div>
                                                    <div class="dt-buttons">
                                                        <button class="dt-button add-new btn btn-primary" tabindex="0" aria-controls="DataTables_Table_0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddUser">
                                                            <span>
                                                                <i class="bx bx-plus me-0 me-sm-1"></i>
                                                                <span class="d-none d-sm-inline-block">Add New User</span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>

                                    <div class="card-datatable table-responsive">

                                        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">
                                            {/* <div class="row mx-2" style={{marginLeft:"80px"}}>
                                                
                                            </div> */}
                                            <table
                                                className="datatables-users table border-top dataTable no-footer dtr-column"
                                                id="DataTables_Table_0"
                                                aria-describedby="DataTables_Table_0_info"
                                                style={{ width: 1301 }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <th className="control sorting_disabled dtr-hidden" rowSpan={1} colSpan={1} style={{ width: 50 }} aria-label="" >User id</th>

                                                        <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{ width: 162 }} aria-label="Role: activate to sort column ascending" >
                                                            First Name
                                                        </th>
                                                        <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{ width: 108 }} aria-label="Plan: activate to sort column ascending" >
                                                            Last Name
                                                        </th>
                                                        <th className="sorting sorting_desc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{ width: 327 }} aria-label="User: activate to sort column ascending" aria-sort="descending" >
                                                            Email
                                                        </th>
                                                        <th
                                                            className="sorting_disabled"
                                                            rowSpan={1}
                                                            colSpan={1}
                                                            style={{ width: 133 }}
                                                            aria-label="Actions"
                                                        >
                                                            Actions
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        alluser.length != 0 ? (
                                                            alluser.map((u) => {
                                                                return (
                                                                    <tr className="odd">
                                                                        <td className="  control" tabIndex={0} >{u.user?.id}</td>                                                                    <td className="sorting_1">
                                                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                                                <div className="d-flex flex-column">
                                                                                    <a
                                                                                        href="app-user-view-account.html"
                                                                                        className="text-body text-truncate"
                                                                                    >
                                                                                        <span className="fw-medium">{u.user.firstName}</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <span className="text-truncate d-flex align-items-center">
                                                                                <span className="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2">
                                                                                    <i className="bx bx-pie-chart-alt bx-xs" />
                                                                                </span>
                                                                                {u.user.lastName}
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <span className="fw-medium">{u.user.email}</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-inline-block text-nowrap">
                                                                                <button className="btn btn-sm btn-icon" data-bs-toggle="modal" data-bs-target="#basicModal" title="Add Task" style={{ color: 'black' }}
                                                                                    id="myButton">
                                                                                    <i className="bx bx-edit" />
                                                                                </button>
                                                                                <button className="btn btn-sm btn-icon delete-record">
                                                                                    <i className="bx bx-trash" onClick={() => { getUserDelete(u.user.id) }} />
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                                                                                    data-bs-toggle="dropdown"
                                                                                >
                                                                                    <i className="bx bx-dots-vertical-rounded me-2" />
                                                                                </button>
                                                                                <div className="dropdown-menu dropdown-menu-end m-0">
                                                                                    <a href="app-user-view-account.html" className="dropdown-item">
                                                                                        View
                                                                                    </a>
                                                                                    <a href="javascript:;" className="dropdown-item">
                                                                                        Suspend
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        ) : (
                                                            <tr className="odd">
                                                                <td colSpan="5" className="text-center">
                                                                    <h5 className="card-title">No Data</h5>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                            <div className="modal fade" id="basicModal" tabIndex="-1" style={{ display: "none" }} aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel1">Modal title</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className="col mb-3">
                                                                    <label htmlFor="nameBasic" className="form-label">Name</label>
                                                                    <input type="text" id="nameBasic" className="form-control" placeholder="Enter Name" />
                                                                </div>
                                                            </div>
                                                            <div className="row g-2">
                                                                <div className="col mb-0">
                                                                    <label htmlFor="emailBasic" className="form-label">Email</label>
                                                                    <input type="email" id="emailBasic" className="form-control" placeholder="xxxx@xxx.xx" />
                                                                </div>
                                                                <div className="col mb-0">
                                                                    <label htmlFor="dobBasic" className="form-label">DOB</label>
                                                                    <input type="date" id="dobBasic" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary">Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div
                                        className="offcanvas offcanvas-end"
                                        tabIndex={-1}
                                        id="offcanvasAddUser"
                                        aria-labelledby="offcanvasAddUserLabel"
                                    >
                                        <div className="offcanvas-header">
                                            <h5 id="offcanvasAddUserLabel" className="offcanvas-title">
                                                Add User
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close text-reset"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="offcanvas-body mx-0 flex-grow-0">
                                            <form
                                                className="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework"
                                                id="addNewUserForm"
                                                onsubmit="return false"
                                                noValidate="novalidate"
                                            >
                                                <div className="mb-3 fv-plugins-icon-container">
                                                    <label className="form-label" htmlFor="add-user-fullname">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="add-user-fullname"
                                                        placeholder="John Doe"
                                                        name="userFullname"
                                                        aria-label="John Doe"
                                                    />
                                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                                </div>
                                                <div className="mb-3 fv-plugins-icon-container">
                                                    <label className="form-label" htmlFor="add-user-email">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="add-user-email"
                                                        className="form-control"
                                                        placeholder="john.doe@example.com"
                                                        aria-label="john.doe@example.com"
                                                        name="userEmail"
                                                    />
                                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="add-user-contact">
                                                        Contact
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="add-user-contact"
                                                        className="form-control phone-mask"
                                                        placeholder="+1 (609) 988-44-11"
                                                        aria-label="john.doe@example.com"
                                                        name="userContact"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="add-user-company">
                                                        Company
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="add-user-company"
                                                        className="form-control"
                                                        placeholder="Web Developer"
                                                        aria-label="jdoe1"
                                                        name="companyName"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="country">
                                                        Country
                                                    </label>
                                                    <div className="position-relative">
                                                        <select
                                                            id="country"
                                                            className="select2 form-select select2-hidden-accessible"
                                                            data-select2-id="country"
                                                            tabIndex={-1}
                                                            aria-hidden="true"
                                                        >
                                                            <option value="" data-select2-id={2}>
                                                                Select
                                                            </option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Bangladesh">Bangladesh</option>
                                                            <option value="Belarus">Belarus</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="China">China</option>
                                                            <option value="France">France</option>
                                                            <option value="Germany">Germany</option>
                                                            <option value="India">India</option>
                                                            <option value="Indonesia">Indonesia</option>
                                                            <option value="Israel">Israel</option>
                                                            <option value="Italy">Italy</option>
                                                            <option value="Japan">Japan</option>
                                                            <option value="Korea">Korea, Republic of</option>
                                                            <option value="Mexico">Mexico</option>
                                                            <option value="Philippines">Philippines</option>
                                                            <option value="Russia">Russian Federation</option>
                                                            <option value="South Africa">South Africa</option>
                                                            <option value="Thailand">Thailand</option>
                                                            <option value="Turkey">Turkey</option>
                                                            <option value="Ukraine">Ukraine</option>
                                                            <option value="United Arab Emirates">United Arab Emirates</option>
                                                            <option value="United Kingdom">United Kingdom</option>
                                                            <option value="United States">United States</option>
                                                        </select>
                                                        <span
                                                            className="select2 select2-container select2-container--default"
                                                            dir="ltr"
                                                            data-select2-id={1}
                                                            style={{ width: 335 }}
                                                        >
                                                            <span className="selection">
                                                                <span
                                                                    className="select2-selection select2-selection--single"
                                                                    role="combobox"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                    tabIndex={0}
                                                                    aria-disabled="false"
                                                                    aria-labelledby="select2-country-container"
                                                                >
                                                                    <span
                                                                        className="select2-selection__rendered"
                                                                        id="select2-country-container"
                                                                        role="textbox"
                                                                        aria-readonly="true"
                                                                    >
                                                                        <span className="select2-selection__placeholder">
                                                                            Select Country
                                                                        </span>
                                                                    </span>
                                                                    <span className="select2-selection__arrow" role="presentation">
                                                                        <b role="presentation" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span className="dropdown-wrapper" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="user-role">
                                                        User Role
                                                    </label>
                                                    <select id="user-role" className="form-select">
                                                        <option value="subscriber">Subscriber</option>
                                                        <option value="editor">Editor</option>
                                                        <option value="maintainer">Maintainer</option>
                                                        <option value="author">Author</option>
                                                        <option value="admin">Admin</option>
                                                    </select>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label" htmlFor="user-plan">
                                                        Select Plan
                                                    </label>
                                                    <select id="user-plan" className="form-select">
                                                        <option value="basic">Basic</option>
                                                        <option value="enterprise">Enterprise</option>
                                                        <option value="company">Company</option>
                                                        <option value="team">Team</option>
                                                    </select>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary me-sm-3 me-1 data-submit"
                                                >
                                                    Submit
                                                </button>
                                                <button
                                                    type="reset"
                                                    className="btn btn-label-secondary"
                                                    data-bs-dismiss="offcanvas"
                                                >
                                                    Cancel
                                                </button>
                                                <input type="hidden" />
                                            </form>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
