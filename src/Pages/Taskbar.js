import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import data from '../data/dumpdata.json'

export const Taskbar = () => {


    var scroll1 =
    {
        maxHeight: "92vh",
        overflowX: "hidden",
        overflowY: "auto",
        behavior: 'smooth',
        // scrollbar-width: none;
        // MsOverflowStyle: 'none'
        // scrollbarWidth: 'none',
    }
    // width: "0

    const [users, setUsers] = useState()
    const getdata = () => {
        // e.stopPropagation();
        setUsers(data);
    }
    useEffect(() => {
        getdata()
    }, [])

    return (
        <aside id="layout-menu" class="layout-menu menu-vertical menu"
            style={{ width: "330px", height: "92vh", backgroundColor: "rgba(255,255,255,.85)" }}>
            <Helmet>
                <link rel="stylesheet"
                    href="../assets_pro/vendor/css/rtl/theme-semi-dark.css"
                    class="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
            </Helmet>
            <h4 class="fc-toolbar-title" id="fc-dom-1" style={{ marginTop: "15px" }}>September 2023</h4>
            <ul class="menu-inner py-1" style={scroll1}>
                {
                    users?.map((u) => {
                        // console.log(u)
                        return (
                            <li class="menu-item bs-toast toast fade show" role="alert" aria-live="assertive" aria-atomic="true"
                                style={{ margin: "5px", width: "300px" }}>
                                <Link to={`/TaskbarPages/${u.task_id}`} style={{ color: "#697a8d" }} onClick={getdata}>
                                {/* <Link to={`/AutoPages/${u.task_id}`} style={{ color: "#697a8d" }} onClick={getdata}> */}
                                    <div class="toast-header">
                                        <i class="bx bx-bell me-2"></i>
                                        <div class="me-auto fw-semibold" style={{ textAlign: "start" }}>
                                            {u?.task_name}</div>
                                        <small>11 mins ago</small>
                                    </div>
                                    <div class="toast-body" style={{ textAlign: "-webkit-left" }}>
                                        {u?.task_details}
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>

    )
}
