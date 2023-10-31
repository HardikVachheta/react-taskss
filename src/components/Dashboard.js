import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navbar } from './Navbar'

export const Dashboard = () => {

    // var scroll1 =
    // {
    //     maxHeight: "92vh",
    //     overflowX: "hidden",
    //     overflowY: "auto",
    //     behavior: 'smooth',
    // }
    useEffect(()=>{
        console.log("---------Dashboard Page---------")
    },[])
    return (
        <div>
            {/* <Navbar_u /> */}
            <div className="layout-wrapper layout-content-navbar">

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
                    <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" />
                    <link rel="stylesheet" href="../assets_pro/vendor/css/rtl/theme-semi-dark.css" className="template-customizer-theme-css" />
                    <link rel="stylesheet" href="../assets/css/demo.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />

                </Helmet>
                <div className="layout-container">
                    <Navbar />
                    {/* <Taskbar /> */}
                    {/* <Taskbar2 /> */}

                    <aside id="layout-menu" className="layout-menu menu-vertical menu"
                        style={{ width: "330px", backgroundColor: "rgba(255,255,255,.85)" }}>
                        
                        

                        <div style={{ outlineStyle: "solid", padding: "15px", borderRadius: "0.375rem", marginTop: "27px", marginLeft: "30px", marginRight: "30px", color: "#32333754" }} >
                            <div className="me-3" style={{
                                position: "relative",
                                display: "flex",
                                flexWrap: "wrap",
                                color: "#697a8de0",
                                padding: "9px"
                            }}>
                                <i className='bx bxs-info-circle'></i>
                                <div className="text-body" style={{ marginLeft: "10px" }}>
                                    Select a task in the list.
                                </div>
                            </div>
                        </div>
   
                    </aside>
                    <div className="layout-page" >

                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                {/* <div className="container-xxl flex-grow-1 container-p-y" style={scroll1}> */}
                                {/* <TaskbarPages /> */}
                                <div style={{ outlineStyle: "solid", padding: "25px", borderRadius: "0.375rem", color: "#32333754" }} >
                                    <div className="me-3" style={{
                                        position: "relative",
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "stretch",
                                        width: "100%",
                                        color: "#697a8de0"
                                    }}>
                                        <i className='bx bxs-info-circle'></i>
                                        <div className="text-body" style={{ marginLeft: "10px" }}>
                                            Select a task in the list.
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
