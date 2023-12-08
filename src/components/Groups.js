import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Form } from '@formio/react';
import { Link, useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import axios from 'axios'
import { NavbarSide } from './NavbarSide'
import { MainBpmn } from './MainBpmn';

export const Groups = () => {


    var id = useParams().id
    console.log("---------Groups Pages---------")
    const [data, setData] = useState([])
    const [dataSource, setDataSource] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const [groupTaskData, setGroupTaskData] = useState([]);
    const [groupHistoryData, setGroupHistoryData] = useState([]);
    const [groupTaskid, setGroupTaskid] = useState([]);
    const [formData, setFormData] = useState({});
    const [activeSection, setActiveSection] = useState(null);
    const [name1, setName1] = useState('');
    const [getDiaId, setDiaId] = useState(null)
    const [getDiakey, setDiakey] = useState(null)

    // const [tname, setTemp] = useState(null);

    const handleFormSubmit = (submission) => {
        console.log('Form Data submitted :', submission.data);
    }

    // console.log("data values", data)
    const [hasMore, setHasMore] = useState(true)
    useEffect(() => {
        getGroupsData()
        // getDiagramData
        // getGroupTaskData()
        getFormData()
        getHistoryData()
    }, [groupTaskid, id]);

    const [activeButton, setActiveButton] = useState("Form");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const formattedDate = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        return dateTime.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    const formattedTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        return dateTime.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    const getFormData = () => {
        {
            id ?
                axios.get(`http://localhost:3000/api/task?taskInstanceId=${id}`)
                    .then(response => {
                        console.log("Group Form", response.data)

                        // var x = response.data.updatedData.form_def;
                        var x = response.data.updatedData;
                        setFormData(x)


                    })
                    .catch(error => {
                        if (error.response) {
                            if (error.response.status === 404) {
                                console.log('Group Form :- Resource not found');
                            } else {
                                console.log(' Group Form :- Server returned an error:', error.response.status);
                            }
                        } else if (error.request) {
                            console.log('No response received from the server');
                        } else {
                            console.log('Error:', error.message);
                        }
                    })
                : console.log("Wait for get id")
        }

    }
    const claimTask = () => {
        var userId = localStorage.getItem("userId");
        axios.post(`http://localhost:3000/api/task/claim?taskId=${id}&userId=${userId}`)
            .then(response => {
                console.log("Group claimTask Data :- ", response);

            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 404) {
                        console.log('Group claimTask :- Resource not found');
                    } else {
                        console.log('Server returned an error:', error.response.status);
                    }
                } else if (error.request) {
                    console.log('No response received from the server');
                } else {
                    console.log('Error:', error.message);
                }
            });

    }
    const getHistoryData = () => {

        axios.get(`http://localhost:3000/api/history/operation?taskId=${id}`)
            .then(response => {
                console.log("Group History Data :- ", response.data);
                setGroupHistoryData(response.data)
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 404) {
                        console.log('Group History :- Resource not found');
                    } else {
                        console.log('Group History :- Server returned an error:', error.response.status);
                    }
                } else if (error.request) {
                    console.log('No response received from the server');
                } else {
                    console.log('Error:', error.message);
                }
            });

    }

    const getGroupsData = () => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/api/tasks/candidate-group`)
            .then(response => {
                console.log("Group list Data :- ", response);
                const groupsData = response.data;
                setData(groupsData);
                setDataSource(groupsData.slice(0, 10));
                if (groupsData.length <= 10) {
                    setHasMore(false);
                }



                var diagramvalue = response.data?.filter((u) => u.id === id)

                if (diagramvalue.length > 0) {
                    console.log("Group Diagram value :-", diagramvalue[0].processDefinitionId);
                    setDiaId(diagramvalue[0].processDefinitionId);
                    setDiakey(diagramvalue[0].taskDefinitionKey);
                } else {
                    console.log("No matching data found");
                }

                setIsLoading(false);
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 404) {
                        console.log('Group list :- Resource not found');
                    } else {
                        console.log('Group list :- Server returned an error:', error.response.status);
                    }
                } else if (error.request) {
                    console.log('No response received from the server');
                } else {
                    console.log('Error:', error.message);
                }
                setIsLoading(false);
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

        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px"
    }

    const toggleCollapse = (sectionId, sectionName) => {
        getGroupsData()
        setGroupTaskid(sectionId)
        setName1(sectionName)
        console.log(sectionId)
        if (activeSection === sectionId) {
            setActiveSection(null); // Collapse the section if it's already active
        } else {
            setActiveSection(sectionId); // Expand the section if it's not active
        }
    };

    return (

        <div className="layout-wrapper layout-content-navbar" >
            <Helmet>
                <title>Group List</title>
                <link rel="canonical" href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/" />
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/css/theme-dark-default.css" className="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <script src="https://www.google.com/search?q=google+25th+birthday&sca_esv=568736477&hl=en&sxsrf=AM9HkKlPU9o2kBne2uX3Ga2OJePIn3ejQA%3A1695795130309&source=hp&ei=uscTZcXPEIzv1e8P2KS20Ak&iflsig=AO6bgOgAAAAAZRPVyuCL_BGDh-lTqSjvlV2QeG90mhPC&oq=google+25&gs_lp=Egdnd3Mtd2l6Iglnb29nbGUgMjUqAggAMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyDRAAGIoFGLEDGIMBGAoyBBAAGAMyBBAAGAMyBBAAGAMyBBAAGAMyBBAAGAMyBBAAGAMyBBAAGANI9CpQAFj8HnABeACQAQCYAdYCoAHpD6oBBzAuNy4yLjG4AQPIAQD4AQHCAgcQIxiKBRgnwgIEECMYJ8ICDRAAGIoFGLEDGIMBGEPCAggQABiKBRiRAsICDhAAGIoFGLEDGIMBGJECwgITEC4YigUYsQMYgwEYxwEY0QMYQ8ICDRAuGIoFGMcBGNEDGEPCAgcQABiKBRhDwgIUEC4YigUYsQMYgwEYxwEY0QMYkQLCAgcQIxixAhgnwgITEC4YgAQYsQMYgwEYxwEY0QMYCsICCxAAGIoFGLEDGIMBwgINEAAYgAQYsQMYgwEYCsICChAAGIAEGLEDGAo&sclient=gws-wiz"></script>
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="https://a.omappapi.com/app/js/api.min.css" id="omapi-css" media="all" />
                <script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>

            </Helmet>
            <div className="layout-container" >
                <NavbarSide />
                <aside id="layout-menu" className="layout-menu menu-vertical menu"
                    style={{ width: "330px", backgroundColor: "rgba(255,255,255,.85)" }}>

                    <h4 className="fc-toolbar-title" id="fc-dom-1" style={{ marginTop: "15px" }}>
                        Groups List &nbsp;
                    </h4>
                    {isLoading ? (
                        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: "10px" }}>
                            <PuffLoader color="#696cff" size={30} />
                        </div>
                    ) : (
                        <ul className="menu-inner py-1" style={ce}>
                            <InfiniteScroll
                                dataLength={dataSource.length}
                                next={fetchMoreData}
                                hasMore={hasMore}
                                loader={
                                    dataSource.length !== 0 ? (
                                        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: "10px" }}>
                                            <PuffLoader color="#696cff" size={30} />
                                        </div>) : (<></>)
                                }
                                endMessage={<p>You are all set!</p>}
                                height={containerHeight - 83}
                            >
                                {dataSource.length !== 0 ? (
                                    dataSource?.map((u, index) => {

                                        const { name, id, created } = data[index % data.length]; 

                                        return (
                                            <li key={id} className="menu-item bs-toast toast fade show" style={{ margin: "5px", width: "300px" }}>
                                                <Link to={`/Groups/${id}`} onClick={() => toggleCollapse(id, name)} style={{ color: "#697a8d" }}>
                                                    <div className="toast-header">
                                                        <i className="bx bx-bell me-2" style={{ marginBottom: "5px" }}></i>
                                                        <div className="me-auto fw-semibold" style={{ marginBottom: "5px" }}>
                                                            {name}
                                                        </div>
                                                        <small>{formattedDate(created)}</small>
                                                    </div>

                                                </Link>
                                            </li>
                                        )

                                    })
                                ) : (<>Data not Found</>)}
                            </InfiniteScroll>
                        </ul>
                    )}
                </aside>

                <div className="layout-page">

                    <div className="content-wrapper">
                        <div className="container-lg flex-grow-1 container-p-y" style={{ height: `${containerHeight}px`, overflow: 'auto' }}>
                            {!id ?
                                <div style={{ outlineStyle: "solid", padding: "25px", borderRadius: "0.375rem", color: "#32333754" }} >
                                    <div className="me-3" style={{
                                        position: "relative",
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "stretch",
                                        width: "100%",
                                        color: "#697a8de0"
                                    }}>
                                        <i className='bx bxs-info-circle'></i>
                                        <div className="text-body" style={{ marginLeft: "10px" }}>
                                            Select a group task in the list.
                                        </div>
                                    </div>
                                </div>
                                : <>
                                    <div className="py-3 mb-4 d-flex justify-content-between">
                                        <h4 style={{ textAlign: "start" }}>
                                            <span className="text-muted fw-light"> Group Tasks List / </span> {name1}
                                        </h4>
                                        <Link className="nav-link" style={{ border: "solid", borderRadius: "5px" }} onClick={claimTask}><i className="bx bx-plus me-0 me-sm-1"></i>claim</Link>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">

                                            <ul className="nav nav-pills flex-column flex-md-row mb-3">
                                                <li className="nav-item">
                                                    <Link
                                                        to="#"
                                                        className={`nav-link ${activeButton === 'Form' ? 'active' : ''}`}
                                                        onClick={() => handleButtonClick('Form')}
                                                    >
                                                        <i className="bx bx-detail me-1"></i> Form
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        to="#"
                                                        className={`nav-link ${activeButton === 'History' ? 'active' : ''}`}
                                                        onClick={() => handleButtonClick('History')}
                                                    >
                                                        <i className="bx bx-history me-1"></i> History
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        to="#"
                                                        className={`nav-link ${activeButton === 'Diagram' ? 'active' : ''}`}
                                                        onClick={() => handleButtonClick('Diagram')}
                                                    >
                                                        <i className="bx bx-id-card me-1"></i> Diagram
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        to="#"
                                                        className={`nav-link ${activeButton === 'Comments' ? 'active' : ''}`}
                                                        onClick={() => handleButtonClick('Comments')}
                                                    >
                                                        <i className="bx bx-chat me-1"></i> Comments
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        to="#"
                                                        className={`nav-link ${activeButton === 'Document' ? 'active' : ''}`}
                                                        onClick={() => handleButtonClick('Document')}
                                                    >
                                                        <i className="bx bx-link-alt me-1"></i> Document
                                                    </Link>
                                                </li>
                                            </ul>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            {activeButton === 'Form' && (
                                                <div className='card' style={{ padding: "30px" }}>
                                                    {formData ?
                                                        <Form key={id} placeholder="enter name" form={formData.form_def} onSubmit={handleFormSubmit} />
                                                        : <>No data</>}
                                                </div>
                                            )}

                                            {activeButton === 'History' && (
                                                <>
                                                    {groupHistoryData.length ?
                                                        <div className="col-12 col-lg-12">
                                                            <div className="card mb-4">
                                                                <div className="card-datatable table-responsive">
                                                                    <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                                                        <table className="datatables-order-details table dataTable no-footer dtr-column" id="DataTables_Table_0" style={{ width: "709px" }}>
                                                                            <tbody>
                                                                                {
                                                                                    groupHistoryData.map((u) => {
                                                                                        return (
                                                                                            <tr className="odd">
                                                                                                <td className="control dtr-hidden" tabIndex="0" style={{ display: "none" }}></td>
                                                                                                <td className="sorting_1">
                                                                                                    <div className="d-flex justify-content-start align-items-center text-nowrap">

                                                                                                        <div className="d-flex flex-column">
                                                                                                            <h6 className="text-body mb-0">{u.userId}</h6>
                                                                                                            <small className="text-muted">{formattedDate(u.timestamp)}</small>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td><span>{formattedTime(u.timestamp)}</span></td>
                                                                                                <td className="" >
                                                                                                    <h6 className="mb-0">{u.operationType}</h6>
                                                                                                </td>
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
                                                        : <div className='card' style={{ padding: "30px" }}>
                                                            No Data
                                                        </div>
                                                    }
                                                </>
                                            )}

                                            {activeButton === 'Diagram' && (
                                                <>
                                                    <div style={{ height: "60vh" }}>
                                                        {/* {getDiaId + "++++" + getDiakey} */}
                                                        {isLoading ? (
                                                            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: "10px" }}>
                                                                <PuffLoader color="#696cff" size={30} />
                                                            </div>
                                                        ) : (
                                                            getDiaId ?
                                                                <MainBpmn style={{ height: "60vh" }} getDiaId={getDiaId} getDiakey={getDiakey} />
                                                                : "no data"
                                                        )}
                                                    </div>
                                                </>

                                            )}
                                            {activeButton === 'Comments' && (
                                                <>
                                                    Comments
                                                </>
                                            )}
                                            {activeButton === 'Document' && (
                                                <div>

                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
