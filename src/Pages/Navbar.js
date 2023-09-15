import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const list1 = () => {
        localStorage.setItem("Id", "1")
    }
    const list2 = () => {
        localStorage.setItem("Id", "2")
    }
    useEffect(() => {
        list1()
        list2()
    }, [])

    var active1 = {
        backgroundColor: "#696cff",
        fontSize: "0.9375rem",
        fontWeight: "600",
        color: "#fff",
    }

    var active2 = {

        content: "",
        position: "absolute",
        right: "0",
        width: "0.25rem",
        height: "2.6845rem",
        borderRadius: "0.375rem 0 0 0.375rem",
        background: "#696cff"
    }

    const [passwordType, setPasswordType] = useState("false");

    const togglePassword = () => {
        if (passwordType === "false") {
            setPasswordType("true")
            return;
        }
        setPasswordType("false")
    }

    var scroll1 =
    {
        maxHeight: "92vh",
        overflowX: "hidden",
        overflowY: "auto",
        behavior: 'smooth',
        // position:""
        // width: "5px"
    }

    return (
        <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme"
            data-bg-class="bg-menu-theme" style={{ height: "92vh" }}>
            <Helmet>
                {/* <link rel="stylesheet"
                    href="../assets_pro/vendor/css/rtl/theme-semi-dark.css"
                    class="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
 */}
                <script src="../assets/vendor/js/bootstrap.js" data-react-helmet="true"></script>
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
            {/* <div class="app-brand demo">
                <Link to="#" class="app-brand-link">
                    <span class="app-brand-text demo menu-text fw-bolder ms-2">Sneat</span>
                </Link>

            </div> */}
            <div class="menu-inner-shadow"></div>

            <ul class="menu-inner py-1" style={scroll1}>
                {/* <ul class="menu-inner py-1" style={{overflowY:"scroll",overflowX:'hidden',maxHeight:" var(--bs-scroll-height, 100vh)"}}> */}

                <li class="menu-item" onClick={togglePassword}>

                    {/* {
                        passwordType === "true" ?
                            <>
                                <div></div>
                                <Link to="" class="menu-link">
                                    <i class="menu-icon tf-icons bx bx-home-circle"></i>
                                    <div data-i18n="Analytics">Dashboard</div>
                                </Link>
                            </> :
                            <>
                                <div style={active2}></div>
                                <Link to="" class="menu-link" style={active1}>
                                    <i class="menu-icon tf-icons bx bx-home-circle"></i>
                                    <div data-i18n="Analytics">Dashboard</div>
                                </Link>
                            </>
                    } */}
                    <Link to="/dashboard" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Analytics">Dashboard</div>
                    </Link>

                </li>

                <li class="menu-item">
                    <Link to="/TaskbarPages/1" class="menu-link menu-toggle" onClick={list1}>
                        <i class="menu-icon tf-icons bx bx-layout"></i>
                        <div data-i18n="Task List">Task List</div>
                    </Link>
                </li>

                <li class="menu-item">
                    <Link to="#" class="menu-link menu-toggle" onClick={list2}>
                        <i class="menu-icon tf-icons bx bx-dock-top"></i>
                        <div data-i18n="Account Settings">Account Settings</div>
                    </Link>

                </li>
                <li class="menu-item" >
                    <a href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bx-spreadsheet"></i>
                        <div class="text-truncate" data-i18n="Wizard Examples">Wizard Examples</div>
                    </a>
                    <ul class="menu-sub">
                        <li class="menu-item active">
                            <a href="wizard-ex-checkout.html" class="menu-link">
                                <div class="text-truncate" data-i18n="Checkout">Checkout</div>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="wizard-ex-property-listing.html" class="menu-link">
                                <div class="text-truncate" data-i18n="Property Listing">Property Listing</div>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="wizard-ex-create-deal.html" class="menu-link">
                                <div class="text-truncate" data-i18n="Create Deal">Create Deal</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
                        <div data-i18n="Authentications">Authentications</div>
                    </a>

                </li>
                <li class="menu-item">
                    <a href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bx-cube-alt"></i>
                        <div data-i18n="Misc">Misc</div>
                    </a>

                </li>

                <li class="menu-item">
                    <a href="cards-basic.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-collection"></i>
                        <div data-i18n="Basic">Cards</div>
                    </a>
                </li>
                <li class="menu-item">
                    <a href="javascript:void(0)" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bx-box"></i>
                        <div data-i18n="User interface">User interface</div>
                    </a>
                </li>

                {/*<!-- Extended components -->*/}
                <li class="menu-item">
                    <a href="javascript:void(0)" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bx-copy"></i>
                        <div data-i18n="Extended UI">Extended UI</div>
                    </a>
                </li>

                <li class="menu-item">
                    <a href="icons-boxicons.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li><li class="menu-item">
                    <a href="icons-boxicons.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li><li class="menu-item">
                    <a href="icons-boxicons.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li><li class="menu-item">
                    <a href="icons-boxicons.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li><li class="menu-item">
                    <a href="icons-boxicons.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li><li class="menu-item">
                    <a href="icons-boxicons.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li><li class="menu-item">
                    <a href="icons-boxicons.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li><li class="menu-item">
                    <a href="icons-boxicons.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li><li class="menu-item">
                    <a href="icons-boxicons.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li><li class="menu-item">
                    <a href="icons-boxicons.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li><li class="menu-item">
                    <a href="icons-boxicons.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li><li class="menu-item">
                    <a href="icons-boxicons.html" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li>
            </ul>
        </aside>

    )
}
