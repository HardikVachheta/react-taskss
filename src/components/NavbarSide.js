import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import newnav from '../data/nav.json'

export const NavbarSide = () => {

    // const [passwordType, setPasswordType] = useState("false");
    const [selectedValue, setSelectedValue] = useState(null);
    const [getLink, setLink] = useState(null);
    var navigate = useNavigate()
    // const togglePassword = () => {
    //     if (passwordType === "false") {
    //         setPasswordType("true")
    //         return;
    //     }
    //     setPasswordType("false")
    // }
    // ================================================================================
    const location = useLocation();
    const pathname = location.pathname;

    const isTaskbarPages = location.pathname.includes('TaskbarPages');
    const isDashboard = location.pathname.includes('Dashboard') || location.pathname.includes('ProcessDefinition')
    const isGroups = location.pathname.includes('Groups');

    var page
    if (isTaskbarPages === true) {
        page = '/TaskbarPages'
    } else if (isDashboard === true) {
        page = '/Dashboard'
    } else if (isGroups === true) {
        page = '/Groups'
    }

    const logout = () => {

        localStorage.removeItem("userId")
        localStorage.removeItem("authenticated")
        { navigate("/login") }
    }
    useEffect(() => {
        const parts = pathname.split('/');
        const taskbarpagesName = parts[parts.length - 1]; // Get the last part of the pathname
        // console.log("Pages Name:", taskbarpagesName);
        // console.log("TaskbarPages pathname:", pathname);
        setSelectedValue(pathname);
        setLink(parts[parts.length - 1])
    }, [pathname]);
    // ================================================================================

    const toggleMenu = (item) => {
        item.isOpen = !item.isOpen;
    };

    return (
        // <div className="d-flex">
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">

            {/* data-bg-className="bg-menu-theme" style={{ height: "92vh" }}> */}
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
            <div className="app-brand demo">
                {/* <Link href="javascript:void(0);" className="nav-item menu-link text-large"> */}
                    {/* <i className="bx bx-menu bx-sm align-middle"></i> */}
                {/* </Link> */}
                {/* <Link href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
                    <i class="bx bx-chevron-left bx-sm align-middle"></i>
                </Link> */}
                <Link to="#" className="app-brand-link">
                    <span className="app-brand-text demo menu-text fw-bolder ms-2">Hardik</span>
                </Link>
                {/* <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">hardik</a> */}

            </div>
            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1 overflow-auto">
                {/* <ul className="menu-inner py-1" style={{overflowY:"scroll",overflowX:'hidden',maxHeight:" var(--bs-scroll-height, 100vh)"}}> */}
                {
                    newnav.navItems.map((item, index) => {
                        return (
                            <>
                                <li
                                    className={`menu-item ${item.link === page ? 'active' : ''}  ${item.isOpen ? 'open' : ''} `}
                                    key={item.link}>
                                    <Link to={item.link} className={`menu-link ${item.children ? "menu-toggle" : ''}`} onClick={() => toggleMenu(item)}>
                                        <i className={`menu-icon tf-icons ${item.icon}`}></i>
                                        <div data-i18n="Analytics">{item.name}</div>
                                    </Link>
                                    {item.isOpen && item.children && (
                                        <ul className="menu-sub">
                                            {item.children.map((child, childIndex) => (
                                                <li className={`menu-item ${item.children.link === page ? 'active' : ''}`} key={childIndex}>
                                                    <Link to={child.link} className="menu-link">
                                                        <div data-i18n={child.name}>{child.name}</div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                </li>
                            </>
                        )
                    })
                }
                {/* {console.log("values2 : ",location.pathname)} */}
                <li className='menu-item' style={{ marginBlockStart: "auto" }}>
                    <Link className="menu-link btn btn-danger" to="/login" onClick={() => { logout() }} style={{ backgroundColor: "red" }} >
                        <i className="menu-icon tf-icons bx bx-log-out"></i>
                        logout
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
