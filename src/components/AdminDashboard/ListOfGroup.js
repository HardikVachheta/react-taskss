import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// import menuItems from '../data/nav2.json';
import axios from 'axios';
import AdminNav from './AdminNav';
import { AdminNav2 } from './AdminNav2';
import { AdminSideNav } from './AdminSideNav';

export const ListOfGroup = () => {

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


    const [allgroup, setAllgroup] = useState([]);

    useEffect(() => {
        getAllgroup()
    }, [])

    const getAllgroup = async () => {
        await axios.get("http://localhost:3000/api/groups/alluser").then((response) => {
            console.log("All group", response.data)
            setAllgroup(response.data)
        }).catch(error => {
            if (error.response) {
                if (error.response.status === 404) {
                    console.log('List of group :- Resource not found');
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
    console.log("allgroup", allgroup)

    const getgroupDelete = async (id) => {
        await axios.delete(`http://localhost:3000/api/deletegroup?id=${id}`).then((response) => {
            console.log("delete group", response)
            getAllgroup()
        })
        console.log("delete group id", id)
    }

    return (
        <div lang="en" className="light-style layout-compact layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="horizontal-menu-template">
            <Helmet>
                <title> List group </title>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
                {/* {/ <script src="../assets/vendor/js/helpers.js"></script> /} */}
                {/* {/ <script src="../assets/vendor/js/bootstrap.js" data-react-helmet="true"></script> /} */}
                {/* {/ <link rel="stylesheet" href="../assets/css/demo.css" /> /} */}
                {/* {/ <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" /> /} */}
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/app-logistics-dashboard.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href='../assets/vendor/css/rtl/core.css' className="template-customizer-core-css" />
                <link rel="stylesheet" href='../assets/vendor/css/rtl/theme-default.css' className="template-customizer-theme-css" />
                {/* {/ <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" /> /} */}
                {/* {/ <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" /> /} */}

            </Helmet>


            {/* <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu"> */}
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    {/* <AdminNav /> */}
                    {/* <AdminNav2 /> */}
                    <AdminSideNav/>
                    {/* <aside
                        id="layout-menu"
                        className="layout-menu-horizontal menu menu-horizontal container-fluid flex-grow-0 bg-menu-theme"
                        data-bg-class="bg-menu-theme"

                        style={{
                            touchAction: "none",
                            groupSelect: "none",
                            position: "fixed",
                            WebkitgroupDrag: "none",
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
                                            <div data-i18n="Layouts">group</div>
                                        </a>
                                        <ul className="menu-sub">
                                            <li className="menu-item">
                                                <Link to="/AdminDashboard/Creategroup" className="menu-link">
                                                    <i className="menu-icon tf-icons bx bx-menu" />
                                                    <div data-i18n="Without menu">group Create</div>
                                                </Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link
                                                    to="/AdminDashboard/Listgroup"
                                                    className="menu-link"
                                                    target="_blank"
                                                >
                                                    <i className="menu-icon tf-icons bx bx-vertical-center" />
                                                    <div data-i18n="Vertical">group List</div>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <a href="#" className="menu-horizontal-next disabled d-none" />
                        </div>
                    </aside> */}
                    <div className="layout-page" style={{ marginTop: "60px" }}>
                        <div className="content-wrapper">
                            <h6 className='d-flex'>
                                <span class="text-muted fw-light">&emsp;&emsp; Dashboard </span>&nbsp; » Groups
                            </h6>
                            <div className="container-xxl flex-grow-1">

                                <div className="card">

                                    <div className="card-header border-bottom">
                                        <span className='d-flex align-items-center justify-content-between'>
                                            <h5 className="card-title md-5">Group List</h5>
                                            <div className="dt-buttons">
                                                <Link to={'/AdminDashboard/Creategroup'} className="dt-button add-new btn btn-primary" tabIndex="0" type="button">
                                                    <span>
                                                        <i className="bx bx-plus me-0 me-sm-1"></i>
                                                        <span className="d-none d-sm-inline-block">Add New group</span>
                                                    </span>
                                                </Link>
                                            </div>

                                        </span>
                                    </div>

                                    <div className="card-datatable table-responsive">
                                        <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                            <table className="datatables-groups table border-top dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" style={{ width: 1301 }}>
                                                <thead>
                                                   
                                                    <tr>
                                                        <th className="control sorting_disabled dtr-hidden"  aria-label="" >group Id</th>

                                                        <th className="sorting d-flex justify-content-start" tabIndex={0} aria-controls="DataTables_Table_0"   aria-label="Role: activate to sort column ascending" >
                                                        &nbsp;&nbsp;&nbsp;  Name
                                                        </th>
                                                        <th className="sorting justify-content-start" tabIndex={0} aria-controls="DataTables_Table_0"   aria-label="Plan: activate to sort column ascending" >
                                                            Type
                                                        </th>
                                                        <th className="sorting_disabled"   aria-label="Actions">
                                                            Actions
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        allgroup.length !== 0 ? (
                                                            allgroup.map((u) => {
                                                                return (
                                                                    <tr className="odd" key={u.group?.id}>

                                                                        <td className="control" tabIndex={0} >{u.group?.id}</td>                                                                    <td className="sorting_1">
                                                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                                                <div className="d-flex flex-column">
                                                                                    <Link to='' className="text-body text-truncate" >
                                                                                        <span className="fw-medium">&nbsp; {u.group.name}</span>
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <span className="text-truncate d-flex align-items-center">
                                                                                <span className="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2">
                                                                                    <i className="bx bx-pie-chart-alt bx-xs" />
                                                                                </span>
                                                                                {u.group.type}
                                                                            </span>
                                                                        </td>
                                                                        {/* <td>
                                                                            <span className="fw-medium">{u.group.email}</span>
                                                                        </td> */}
                                                                        <td>
                                                                            <div className="d-inline-block text-nowrap">
                                                                                <Link to={`/AdminDashboard/UpdateGroup/${u.group.id}`} title="Edit User" style={{ color: '#697a8d' }} id="myButton">
                                                                                    <i className="bx bx-edit me-0 me-sm-1"></i>
                                                                                </Link>
                                                                                <button className="btn btn-sm btn-icon delete-record">
                                                                                    <i className="bx bx-trash" onClick={() => { getgroupDelete(u.group.id) }} />
                                                                                </button>

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

