import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AdminSideNav } from './AdminSideNav'
import { PuffLoader } from 'react-spinners'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const CategoryList = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = async () => {
        await axios.get("http://192.168.1.4:8087/categories").then((response) => {
            console.log("All User", response.data)
            setCategories(response.data)
            setLoading(false);
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
            setError(error);
            setLoading(false);
        });
    }
    console.log("All categories", categories)

    // const getUserDelete = async (id) => {
    //     await axios.delete(`http://localhost:3000/api/deleteuser?id=${id}`).then((response) => {
    //         console.log("delete user", response)
    //         getAllUser()
    //     })
    //     console.log("delete user id", id)
    // }


    return (
        <div lang="en" className="light-style layout-menu-fixed layout-compact" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="vertical-menu-template-free">
            <Helmet>
                 {/* <script src="script.js"></script> */}
                 
                 {/* <script src="../assets/vendor/js/helpers.js"></script> */}
            </Helmet>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <div style={{ position: 'fixed' }}>
                        <AdminSideNav />
                    </div>
                    <div className="layout-page">
                        <div className="flex-grow-1 container-p-y container-fluid">
                            <div className="content-wrapper">
                                <div class="container-xxl flex-grow-1 container-p-y">

                                    {loading ? (
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <PuffLoader color="#696cff" size={30} />
                                        </div>
                                    ) : error ? (
                                        <p>Error: {error}</p>
                                    ) : (
                                        <div class="row">
                                            <div className="card">

                                                <div className="card-header border-bottom">
                                                    <span className='d-flex align-items-center justify-content-between'>
                                                        <h5 className="card-title md-5">Category List</h5>
                                                    </span>
                                                </div>

                                                <div className="card-datatable table-responsive">
                                                    <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                                        <table className="datatables-users table border-top dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                                                            <thead>
                                                                <tr>
                                                                    <th className="control sorting_disabled dtr-hidden" rowSpan={1} colSpan={1} style={{ width: 150 }} aria-label="" >Category id</th>

                                                                    <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Role: activate to sort column ascending" >
                                                                        Category Name
                                                                    </th>
                                                                    <th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Plan: activate to sort column ascending" >
                                                                        Sub Category Number
                                                                    </th>
                                                                    {/* <th className="sorting sorting_desc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{ width: 327 }} aria-label="User: activate to sort column ascending" aria-sort="descending" >
                                                                        Email
                                                                    </th>
                                                                */}
                                                                    <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: 133 }} aria-label="Actions">
                                                                        Actions
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    categories.length !== 0 ? (
                                                                        categories.map((u) => {
                                                                            return (
                                                                                <tr className="odd" key={u.id}>
                                                                                    <td className="control">{u.id}</td>
                                                                                    <td className="sorting_1">
                                                                                        <div className="d-flex justify-content-start align-items-center user-name">
                                                                                            <div className="d-flex flex-column">
                                                                                                <a href="app-user-view-account.html" className="text-body text-truncate" >
                                                                                                    <span className="fw-medium">{u.name}</span>
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <span className="text-truncate d-flex align-items-center">
                                                                                            <span className="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2">
                                                                                                <i className="bx bx-pie-chart-alt bx-xs" />
                                                                                            </span>
                                                                                            {u.subCategories?.length}
                                                                                            {/* {u.active.toString()} */}
                                                                                        </span>
                                                                                    </td>
                                                                                    {/* <td>
                                                                                        <span className="fw-medium">{u.user.email}</span>
                                                                                    </td> */}
                                                                                    <td>
                                                                                        <div className="d-inline-block text-nowrap">
                                                                                            <Link to={`/AdminDashboard/UpdateCategory/${u?.id}`} title="Edit User" style={{ color: '#697a8d' }} offcanvasAddUser id="myButton">
                                                                                           
                                                                                                <i className="bx bx-edit me-0 me-sm-1"></i>
                                                                                            </Link>
                                                                                            {/* <Link to={`/AdminDashboard/UpdateUser2/${u.user.id}`} style={{ color: '#697a8d' }}>Edit</Link> */}
                                                                                            {/* <button className="btn btn-sm btn-icon delete-record">
                                                                                                <i className="bx bx-trash" /> */}
                                                                                            {/* <i className="bx bx-trash" onClick={() => { getUserDelete(u.user.id) }} /> */}
                                                                                            {/* </button> */}

                                                                                        </div>
                                                                                    </td>

                                                                                </tr>
                                                                            )
                                                                        })
                                                                    ) : (
                                                                        <tr className="odd">
                                                                            <td colSpan="5" className="text-center">
                                                                                <h5 className="card-title">No Data</h5>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                }
                                                            </tbody>

                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasAddUser" aria-labelledby="offcanvasAddUserLabel" aria-modal="true" role="dialog">
                                                    <div class="offcanvas-header">
                                                        <h5 id="offcanvasAddUserLabel" class="offcanvas-title">Add User</h5>
                                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body mx-0 flex-grow-0">
                                                        <form class="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework" id="addNewUserForm" onsubmit="return false" novalidate="novalidate">
                                                            <div class="mb-3 fv-plugins-icon-container">
                                                                <label class="form-label" for="add-user-fullname">Full Name</label>
                                                                <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe" name="userFullname" aria-label="John Doe" />
                                                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                                                            <div class="mb-3 fv-plugins-icon-container">
                                                                <label class="form-label" for="add-user-email">Email</label>
                                                                <input type="text" id="add-user-email" class="form-control" placeholder="john.doe@example.com" aria-label="john.doe@example.com" name="userEmail" />
                                                                <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                                                            <div class="mb-3">
                                                                <label class="form-label" for="add-user-contact">Contact</label>
                                                                <input type="text" id="add-user-contact" class="form-control phone-mask" placeholder="+1 (609) 988-44-11" aria-label="john.doe@example.com" name="userContact" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label class="form-label" for="add-user-company">Company</label>
                                                                <input type="text" id="add-user-company" class="form-control" placeholder="Web Developer" aria-label="jdoe1" name="companyName" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label class="form-label" for="user-role">User Role</label>
                                                                <select id="user-role" class="form-select">
                                                                    <option value="subscriber">Subscriber</option>
                                                                    <option value="editor">Editor</option>
                                                                    <option value="maintainer">Maintainer</option>
                                                                    <option value="author">Author</option>
                                                                    <option value="admin">Admin</option>
                                                                </select>
                                                            </div>
                                                            <div class="mb-4">
                                                                <label class="form-label" for="user-plan">Select Plan</label>
                                                                <select id="user-plan" class="form-select">
                                                                    <option value="basic">Basic</option>
                                                                    <option value="enterprise">Enterprise</option>
                                                                    <option value="company">Company</option>
                                                                    <option value="team">Team</option>
                                                                </select>
                                                            </div>
                                                            <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                                                            <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                                                            <input type="hidden" /></form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
