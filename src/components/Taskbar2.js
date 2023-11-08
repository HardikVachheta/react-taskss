import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import axios from 'axios'


export const Taskbar2 = ({ sendDataToParent }) => {

    // const dataToSend = "Hello from Child Component";

    // Call the parent's callback function with the data
    // onData(dataToSend);

    const [dataSource, setDataSource] = useState([])
    const [data, setData] = useState([])
    const [getId, setId] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [taskVariable, setTaskVariable] = useState([])

    var x = data.length
    // console.log("Task Lenth ", x)

    useEffect(() => {
        getTaskData()
    }, []);

    // function formatDate(inputDate) {
    //     const date = new Date(inputDate);
    //     const day = date.getDate().toString().padStart(2, '0');
    //     const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
    //     const year = date.getFullYear();
    //     return `${day}-${month}-${year}`;
    // }

    const formattedDate = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        return dateTime.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    const getTaskData = () => {

        var userId = localStorage.getItem("userId");
        axios.get(`http://localhost:3000/api/tasks?assignee=${userId}`)
            .then((response) => {
                console.log("Task List Data :- ", response.data);
                setId(response.data)

                const tasksData = response.data;
                setData(tasksData);
                setDataSource(tasksData.slice(0, 10));
                if (tasksData.length <= 10) {
                    setHasMore(false);
                }

                const taskVariablePromises = tasksData.map((u) => {
                    return axios.get(`http://localhost:3000/api/task?taskInstanceId=${u.id}`);
                });

                Promise.all(taskVariablePromises)
                    .then((responses) => {

                        const taskVariables = responses.map((response) => response.data);
                        console.log("Task Variables :- ", taskVariables);
                        setTaskVariable(taskVariables)

                    })
                    .catch(error => {
                        if (error.response) {
                            if (error.response.status === 404) {
                                console.log('Task Variables :- Resource not found');
                            } else {
                                console.log('Server returned an error:', error.response.status);
                            }
                        } else if (error.request) {
                            console.log('No response received from the server');
                        } else {
                            console.log('Error:', error.message);
                        }
                    })

            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 404) {
                        console.log('Resource not found');
                    } else {
                        console.log('Server returned an error:', error.response.status);
                    }
                } else if (error.request) {
                    console.log('No response received from the server');
                } else {
                    console.log('Error:', error.message);
                }
            });

    };

    const fetchMoreData = () => {
        if (dataSource.length < data.length) {
            setTimeout(() => {
                const start = dataSource.length;
                const end = start + 5;

                const newData = data.slice(start, end);
                setDataSource([...dataSource, ...newData]);

                if (end >= data.length) {
                    setHasMore(false);
                }
            }, 2000);
        } else {
            setHasMore(false);
        }
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

    var ce = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <>
            <aside id="layout-menu" className="layout-menu menu-vertical menu"
                style={{ width: "330px", backgroundColor: "rgba(255,255,255,.85)" }}>
                <Helmet>
                    {/* <title>Dashboard - Analytics | Sneat - Bootstrap 5 HTML Admin Template - Pro</title> */}
                    <script src="../assets/vendor/js/bootstrap.js" data-react-helmet="true"></script>
                    <link rel="canonical" href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/" />
                    <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
                    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                    {/* <script src="script.js"></script> */}
                    <link rel="stylesheet" href="../assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
                    <link rel="stylesheet" href="../assets/vendor/css/theme-dark-default.css" className="template-customizer-theme-css" />
                    <link rel="stylesheet" href="../assets/css/demo.css" />
                    <script src="../assets/vendor/js/helpers.js"></script>
                    {/* <script src="https://www.google.com/search?q=google+25th+birthday&sca_esv=568736477&hl=en&sxsrf=AM9HkKlPU9o2kBne2uX3Ga2OJePIn3ejQA%3A1695795130309&source=hp&ei=uscTZcXPEIzv1e8P2KS20Ak&iflsig=AO6bgOgAAAAAZRPVyuCL_BGDh-lTqSjvlV2QeG90mhPC&oq=google+25&gs_lp=Egdnd3Mtd2l6Iglnb29nbGUgMjUqAggAMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyDRAAGIoFGLEDGIMBGAoyBBAAGAMyBBAAGAMyBBAAGAMyBBAAGAMyBBAAGAMyBBAAGAMyBBAAGANI9CpQAFj8HnABeACQAQCYAdYCoAHpD6oBBzAuNy4yLjG4AQPIAQD4AQHCAgcQIxiKBRgnwgIEECMYJ8ICDRAAGIoFGLEDGIMBGEPCAggQABiKBRiRAsICDhAAGIoFGLEDGIMBGJECwgITEC4YigUYsQMYgwEYxwEY0QMYQ8ICDRAuGIoFGMcBGNEDGEPCAgcQABiKBRhDwgIUEC4YigUYsQMYgwEYxwEY0QMYkQLCAgcQIxixAhgnwgITEC4YgAQYsQMYgwEYxwEY0QMYCsICCxAAGIoFGLEDGIMBwgINEAAYgAQYsQMYgwEYCsICChAAGIAEGLEDGAo&sclient=gws-wiz"></script> */}
                    <link rel="stylesheet" href="../assets/css/demo.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                    <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                    {/* <link rel="stylesheet" href="https://a.omappapi.com/app/js/api.min.css" id="omapi-css" media="all" /> */}
                    {/* <script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script> */}

                </Helmet>
                <h4 className="fc-toolbar-title" id="fc-dom-1" style={{ marginTop: "15px" }}>
                    Task List &nbsp;

                    <Link data-bs-toggle="modal" data-bs-target="#basicModal" title="Add Task" style={{ color: 'black' }}
                        id="myButton">
                        <i className="bx bx-plus me-0 me-sm-1"></i>
                    </Link>

                </h4>
                <ul className="menu-inner py-1" style={ce}>
                    <InfiniteScroll
                        dataLength={dataSource.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={
                            dataSource.length !== 0 ? (
                                <div style={ce}>
                                    <PuffLoader color="#696cff" size={30} />
                                </div>) : (<></>)
                        }
                        endMessage={<p>You are all set!</p>}
                        height={containerHeight - 63}
                    >
                        {dataSource.length !== 0 ? (
                            dataSource?.map((u, index) => {

                                const { name, id, created, processDefinitionId } = data[index % data.length]; // Use data from JSON
                                const filteredTaskVariables = taskVariable.filter((x) => x.taskDetail.id === id);

                                return (
                                    <li key={id} className="menu-item bs-toast toast fade show" style={{ margin: "5px", width: "300px" }}>
                                        {/* <Link to={`/groups/${id}`} style={{ color: "#697a8d" }}> */}
                                        <Link to={`/TaskbarPages/${id}`} onClick={() => { sendDataToParent(processDefinitionId); }} style={{ color: "#697a8d" }} >
                                            <div className="toast-header">
                                                <i className="bx bx-bell me-2" style={{ marginBottom: "5px" }}></i>
                                                <div className="me-auto fw-semibold" style={{ marginBottom: "5px" }}>
                                                    {name}
                                                </div>
                                                <small>{formattedDate(created)}</small>
                                            </div>

                                            <div className="toast-body" style={{ textAlign: "start" }}>
                                                <tr className="me-auto fw-semibold">
                                                    <th>Invoice Amount</th>
                                                    &nbsp;
                                                    <th>Invoice Number</th>
                                                </tr>
                                                <tr>
                                                    <td>{filteredTaskVariables.length > 0 ? (
                                                        filteredTaskVariables[0].taskVariables.amount.value
                                                    ) : (
                                                        "Nodata"
                                                    )}</td>
                                                    &nbsp;
                                                    <td>{filteredTaskVariables.length > 0 ? (
                                                        filteredTaskVariables[0].taskVariables.invoiceNumber.value
                                                    ) : (
                                                        "Nodata"
                                                    )}</td>
                                                </tr>
                                                <tr>
                                                    <th>Creditor</th>
                                                    &nbsp;
                                                    <th>Approver</th>
                                                </tr>
                                                <tr>
                                                    <td>{filteredTaskVariables.length > 0 ? (
                                                        filteredTaskVariables[0].taskVariables.creditor.value
                                                    ) : (
                                                        "Nodata"
                                                    )}</td>
                                                    &nbsp;
                                                    <td>{filteredTaskVariables.length > 0 ? (
                                                        filteredTaskVariables[0].taskVariables.approver.value
                                                    ) : (
                                                        "Nodata"
                                                    )}</td>
                                                </tr>                                               
                                            </div>                
                                        </Link>
                                    </li>
                                )

                            })
                        ) : (<>Data not Found</>)}
                    </InfiniteScroll>
                </ul>
            </aside>
            <div className="modal fade" id="basicModal" tabIndex="-1" style={{ display: "none" }} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel1">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col mb-3">
                                    <label htmlFor="nameBasic" className="form-label">Name</label>
                                    <input type="text" id="nameBasic" className="form-control" placeholder="Enter Name" />
                                </div>
                            </div>
                            <div className="row g-2">
                                <div className="col mb-0">
                                    <label htmlFor="emailBasic" className="form-label">Email</label>
                                    <input type="email" id="emailBasic" className="form-control" placeholder="xxxx@xxx.xx" />
                                </div>
                                <div className="col mb-0">
                                    <label htmlFor="dobBasic" className="form-label">DOB</label>
                                    <input type="date" id="dobBasic" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
