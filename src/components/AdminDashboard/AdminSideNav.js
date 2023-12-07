
import React, { useEffect, useState } from 'react'
import Scrollbars from 'react-custom-scrollbars';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const AdminSideNav = () => {

    
    var id = localStorage.getItem("userId")

    const [activeItem, setActiveItem] = useState('dashboard');
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuItemClick = (itemName) => {
        setActiveItem(itemName);
        setActiveSubMenu(null);
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
            style={{ width: 260, height: `${containerHeight }px` }}
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
                <Link to='/Dashboard' class="app-brand-link">
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
                        <li class={`menu-item ${activeSubMenu === 'createUser' ? 'active' : ''}`}>
                            <Link to='/AdminDashboard/CreateUser' class="menu-link" onClick={() => (handleSubMenuClick('createUser') )}>
                                <div data-i18n="Without menu">Create User</div>
                            </Link>
                        </li>
                        <li class={`menu-item ${activeSubMenu === 'userList' ? 'active' : ''}`}>
                            <Link to='/AdminDashboard/ListUser' class="menu-link" onClick={() => (handleSubMenuClick('userList') )}>
                                <div data-i18n="Without navbar">User List</div>
                            </Link>
                        </li>
                        <li class={`menu-item ${activeSubMenu === 'myProfile' ? 'active' : ''}`}>
                            <Link to={`/AdminDashboard/UpdateUser2/${id}`} class="menu-link" onClick={() => (handleSubMenuClick('myProfile') )}>
                                <div data-i18n="Container">My Profile</div>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li class={`menu-item ${activeItem === 'group' ? 'active' : ''} ${isOpen ? 'open' : ''} `}>
                    <a href="javascript:void(0);" class="menu-link menu-toggle" onClick={() => handleSubMenuToggle()}>
                        <i class="menu-icon tf-icons bx bx-layout"></i>
                        <div data-i18n="Layouts">Group</div>
                    </a>

                    <ul class="menu-sub">
                        <li class={`menu-item ${activeSubMenu === 'createGroup' ? 'active' : ''}`}>
                            <Link to='/AdminDashboard/CreateGroup' class="menu-link" onClick={() => (handleSubMenuClick('createGroup') )}>
                                <div data-i18n="Without menu">Create group</div>
                            </Link>
                        </li>
                        <li class={`menu-item ${activeSubMenu === 'groupList' ? 'active' : ''}`}>
                            <Link to='/AdminDashboard/ListGroup' class="menu-link" onClick={() => (handleSubMenuClick('groupList') )}>
                                <div data-i18n="Without navbar">Group List</div>
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* <li class="menu-header small text-uppercase"><span class="menu-header-text">Components</span></li> */}

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
