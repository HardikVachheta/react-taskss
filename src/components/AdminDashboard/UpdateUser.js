import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import { updateUserSchema } from '../../schemas'



export const UpdateUser = () => {

    var id = useParams().id
    const [alluser, setAllUser] = useState([]);


    useEffect(() => {
        getAllUser()
    }, [])

    const initialValues = {
        id: id,
        firstName: "",
        lastName: "",
        email: "",
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: updateUserSchema,
        onSubmit: async (values) => {
            console.log("updated inprocess",values)
            try {
                const response = await axios.put(`http://localhost:3000/api/user/${id}/profile`, values);
                console.log('Update successful:', response);
            } catch (error) {
                console.error('Update failed:', error);
            }

        }
    })
    const getAllUser = async () => {
        await axios.get("http://localhost:3000/api/user/alluser").then((response) => {
            console.log("All User", response.data)
            setAllUser(response.data)
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

    return (
        <div lang="en" className="light-style layout-compact layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="horizontal-menu-template">
            <Helmet>
                <title> List User </title>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
                {/* <script src="../assets/vendor/js/helpers.js"></script> */}
                {/* <script src="../assets/vendor/js/bootstrap.js" data-react-helmet="true"></script> */}
                {/* <link rel="stylesheet" href="../assets/css/demo.css" /> */}
                {/* <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" /> */}
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/app-logistics-dashboard.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />

            </Helmet>

            <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
                <div className="layout-container">
                    <AdminNav />
                    <div className="layout-page" style={{ marginTop: "60px" }}>
                        <div className="content-wrapper">
                            <h6 className='d-flex'>
                                <span className="text-muted fw-light">&emsp;&emsp; Dashboard </span>&nbsp; » Update User
                            </h6>
                            <div className="container-xxl flex-grow-1">
                                <div className='row'>
                                    <div className="col-xl-3 col-lg-5 col-md-5 order-1 order-md-0" style={{ position: 'fixed' }}>
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <h5 className="pb-2 border-bottom mb-4">Details</h5>
                                                <div className="info-container" >
                                                    <ul className="list-unstyled" style={{ marginBottom: "300px" }}>
                                                        <li className="mb-3">
                                                            <span className="fw-medium me-2">Profile</span>

                                                        </li>
                                                        <li className="mb-3">
                                                            <span className="fw-medium me-2">Account</span>

                                                        </li>
                                                        <li className="mb-3">
                                                            <span className="fw-medium me-2">Groups</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1" style={{ marginLeft: "350px", width: "985px" }}>
                                        <div className="card mb-4">
                                            <div className="card-header d-flex align-items-center justify-content-between">
                                                <h5 className="mb-0">Basic Layout</h5> <small className="text-muted float-end">Default label</small>
                                            </div>
                                            <div className="card-body">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label" htmlFor="basic-default-name">First Name</label>
                                                        <div className="col-sm-10">
                                                            <input type="text"
                                                                name='firstName'
                                                                value={values.firstName}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className="form-control"
                                                                id="basic-default-firstName"
                                                                placeholder="John Doe" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label" htmlFor="basic-default-name">Last Name</label>
                                                        <div className="col-sm-10">
                                                            <input type="text"
                                                                name='lastName'
                                                                value={values.lastName}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className="form-control"
                                                                id="basic-default-lastName"
                                                                placeholder="John Doe" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label" htmlFor="basic-default-email">Email</label>
                                                        <div className="col-sm-10">
                                                            <div className="input-group input-group-merge">
                                                                <input type="text"
                                                                    name='email'
                                                                    value={values.email}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    id="basic-default-email"
                                                                    className="form-control"
                                                                    placeholder="john.doe" aria-label="john.doe" aria-describedby="basic-default-email2" />
                                                                <span className="input-group-text" id="basic-default-email2">@example.com</span>
                                                            </div>
                                                            <div className="form-text"> You can use letters, numbers &amp; periods </div>
                                                        </div>
                                                    </div>

                                                    <div className="row justify-content-end">
                                                        <div className="col-sm-10">
                                                            <button type="submit" className="btn btn-primary">Send</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
