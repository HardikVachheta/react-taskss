import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { signUpSchema } from '../schemas';


const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

export const Registration = () => {

    const navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values)

            if (values.name && values.email && values.password) {

                localStorage.setItem("name", values.name)
                localStorage.setItem("email", values.email)
                localStorage.setItem("password", values.password)
                localStorage.setItem("confirm_password", values.confirm_password)

                Swal.fire({
                    title: 'Registration Successful',
                    icon: 'success',
                    timer: 1500
                });


                navigate("/login")

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
        <div className="light-style customizer-hide">

            <Helmet>
                <title>Register Page</title>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" type="text/css" href="../assets/vendor/css/theme-default.css" className="template-customizer-theme-css" />
                {/* <link rel="stylesheet" type="text/css" href="../assets_pro/vendor/css/rtl/theme-semi-dark.css" className="template-customizer-theme-css"/> */}
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/page-auth.css" />
                <link rel="stylesheet" href="../assets_pro/vendor/libs/@form-validation/umd/styles/index.min.css" />
                <script src="../assets/vendor/js/helpers.js"></script>
            </Helmet>

            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner">
                        <div className="card-md">
                            <div className="card">
                                <div className="card-body">

                                    <div className="app-brand justify-content-center">
                                        <a href="index.html" className="app-brand-link gap-2">
                                            <span className="app-brand-logo demo">

                                            </span>
                                            <span className="app-brand-text demo text-body fw-bolder">Registration Page</span>
                                        </a>
                                    </div>
                                    <h4 className="mb-2 d-flex justify-content-between">Adventure starts here 🚀</h4>
                                    <p className="mb-4 d-flex justify-content-between">Make your app management easy and fun!</p>

                                    <form className="formAuthentication" onSubmit={handleSubmit} >
                                        <div className="mb-3">
                                            <label for="name" className="form-label d-flex justify-content-between">Username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="bs-validation-name"
                                                name='name'
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Enter your username"
                                                autofocus
                                            />
                                            {errors.name && touched.name ? (
                                                <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.name}</div>
                                            ) : null}
                                        </div>

                                        <div className="mb-3">
                                            <label for="email" className="form-label d-flex justify-content-between">Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Enter your email"
                                                autofocus
                                            />
                                            {errors.email && touched.email ? (
                                                <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.email}</div>
                                            ) : null}
                                        </div>

                                        <div className="mb-3 form-password-toggle">
                                            <label className="form-label d-flex justify-content-between" for="password">Password</label>
                                            <div className="input-group input-group-merge">
                                                <input
                                                    type={passwordType}
                                                    name='password'
                                                    id="password"
                                                    className="form-control"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                    aria-describedby="password"
                                                />
                                                <span className="input-group-text cursor-pointer" onClick={togglePassword}>
                                                    {passwordType === "password" ?
                                                        <i className="bx bx-hide"></i> : <i className="bx bx-show"></i>}
                                                </span>

                                            </div>
                                            {errors.password && touched.password ? (
                                                <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.password}</div>
                                            ) : null}

                                        </div>

                                        <div className="mb-3 form-password-toggle">
                                            <label className="form-label d-flex justify-content-between" for="password">Password</label>
                                            <div className="input-group input-group-merge">
                                                <input
                                                    type={passwordType}
                                                    // id="confirm_password"
                                                    id="bs-validation-confirm_password"
                                                    className="form-control"
                                                    name='confirm_password'
                                                    value={values.confirm_password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                    aria-describedby="password"
                                                />
                                                <span className="input-group-text cursor-pointer" onClick={togglePassword}>
                                                    {passwordType === "password" ?
                                                        <i className="bx bx-hide"></i> : <i className="bx bx-show"></i>}
                                                </span>


                                            </div>
                                            {errors.confirm_password && touched.confirm_password ? (
                                                <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.confirm_password}</div>
                                            ) : null}

                                        </div>

                                        <div className="mb-3">
                                            <button className="btn btn-primary d-grid w-100">Sign up</button>
                                        </div>
                                    </form>

                                    <p className="text-center">
                                        <span>Already have an account?</span>
                                        <Link to="/login">
                                            <span>Sign in instead</span>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
