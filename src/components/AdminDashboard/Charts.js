import React, { useEffect, useState } from 'react';
import { AdminSideNav } from './AdminSideNav';
import { Helmet } from 'react-helmet';
import io from 'socket.io-client';

// const socket = io.connect("http://localhost:3000", {
//     reconnection: true,
//     reconnectionAttempts: 3,
//     reconnectionDelay: 1000, // in milliseconds
// })      
export const Charts = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const socket = io("http://localhost:3000");
    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to the server');
        });

        socket.on('disconnect', (reason) => {
            console.log('Disconnected from the server:', reason);
        });

        // const handleChatMessage = (msg) => {
            
        // };

        socket.on('receive_message', (data)=>{
            setMessages((prevMessages) => [...prevMessages, data.message]);
            console.log('Received message from server:', data.message);
        });

        return () => {
            // socket.off('chat message', handleChatMessage);
            socket.disconnect();
            console.log('Disconnected from the server');
        };
    }, []); // Empty dependency array, runs once on mount

    const sendMessage = () => {
        socket.emit('chat message', message);
        setMessage('');
    };

    return (
        <div lang="en" class="light-style layout-menu-fixed layout-compact" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="vertical-menu-template-free">
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
                        <div class="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className='row'>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type your message..."
                                    />
                                    <button onClick={sendMessage}>Send</button>

                                    {/* Display chat messages */}
                                    <ul>
                                        {messages.map((msg, index) => (
                                            <li key={index}>{msg}</li>
                                        ))}
                                    </ul>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
