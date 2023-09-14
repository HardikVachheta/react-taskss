import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navbar } from './Navbar'
import { Taskbar } from './Taskbar'
import { Navbar_u } from './Navbar_u'

export const Dashboard = () => {

    var scroll1 =
    {
        maxHeight: "92vh",
        overflowX: "hidden",
        overflowY: "auto",
        behavior: 'smooth',
    }

    var text = {
        "position": "relative",
        "display": "flex",
        "flexWrap": "wrap",
        "alignItems": "stretch",
        "width": "100%",

    }
    return (
        <div>
            <Navbar_u />
            <div class="layout-wrapper layout-content-navbar" >
                <Helmet>
                    <title>Dashboard </title>

                    <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                    <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
                    <link rel="stylesheet" href="../assets_pro/vendor/css/rtl/theme-semi-dark.css" class="template-customizer-theme-css" />
                    <link rel="stylesheet" href="../assets/css/demo.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />

                </Helmet>
                <div class="layout-container" >
                    <Navbar />
                    <Taskbar />
                    <div class="layout-page">

                        <div class="content-wrapper">
                            <div class="container-xxl flex-grow-1 container-p-y" style={scroll1}>
                                {/* <TaskbarPages /> */}
                                <div style={{ outlineStyle: "solid", padding: "15px", borderRadius: "0.375rem" }} >
                                    <p class="me-3" style={text}>
                                        <i class='bx bxs-info-circle' style={{ marginTop: "12px" }}></i>
                                        <div class="text-body" style={{ marginTop: "10px", marginLeft: "10px" }}>
                                            Select a task in the list.
                                        </div>
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
