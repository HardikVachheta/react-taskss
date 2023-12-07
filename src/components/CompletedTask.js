import React, { useEffect, useState } from 'react'
import { NavbarSide } from './NavbarSide'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { PuffLoader } from 'react-spinners'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'

export const CompletedTask = () => {

    // var id = useParams().id
    console.log("---------Completed Task Pages---------")
    const [data, setData] = useState([])
    const [dataSource, setDataSource] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [hasMore, setHasMore] = useState(true)
    useEffect(() => {
        getCompletedData()
    }, []);

    const getCompletedData = () => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/api/tasks/complete`)
            .then(response => {
                const completedData = response.data.completedTaskDetails;
                console.log("Completed Data :- ", completedData);
                setData(completedData);
                setDataSource(completedData.slice(0, 10));
                if (completedData.length <= 10) {
                    setHasMore(false);
                }

                // var diagramvalue = response.data?.filter((u) => u.id === id)

                // if (diagramvalue.length > 0) {
                //     console.log("Group Diagram value :-", diagramvalue[0].processDefinitionId);
                //     setDiaId(diagramvalue[0].processDefinitionId);
                //     setDiakey(diagramvalue[0].taskDefinitionKey);
                // } else {
                //     console.log("No matching data found");
                // }

                setIsLoading(false);
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 404) {
                        console.log('Completed Task :- Resource not found');
                    } else {
                        console.log('Completed Task :- Server returned an error:', error.response.status);
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

    // const toggleCollapse = (sectionId, sectionName) => {
    //     getGroupsData()
    //     setGroupTaskid(sectionId)
    //     // getGroupTaskData(sectionId)
    //     setName1(sectionName)
    //     console.log(sectionId)
    //     if (activeSection === sectionId) {
    //         setActiveSection(null); // Collapse the section if it's already active
    //     } else {
    //         setActiveSection(sectionId); // Expand the section if it's not active
    //     }
    // };
    var ce = {
        justifyContent: "center",
        alignItems: "center",
        margin: "10px"
    }

    return (
        <div>
            <Helmet>
                <title>Completed Task </title>
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
                    <aside id="layout-menu" className="layout-menu menu-vertical menu"
                        style={{ width: "330px", backgroundColor: "rgba(255,255,255,.85)" }}>

                        <h4 className="fc-toolbar-title" id="fc-dom-1" style={{ marginTop: "15px" }}>
                            Completed Task
                        </h4>
                        {isLoading ? (
                            <div style={{ display:'flex' , justifyContent: "center", alignItems: "center", margin: "10px" }}>
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
                                            <div style={{ display:'flex' , justifyContent: "center", alignItems: "center", margin: "10px" }}>
                                                <PuffLoader color="#696cff" size={30} />
                                            </div>) : (<></>)
                                    }
                                    endMessage={<p>You are all set!</p>}
                                    height={containerHeight - 83}
                                >
                                    {dataSource.length !== 0 ? (
                                        dataSource?.map((u, index) => {

                                            const { name, id, endTime, processDefinitionId } = data[index % data.length]; // Use data from JSON

                                            return (
                                                <li key={id} className="menu-item bs-toast toast fade show" style={{ margin: "5px", width: "300px" }}>
                                                    <Link to='' style={{ color: "#697a8d" }}>
                                                        {/* <Link to={`/Groups/${id}`} onClick={() => toggleCollapse(id, name)} style={{ color: "#697a8d" }}> */}
                                                        <div className="toast-header">
                                                            <i className="bx bx-bell me-2" style={{ marginBottom: "5px" }}></i>
                                                            <div className="me-auto fw-semibold" style={{ marginBottom: "5px" }}>
                                                                {name}
                                                            </div>
                                                            <small>{formattedDate(endTime)}</small> &nbsp;
                                                            <small>{formattedTime(endTime)}</small>
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
                    <div className="layout-page" >
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
