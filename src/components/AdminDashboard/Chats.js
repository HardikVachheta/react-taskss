import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import PerfectScrollbar from 'perfect-scrollbar';
// import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { AdminSideNav } from './AdminSideNav';
import { Helmet } from 'react-helmet';
import axios from "axios";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import { PuffLoader } from 'react-spinners';
import { Alert } from 'react-bootstrap';


export const Chats = () => {

    var userId = localStorage.getItem("userId")
    let prevDatestamp = null;
    let countNumber = null;
    let mostRecentTimestamp = null;
    let showAvatar = true;
    var hardik_User = userId

    // const navigate = useNavigate();
    const socket = useRef();
    const [msg, setMsg] = useState("");
    // const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    const [messageCounts, setMessageCounts] = useState([]);
    // const [onlineUsers, setOnlineUsers] = useState([]);
    // var demo_User = currentChat?.userId

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        console.log("changeCurrentChat", contact)
        setCurrentChat(contact);
        getFunction(contact)

    };


    useEffect(() => {
        getAllUser()
        setCurrentUser(userId)
    }, [userId])


    const [onlineUsers, setOnlineUsers] = useState([]);
    useEffect(() => {
        if (currentUser) {
            socket.current = io("http://localhost:3000");
            socket.current.emit("add-user", currentUser);

            console.log("socketio add-user", currentUser)
            socket.current.on("online-users", (users) => {
                console.log("online user", users)
                setOnlineUsers(users);
            });
            return () => {
                // Cleanup Socket.io connection on component unmount
                socket.current.disconnect();
            };
        }
    }, [currentUser]);

    const [onlinedata, setonlineData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/getMongoUser'); // Replace with your actual backend route
                const onuser = response.data
                const filtername = onuser.filter((u) => {
                    return u.userId !== userId
                })
                setonlineData(filtername);
                console.log("online", filtername)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [currentUser]);


    const [alluser, setAllUser] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null);

    const getAllUser = async () => {
        await axios.get("http://localhost:3000/api/user/alluser").then((response) => {

            const username = response.data
            const filtername = username.filter((u) => {
                return u.userId !== userId
            })
            // console.log("filtername",filtername)
            console.log("All User", filtername)
            setAllUser(filtername)
            setLoading(false); // Set loading to false after data is fetched

        }).catch(error => {
            if (error.response) {
                if (error.response.status === 500) {
                    setError('Internal Server Error');
                } else if (error.response.status === 404) {
                    setError('Resource not found');
                } else {
                    setError('Server returned an error: ' + error.response.status);
                }
            } else if (error.request) {
                setError('No response received from the server');
            } else {
                setError('Error: ' + error.message);
            }
            setLoading(false); // Set loading to false if there's an error
        });
    }

    const [messages, setMessages] = useState([]);
    const scrollRef = useRef();
    const [arrivalMessage, setArrivalMessage] = useState(null);

    const getFunction = async (contact) => {
        console.log("getFunction", contact?.userId)

        const data = hardik_User;

        const response = await axios.post('http://localhost:3000/api/getmsg', {
            from: data,
            to: contact?.userId,
        });

        socket.current.on("msg-recieve", (msg) => {
            const timestamp = new Date();
            console.log("Main socket", msg)
            setMessageCounts(msg)
            setArrivalMessage({ fromSelf: false, message: msg.msg, createdAt: timestamp });
            console.log("arrivalMessage", arrivalMessage)
        });

        console.log("response", response.data)

        setMessages(response.data);

    }

    const sendChat = (event) => {
        event.preventDefault();
        if (msg.length > 0) {
            handleSendMsg(msg);
            setMsg("");
        }
    };

    const handleSendMsg = async (msg) => {
        try {
            const data = hardik_User;
            const timestamp = new Date(); // Get the current timestamp
            const messageObject = {
                from: data,
                to: currentChat?.userId,
                msg,
                createdAt: timestamp.toISOString(), // Convert timestamp to a string
            };

            socket.current.emit("send-msg", messageObject);


            await axios.post('http://localhost:3000/api/addmsg', {
                from: data,
                to: currentChat?.userId,
                message: msg,
            });


            const updatedMessages = [...messages, { fromSelf: true, message: msg, createdAt: timestamp }];
            setMessages(updatedMessages);

        } catch (error) {
            // Handle AxiosError
            if (axios.isAxiosError(error)) {
                console.error('Axios Error:', error.response || error.message);
            } else {
                // Handle other errors
                console.error('Error:', error.message);
            }
        }
    };
    useEffect(() => {

        if (socket?.current) {
            console.log("socket msg-recieve inside")

            socket.current.on("msg-recieve", (msg) => {
                const timestamp = new Date();
                console.log("Main socket", msg)
                setArrivalMessage({ fromSelf: false, message: msg.msg, createdAt: timestamp });
                console.log("arrivalMessage", arrivalMessage)
                // scrollToBottom();
            });
        }
    }, [arrivalMessage]);

    useEffect(() => {
        arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const formatTimestamp = (timestamp) => {
        const options = { hour: '2-digit', minute: '2-digit' };
        return new Date(timestamp).toLocaleTimeString('en-IN', options);
    };

    const formatDaystamp = (createdAt) => {
        const date = new Date(createdAt);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    };


    return (
        <div lang="en" className="light-style layout-menu-fixed layout-compact" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="vertical-menu-template-free">
            <Helmet>
                <title> Admin Dashboard </title>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />

                <link rel="stylesheet" href="../assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/app-chat.css" />

                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/app-logistics-dashboard.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
            </Helmet>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <div style={{ position: 'fixed' }}>
                        <AdminSideNav />
                    </div>
                    <div className="layout-page">

                        <div className="content-wrapper">
                            <div className="flex-grow-1 container-p-y container-fluid">
                                <div className="app-chat overflow-hidden card">
                                    <div className="row g-0">
                                        <div className="col app-chat-contacts app-sidebar flex-grow-0 overflow-hidden border-end" id="app-chat-contacts">
                                            <div className="sidebar-header pt-3 px-3 mx-1">
                                                <div className="d-flex align-items-center me-3 me-lg-0">
                                                    <div className="flex-shrink-0 avatar avatar-online me-2" data-bs-toggle="sidebar" data-overlay="app-overlay-ex" data-target="#app-chat-sidebar-left">
                                                        <img className="user-avatar rounded-circle cursor-pointer" src="../../assets/img/avatars/1.png" alt="Avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 input-group input-group-merge rounded-pill ms-1">
                                                        <span className="input-group-text" id="basic-addon-search31"><i className="bx bx-search fs-4" /></span>
                                                        <input type="text" className="form-control chat-search-input" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon-search31" />
                                                    </div>
                                                </div>
                                                <i className="bx bx-x cursor-pointer position-absolute top-0 end-0 mt-2 me-1 fs-4 d-lg-none d-block" data-overlay data-bs-toggle="sidebar" data-target="#app-chat-contacts" />
                                            </div>
                                            <hr className="container-m-nx mt-3 mb-0" />
                                            <div className="sidebar-body ps ps--active-y">

                                                <ul className="list-unstyled chat-contact-list pt-1" id="chat-list">
                                                    <li className="chat-contact-list-item chat-contact-list-item-title">
                                                        <h5 className="text-primary mb-0">Chats</h5>
                                                    </li>
                                                    <li className="chat-contact-list-item chat-list-item-0 d-none">
                                                        <h6 className="text-muted mb-0">No Chats Found</h6>
                                                    </li>
                                                    {
                                                        error ? (
                                                            <Alert variant="danger">
                                                                {error}
                                                            </Alert>
                                                        ) : (
                                                            loading ? (
                                                                <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: "10px" }}>
                                                                    <PuffLoader color="#696cff" size={30} />
                                                                </div>
                                                            ) : (
                                                                alluser?.map((u, index) => {
                                                                    const isOnline = onlineUsers.some((onlineUser) => onlineUser.userId === u.userId);
                                                                    // const messageCount = messageCounts.get(u.userId) || 0; // Get message count for the user
                                                                    console.log("selected user",currentChat?.userId)
                                                                    console.log("check user is ", messageCounts?.from)
                                                                    countNumber = messageCounts?.from === currentChat?.userId ? countNumber + 1 : ''
                                                                    console.log("countNumber",countNumber)
                                                                    // const isOnline = onlinedata.some((onlineUser) => onlineUser.username === u.userId && onlineUser.status === "online");
                                                                    // const isNumber = messageCounts.filter((num) => num.key === u.userId)
                                                                    return (
                                                                        <li className={`chat-contact-list-item ${index === currentSelected ? "active" : ""}`} key={index}
                                                                            onClick={() => changeCurrentChat(index, u)}>
                                                                            <a className="d-flex align-items-center">
                                                                                <div className={`flex-shrink-0 avatar ${isOnline ? "avatar-online" : "avatar-offline"}`}>
                                                                                    <img src="../../assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" />
                                                                                </div>
                                                                                <div className="chat-contact-info flex-grow-1 ms-3">
                                                                                    <h6 className="chat-contact-name text-truncate m-0" style={{ textAlign: "left" }}>{u?.userId}</h6>
                                                                                    {/* <p className="chat-contact-status text-truncate mb-0 text-muted">I will purchase it for sure. 👍</p> */}
                                                                                </div>
                                                                                {/* <span class="badge badge-center rounded-pill bg-danger ms-auto">{messageCount > 0 ? messageCount : ''}</span> */}
                                                                                {/* <small className="text-muted mb-auto">30 Minutes</small> */}
                                                                            </a>
                                                                        </li>
                                                                    )
                                                                })
                                                            )
                                                        )
                                                    }
                                                </ul>
                                                {/* <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div> */}
                                                {/* <div className="ps__rail-y" style={{ top: '0px', height: '359px', right: '0px' }}>
                                                    <div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '120px' }} />
                                                </div> */}
                                            </div>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                padding: '.518rem .75rem',
                                                margin: '.5rem .75rem',
                                                borderLeft: '2px solid rgba(0, 0, 0, 0)',
                                                cursor: 'pointer',
                                                borderRadius: '.375rem',
                                                backgroundColor: "rgb(66 69 219)"

                                            }}>
                                                <ul className="list-unstyled chat-contact-list pt-1" id="chat-list">
                                                    <li className='chat-contact-list-item active'>
                                                        <a className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 avatar avatar-online">
                                                                <img src="../../assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" />
                                                            </div>
                                                            <div className="chat-contact-info flex-grow-1 ms-3">
                                                                <h6 className="chat-contact-name text-truncate m-0" style={{ textAlign: "left", color: "#fff" }}>{userId}</h6>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col app-chat-history">
                                            {currentChat ? (
                                                <div className="chat-history-wrapper">

                                                    <div className="chat-history-header border-bottom">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="d-flex overflow-hidden align-items-center">
                                                                <i className="bx bx-menu bx-sm cursor-pointer d-lg-none d-block me-2" data-bs-toggle="sidebar" data-overlay data-target="#app-chat-contacts" />
                                                                <div className={`flex-shrink-0 avatar ${onlineUsers.some((onlineUser) => onlineUser.userId === currentChat.userId) ? "avatar-online" : "avatar-offline"}`}>
                                                                    <img src="../../assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" data-bs-toggle="sidebar" data-overlay data-target="#app-chat-sidebar-right" />
                                                                </div>
                                                                <div className="chat-contact-info flex-grow-1 ms-3">
                                                                    <h6 className="m-0">{currentChat ? currentChat.userId : ''}</h6>
                                                                    <small className="user-status text-muted">{(onlineUsers.some((onlineUser) => onlineUser.userId === currentChat.userId)) ? 'Online' : 'Offline'}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="chat-history-body">
                                                        <ul className="list-unstyled chat-history mb-0" >

                                                            {currentChat === undefined ? (
                                                                <div>No data </div>
                                                            ) : (
                                                                <>  {messages.map((message, index) => {
                                                                    const currentTimestamp = formatTimestamp(message.createdAt);

                                                                    // Check if the current message has the same timestamp as the most recent one
                                                                    if (currentTimestamp === mostRecentTimestamp) {
                                                                        // If it does, don't show the avatar for this message
                                                                        showAvatar = false;
                                                                    } else {
                                                                        // If it doesn't, update the most recent timestamp and show the avatar
                                                                        mostRecentTimestamp = currentTimestamp;
                                                                        showAvatar = true;
                                                                    }
                                                                    // const currentTimestamp = formatTimestamp(message.createdAt);
                                                                    // const showAvatar = currentTimestamp !== prevTimestamp;

                                                                    // // Update the previous timestamp for the next iteration
                                                                    // prevTimestamp = currentTimestamp;

                                                                    // -----------------------------------------------------------
                                                                    // const currentDaystamp = formatDaystamp(message.createdAt);
                                                                    // const showDaystamp = prevDatestamp !== currentDaystamp;
                                                                    // const nextMessage = messages[index + 1];

                                                                    // // Check if next message exists and if its timestamp is different from the current message
                                                                    // const differentTimestampFromNext = nextMessage && formatTimestamp(nextMessage.createdAt) !== formatTimestamp(message.createdAt);

                                                                    // prevDatestamp = currentDaystamp;
                                                                    // -----------------------------------------------------------
                                                                    const currentDaystamp = formatDaystamp(message.createdAt);
                                                                    const showDaystamp = prevDatestamp !== currentDaystamp;
                                                                    const prevMessage = messages[index - 1];

                                                                    // Check if previous message exists and if its timestamp is the same as the current message
                                                                    const sameTimestampAsPrevious = prevMessage && formatTimestamp(prevMessage.createdAt) === formatTimestamp(message.createdAt);

                                                                    prevDatestamp = currentDaystamp;

                                                                    return (

                                                                        <React.Fragment key={index}>
                                                                            {showDaystamp && (
                                                                                <tag
                                                                                    title="Premium"
                                                                                    contenteditable="false"
                                                                                    spellcheck="false"
                                                                                    tabIndex="-1"
                                                                                    className="tagify__tag tagify--noAnim"
                                                                                    value="Premium"
                                                                                >
                                                                                    <x
                                                                                        title=""
                                                                                        className="tagify__tag__removeBtn"
                                                                                        role="button"
                                                                                        aria-label="remove tag"
                                                                                    ></x>
                                                                                    <div style={{ padding: "15px" }}>
                                                                                        <span className="tagify__tag-text">
                                                                                            {formatDaystamp(message.createdAt)}
                                                                                        </span>
                                                                                    </div>
                                                                                </tag>
                                                                            )}
                                                                            {
                                                                                message.fromSelf ? (
                                                                                    <li className="chat-message chat-message-right" key={index}>
                                                                                        {/* //  message.fromSelf ? (<li className="chat-message chat-message-right" ref={scrollRef} key={index}> */}
                                                                                        <div className="d-flex overflow-hidden" style={{ maxWidth: 'calc(100% - 15%)' }}>
                                                                                            <div className="chat-message-wrapper flex-grow-1">
                                                                                                <div className="chat-message-text" style={{ textAlign: "justify" }}>
                                                                                                    <p className="mb-0 text-break">{message.message}

                                                                                                        {/* <small className="" style={{ marginTop: "3.6px",marginLeft: "10px", fontVariantCaps: "small-caps", float: "inline-end" }}>{formatTimestamp(message.createdAt)}&nbsp;
                                                                                                        <i className="bx bx-check-double text-success" />
                                                                                                    </small> */}
                                                                                                        {/* <p className="mb-0 text-break" style={{ position: 'relative' }}>
                                                                                                        {message.message}
                                                                                                        <small style={{ position: 'absolute', right: 0, bottom: 0 }}>
                                                                                                            {formatTimestamp(message.createdAt)}
                                                                                                            &nbsp;<i className="bx bx-check-double text-success" />
                                                                                                        </small>
                                                                                                    </p> */}
                                                                                                        <p className="mb-0 mb-0" style={{ textAlign: "right" }}>
                                                                                                            <small style={{ fontVariantCaps: "small-caps" }}>{formatTimestamp(message.createdAt)}&nbsp;
                                                                                                                <i className="bx bx-check-double text-success" />
                                                                                                            </small>
                                                                                                        </p>

                                                                                                    </p>
                                                                                                </div>
                                                                                                {/* {differentTimestampFromNext && (
                                                                                                <div className="textend text-muted mt-1">
                                                                                                    <i class="bx bx-check-double text-success"></i>&nbsp;
                                                                                                    <small>{formatTimestamp(message.createdAt)}</small>
                                                                                                </div>
                                                                                            )} */}
                                                                                                {/* <div class="text-end text-muted mt-1">
                                                                                                <i class="bx bx-check-double text-success"></i>
                                                                                                <small>{formatTimestamp(message.createdAt)}</small>
                                                                                            </div> */}
                                                                                            </div>
                                                                                            <div className="user-avatar flex-shrink-0 ms-3">
                                                                                                <div className="avatar avatar-sm">
                                                                                                    {showAvatar && (
                                                                                                        <img src="../../assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
                                                                                                    )}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                ) : (
                                                                                    <li className="chat-message">
                                                                                        {/* // <li className="chat-message" ref={scrollRef}> */}
                                                                                        <div className="d-flex overflow-hidden" style={{ maxWidth: 'calc(100% - 15%)' }}>
                                                                                            <div className="user-avatar flex-shrink-0 me-3">
                                                                                                <div className="avatar avatar-sm">
                                                                                                    {showAvatar && (
                                                                                                        <img src="../../assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" />
                                                                                                    )}
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="chat-message-wrapper flex-grow-1">
                                                                                                <div className="chat-message-text" style={{ textAlign: "justify" }}>
                                                                                                    <p className="mb-0 mb-0 text-break">{message.message}
                                                                                                        <p className="mb-0 mb-0" style={{ textAlign: "right" }}>
                                                                                                            {message.fromSelf === false && (
                                                                                                                <small style={{ fontVariantCaps: "small-caps" }}>{formatTimestamp(message.createdAt)}</small>
                                                                                                            )}
                                                                                                        </p>
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                )
                                                                            }
                                                                        </React.Fragment>
                                                                    );
                                                                })}
                                                                </>
                                                            )}
                                                        </ul>
                                                        <div ref={scrollRef} />
                                                        {/* <div className="ps__rail-x" style={{ left: '0px', bottom: '-672px' }}>
                                                            <div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} />
                                                        </div>
                                                        <div className="ps__rail-y" style={{ top: '672px', height: '426px', right: '0px' }}>
                                                            <div className="ps__thumb-y" tabIndex={0} style={{ top: '261px', height: '165px' }} />
                                                        </div> */}
                                                    </div>

                                                    <div className="chat-history-footer">
                                                        <form className="form-send-message d-flex justify-content-between align-items-center "
                                                            onSubmit={(event) => sendChat(event)}>
                                                            <input className="form-control message-input border-0 me-3 shadow-none"
                                                                placeholder="Type your message here..."
                                                                onChange={(e) => setMsg(e.target.value)}
                                                                value={msg} />
                                                            <div className="message-actions d-flex align-items-center">
                                                                <i className="speech-to-text bx bx-microphone bx-sm cursor-pointer" />
                                                                <label htmlFor="attach-doc" className="form-label mb-0">
                                                                    <i className="bx bx-paperclip bx-sm cursor-pointer mx-3 text-body" />
                                                                    <input type="file" id="attach-doc" hidden />
                                                                </label>
                                                                <button className="btn btn-primary d-flex send-msg-btn">
                                                                    <i className="bx bx-paper-plane me-md-1 me-0" />
                                                                    <span className="align-middle d-md-inline-block d-none">Send</span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="text-center">
                                                    <img src="../assets/img/backgrounds/robot.gif" alt="Robot Image" className="robot-image" style={{ height: "70vh" }} />
                                                    <div>
                                                        <h1>Welcome, <span>{userId}!</span></h1>
                                                        <h3>Please select a chat to start messaging.</h3>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="app-overlay" />
                                    </div>
                                </div>
                            </div>

                            <div className="content-backdrop fade" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
