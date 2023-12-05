import React, { useEffect, useState } from 'react'
import Scrollbars from 'react-custom-scrollbars';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const AdminSideNav = () => {

    const [activeItem, setActiveItem] = useState('dashboard');
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuItemClick = (itemName) => {
        setActiveItem(itemName);
        setActiveSubMenu(null)
        setIsOpen(false)
    };

    const handleSubMenuClick = (subMenuName) => {
        setActiveSubMenu(subMenuName);
    };

    const handleSubMenuToggle = () => {
        setIsOpen(!isOpen);
    };
    const [containerHeight, setContainerHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        setContainerHeight(window.innerHeight);
    };
    return (
        <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            style={{ width: 260, height: 625, position: 'fixed' }}
            id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme" data-bg-class="bg-menu-theme">
            <Helmet>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/theme-semi-dark.css" className="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="../assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
            </Helmet>

            <div class="app-brand demo ">
                <Link to='/' class="app-brand-link">
                    <span class="app-brand-logo demo">
                    </span>
                    <span class="app-brand-text demo menu-text fw-bold ms-2">Hardik</span>
                </Link>

                <Link href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-xl-none">
                    <i class="bx bx-chevron-left bx-sm align-middle"></i>
                </Link>
            </div>

            <div class="menu-inner-shadow"></div>



            <ul class="menu-inner py-1" style={{ height: `${containerHeight - 75}px` }}>

                <li class={`menu-item ${activeItem === 'dashboard' ? 'active' : ''}`}>
                    <Link to='/AdminDashboard' class="menu-link" onClick={() => handleMenuItemClick('dashboard')}>
                        <i class="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Dashboards">Dashboards</div>
                        {/* <div class="badge bg-danger rounded-pill ms-auto">5</div> */}
                    </Link>
                </li>

                <li class={`menu-item ${activeItem === 'user' ? 'active' : ''} ${isOpen ? 'open' : ''} `}>
                    <a href="javascript:void(0);" class="menu-link menu-toggle" onClick={() => handleSubMenuToggle()}>
                        <i class="menu-icon tf-icons bx bx-layout"></i>
                        <div data-i18n="Layouts">User</div>
                    </a>

                    <ul class="menu-sub">
                        <li class={`menu-item ${activeItem === "user" ? 'active' : activeSubMenu === 'createUser' ? 'active' : ''}`}>
                            <Link href="layouts-without-menu.html" class="menu-link" onClick={() => (handleSubMenuClick('createUser') , handleMenuItemClick('user'))}>
                                <div data-i18n="Without menu">Create User</div>
                            </Link>
                        </li>
                        <li class={`menu-item ${activeSubMenu === 'userList' ? 'active' : ''}`}>
                            <Link href="layouts-without-navbar.html" class="menu-link" onClick={() => (handleSubMenuClick('userList') , handleMenuItemClick('user'))}>
                                <div data-i18n="Without navbar">User List</div>
                            </Link>
                        </li>
                        <li class={`menu-item ${activeSubMenu === 'myProfile' ? 'active' : ''}`}>
                            <Link href="layouts-container.html" class="menu-link" onClick={() => (handleSubMenuClick('myProfile') , handleMenuItemClick('user'))}>
                                <div data-i18n="Container">My Profile</div>
                            </Link>
                        </li>
                    </ul>
                </li>


                <li class="menu-header small text-uppercase">
                    <span class="menu-header-text">Apps &amp; Pages</span>
                </li>
                <li class="menu-item">
                    <Link href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-email.html" target="_blank" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-envelope"></i>
                        <div data-i18n="Email">Email</div><div class="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                    </Link>
                </li>
                <li class="menu-item">
                    <Link href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-chat.html" target="_blank" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-chat"></i>
                        <div data-i18n="Chat">Chat</div><div class="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                    </Link>
                </li>

                <li class="menu-item">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bx-dock-top"></i>
                        <div data-i18n="Account Settings">Account Settings</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item">
                            <Link href="pages-account-settings-account.html" class="menu-link">
                                <div data-i18n="Account">Account</div>
                            </Link>
                        </li>
                        <li class="menu-item">
                            <Link href="pages-account-settings-notifications.html" class="menu-link">
                                <div data-i18n="Notifications">Notifications</div>
                            </Link>
                        </li>
                        <li class="menu-item">
                            <Link href="pages-account-settings-connections.html" class="menu-link">
                                <div data-i18n="Connections">Connections</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li class="menu-item">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
                        <div data-i18n="Authentications">Authentications</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item">
                            <Link href="auth-login-basic.html" class="menu-link" target="_blank">
                                <div data-i18n="Basic">Login</div>
                            </Link>
                        </li>
                        <li class="menu-item">
                            <Link href="auth-register-basic.html" class="menu-link" target="_blank">
                                <div data-i18n="Basic">Register</div>
                            </Link>
                        </li>
                        <li class="menu-item">
                            <Link href="auth-forgot-password-basic.html" class="menu-link" target="_blank">
                                <div data-i18n="Basic">Forgot Password</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li class="menu-item">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bx-cube-alt"></i>
                        <div data-i18n="Misc">Misc</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item">
                            <Link href="pages-misc-error.html" class="menu-link">
                                <div data-i18n="Error">Error</div>
                            </Link>
                        </li>
                        <li class="menu-item">
                            <Link href="pages-misc-under-maintenance.html" class="menu-link">
                                <div data-i18n="Under Maintenance">Under Maintenance</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li class="menu-header small text-uppercase"><span class="menu-header-text">Components</span></li>

                <li class="menu-item">
                    <Link href="cards-basic.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-collection"></i>
                        <div data-i18n="Basic">Cards</div>
                    </Link>
                </li>

            </ul>

        </Scrollbars>
    )
}
