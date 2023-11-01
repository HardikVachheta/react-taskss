import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavbarNew } from './NavbarNew'
export const DashboardNew = () => {


    // const { valuex , valueclass} = useState('')
    const [valuex, valueclass] = useState('')
    // var x
    const handle = () => {
        valueclass("layout-menu-expanded")
        // console.log(x)
    }
    return (
        <div lang="en"
            class={`light-style layout-menu-fixed layout-compact ${valuex}`}
            dir="ltr" data-theme="theme-default" data-assets-path="../assets/"
            data-template="vertical-menu-template-free">
            <div class="layout-wrapper layout-content-navbar  ">
                <div class="layout-container">
                    <Helmet>
                        <title>Dashboard New</title>
                        {/* <link rel="canonical" href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/" /> */}
                        {/* <script type="text/javascript" async="" src="https://static.hotjar.com/c/hotjar-3067524.js?sv=7"></script> */}
                        {/* <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-5DDHKGP"></script> */}
                        <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
                        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
                        <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                        <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
                        <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
                        <link rel="stylesheet" href="../assets/css/demo.css" />
                        <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                        <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                        <script src="../assets/vendor/js/helpers.js"></script>
                        <script src="../assets/js/config.js"></script>
                        {/* <script type="text/javascript" src="https://a.omappapi.com/app/js/api.min.js" async="" data-user="252882" data-account="269977"></script> */}
                        {/* <link rel="stylesheet" href="https://a.omappapi.com/app/js/api.min.css" id="omapi-css" media="all" /> */}
                        {/* <script async="" src="https://script.hotjar.com/modules.8eed640cde321549ddeb.js" charset="utf-8"></script> */}
                    </Helmet>
                    <NavbarNew />

                    <div className="layout-page">
                        <nav
                            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                            id="layout-navbar"
                        >
                            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
                                <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                                    <i className="bx bx-menu bx-sm" onClick={handle} />
                                </a>
                            </div>
                            <div
                                className="navbar-nav-right d-flex align-items-center"
                                id="navbar-collapse"
                            >
                                <div className="navbar-nav align-items-center">
                                    <div className="nav-item d-flex align-items-center">
                                        <i className="bx bx-search fs-4 lh-0" />
                                        <input
                                            type="text"
                                            className="form-control border-0 shadow-none ps-1 ps-sm-2"
                                            placeholder="Search..."
                                            aria-label="Search..."
                                        />
                                    </div>
                                </div>
                                <ul className="navbar-nav flex-row align-items-center ms-auto">
                                    <li className="nav-item lh-1 me-3">
                                        <span />
                                    </li>
                                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                        <a
                                            className="nav-link dropdown-toggle hide-arrow"
                                            href="javascript:void(0);"
                                            data-bs-toggle="dropdown"
                                        >
                                            <div className="avatar avatar-online">
                                                <img
                                                    src="../assets/img/avatars/1.png"
                                                    alt=""
                                                    className="w-px-40 h-auto rounded-circle"
                                                />
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar avatar-online">
                                                                <img
                                                                    src="../assets/img/avatars/1.png"
                                                                    alt=""
                                                                    className="w-px-40 h-auto rounded-circle"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <span className="fw-medium d-block">John Doe</span>
                                                            <small className="text-muted">Admin</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bx bx-user me-2" />
                                                    <span className="align-middle">My Profile</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bx bx-cog me-2" />
                                                    <span className="align-middle">Settings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <span className="d-flex align-items-center align-middle">
                                                        <i className="flex-shrink-0 bx bx-credit-card me-2" />
                                                        <span className="flex-grow-1 align-middle ms-1">Billing</span>
                                                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                                                            4
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="javascript:void(0);">
                                                    <i className="bx bx-power-off me-2" />
                                                    <span className="align-middle">Log Out</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">

                                <div className="row">
                                    <div className="col-lg-4 col-md-4 order-1">
                                        <div className="row">

                                            <div className="col-lg-6 col-md-12 col-6 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img
                                                                    src="../assets/img/icons/unicons/chart-success.png"
                                                                    alt="chart success"
                                                                    className="rounded"
                                                                />
                                                            </div>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt3"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded" />
                                                                </button>
                                                                <div
                                                                    className="dropdown-menu dropdown-menu-end"
                                                                    aria-labelledby="cardOpt3"
                                                                >
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        View More
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        Delete
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="fw-medium d-block mb-1">Profit</span>
                                                        <h3 className="card-title mb-2">$12,628</h3>
                                                        <small className="text-success fw-medium">
                                                            <i className="bx bx-up-arrow-alt" /> +72.80%
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-6 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img
                                                                    src="../assets/img/icons/unicons/wallet-info.png"
                                                                    alt="Credit Card"
                                                                    className="rounded"
                                                                />
                                                            </div>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt6"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded" />
                                                                </button>
                                                                <div
                                                                    className="dropdown-menu dropdown-menu-end"
                                                                    aria-labelledby="cardOpt6"
                                                                >
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        View More
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        Delete
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span>Sales</span>
                                                        <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                                                        <small className="text-success fw-medium">
                                                            <i className="bx bx-up-arrow-alt" /> +28.42%
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                                        <div className="row">
                                            <div className="col-6 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img
                                                                    src="../assets/img/icons/unicons/paypal.png"
                                                                    alt="Credit Card"
                                                                    className="rounded"
                                                                />
                                                            </div>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt4"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded" />
                                                                </button>
                                                                <div
                                                                    className="dropdown-menu dropdown-menu-end"
                                                                    aria-labelledby="cardOpt4"
                                                                >
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        View More
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        Delete
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="d-block mb-1">Payments</span>
                                                        <h3 className="card-title text-nowrap mb-2">$2,456</h3>
                                                        <small className="text-danger fw-medium">
                                                            <i className="bx bx-down-arrow-alt" /> -14.82%
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img
                                                                    src="../assets/img/icons/unicons/cc-primary.png"
                                                                    alt="Credit Card"
                                                                    className="rounded"
                                                                />
                                                            </div>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt1"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded" />
                                                                </button>
                                                                <div className="dropdown-menu" aria-labelledby="cardOpt1">
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        View More
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        Delete
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="fw-medium d-block mb-1">Transactions</span>
                                                        <h3 className="card-title mb-2">$14,857</h3>
                                                        <small className="text-success fw-medium">
                                                            <i className="bx bx-up-arrow-alt" /> +28.14%
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div
                                                            className="d-flex justify-content-between flex-sm-row flex-column gap-3"
                                                            style={{ position: "relative" }}
                                                        >
                                                            <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                                                <div className="card-title">
                                                                    <h5 className="text-nowrap mb-2">Profile Report</h5>
                                                                    <span className="badge bg-label-warning rounded-pill">
                                                                        Year 2021
                                                                    </span>
                                                                </div>
                                                                <div className="mt-sm-auto">
                                                                    <small className="text-success text-nowrap fw-medium">
                                                                        <i className="bx bx-chevron-up" /> 68.2%
                                                                    </small>
                                                                    <h3 className="mb-0">$84,686k</h3>
                                                                </div>
                                                            </div>
                                                            <div id="profileReportChart" style={{ minHeight: 80 }}>
                                                                <div
                                                                    id="apexchartsgubxyehhj"
                                                                    className="apexcharts-canvas apexchartsgubxyehhj apexcharts-theme-light"
                                                                    style={{ width: 300, height: 80 }}
                                                                >
                                                                    <div
                                                                        className="apexcharts-legend"
                                                                        style={{ maxHeight: 40 }}
                                                                    />
                                                                    <div className="apexcharts-tooltip apexcharts-theme-light">
                                                                        <div
                                                                            className="apexcharts-tooltip-title"
                                                                            style={{
                                                                                fontFamily: "Helvetica, Arial, sans-serif",
                                                                                fontSize: 12
                                                                            }}
                                                                        />
                                                                        <div
                                                                            className="apexcharts-tooltip-series-group"
                                                                            style={{ order: 1 }}
                                                                        >
                                                                            <span
                                                                                className="apexcharts-tooltip-marker"
                                                                                style={{ backgroundColor: "rgb(255, 171, 0)" }}
                                                                            />
                                                                            <div
                                                                                className="apexcharts-tooltip-text"
                                                                                style={{
                                                                                    fontFamily: "Helvetica, Arial, sans-serif",
                                                                                    fontSize: 12
                                                                                }}
                                                                            >
                                                                                <div className="apexcharts-tooltip-y-group">
                                                                                    <span className="apexcharts-tooltip-text-y-label" />
                                                                                    <span className="apexcharts-tooltip-text-y-value" />
                                                                                </div>
                                                                                <div className="apexcharts-tooltip-goals-group">
                                                                                    <span className="apexcharts-tooltip-text-goals-label" />
                                                                                    <span className="apexcharts-tooltip-text-goals-value" />
                                                                                </div>
                                                                                <div className="apexcharts-tooltip-z-group">
                                                                                    <span className="apexcharts-tooltip-text-z-label" />
                                                                                    <span className="apexcharts-tooltip-text-z-value" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                                                        <div className="apexcharts-yaxistooltip-text" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="resize-triggers">
                                                                <div className="expand-trigger">
                                                                    <div style={{ width: 508, height: 116 }} />
                                                                </div>
                                                                <div className="contract-trigger" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 order-1">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-6 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img
                                                                    src="../assets/img/icons/unicons/chart-success.png"
                                                                    alt="chart success"
                                                                    className="rounded"
                                                                />
                                                            </div>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt3"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded" />
                                                                </button>
                                                                <div
                                                                    className="dropdown-menu dropdown-menu-end"
                                                                    aria-labelledby="cardOpt3"
                                                                >
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        View More
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        Delete
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="fw-medium d-block mb-1">Profit</span>
                                                        <h3 className="card-title mb-2">$12,628</h3>
                                                        <small className="text-success fw-medium">
                                                            <i className="bx bx-up-arrow-alt" /> +72.80%
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-6 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img
                                                                    src="../assets/img/icons/unicons/wallet-info.png"
                                                                    alt="Credit Card"
                                                                    className="rounded"
                                                                />
                                                            </div>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt6"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded" />
                                                                </button>
                                                                <div
                                                                    className="dropdown-menu dropdown-menu-end"
                                                                    aria-labelledby="cardOpt6"
                                                                >
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        View More
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        Delete
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span>Sales</span>
                                                        <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                                                        <small className="text-success fw-medium">
                                                            <i className="bx bx-up-arrow-alt" /> +28.42%
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                                        <div className="row">
                                            <div className="col-6 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img
                                                                    src="../assets/img/icons/unicons/paypal.png"
                                                                    alt="Credit Card"
                                                                    className="rounded"
                                                                />
                                                            </div>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt4"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded" />
                                                                </button>
                                                                <div
                                                                    className="dropdown-menu dropdown-menu-end"
                                                                    aria-labelledby="cardOpt4"
                                                                >
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        View More
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        Delete
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="d-block mb-1">Payments</span>
                                                        <h3 className="card-title text-nowrap mb-2">$2,456</h3>
                                                        <small className="text-danger fw-medium">
                                                            <i className="bx bx-down-arrow-alt" /> -14.82%
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img
                                                                    src="../assets/img/icons/unicons/cc-primary.png"
                                                                    alt="Credit Card"
                                                                    className="rounded"
                                                                />
                                                            </div>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn p-0"
                                                                    type="button"
                                                                    id="cardOpt1"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded" />
                                                                </button>
                                                                <div className="dropdown-menu" aria-labelledby="cardOpt1">
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        View More
                                                                    </a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">
                                                                        Delete
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="fw-medium d-block mb-1">Transactions</span>
                                                        <h3 className="card-title mb-2">$14,857</h3>
                                                        <small className="text-success fw-medium">
                                                            <i className="bx bx-up-arrow-alt" /> +28.14%
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div
                                                            className="d-flex justify-content-between flex-sm-row flex-column gap-3"
                                                            style={{ position: "relative" }}
                                                        >
                                                            <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                                                <div className="card-title">
                                                                    <h5 className="text-nowrap mb-2">Profile Report</h5>
                                                                    <span className="badge bg-label-warning rounded-pill">
                                                                        Year 2021
                                                                    </span>
                                                                </div>
                                                                <div className="mt-sm-auto">
                                                                    <small className="text-success text-nowrap fw-medium">
                                                                        <i className="bx bx-chevron-up" /> 68.2%
                                                                    </small>
                                                                    <h3 className="mb-0">$84,686k</h3>
                                                                </div>
                                                            </div>
                                                            <div id="profileReportChart" style={{ minHeight: 80 }}>
                                                                <div
                                                                    id="apexchartsgubxyehhj"
                                                                    className="apexcharts-canvas apexchartsgubxyehhj apexcharts-theme-light"
                                                                    style={{ width: 300, height: 80 }}
                                                                >
                                                                    <div
                                                                        className="apexcharts-legend"
                                                                        style={{ maxHeight: 40 }}
                                                                    />
                                                                    <div className="apexcharts-tooltip apexcharts-theme-light">
                                                                        <div
                                                                            className="apexcharts-tooltip-title"
                                                                            style={{
                                                                                fontFamily: "Helvetica, Arial, sans-serif",
                                                                                fontSize: 12
                                                                            }}
                                                                        />
                                                                        <div
                                                                            className="apexcharts-tooltip-series-group"
                                                                            style={{ order: 1 }}
                                                                        >
                                                                            <span
                                                                                className="apexcharts-tooltip-marker"
                                                                                style={{ backgroundColor: "rgb(255, 171, 0)" }}
                                                                            />
                                                                            <div
                                                                                className="apexcharts-tooltip-text"
                                                                                style={{
                                                                                    fontFamily: "Helvetica, Arial, sans-serif",
                                                                                    fontSize: 12
                                                                                }}
                                                                            >
                                                                                <div className="apexcharts-tooltip-y-group">
                                                                                    <span className="apexcharts-tooltip-text-y-label" />
                                                                                    <span className="apexcharts-tooltip-text-y-value" />
                                                                                </div>
                                                                                <div className="apexcharts-tooltip-goals-group">
                                                                                    <span className="apexcharts-tooltip-text-goals-label" />
                                                                                    <span className="apexcharts-tooltip-text-goals-value" />
                                                                                </div>
                                                                                <div className="apexcharts-tooltip-z-group">
                                                                                    <span className="apexcharts-tooltip-text-z-label" />
                                                                                    <span className="apexcharts-tooltip-text-z-value" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                                                        <div className="apexcharts-yaxistooltip-text" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="resize-triggers">
                                                                <div className="expand-trigger">
                                                                    <div style={{ width: 508, height: 116 }} />
                                                                </div>
                                                                <div className="contract-trigger" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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