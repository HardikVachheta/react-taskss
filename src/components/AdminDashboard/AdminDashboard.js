import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import menuItems from '../../data/nav2.json';
// import { Nav, NavDropdown } from 'react-bootstrap';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';
import AdminNav from './AdminNav';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {

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
    // console.log("menuItems",menuItems)

    return (
        <div lang="en" class="light-style layout-compact layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="horizontal-menu-template">
            <Helmet>
                <title> Admin Dashboard </title>
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
                <AdminNav/>
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
                                        <a
                                            href="javascript:void(0)"
                                            className="menu-link menu-toggle"
                                        >
                                            <i className="menu-icon tf-icons bx bx-home-circle" />
                                            <div data-i18n="Dashboards">Dashboards</div>
                                        </a>
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
                    </aside> */}
                   
                    <div className="layout-page" style={{ marginTop:"60px"}}>
                        <div className="content-wrapper">
                    {/* <AdminNav/> */}
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 mb-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title m-0">Users</h4>
                                                <hr />
                                            </div>
                                            <div className="card-body">
                                                <Link to='/AdminDashboard/CreateUser' className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">Create User</h5>
                                                </Link>
                                                <Link to='/AdminDashboard/ListUser' className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">List Of Users</h5>
                                                </Link>
                                                <div className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">My Profile</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 mb-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title m-0">Groups</h4>
                                                <hr />
                                            </div>
                                            <div className="card-body">
                                                <div className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">Create New Group</h5>
                                                </div>
                                                <div className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-3.5">List Of Group</h5>
                                                </div>
                                                <div className="d-flex justify-content-start align-items-center mb-4">
                                                    {/* <h5 className="mb-0">My Profile</h5> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 mb-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title m-0">Tenants</h4>
                                                <hr />
                                            </div>
                                            <div className="card-body">
                                                <Link to='/' className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">Create User</h5>
                                                </Link>
                                                <div className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">List Of Users</h5>
                                                </div>
                                                <div className="d-flex justify-content-start align-items-center mb-4">
                                                    <h5 className="mb-0">My Profile</h5>
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
