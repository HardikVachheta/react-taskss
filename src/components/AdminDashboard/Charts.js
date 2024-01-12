import React, { useEffect, useRef, useState } from 'react';
import { AdminSideNav } from './AdminSideNav';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";

export const Charts = () => {

    var userId = localStorage.getItem("userId")

    var hardik_User = userId
    
    // var userId2 = JSON.parse(localStorage.getItem("chat-app-current-user"));
    // console.log(userId2._id.$oid)

    const navigate = useNavigate();
    const socket = useRef();
    const [msg, setMsg] = useState("");
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    var demo_User = currentChat?.userId

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        console.log("changeCurrentChat",contact)
        setCurrentChat(contact);
        getFunction(contact)
    };

    
    useEffect(() => {
        getAllUser()
        setCurrentUser(userId)
    }, [userId])

    useEffect(() => {
        if (currentUser) {
            socket.current = io("http://localhost:3000");
            socket.current.emit("add-user", currentUser);
            console.log("socketio add-user",currentUser)
        }
    }, [currentUser]);

    const [alluser, setAllUser] = useState([]);


    const getAllUser = async () => {
        await axios.get("http://localhost:3000/api/user/alluser").then((response) => {

            const username = response.data
            const filtername = username.filter((u) => {
                return u.userId !== userId
            })
            // console.log("filtername",filtername)
            console.log("All User", filtername)
            setAllUser(filtername)
        }).catch(error => {
            if (error.response) {
                if (error.response.status === 404) {
                    console.log('List of User :- Resource not found');
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

    const [messages, setMessages] = useState([]);
    const scrollRef = useRef();
    const [arrivalMessage, setArrivalMessage] = useState(null);

    // useEffect(async () => {
    //     // const data = demo_User;
    //     const response = await axios.post('http://localhost:3000/api/getmsg', {
    //         from: hardik_User,
    //         to: currentChat?.userId,
    //     });
    //     console.log("response", response.data)
    //     // if (response?.data) {
    //         setMessages(response.data);
    //     // }
    // }, []);
    const getFunction = async (contact) => {
        console.log("getFunction")
        const data = hardik_User;
        console.log(data)
        const response = await axios.post('http://localhost:3000/api/getmsg', {
            from: data,
            to: contact?.userId,
        });
        console.log("response", response.data)
        // if (response?.data) {
        setMessages(response.data);
        // }
    }
    // useEffect(async () => {
    //     try {
    //         const response = await axios.post('http://localhost:3000/api/getmsg', {
    //             from: demo_User,
    //             to: hardik_User,
    //         });

    //         // Ensure that response.data is defined before setting messages
    //         // if (response?.data) {
    //         //     setMessages(response.data);
    //         // }
    //     } catch (error) {
    //         console.error('Error fetching messages:', error.message);
    //     }
    // }, []);


    // console.log("messages", messages)

    // useEffect(() => {
    //     const getCurrentChat = async () => {
    //         if (demo_User) {
    //             hardik_User;
    //         }
    //     };
    //     getCurrentChat();
    // }, [demo_User]);

    const sendChat = (event) => {
        event.preventDefault();
        if (msg.length > 0) {
            // console.log("msg", msg)
            handleSendMsg(msg);
            setMsg("");
        }
    };

    const handleSendMsg = async (msg) => {
        try {
            const data = hardik_User;
            socket.current.emit("send-msg", {
                from: data,
                to: currentChat?.userId,
                msg,
            });
            // console.log("socketio send-msg",msg)
            // console.log("socketio from", data)
            // console.log("socketio to",currentChat?.userId)

            await axios.post('http://localhost:3000/api/addmsg', {
                from: data,
                to: currentChat?.userId,
                message: msg,
            });


            const updatedMessages = [...messages, { fromSelf: true, message: msg }];
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
        // console.log("socket msg-recieve")
        if (socket?.current) {
            console.log("socket msg-recieve inside")
            socket.current.on("msg-recieve", (msg) => {
                console.log("Main socket",msg)
                setArrivalMessage({ fromSelf: false, message: msg });
            });
        }
    }, []);

    useEffect(() => {
        arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


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
                                                        alluser?.map((u, index) => {
                                                            return (
                                                                <li className={`chat-contact-list-item ${index === currentSelected ? "active" : ""}`} key={index}
                                                                    onClick={() => changeCurrentChat(index, u)}>
                                                                    <a className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar avatar-online">
                                                                            <img src="../../assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" />
                                                                        </div>
                                                                        <div className="chat-contact-info flex-grow-1 ms-3">
                                                                            <h6 className="chat-contact-name text-truncate m-0" style={{ textAlign: "left" }}>{u?.userId}</h6>
                                                                            {/* <p className="chat-contact-status text-truncate mb-0 text-muted">I will purchase it for sure. 👍</p> */}
                                                                        </div>
                                                                        {/* <small className="text-muted mb-auto">30 Minutes</small> */}
                                                                    </a>
                                                                </li>
                                                            )
                                                        })
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
                                                // backgroundColor: "#696cff",

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
                                                                <div className="flex-shrink-0 avatar">
                                                                    <img src="../../assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" data-bs-toggle="sidebar" data-overlay data-target="#app-chat-sidebar-right" />
                                                                </div>
                                                                <div className="chat-contact-info flex-grow-1 ms-3">
                                                                    <h6 className="m-0">{currentChat ? currentChat.userId : ''}</h6>
                                                                    <small className="user-status text-muted">NextJS developer</small>
                                                                </div>
                                                            </div>
                                                            {/* <div className="d-flex align-items-center">
                                                            <i className="bx bx-phone-call cursor-pointer d-sm-block d-none me-3 fs-4" />
                                                            <i className="bx bx-video cursor-pointer d-sm-block d-none me-3 fs-4" />
                                                            <i className="bx bx-search cursor-pointer d-sm-block d-none me-3 fs-4" />
                                                            <div className="dropdown">
                                                                <button className="btn p-0" type="button" id="chat-header-actions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="bx bx-dots-vertical-rounded fs-4" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="chat-header-actions">
                                                                    <a className="dropdown-item" href="javascript:void(0);">View Contact</a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">Mute Notifications</a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">Block Contact</a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">Clear Chat</a>
                                                                    <a className="dropdown-item" href="javascript:void(0);">Report</a>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        </div>
                                                    </div>
                                                    <div className="chat-history-body ps ps--active-y">
                                                        <ul className="list-unstyled chat-history mb-0">
                                                            {currentChat === undefined ? (
                                                                <div>No data </div>
                                                            ) : (
                                                                <>  {messages.map((message,index) => {
                                                                    return (
                                                                        <>
                                                                            {
                                                                                message.fromSelf ? (<li className="chat-message chat-message-right" ref={scrollRef} key={index}>
                                                                                    <div className="d-flex overflow-hidden">
                                                                                        <div className="chat-message-wrapper flex-grow-1">
                                                                                            <div className="chat-message-text">
                                                                                                <p className="mb-0">{message.message}</p>
                                                                                            </div>
                                                                                            <div className="text-end text-muted mt-1">
                                                                                                <i className="bx bx-check-double text-success" />
                                                                                                <small>10:00 AM</small>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="user-avatar flex-shrink-0 ms-3">
                                                                                            <div className="avatar avatar-sm">
                                                                                                <img src="../../assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                ) : (
                                                                                    <li className="chat-message" ref={scrollRef}>
                                                                                        <div className="d-flex overflow-hidden">
                                                                                            <div className="user-avatar flex-shrink-0 me-3">
                                                                                                <div className="avatar avatar-sm">
                                                                                                    <img src="../../assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="chat-message-wrapper flex-grow-1">
                                                                                                <div className="chat-message-text">
                                                                                                    <p className="mb-0">{message.message}</p>
                                                                                                </div>
                                                                                                <div className="text-muted mt-1">
                                                                                                    <small>10:02 AM</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                )
                                                                            }
                                                                        </>
                                                                    );
                                                                })}
                                                                </>
                                                            )}
                                                        </ul>
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
                                                <div>nodata</div>)}
                                        </div>
                                        <div className="app-overlay" />
                                    </div>
                                </div>
                            </div>

                            <div className="content-backdrop fade" />
                        </div>

                        {/* <div class="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className='row'>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type your message..."
                                    />
                                    <button onClick={sendMessage}>Send</button>

                                    {/* Display chat messages */}
                        {/* <ul>
                                        {messages.map((msg, index) => (
                                            <li key={index}>{msg}</li>
                                        ))}
                                    </ul> */}
                        {/* <input
                                        placeholder="Room Number..."
                                        onChange={(event) => {
                                            setRoom(event.target.value);
                                        }}
                                    />
                                    <button onClick={joinRoom}> Join Room</button>
                                    <input
                                        placeholder="Message..."
                                        onChange={(event) => {
                                            setMessage(event.target.value);
                                        }}
                                    />
                                    <button onClick={sendMessage}> Send Message</button>
                                    <h1> Message:</h1>
                                    {messageReceived} */}
                        {/* </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
