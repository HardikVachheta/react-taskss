
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
            id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" data-bg-className="bg-menu-theme">
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

            <div className="app-brand demo ">
                <Link to='/Dashboard' className="app-brand-link">
                    <span className="app-brand-logo demo">
                    </span>
                    <span className="app-brand-text demo menu-text fw-bold ms-2" style={{textTransform:"capitalize"}}>{id}</span>
                </Link>

                <Link href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </Link>
            </div>

            <div className="menu-inner-shadow"></div>



            <ul className="menu-inner py-1" style={{ height: `${containerHeight - 75}px` }}>

                <li className={`menu-item ${activeItem === 'dashboard' ? 'active' : ''}`}>
                    <Link to='/AdminDashboard' className="menu-link" onClick={() => handleMenuItemClick('dashboard')}>
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Dashboards">Dashboards</div>
                        {/* <div className="badge bg-danger rounded-pill ms-auto">5</div> */}
                    </Link>
                </li>

                <li className={`menu-item ${activeItem === 'user' ? 'active' : ''} ${isOpen ? 'open' : ''} `}>
                    <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={() => handleSubMenuToggle()}>
                        <i className="menu-icon tf-icons bx bx-layout"></i>
                        <div data-i18n="Layouts">User</div>
                    </a>

                    <ul className="menu-sub">
                        <li className={`menu-item ${activeSubMenu === 'createUser' ? 'active' : ''}`}>
                            <Link to='/AdminDashboard/CreateUser' className="menu-link" onClick={() => (handleSubMenuClick('createUser') )}>
                                <div data-i18n="Without menu">Create User</div>
                            </Link>
                        </li>
                        <li className={`menu-item ${activeSubMenu === 'userList' ? 'active' : ''}`}>
                            <Link to='/AdminDashboard/ListUser' className="menu-link" onClick={() => (handleSubMenuClick('userList') )}>
                                <div data-i18n="Without navbar">User List</div>
                            </Link>
                        </li>
                        <li className={`menu-item ${activeSubMenu === 'myProfile' ? 'active' : ''}`}>
                            <Link to={`/AdminDashboard/UpdateUser2/${id}`} className="menu-link" onClick={() => (handleSubMenuClick('myProfile') )}>
                                <div data-i18n="Container">My Profile</div>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className={`menu-item ${activeItem === 'group' ? 'active' : ''} ${isOpen ? 'open' : ''} `}>
                    <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={() => handleSubMenuToggle()}>
                        <i className="menu-icon tf-icons bx bx-layout"></i>
                        <div data-i18n="Layouts">Group</div>
                    </a>

                    <ul className="menu-sub">
                        <li className={`menu-item ${activeSubMenu === 'createGroup' ? 'active' : ''}`}>
                            <Link to='/AdminDashboard/CreateGroup' className="menu-link" onClick={() => (handleSubMenuClick('createGroup') )}>
                                <div data-i18n="Without menu">Create group</div>
                            </Link>
                        </li>
                        <li className={`menu-item ${activeSubMenu === 'groupList' ? 'active' : ''}`}>
                            <Link to='/AdminDashboard/ListGroup' className="menu-link" onClick={() => (handleSubMenuClick('groupList') )}>
                                <div data-i18n="Without navbar">Group List</div>
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* <li className="menu-header small text-uppercase"><span className="menu-header-text">Components</span></li> */}

                <li className={`menu-item ${activeItem === 'Charts' ? 'active' : ''} `}>
                    <Link to="/AdminDashboard/Chats" className="menu-link" onClick={() => handleMenuItemClick('Charts')}>
                        <i className="menu-icon tf-icons bx bx-chat"></i>
                        <div data-i18n="Basic">Chats</div>
                    </Link>
                </li>

                <li className={`menu-item ${activeItem === 'TestCode' ? 'active' : ''} `}>
                    <Link to="/AdminDashboard/FindDuplicatesAndMissing" className="menu-link" onClick={() => handleMenuItemClick('TestCode')}>
                        <i className="menu-icon tf-icons bx bx-chat"></i>
                        <div data-i18n="Basic">Test Code</div>
                    </Link>
                </li>

            </ul>

        </Scrollbars>
    )
}
