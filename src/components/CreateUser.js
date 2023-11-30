import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createUserSchema } from '../schemas';
import axios from 'axios';

export const CreateUser = () => {

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
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    };


    const navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: createUserSchema,
        onSubmit: (values, action) => {
            console.log("New User",values)

            if (values.firstName && values.lastName && values.email && values.password) {

                axios.post('http://localhost:3000/api/user/create',values).then((res)=> {
                    console.log("inserted data",res)
                })

                Swal.fire({
                    title: 'Create User Successful',
                    icon: 'success',
                    timer: 1500
                });


                navigate("/AdminDashboard")

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
                <title> Create User </title>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
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
                            position: "fixed",
                            userSelect: "none",
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

                    <div className="layout-page" style={{ marginTop: "60px" }}>
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">

                                <div className="row">
                                    <div className="col-xxl">
                                        <div className="card mb-4">
                                            <form className="card-body" onSubmit={handleSubmit}>
                                                <h5 className='d-flex justify-content-start align-items-center'>1. User Account</h5>
                                                <div className="row mb-3">
                                                    <label className="col-sm-3 col-form-label" htmlFor="multicol-username">
                                                        User Id
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
                                                <div className="row form-password-toggle mb-3">
                                                    <label className="col-sm-3 col-form-label" htmlFor="multicol-password">
                                                        Password
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <div className="input-group input-group-merge">
                                                            <input
                                                                type={passwordType}
                                                                name='password'
                                                                value={values.password}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                id="multicol-password" className="form-control" placeholder="············" aria-describedby="multicol-password2" />

                                                            <span className="input-group-text cursor-pointer" onClick={togglePassword}>
                                                                {passwordType === "password" ?
                                                                    <i className="bx bx-hide"></i> : <i className="bx bx-show"></i>}
                                                            </span>
                                                        </div>
                                                        {errors.password && touched.password ? (
                                                            <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.password}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row form-password-toggle">
                                                    <label className="col-sm-3 col-form-label" htmlFor="multicol-password">
                                                        Password (repeat)
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <div className="input-group input-group-merge">
                                                            <input
                                                                type={passwordType}
                                                                name='confirm_password'
                                                                value={values.confirm_password}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                id="multicol-password_confirm_password" className="form-control" placeholder="············" aria-describedby="multicol-password2" />
                                                            <span className="input-group-text cursor-pointer" onClick={togglePassword}>
                                                                {passwordType === "password" ?
                                                                    <i className="bx bx-hide"></i> : <i className="bx bx-show"></i>}
                                                            </span>
                                                        </div>
                                                        {errors.confirm_password && touched.confirm_password ? (
                                                            <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.confirm_password}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <hr className="my-4 mx-n4" />
                                                <h5 className='d-flex justify-content-start align-items-center'>2. User Profile</h5>
                                                <div className="row mb-3 " >
                                                    <label className="col-sm-3 col-form-label" htmlFor="multicol-full-name">
                                                        First Name
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input type="text"
                                                            name='firstName'
                                                            value={values.firstName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="multicol-first-name" className="form-control" placeholder="John Doe" />
                                                        {errors.firstName && touched.firstName ? (
                                                            <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.firstName}</div>
                                                        ) : null}
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label className="col-sm-3 col-form-label" htmlFor="multicol-full-name">
                                                        Last Name
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input type="text"
                                                            name='lastName'
                                                            value={values.lastName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="multicol-last-name" className="form-control" placeholder="John Doe" />
                                                        {errors.lastName && touched.lastName ? (
                                                            <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.lastName}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-sm-3 col-form-label" htmlFor="multicol-email">
                                                        Email
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <div className="input-group input-group-merge">
                                                            <input type="text"
                                                                name='email'
                                                                value={values.email}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                id="multicol-email" className="form-control" placeholder="john.doe" aria-label="john.doe" aria-describedby="multicol-email2" />

                                                            <span className="input-group-text" id="multicol-email2">
                                                                @example.com
                                                            </span>
                                                        </div>
                                                        {errors.email && touched.email ? (
                                                                <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.email}</div>
                                                            ) : null}
                                                    </div>
                                                </div>
                                                <div className="pt-4">
                                                    <div className="row d-flex justify-content-end">
                                                        <div className="col-sm-9">
                                                            <button type="submit" className="btn btn-primary me-sm-2 me-1">
                                                                Submit
                                                            </button>
                                                            <button type="reset" onClick={ () => navigate('/AdminDashboard')} className="btn btn-label-secondary">
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
