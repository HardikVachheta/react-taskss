import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

export const Navbar_u = () => {

    const logout = () => {

        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("confirm_password")
        localStorage.removeItem("password")

        Swal.fire({
            title: 'Logout Successful',
            icon: 'success',
            timer: 1500
        });

    }

    return (
        <aside id="" class="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0" style={{ height: "50px" }}>
            <Helmet>
                <title>User Dashboard</title>
                <link rel="stylesheet" href="../assets_pro/vendor/css/rtl/theme-semi-dark.css" class="template-customizer-theme-css" />
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"/> */}

            </Helmet>

            <div class="" style={{ marginLeft: "4.0625rem"}}>
                <Link class="app-brand-link">
                    
                    <span class="app-brand-text demo menu-text fw-bolder ms-2" style={{alignItems: "center",marginTop:"5px"}}>Hardik</span>
                </Link>

            </div>
            <div class="container-xxl d-flex h-100 " style={{ justifyContent: "end" }}>
                <div class="menu-horizontal-wrapper" >
                    <ul class="menu-inner" style={{ marginLeft: "0px", alignItems: "center" }}>
                        <li class="menu-item" style={{ marginRight: "1.0625rem" }}>
                            <Link to="/UserProfile" class="menu-link" >
                                <i class="menu-icon tf-icons bx bx-layout"></i>
                                <div data-i18n="Layouts">Profile</div>
                            </Link>
                        </li>
                        <li class="menu-item" style={{ marginRight: "1.0625rem" }}>
                            <Link to={"/login"} class="menu-link" onClick={() => { logout() }}>
                                <i class="menu-icon tf-icons bx bx-power-off me-2" ></i>
                                <div data-i18n="Users">Logout</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>

    )
}