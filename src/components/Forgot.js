import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const Forgot = () => {

    return (
        <div class="light-style customizer-hide">
            <Helmet>

                <title>Forgot Password </title>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/page-auth.css" />
                {/* <script src="../assets/vendor/js/helpers.js"></script> */}

            </Helmet>
            <div class="container-xxl">
                <div class="authentication-wrapper authentication-basic container-p-y">
                    <div class="authentication-inner py-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="app-brand justify-content-center">
                                    <a href="index.html" class="app-brand-link gap-2">
                                        <span class="app-brand-logo demo">

                                        </span>
                                        <span class="app-brand-text mb-1 demo text-body fw-bolder">Forgot Password? 🔒</span>
                                    </a>
                                </div>
                                {/* <h4 class="mb-2">Forgot Password? 🔒</h4> */}
                                <p class="mb-4 d-flex justify-content-between" style={{textAlign:"start"}}>Enter your email and we'll send you instructions to reset your password</p>
                                <form id="formAuthentication" class="mb-3" action="index.html" method="POST">
                                    <div class="mb-3">
                                        <label for="email" class="form-label d-flex justify-content-between">Email</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            autofocus
                                        />
                                    </div>
                                    <button class="btn btn-primary d-grid w-100">Send Reset Link</button>
                                </form>
                                <div class="text-center">
                                    <Link to="/login" class="d-flex align-items-center justify-content-center">
                                        <i class="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                                        Back to login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
