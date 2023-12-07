import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavbarSide } from './NavbarSide'
import { Chart } from "react-google-charts";
import { Nav, Navbar, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import '../data/chart.css'
import { Link } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';

const PieChart = ({ data, options }) => (
    <div>
        <Chart chartType="PieChart" width="100%" height="400px" data={data} options={options} legendToggle />
    </div>
);


export const Dashboard = () => {

    console.log("---------Dashboard Pages---------")
    const [isLoading, setIsLoading] = useState(true);
    const [assginuser, setAssginuser] = useState('');
    const [unassginuser, setUnAssginuser] = useState('');
    const [withcandidategroups, setwithcandidategroups] = useState('');
    const [unfinishedprocessinstance, setunfinishedprocessinstance] = useState('');
    const [latestprocessdefinition, setlatestprocessdefinition] = useState('');
    const [deployments, setdeployments] = useState('');
    const [decisionDefinitionCount, setdecisionDefinitionCount] = useState('');
    const [processDefinitions, setprocessDefinitions] = useState([]);


    const fetchData = async (url) => {
        try {
            const res = await axios.get(url);
            console.log(`Data fetched from ${url}:`, res.data);
            return res.data; // Return the fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Throw the error for the caller to handle
        }
    };

    useEffect(() => {
        const fetchDashboardData = async () => {
            setIsLoading(true);
            try {
                const [
                    assignUserData,
                    unassignUserData,
                    withCandidateGroupsData,
                    unfinishedProcessInstanceData,
                    latestProcessDefinitionData,
                    deploymentData,
                    latestDecisionDefinitionData,
                    runningInstancesData
                ] = await Promise.all([
                    fetchData("http://localhost:3000/api/taskcount/assignuser"),
                    fetchData("http://localhost:3000/api/taskcount/unassignnuser"),
                    fetchData("http://localhost:3000/api/taskcount/withcandidategroups"),
                    fetchData("http://localhost:3000/api/count/unfinishedprocessinstance"),
                    fetchData("http://localhost:3000/api/count/latestprocessdefinition"),
                    fetchData("http://localhost:3000/api/count/deployments"),
                    fetchData("http://localhost:3000/api/count/latestdecisiondefinition"),
                    fetchData("http://localhost:3000/api/count/runninginstances")
                ]);

                setAssginuser(assignUserData.taskCount.count);
                setUnAssginuser(unassignUserData.unassignedTaskCount.count);
                setwithcandidategroups(withCandidateGroupsData.taskCount.count);
                setunfinishedprocessinstance(unfinishedProcessInstanceData.unfinishedProcessInstanceCount.count);
                setlatestprocessdefinition(latestProcessDefinitionData.processDefinitionCount.count);
                setdeployments(deploymentData.deploymentCount.count);
                setdecisionDefinitionCount(latestDecisionDefinitionData.decisionDefinitionCount.count);
                setprocessDefinitions(runningInstancesData.processDefinitions);

                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
                setIsLoading(false);
                // Handle error state if necessary
            }
        };

        fetchDashboardData();
    }, []);


    const data1 = [
        ["Task", "Hours per Day"],
        ["Assgin User", assginuser],
        ["UnAssgin User", unassginuser],
        ["Assigned to 1 or more groups", withcandidategroups],
    ];

    const options1 = {
        title: "Open Human Tasks",
        pieHole: 0.4,
        is3D: false,
        fontSize: 15,
        annotations: {
            textStyle: {
                fontSize: 14,
            },
            stem: {
                length: 0,
            },
            alwaysOutside: false,
            position: "center",
            // text: `Total: ${total}`,
            // column: 5,
        },
        legend: {
            position: "bottom",
            textStyle: {
                fontSize: 14,
            },
        },
    };

    // const data2 = [
    //     ["Task", "Hours per Day"],
    //     ["UnFinished Processinstance", unfinishedprocessinstance.unfinishedProcessInstanceCount.count],
    //     ["Deployments", deployments.deploymentCount.count],
    //     ["Latest Process Definition", latestprocessdefinition.processDefinitionCount.count],
    // ];

    // const options2 = {
    //     title: "Running Process Instances",
    //     pieHole: 0.4,
    //     is3D: false,
    //     fontSize: 15,
    //     legend: {
    //         position: "bottom",
    //         textStyle: {
    //             fontSize: 14,
    //         },
    //     },
    // };

    const data3 = [
        ["Task", "Hours per Day"],
        ...processDefinitions?.map((definition) => [
            definition?.key,
            definition?.count?.count,
        ]),
    ];

    const options3 = {
        title: "Running Process Instances",
        pieHole: 0.4,
        is3D: false,
        fontSize: 15,
        legend: {
            position: "bottom",
            textStyle: {
                fontSize: 14,
            },
        },

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
        <div>
            <Helmet>
                <title>Dashboard </title>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/app-logistics-dashboard.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
            </Helmet>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <NavbarSide />
                    <div className="layout-page" >
                        <Navbar expand="xl" variant="dark" bg="navbar-theme" className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center">
                            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                                    <i className="bx bx-menu bx-sm"></i>
                                </a>
                            </div>
                            <Navbar.Toggle aria-controls="navbar-collapse" />
                            <Navbar.Collapse id="navbar-collapse">
                                <Nav className="navbar-nav-right d-flex align-items-center">
                                    <div className="navbar-nav align-items-center">
                                        <div className="nav-item d-flex align-items-center">
                                            {/* <FontAwesomeIcon icon={faSearch} className="fs-4 lh-0" />
                                            <input
                                                type="text"
                                                className="form-control border-0 shadow-none ps-1 ps-sm-2"
                                                placeholder="Search..."
                                                aria-label="Search..."
                                            /> */}
                                            <i className="bx bx-search"></i>
                                            <input type="text" className="form-control border-0 shadow-none ps-1 ps-sm-2" placeholder="Search..." aria-label="Search..." />
                                        </div>
                                    </div>
                                    <Nav className="navbar-nav flex-row align-items-center ms-auto">
                                        <Nav.Item className="nav-item lh-1 me-3"><span></span></Nav.Item>
                                        <Nav.Item className="nav-item navbar-dropdown dropdown-user dropdown">
                                            <Dropdown>
                                                <Dropdown.Toggle as={Nav.Link} className="hide-arrow">
                                                    <div className="avatar avatar-online"><img src="../assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" /></div>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item>
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar avatar-online">
                                                                    <img src="../assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <span className="fw-medium d-block">John Doe</span>
                                                                <small className="text-muted">Admin</small>
                                                            </div>
                                                        </div>
                                                    </Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item as={Link} to="/AdminDashboard"><i className="bx bx-user me-2"></i><span className="align-middle">Admin</span></Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="bx bx-cog me-2"></i><span className="align-middle">Settings</span></Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="flex-shrink-0 bx bx-credit-card me-2"></i><span className="flex-grow-1 align-middle ms-1">Billing</span><span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span></Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item href="javascript:void(0);"><i className="bx bx-power-off me-2"></i><span className="align-middle">Log Out</span></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Nav.Item>
                                    </Nav>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <div className="content-wrapper" style={{ overflow: "auto", height: `${containerHeight - 75}px` }} >
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">

                                    <Link className="col-sm-6 col-lg-4 mb-4" to='/Dashboard/ProcessDefinition'>
                                        <div className="card card-border-shadow-primary h-100">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-2 pb-1">
                                                    <div className="avatar me-2">
                                                        <span className="avatar-initial rounded bg-label-primary"><i className="bx bxs-truck"></i></span>
                                                    </div>
                                                    <h4 className="ms-1 mb-0">{latestprocessdefinition}</h4>
                                                    <p className="mb-0" style={{ marginLeft: "6px" }}>Process Definition</p>
                                                </div>

                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-sm-6 col-lg-4 mb-4">
                                        <div className="card card-border-shadow-danger h-100">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-2 pb-1">
                                                    <div className="avatar me-2">
                                                        <span className="avatar-initial rounded bg-label-danger"><i className="bx bx-git-repo-forked"></i></span>
                                                    </div>
                                                    <h4 className="ms-1 mb-0">{decisionDefinitionCount}</h4>
                                                    <p className="mb-0" style={{ marginLeft: "6px" }}>Decision Definitions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 mb-4">
                                        <div className="card card-border-shadow-warning h-100">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-2 pb-1">
                                                    <div className="avatar me-2">
                                                        <span className="avatar-initial rounded bg-label-warning"><i className="bx bx-error"></i></span>
                                                    </div>
                                                    <h4 className="ms-1 mb-0">{deployments}</h4>
                                                    <p className="mb-0" style={{ marginLeft: "6px" }}>Deployments</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {isLoading ? (
                                    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: "10px" }}>
                                        <PuffLoader color="#696cff" size={30} />
                                    </div>
                                ) : (
                                    <div className="row">
                                        <div style={{ display: "flex" }}>
                                            <div style={{ flex: 1 }}>
                                                <PieChart data={data1} options={{ ...options1 }} />
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <PieChart data={data3} options={{ ...options3 }} />
                                            </div>
                                        </div>
                                        {/* <div style={{ display: "flex" }}>
                                        <div style={{ flex: 1 }}>
                                            <PieChart data={data2} options={{ ...options2 }} />
                                        </div>
                                    </div> */}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
