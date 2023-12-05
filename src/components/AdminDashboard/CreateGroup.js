import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createGroupSchema, createUserSchema } from '../../schemas';
import axios from 'axios';
import AdminNav from './AdminNav';
import { AdminNav2 } from './AdminNav2';
import { AdminSideNav } from './AdminSideNav';

export const CreateGroup = () => {


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

    const initialValues = {
        id: "",
        name: "",
        type: ""
    };


    const navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: createGroupSchema,
        onSubmit: (values, action) => {
            console.log("New User", values)

            if (values.id && values.name && values.type ) {

                axios.post('http://localhost:3000/api/group/create', values).then((res) => {
                    console.log("inserted data", res)
                })

                Swal.fire({
                    title: 'Create Group Successful',
                    icon: 'success',
                    timer: 1500
                });


                navigate("/AdminDashboard/CreateGroup")

            } else {
                Swal.fire({
                    title: 'Enter Data',
                    icon: 'error',
                    timer: 1500
                });
            }

            action.resetForm()
        }
    })


    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    return (
        <div lang="en" class="light-style layout-compact layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="horizontal-menu-template">
            <Helmet>
                <title> Create Group </title>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
                {/* {/ <link rel="stylesheet" href="../assets/css/demo.css" /> /} */}
                {/* {/ <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" /> /} */}
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/app-logistics-dashboard.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href='../assets/vendor/css/rtl/core.css' className="template-customizer-core-css"/>
                <link rel="stylesheet" href='../assets/vendor/css/rtl/theme-default.css' className="template-customizer-theme-css"/>
                {/* {/ <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" /> /} */}
                {/* {/ <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" /> /} */}

            </Helmet>


            <div className="layout-wrapper layout-content-navbar">
            {/* <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu"> */}
                <div className="layout-container">
                     {/* <AdminNav />  */}
                     {/* <AdminNav2 />  */}
                     <AdminSideNav/>
                    {/* <aside
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
                    </aside> */}
                    <div className="layout-page" style={{ marginTop: "60px" }}>
                        <div className="content-wrapper">
                            <h6 className='d-flex'>
                                <span class="text-muted fw-light">&emsp;&emsp; Dashboard » Groups </span>&nbsp; » Create
                            </h6>
                            <div className="container-xxl flex-grow-1">
                                <div className="row">
                                    <div className="col-xxl">
                                        <div className="card mb-4">
                                            <form className="card-body" onSubmit={handleSubmit}>
                                                <h5 className='d-flex justify-content-start align-items-center'>Create new group</h5>
                                                <div className="row mb-3">
                                                    <label className="col-sm-3 col-form-label" htmlFor="multicol-username">
                                                    Group ID*
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input
                                                            type="text"
                                                            name='id'
                                                            value={values.id}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="multicol-id" className="form-control" placeholder="john.doe" />
                                                        {errors.id && touched.id ? (
                                                            <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.id}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row mb-3 " >
                                                    <label className="col-sm-3 col-form-label" htmlFor="multicol-full-name">
                                                    Group Name*
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input type="text"
                                                            name='name'
                                                            value={values.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="multicol-first-name" className="form-control" placeholder="John Doe" />
                                                        {errors.name && touched.name ? (
                                                            <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.name}</div>
                                                        ) : null}
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label className="col-sm-3 col-form-label" htmlFor="multicol-full-name">
                                                    Group Type
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input type="text"
                                                            name='type'
                                                            value={values.type}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="multicol-last-name" className="form-control" placeholder="John Doe" />
                                                        {errors.type && touched.type ? (
                                                            <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.type}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                
                                                <div className="pt-4">
                                                    <div className="row d-flex justify-content-end">
                                                        <div className="col-sm-9">
                                                            <button type="submit" className="btn btn-primary me-sm-2 me-1">
                                                                Submit
                                                            </button>
                                                            <button type="reset" onClick={() => navigate('/AdminDashboard')} className="btn btn-label-secondary">
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
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