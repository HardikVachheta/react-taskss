import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createUserSchema } from '../../schemas';
import axios from 'axios';
import AdminNav from './AdminNav';
import { AdminNav2 } from './AdminNav2';

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
            console.log("New User", values)

            if (values.firstName && values.lastName && values.email && values.password) {

                axios.post('http://localhost:3000/api/user/create', values).then((res) => {
                    console.log("inserted data", res)
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
                <link rel="stylesheet" href='../assets/vendor/css/rtl/core.css' className="template-customizer-core-css"/>
                <link rel="stylesheet" href='../assets/vendor/css/rtl/theme-default.css' className="template-customizer-theme-css"/>
                {/* <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" /> */}
                {/* <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" /> */}

            </Helmet>


            <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
                <div className="layout-container">
                    {/* <AdminNav /> */}
                    <AdminNav2/>
                    <div className="layout-page" style={{ marginTop: "60px" }}>
                        <div className="content-wrapper">
                            <h6 className='d-flex'>
                                <span class="text-muted fw-light">&emsp;&emsp; Dashboard » Users </span>&nbsp; » Create
                            </h6>
                            <div className="container-xxl flex-grow-1">
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
