import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
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

    const navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values) => {

            console.log(values)

            axios.post('http://localhost:3000/api/login', values).then((res) => {
                console.log(res)
                localStorage.setItem("userId",res.data.authenticatedUser)
                Swal.fire({
                    title: 'Login Successful',
                    icon: 'success',
                    timer: 1500
                });
                navigate("/dashboard")
            }).catch((errors) => {
                console.log("error in feching data")
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

        <div class="light-style customizer-hide">
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
                <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />

                <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/theme-default.css" class="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/page-auth.css" />

            </Helmet>
            <div class="container-xxl">

                <div class="authentication-wrapper authentication-basic container-p-y">

                    <div class="authentication-inner">
                        {/* <!-- Register --> */}
                        <div class="card">
                            <div class="card-body">
                                <div class="justify-content-center">
                                    <Link to="#" class="app-brand-link">

                                        <span class="justify-content-center">&emsp;&emsp;&emsp;&emsp;&emsp;
                                            {/* <img src='assetsdoc/img/brand/brand-logo-02.png' /> */}
                                        </span>

                                    </Link>
                                </div>

                                <div class="app-brand justify-content-center">
                                    <span class="app-brand-text demo text-body fw-bolder">Login Page</span>
                                </div>

                                <div class="d-flex justify-content-between">
                                    <p class="mb-4">Please sign-in to your account</p></div>

                                <form
                                    id="formAuthentication"
                                    class="mb-3"
                                    onSubmit={handleSubmit}>
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between">
                                            <label for="username" class="form-label">Email or Username</label></div>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="username"
                                            name='username'
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            // {...register("email")}
                                            placeholder="Enter your email or username"
                                            autofocus="" />
                                        {errors.username && touched.username ? (
                                            <div class="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.username}</div>
                                        ) : null}
                                    </div>
                                    <div class="mb-3 form-password-toggle">
                                        <div class="d-flex justify-content-between">
                                            <label class="form-label" for="password">Password</label>
                                            <Link to="/forgot">
                                                <small>Forgot Password?</small>
                                            </Link>
                                        </div>
                                        <div class="input-group input-group-merge">
                                            <input
                                                id="password"
                                                type={passwordType}
                                                name='password'
                                                class="form-control"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="············"
                                                aria-describedby="password" />
                                            <span class="input-group-text cursor-pointer" onClick={togglePassword}>
                                                {passwordType === "password" ?
                                                    <i className="bx bx-hide"></i> : <i className="bx bx-show"></i>}
                                            </span>
                                        </div>
                                        {errors.password && touched.password ? (
                                            <div class="form-error d-flex justify-content-between" style={{ color: "red" }}>{errors.password}</div>
                                        ) : null}
                                    </div>

                                    <div class="mb-3">
                                        <button class="btn btn-primary d-grid w-100" type="submit" onClick={startit}>Sign in</button>
                                    </div>
                                </form>

                                <p class="text-center">
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
