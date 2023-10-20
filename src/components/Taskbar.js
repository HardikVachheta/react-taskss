import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const Taskbar = () => {
    const windowHeight = window.innerHeight;
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        setHasMore(true)
        // Replace this with your data fetching logic (e.g., an API call)
        const response = await fetch(`https://api.example.com/data?page=${page}`);
        const newData = await response.json();
        setData((prevData) => [...prevData, ...newData]);
        setLoading(false);
        setPage(page + 1);
      };
  
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollThreshold = scrollHeight - windowHeight - 200; // Adjust the threshold as needed
  
        if (scrollY > scrollThreshold && !loading && hasMore) {
          fetchData();
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [page, loading, hasMore]);
  

    return (
        <div >
            <aside id="layout-menu" className="layout-menu menu-vertical menu"
                style={{ width: "330px", backgroundColor: "rgba(255,255,255,.85)" }}>
                <Helmet>
                    <title>Dashboard - Analytics | Sneat - Bootstrap 5 HTML Admin Template - Pro</title>
                    <link rel="canonical" href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/" />
                    <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
                    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />

                    <link rel="stylesheet" href="../assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
                    <link rel="stylesheet" href="../assets/vendor/css/theme-dark-default.css" className="template-customizer-theme-css" />
                    <link rel="stylesheet" href="../assets/css/demo.css" />

                    <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                    <link rel="stylesheet" href="https://a.omappapi.com/app/js/api.min.css" id="omapi-css" media="all" />

                </Helmet>
               
                <h4 className="fc-toolbar-title" id="fc-dom-1" style={{ marginTop: "15px" }}>
                    Task List &nbsp;
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
                        Launch modal
                    </button>

                </h4>

                {/* <ul className="menu-inner py-1" style={scroll1}> */}
                <ul className="menu-inner py-1">
                    {
                        data?.map((u) => {
                            // console.log(u)
                            return (
                                <li className="menu-item bs-toast toast fade show" role="alert" aria-live="assertive" aria-atomic="true"
                                    style={{ margin: "5px", width: "300px" }}>
                                    <Link to={`/TaskbarPages/${u.task_id}`} style={{ color: "#697a8d" }}>
                                        {/* <Link to={`/AutoPages/${u.task_id}`} style={{ color: "#697a8d" }} onClick={getdata}> */}
                                        <div className="toast-header">
                                            <i className="bx bx-bell me-2"></i>
                                            <div className="me-auto fw-semibold" style={{ textAlign: "start" }}>
                                                {u?.task_name}</div>
                                            <small>11 mins ago</small>
                                        </div>
                                        <div className="toast-body" style={{ textAlign: "-webkit-left" }}>
                                            {u?.task_details}
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    {hasMore && <div>Loading...</div>}
                </ul>

            </aside>

        </div>

    )
}
