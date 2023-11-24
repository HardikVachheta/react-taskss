import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button, Dropdown } from 'react-bootstrap';

export const Taskbar = () => {
    const [sortBy, setSortBy] = useState('name'); // Default sorting property
    const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order
    const [data, setData] = useState([]);
    const [icon, setIcon] = useState('AscIcon');

    useEffect(() => {
        // Fetch data based on the current sorting option and order
        const fetchData = async () => {
            const apiUrl = `http://localhost:3000/api/task/${sortOrder}${sortBy}`;
            try {

                const response = await axios.get(apiUrl);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [sortBy, sortOrder]); // Fetch data whenever sorting options change

    const handleSort = (property) => {
        // Toggle between 'asc' and 'desc' orders
        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newOrder);

        // Update the icon based on the new order
        setIcon(newOrder === 'asc' ? 'AscIcon' : 'DescIcon'); // Replace 'AscIcon' and 'DescIcon' with your actual icon components or classes
        setSortBy(property);


        // setSortBy(property);
        // setSortOrder(order);
    };

    const filteredData = data.filter(task => task.assignee === 'demo');

    console.log("item in name order", filteredData)
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
                <div>
                    <label htmlFor="sortSelect">Sort by:</label>
                    {/* <Dropdown>
                        <Dropdown.Toggle variant="outline-primary" id="growthReportId">
                            ...
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ zIndex: 1100 }}>
                            <Dropdown.Item href="javascript:void(0);">2021</Dropdown.Item>
                            <Dropdown.Item href="javascript:void(0);">2020</Dropdown.Item>
                            <Dropdown.Item href="javascript:void(0);">2019</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                    {/* <div className="dropdown">
                        <button
                            className="btn btn-sm btn-outline-primary dropdown-toggle"
                            type="button"
                            id="growthReportId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                        >
                            2022
                        </button>
                        <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="growthReportId"
                            style={{
                                position: "absolute",
                                inset: "0px 0px auto auto",
                                margin: 0,
                                transform: "translate(-77px, 30px)"
                            }}
                            data-popper-placement="bottom-end"
                        >
                            <a className="dropdown-item" href="javascript:void(0);">
                                2021
                            </a>
                            <a className="dropdown-item" href="javascript:void(0);">
                                2020
                            </a>
                            <a className="dropdown-item" href="javascript:void(0);">
                                2019
                            </a>
                        </div>
                    </div> */}

                    <select
                        id="sortSelect"
                        className='select'
                        onChange={(e) => setSortBy(e.target.value)}
                        value={sortBy}
                        style={{ border: "none",  outline: 'none' , appearance: "none" }}
                    >
                        <option value="name" style={{width:"25px"}}>Name</option>
                        <option value="time" style={{width:"25px"}}>Time</option>
                    </select>

                    <spam onClick={() => handleSort(sortBy)} style={{marginLeft:"10px"}}>
                        {icon === 'AscIcon' ? <i class="bx bxs-up-arrow"/> : <i class="bx bxs-down-arrow"/>}
                    </spam>
                    {/* <button onClick={() => handleSort(sortBy, 'asc')}>Asc</button>
                    <button onClick={() => handleSort(sortBy, 'desc')}>Desc</button> */}
                </div>
                

                {/* <ul className="menu-inner py-1" style={scroll1}> */}
                <ul className="menu-inner py-1">
                    {
                        filteredData?.map((u) => {
                            return (
                                <li className="menu-item bs-toast toast fade show" role="alert" aria-live="assertive" aria-atomic="true"
                                    style={{ margin: "5px", width: "300px" }}>
                                    <Link to={`/TaskbarPages/${u.id}`} style={{ color: "#697a8d" }}>
                                        <div className="toast-header">
                                            <i className="bx bx-bell me-2"></i>
                                            <div className="me-auto fw-semibold" style={{ textAlign: "start" }}>
                                                {u?.name}</div>
                                            <small>11 mins ago</small>
                                        </div>
                                        <div className="toast-body" style={{ textAlign: "-webkit-left" }}>
                                            {u?.description}
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>

            </aside>

        </div>

    )
}
