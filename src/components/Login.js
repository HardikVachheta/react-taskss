import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { loginSchema } from '../schemas'
import { ToastContainer, toast } from 'react-toastify';
import Confetti from 'confetti-react';
import axios from 'axios';



const initialValues = {
    username: "",
    password: "",
};

export const Login = () => {

    // const { dispatch } = useAuth();
    const navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values) => {

            console.log("Login Data",values)

            axios.post('http://localhost:3000/api/login', values).then((res) => {
                console.log(res)
                if (res.data.authenticated === true) {
                    localStorage.setItem("userId", res.data.authenticatedUser)
                    localStorage.setItem("authenticated", res.data.authenticated)
                    Swal.fire({
                        title: 'Login Successful',
                        icon: 'success',
                        timer: 1500
                    });
                    navigate("/dashboard")
                }
                else {
                    toast.error('Wrong credentials!!!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch((errors) => {
                console.log("Error in feching data")
                toast.error('Error in feching data', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })  

            // const email = localStorage.getItem("email")
            // const password = localStorage.getItem("password")

            // if (values.email === email && values.password === password) {

            //     // alert("enter you are")
            //     Swal.fire({
            //         title: 'Login Successful',
            //         icon: 'success',
            //         timer: 1500
            //     });
            //     navigate("/dashboard")

            // } else if (values.email !== email && values.password !== password) {

            //     toast.error('Email and Password are Wrong', {
            //         position: "top-right",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         theme: "light",
            //     });

            // } else if (values.password !== password) {

            //     // alert("wrong password")
            //     toast.error('Wrong password', {
            //         position: "top-right",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         theme: "light",
            //     })

            // } else {
            //     toast.error('Wrong email', {
            //         position: "top-right",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         theme: "light",
            //     })
            //     // alert("wrong email")
            // }

            // action.resetForm()
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
    const startit = () => {
        setTimeout(() => {
            <Confetti width='950' height='820' />
            // Confetti.start();
        }, 2000);
    }



    // const submit = (data) => {


    //     console.log(data)


    //     const email = localStorage.getItem("email");
    //     const password = localStorage.getItem("password");

    //     if (data.email === email && data.password === password) {

    //         Swal.fire({
    //             title: 'Login Successful',
    //             icon: 'success',
    //             // showConfirmButton: false,
    //             timer: 1500
    //         });
    //         navigate("/dashboard")

    //     }
    //     else if (data.email != email && data.password != password) {

    //         // alert("wrong password and wrong email")
    //         toast.error('wrong email and wrong password', {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "dark",
    //         });

    //     }
    //     else if (data.password != password) {

    //         // alert("wrong password")
    //         toast.error('Wrong password', {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });

    //     }
    //     else {

    //         alert("wrong email")
    //     }

    // }


    return (

        <div className="light-style customizer-hide">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            {/* <ToastContainer /> */}
            <Helmet>
                <title>Login Basic</title>
                <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
                <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
                <link rel="canonical" href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/" />
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" className="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />

                <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/page-auth.css" />

            </Helmet>
            <div className="container-xxl">

                <div className="authentication-wrapper authentication-basic container-p-y">

                    <div className="authentication-inner">
                        {/* <!-- Register --> */}
                        <div className="card">
                            <div className="card-body">
                                <div className="justify-content-center">
                                    <Link to="#" className="app-brand-link">

                                        <span className="justify-content-center">&emsp;&emsp;&emsp;&emsp;&emsp;
                                            {/* <img src='assetsdoc/img/brand/brand-logo-02.png' /> */}
                                        </span>

                                    </Link>
                                </div>

                                <div className="app-brand justify-content-center">
                                    <span className="app-brand-text demo text-body fw-bolder">Login Page</span>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <p className="mb-4">Please sign-in to your account</p></div>

                                <form
                                    id="formAuthentication"
                                    className="mb-3"
                                    onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <div className="d-flex justify-content-between">
                                            <label for="username" className="form-label">Email or Username</label></div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            name='username'
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            // {...register("email")}
                                            placeholder="Enter your email or username"
                                            autofocus="" />
                                        {errors.username && touched.username ? (
                                            <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.username}</div>
                                        ) : null}
                                    </div>
                                    <div className="mb-3 form-password-toggle">
                                        <div className="d-flex justify-content-between">
                                            <label className="form-label" for="password">Password</label>
                                            {/* <Link to="/forgot">
                                                <small>Forgot Password?</small>
                                            </Link> */}
                                        </div>
                                        <div className="input-group input-group-merge">
                                            <input
                                                id="password"
                                                type={passwordType}
                                                name='password'
                                                className="form-control"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="············"
                                                aria-describedby="password" />
                                            <span className="input-group-text cursor-pointer" onClick={togglePassword}>
                                                {passwordType === "password" ?
                                                    <i className="bx bx-hide"></i> : <i className="bx bx-show"></i>}
                                            </span>
                                        </div>
                                        {errors.password && touched.password ? (
                                            <div className="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.password}</div>
                                        ) : null}
                                    </div>

                                    <div className="mb-3">
                                        <button className="btn btn-primary d-grid w-100" type="submit" onClick={startit}>Sign in</button>
                                    </div>
                                </form>

                                <p className="text-center">
                                    <span>New on our platform?</span>
                                    <Link to="/">
                                        <span> Create an account</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
