import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { updateUserSchema } from '../../schemas';
import axios from 'axios';
import { PuffLoader } from 'react-spinners'
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { AdminSideNav } from './AdminSideNav';
export const UpdateUser = () => {

    const navigate = useNavigate();

    var id = useParams().id
    const [loading, setLoading] = useState(true);

    const initialValues = {
        id: id,
        firstName: "",
        lastName: "",
        email: "",
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues } = useFormik({
        initialValues: initialValues,
        validationSchema: updateUserSchema,
        onSubmit: async (values) => {
            console.log("updated inprocess", values)
            try {
                const response = await axios.put(`http://localhost:3000/api/user/${id}/profile`, values);
                Swal.fire({
                    title: 'Update Successful',
                    icon: 'success',
                    timer: 1500
                });
                navigate("/AdminDashboard/")
                console.log('Update successful:', response);
            } catch (error) {
                Swal.fire({
                    title: 'UnSuccessful',
                    icon: 'erorr',
                    timer: 1500
                });
                console.error('Update failed:', error);
            }

        }
    })


    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/user/alluser`);
                console.log(response.data)

                const userData = response.data; // assuming the API returns user data

                var mainvalue = userData.filter((u) => {
                    return u.userId === id
                })

                console.log("username", mainvalue)
                const userToUpdate = mainvalue[0].user;
                setValues(userToUpdate); // set the values once the data is fetched
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        getUserData();
    }, [id, setValues]);
    var ce = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    if (loading) {
        return <div style={ce}>
            <PuffLoader color="#696cff" size={30} />
        </div>
    }
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
                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/app-logistics-dashboard.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
            </Helmet>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <AdminSideNav />
                    <div className="layout-page">
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                               
                                <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1" style={{ width: "985px" }}>
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

    )
}
