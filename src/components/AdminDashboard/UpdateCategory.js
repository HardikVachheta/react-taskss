import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { AdminSideNav } from './AdminSideNav'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet'
import { Link, useNavigate, useParams } from 'react-router-dom';

export const UpdateCategory = () => {

    var id = useParams().id

    const [groupData, setGroups] = useState('')

    const initialValues = {
        id: id,
        name: "",
    };

    // const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues } = useFormik({
    //     initialValues: initialValues,
    //     validationSchema: updateUserSchema,
    //     onSubmit: async (values) => {
    //         console.log("updated inprocess", values)
    //         try {
    //             const response = await axios.put(`http://localhost:3000/categories/${id}`, values);
    //             Swal.fire({
    //                 title: 'Update Successful',
    //                 icon: 'success',
    //                 timer: 1500
    //             });
    //             navigate("/AdminDashboard/")
    //             console.log('Update successful:', response);
    //         } catch (error) {
    //             Swal.fire({
    //                 title: 'UnSuccessful',
    //                 icon: 'erorr',
    //                 timer: 1500
    //             });
    //             console.error('Update failed:', error);
    //         }

    //     }
    // })


    // useEffect(() => {
    //     const getUserData = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:3000/api/user/alluser`);
    //             console.log(response.data)

    //             const userData = response.data; // assuming the API returns user data

    //             var mainvalue = userData.filter((u) => {
    //                 return u.userId === id
    //             })

    //             console.log("username", mainvalue)
    //             const userToUpdate = mainvalue[0].user;
    //             setValues(userToUpdate); // set the values once the data is fetched
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching user data:', error);
    //         }
    //     };

    //     getUserData();
    // }, [id, setValues]);

    return (
        <div lang="en" className="light-style layout-menu-fixed layout-compact" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="vertical-menu-template-free">
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <div style={{ position: 'fixed' }}>
                        <AdminSideNav />
                    </div>
                    <div className="layout-page">
                        <div className="flex-grow-1 container-p-y container-fluid">
                            <div className="content-wrapper">
                                <div class="container-xxl flex-grow-1 container-p-y">
                                    {/* <form onSubmit={handleSubmit}>
                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label" htmlFor="basic-default-name">First Name</label>
                                            <div className="col-sm-10">
                                                <input type="text"
                                                    name='firstName'
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="form-control"
                                                    id="basic-default-firstName"
                                                    placeholder="John Doe" />
                                            </div>
                                        </div>
                                        {/* <div className="row mb-3">
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
                                        </div> */}

                                        {/* <div className="row justify-content-end">
                                            <div className="col-sm-10">
                                                <button type="submit" className="btn btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </form> */} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
