import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
// import data from '../data/dumpdata.json'
import { Link, useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import axios from 'axios'
import { Navbar } from './Navbar'


export const Groups = () => {


    var id = useParams().id
    console.log("---------Groups Pages---------")
    const [data, setData] = useState([])
    const [dataSource, setDataSource] = useState([]);
    const [groupTaskData, setGroupTaskData] = useState([]);
    const [groupTaskid, setGroupTaskid] = useState([]);
    const [activeSection, setActiveSection] = useState(null);

    const [tname, setTemp] = useState(null);



    // console.log("data values", data)
    const [hasMore, setHasMore] = useState(true)
    useEffect(() => {
        getGroupsData()
        getGroupTaskData()
    }, [groupTaskid]);

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

    const getGroupTaskData = () => {

        axios.get(`http://localhost:3000/api/tasks/candidate-group?candidateGroup=${groupTaskid}`)
            .then(response => {
                console.log("Group Task Data :- ", response.data.responseData);
                const task = response.data.responseData;
                setGroupTaskData(task)
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

    const getGroupsData = () => {

        var userId = localStorage.getItem("userId");
        axios.get(`http://localhost:3000/api/identity/group/?assignee=${userId}`)
            .then(response => {
                console.log("Group list Data :- ", response.data.groups);
                // const groupJSON = JSON.stringify(response.data.groups)
                // localStorage.setItem("GroupList", groupJSON);
                const groupsData = response.data.groups;
                setData(groupsData);
                setDataSource(groupsData.slice(0, 10));
                if (groupsData.length <= 10) {
                    setHasMore(false);
                }
                // setGroupTaskid()
                groupsData.map((u) => {
                    axios.get(`http://localhost:3000/api/tasks/candidate-group?candidateGroup=${u.id}`)
                        .then(response => {
                            console.log("Group Task Data :- ", response.data.responseData);
                            setTemp(response.data.responseData);
                            // response.data.responseData.map((x)=>{
                            //     return setTemp(x.name)
                            // })
                            // const task = response.data.responseData;
                            // setGroupTaskData(task)
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

        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px"
    }



    // Function to toggle the collapse state for a section
    const toggleCollapse = (sectionId) => {
        setGroupTaskid(sectionId)
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
                {/* <script src="script.js"></script> */}
                <link rel="stylesheet" href="../assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/css/theme-dark-default.css" className="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                {/* <script src="../assets/vendor/js/helpers.js"></script> */}
                <script src="https://www.google.com/search?q=google+25th+birthday&sca_esv=568736477&hl=en&sxsrf=AM9HkKlPU9o2kBne2uX3Ga2OJePIn3ejQA%3A1695795130309&source=hp&ei=uscTZcXPEIzv1e8P2KS20Ak&iflsig=AO6bgOgAAAAAZRPVyuCL_BGDh-lTqSjvlV2QeG90mhPC&oq=google+25&gs_lp=Egdnd3Mtd2l6Iglnb29nbGUgMjUqAggAMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyDRAAGIoFGLEDGIMBGAoyBBAAGAMyBBAAGAMyBBAAGAMyBBAAGAMyBBAAGAMyBBAAGAMyBBAAGANI9CpQAFj8HnABeACQAQCYAdYCoAHpD6oBBzAuNy4yLjG4AQPIAQD4AQHCAgcQIxiKBRgnwgIEECMYJ8ICDRAAGIoFGLEDGIMBGEPCAggQABiKBRiRAsICDhAAGIoFGLEDGIMBGJECwgITEC4YigUYsQMYgwEYxwEY0QMYQ8ICDRAuGIoFGMcBGNEDGEPCAgcQABiKBRhDwgIUEC4YigUYsQMYgwEYxwEY0QMYkQLCAgcQIxixAhgnwgITEC4YgAQYsQMYgwEYxwEY0QMYCsICCxAAGIoFGLEDGIMBwgINEAAYgAQYsQMYgwEYCsICChAAGIAEGLEDGAo&sclient=gws-wiz"></script>
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="https://a.omappapi.com/app/js/api.min.css" id="omapi-css" media="all" />
                <script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>

            </Helmet>
            <div className="layout-container" >
                <Navbar />
                <aside id="layout-menu" className="layout-menu menu-vertical menu"
                    style={{ width: "330px", backgroundColor: "rgba(255,255,255,.85)" }}>

                    <h4 className="fc-toolbar-title" id="fc-dom-1" style={{ marginTop: "15px" }}>
                        Groups List &nbsp;

                        <Link data-bs-toggle="modal" data-bs-target="#basicModal" title="Add Task" style={{ color: 'black' }}
                            id="myButton">
                            {/* <i className="bx bx-plus me-0 me-sm-1"></i> */}
                        </Link>

                    </h4>

                    {/* <ul className="menu-inner py-1" style={ce}>
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

                                    const { name, id } = data[index % data.length]; // Use data from JSON

                                    return (
                                        <li key={id} className="menu-item bs-toast toast fade show" style={{ margin: "5px", width: "300px" }}>
                                            
                                            <h2 className="accordion-header" id="headingOne">
                                                <button type="button"
                                                    className={`accordion-button ${activeSection === id ? '' : 'collapsed'
                                                        }`}
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#accordionOne"
                                                    aria-expanded="false"
                                                    aria-controls="accordionOne"
                                                    onClick={() => toggleCollapse(id)} style={{ color: "#697a8d" }} >
                                                    <div className="toast-header">
                                                        <i className="bx bx-bell me-2" ></i>
                                                        <div className="me-auto fw-semibold">
                                                            {name}
                                                        </div>
                                                    </div>
                                                </button>
                                            </h2>
                                            <div
                                                id={id}
                                                className={`accordion-collapse collapse ${activeSection === id ? 'show' : ''
                                                    }`}
                                                data-bs-parent="#accordionExample"
                                                style={{}}
                                            >
                                                <div className="accordion-body">
                                                    Lemon drops chocolate cake gummies carrot cake chupa chups muffin
                                                    topping. Sesame snaps icing marzipan gummi bears macaroon dragée
                                                    danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
                                                    gummi bears marshmallow pastry pie.
                                                </div>
                                            </div>
                                        </li>
                                    )

                                })
                            ) : (<>Data not Found</>)}
                        </InfiniteScroll>
                    </ul> */}
                    {/* <ul className="menu-inner py-1" style={ce}>
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

                                    return (
                                        <li key={id} className="menu-item bs-toast toast fade show" style={{ margin: "5px", width: "300px" }}>
                                            <Link to={`/groups/${id}`} style={{ color: "#697a8d" }}>
                                                <div className="toast-header">
                                                    <i className="bx bx-bell me-2" style={{ marginBottom: "5px" }}></i>
                                                    <div className="me-auto fw-semibold" style={{ marginBottom: "5px" }}>
                                                        {name}
                                                    </div>
                                                    {/* <small>{formattedDate(created)}</small> */}
                    {/* </div> */}
                    {/* <div className="toast-body" style={{ textAlign: "-webkit-left" }}>
                                                {task_details}
                                            </div> */}
                    {/* </Link>
                                        </li>
                                    )

                                })
                            ) : (<>Data not Found</>)}
                        </InfiniteScroll>
                    </ul> */}
                    <div className="col-md mb-4 mb-md-2" style={ce}>
                        <div className="accordion py-1" id="accordionExample">
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
                                height={containerHeight - 83}
                            >
                                {dataSource.length !== 0 ? (
                                    dataSource?.map((u, index) => {

                                        const { name, id } = data[index % data.length]; // Use data from JSON

                                        return (
                                            <div
                                                className={`card accordion-item ${activeSection === id ? 'active' : ''}`}
                                                key={id} style={{ marginBottom: "7px" }}>
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button
                                                        style={{ backgroundColor: "#efefef63" }}
                                                        // style={{backgroundColor:"#efefef"}}
                                                        type="button"
                                                        className={`accordion-button ${activeSection === id ? '' : 'collapsed'
                                                            }`}
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#accordionOne"
                                                        aria-expanded="false"
                                                        aria-controls="accordionOne"
                                                        onClick={() => toggleCollapse(id)}
                                                    >
                                                        {name}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={id}
                                                    className={`accordion-collapse collapse ${activeSection === id ? 'show' : ''
                                                        }`}
                                                    data-bs-parent="#accordionExample"
                                                    style={{}}
                                                >
                                                    <div className="accordion-body">
                                                        {groupTaskData.length ?
                                                            groupTaskData.map((u) => {
                                                                return (
                                                                    <Link to={`/Groups/${u.id}`} style={{ color: "#697a8d" }} className='d-flex justify-content-between py-2'>
                                                                        <div>{u.name} </div><div> {formattedDate(u.created)}</div>
                                                                    </Link>
                                                                )
                                                            })
                                                            : <> . . . . . </>}
                                                    </div>
                                                </div>
                                            </div>
                                        )

                                    })
                                ) : (<>Data not Found</>)}
                            </InfiniteScroll>
                        </div>
                    </div>
                    {/* {tname.map((u)=>{
    return console.log(u.name)
})} */}
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
                                    <h4 class="py-3 mb-4" style={{ textAlign: "start" }}>
                                        <span class="text-muted fw-light">Account Settings / </span> Connections
                                    </h4>

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
                                                        {/* <i className="bx bx-link-alt me-1"></i> Diagram */}
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
                                            {activeButton === 'Form' && (
                                                <div className='card' style={{ padding: "30px" }}>
                                                    {/* {id ? */}

                                                    {/* <Form key={id} placeholder="enter name" form={formData} onSubmit={handleFormSubmit} /> */}

                                                    {/* : ''} */}
                                                </div>
                                            )}

                                            {activeButton === 'History' && (
                                                // historyData?.map((his) => {
                                                // return (
                                                <></>
                                                // <div>Content for History Page goes here :- {his?.taskDefinitionKey}</div>
                                                // )
                                                // })
                                            )}

                                            {activeButton === 'Diagram' && (
                                                <>
                                                    <div style={{ height: "60vh" }}>
                                                        {/* <MainBpmn style={{ height: "60vh" }} getDiaId={getDiaId} /> */}
                                                    </div>
                                                </>

                                            )}
                                            {activeButton === 'Comments' && (
                                                <>
                                                    {
                                                        // <>
                                                        //     <div className="chat-history-footer">
                                                        //         <form className="form-send-message d-flex justify-content-between align-items-center " onSubmit={handleSubmit}>
                                                        //             <label className="col-sm-2 col-form-label" htmlFor="basic-default-name">Add Comments </label>
                                                        //             <input className="form-control message-input border-0 me-3 shadow-none"
                                                        //                 name='comment'
                                                        //                 value={values.comment}
                                                        //                 onChange={handleChange}
                                                        //                 onBlur={handleBlur}
                                                        //                 placeholder="Enter Your Comments here..." />
                                                        //             <div className="message-actions d-flex align-items-center">
                                                        //                 <button className="btn btn-primary d-flex send-msg-btn" type='submit'>
                                                        //                     <i className="bx bx-paper-plane me-md-1 me-0"></i>
                                                        //                     <span className="align-middle d-md-inline-block d-none">Send</span>
                                                        //                 </button>
                                                        //             </div>


                                                        //         </form>
                                                        //     </div>

                                                        //     {errors.comment && touched.comment ? (
                                                        //         <div className="form-error" style={{ color: "red" }}>{errors.comment}</div>
                                                        //     ) : null}

                                                        //     <div className="d-flex justify-content-center col w-100"
                                                        //         style={{ height: `${containerHeight - 245}px`, overflow: 'auto' }}>
                                                        //         <div className="toast-container position-relative w-90">
                                                        //             {
                                                        //                 commentData?.map((u) => {
                                                        //                     return (
                                                        //                         // <p className="mb-0">{u.message}</p>
                                                        //                         <div className="bs-toast toast fade show" style={{ margin: "5px", width: "650px" }} >
                                                        //                             <div className="toast-header">
                                                        //                                 <i className="bx bx-bell me-2" style={{ marginBottom: "5px" }}></i>
                                                        //                                 <div className="me-auto fw-medium" style={{ marginBottom: "5px" }} >{u.message}</div>
                                                        //                                 <small style={{ marginBottom: "5px" }}>{formattedDate(u.time)}</small>&emsp;
                                                        //                                 <small style={{ marginBottom: "5px" }}>{formattedTime(u.time)}</small>
                                                        //                                 {/* <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button> */}
                                                        //                             </div>
                                                        //                         </div>
                                                        //                     )
                                                        //                 })
                                                        //             }
                                                        //         </div>
                                                        //     </div>
                                                        // </>
                                                    }
                                                </>
                                            )}
                                            {activeButton === 'Document' && (
                                                <div>
                                                    Content for Document Page goes here.
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
