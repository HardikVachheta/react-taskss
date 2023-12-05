import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavbarSide } from './NavbarSide'
import { Link } from 'react-router-dom';
import axios from 'axios';

export const ProcessDefinition = () => {

    const [processDefinitions, setprocessDefinitions] = useState([]);
    const [query, setQuery] = useState("");

    const getrunninginstances = () => {
        axios.get("http://localhost:3000/api/count/runninginstances").then(res => {
            console.log("runninginstances :", res.data.processDefinitions)
            setprocessDefinitions(res.data.processDefinitions)
        })
    }
    useEffect(() => {
        console.log("---------ProcessDefinition Page---------")
        getrunninginstances()
    }, [])

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
        <div className="layout-wrapper layout-content-navbar">
            <Helmet>
                <title>User List</title>
                <link rel="canonical" href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/" />
                <link rel="icon" type="image/x-icon" href="../../assets/img/favicon/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/select2/select2.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/@form-validation/umd/styles/index.min.css" />
                <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" type="text/css" href="../assets/vendor/css/rtl/theme-semi-dark.css" className="template-customizer-theme-css" />
            </Helmet>
            <div className="layout-container" >
                <NavbarSide />
                <div className="layout-page" style={{ overflow: "auto", height: `${containerHeight}px` }}>
                    <div className="content-wrapper">
                        <div className="flex-grow-1 container-p-y container-fluid">
                            <h4 class="py-3 mb-4 d-flex justify-content-start">
                                <Link to='/Dashboard' class="text-muted fw-light">Dashboard /</Link> Process Definition
                            </h4>
                            {/* <div class="row">
                                <div class="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0">
                                    <div id="DataTables_Table_0_filter" class="dataTables_filter">
                                        <label>
                                            <input type="search" class="form-control" onChange={(e) => setQuery(e.target.value.toLowerCase())} placeholder="Search Users.." aria-controls="DataTables_Table_0" /></label>
                                    </div>
                                </div>
                            </div> */}

                            <div className="card">
                                <div className="card-header border-bottom">
                                    <h5 className="card-title" style={{ textAlign: "justify" }}>Process Definitions deployed</h5>
                                </div>
                                <div className="card-datatable table-responsive">
                                    <div
                                        id="DataTables_Table_0_wrapper"
                                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                                    >

                                        <table
                                            className="datatables-users table border-top dataTable no-footer dtr-column collapsed"
                                            id="DataTables_Table_0"
                                            aria-describedby="DataTables_Table_0_info"
                                        // style={{ width: 1040 }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th className="sorting " tabIndex={0} aria-controls="DataTables_Table_0" style={{ width: "250px" }} rowSpan={1} colSpan={1} aria-label="User: activate to sort column ascending">
                                                        Running Instances
                                                    </th>
                                                    <th className="sorting " tabIndex={0} aria-controls="DataTables_Table_0" style={{ width: "50px" }} rowSpan={1} colSpan={1} aria-label="Role: activate to sort column ascending">
                                                        Key
                                                    </th>
                                                    <th className="sorting " tabIndex={0} aria-controls="DataTables_Table_0" style={{ width: "250px" }} rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending">
                                                        Status
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {

                                                    processDefinitions?.filter((item) =>
                                                        item?.count?.count.toString().includes(query) ||
                                                        item.key.toLowerCase().includes(query))?.map((definition, index) => {
                                                            return (
                                                                <tr className="odd" key={index}>
                                                                    {/* <Link to='#'> */}
                                                                    <td className="sorting_1">
                                                                        <div className="d-flex justify-content-center align-items-center user-name">
                                                                            <div className="d-flex flex-column">
                                                                                <Link href="app-user-view-account.html" className="text-body text-truncate" >
                                                                                    <span className="fw-medium">{definition?.count?.count}</span>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <Link className="d-flex align-items-center" to="/Dashboard/ProcessDefinitionDetails" style={{ color: "#697a8d" }}>
                                                                            <span className="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2">
                                                                                <i className="bx bx-pie-chart-alt bx-xs" />
                                                                            </span>
                                                                            {definition?.key}
                                                                        </Link>
                                                                    </td>
                                                                    <td>
                                                                        <span className="badge bg-label-success">Active</span>
                                                                    </td>
                                                                    {/* </Link> */}
                                                                </tr>
                                                            )
                                                        })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
