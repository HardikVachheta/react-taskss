import React, { useEffect, useState } from 'react'
import { AdminSideNav } from './AdminSideNav'
import { Helmet } from 'react-helmet'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { updateGroupSchema } from '../../schemas';
import axios from 'axios';
import Swal from 'sweetalert2';

export const UpdateGroup2 = () => {
    const navigate = useNavigate();

    const [allgroup, setAllgroup] = useState([]);
    const [activeTab, setActiveTab] = useState('navs-pills-top-profile');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    var id = useParams().id
    const [loading, setLoading] = useState(true);

    const initialValues = {
        id: id,
        name: "",
        type: ""
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues } = useFormik({
        initialValues: initialValues,
        validationSchema: updateGroupSchema,
        onSubmit: async (values) => {
            console.log("updated inprocess", values)
            try {
                const response = await axios.put(`http://localhost:3000/api/groups/${id}`, values);
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


        getGroupData();
    }, [id, setValues]);

    const getGroupData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/groups/alluser`);
            console.log(response.data)

            const groupData = response.data; // assuming the API returns user data
            // setAllgroup(groupData)

            var mainvalue = groupData.filter((u) => {
                return u.groupId === id
            })

            console.log("group name", mainvalue)
            const groupToUpdate = mainvalue[0].group;

            setAllgroup(mainvalue[0].users)
            console.log(mainvalue[0].users)

            setValues(groupToUpdate);

            // set the values once the data is fetched
            setLoading(false);
        } catch (error) {
            console.error('Error fetching group data:', error);
        }
    };

    const getgroupDelete = async (id) => {
        await axios.delete(`http://localhost:3000/api/deletegroup?id=${id}`).then((response) => {
            console.log("delete group", response)
            getGroupData()
        })
        console.log("delete group id", id)
    }

    return (
        <div lang="en" class="light-style layout-compact layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="../assets/">
            <Helmet>
                <title> Admin Dashboard </title>
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/flag-icons.css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/app-logistics-dashboard.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href='../assets/vendor/css/core.css' className="template-customizer-core-css" />
                <link rel="stylesheet" href='../assets/vendor/css/theme-default.css' className="template-customizer-theme-css" />
            </Helmet>


            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <div style={{ position: "fixed" }}>
                        <AdminSideNav />
                    </div>
                    <div className="layout-page" style={{ marginTop: "30px" }}>
                        <div className="content-wrapper">
                            <h6 className='d-flex'>
                                <span className="text-muted fw-light">&emsp;&emsp; Dashboard </span>&nbsp; » Update Group » {id}
                            </h6>
                            <div className="container-xxl flex-grow-1">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="nav-align-top mb-4">
                                            <ul className="nav nav-pills mb-3" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        type="button"
                                                        className={`nav-link ${activeTab === 'navs-pills-top-profile' ? 'active' : ''}`}
                                                        role="tab"
                                                        onClick={() => handleTabClick('navs-pills-top-profile')}
                                                        aria-controls="navs-pills-top-profile"
                                                        aria-selected={activeTab === 'navs-pills-top-profile'}
                                                    >
                                                        Imformation
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        type="button"
                                                        className={`nav-link ${activeTab === 'navs-pills-top-account' ? 'active' : ''}`}
                                                        role="tab"
                                                        onClick={() => handleTabClick('navs-pills-top-account')}
                                                        aria-controls="navs-pills-top-account"
                                                        aria-selected={activeTab === 'navs-pills-top-account'}
                                                    >
                                                        Account
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        type="button"
                                                        className={`nav-link ${activeTab === 'navs-pills-top-group' ? 'active' : ''}`}
                                                        role="tab"
                                                        onClick={() => handleTabClick('navs-pills-top-group')}
                                                        aria-controls="navs-pills-top-group"
                                                        aria-selected={activeTab === 'navs-pills-top-group'}
                                                    >
                                                        Users
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className={`tab-pane fade ${activeTab === 'navs-pills-top-profile' ? 'active show' : ''}`} role="tabpanel">
                                                    <div class="card-header d-flex justify-content-between align-items-center">
                                                        <h5 class="mb-0">Basic Layout</h5> <small class="text-muted float-end">Default label</small>
                                                    </div>
                                                    <div class="card-body">
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="row mb-3">
                                                                <label className="col-sm-2 col-form-label" htmlFor="basic-default-name">Group Name</label>
                                                                <div className="col-sm-10">
                                                                    <input type="text"
                                                                        name='name'
                                                                        value={values.name}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        className="form-control"
                                                                        id="basic-default-firstName"
                                                                        placeholder="John Doe" />
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3">
                                                                <label className="col-sm-2 col-form-label" htmlFor="basic-default-name">Type</label>
                                                                <div className="col-sm-10">
                                                                    <input type="text"
                                                                        name='type'
                                                                        value={values.type}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        className="form-control"
                                                                        id="basic-default-lastName"
                                                                        placeholder="John Doe" />
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
                                                <div className={`tab-pane fade ${activeTab === 'navs-pills-top-account' ? 'active show' : ''}`} role="tabpanel">
                                                    Content for Profile tab
                                                </div>
                                                <div className={`tab-pane fade ${activeTab === 'navs-pills-top-group' ? 'active show' : ''}`} role="tabpanel">
                                                    {/* <table className="datatables-groups table border-top dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                                                        <thead>
                                                            <tr>
                                                                <th>id</th>
                                                                <th>firstName</th>
                                                                <th>lastName</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>101</td>
                                                                <td>Hardik</td>
                                                                <td>Vachheta</td>
                                                            </tr>
                                                            <tr>
                                                                <td>102</td>
                                                                <td>Shailendra</td>
                                                                <td>Goad</td>
                                                            </tr>
                                                            <tr>
                                                                <td>103</td>
                                                                <td>Tilak</td>
                                                                <td>Bhanderi</td>
                                                            </tr>
                                                        </tbody>

                                                    </table> */}
                                                    <table className="datatables-groups table border-top dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                                                        <thead>

                                                            <tr>
                                                                <th className="control sorting_disabled dtr-hidden" aria-label="" >group Id</th>

                                                                <th className="sorting d-flex justify-content-start" tabIndex={0} aria-controls="DataTables_Table_0">
                                                                    &nbsp;&nbsp;&nbsp;  Name
                                                                </th>
                                                                <th className="sorting justify-content-start" tabIndex={0} aria-controls="DataTables_Table_0">
                                                                    Type
                                                                </th>
                                                                <th className="sorting_disabled" aria-label="Actions">
                                                                    Actions
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                allgroup.length !== 0 ? (
                                                                    allgroup.map((u) => {
                                                                        return (
                                                                            <tr className="odd" key={u.users?.id}>
                                                                                <td className="control" tabIndex={0}>{u?.id}</td>
                                                                                <td>
                                                                                    <div className="d-flex justify-content-start align-items-center user-name">
                                                                                        <div className="d-flex flex-column">
                                                                                            <Link to='' className="text-body text-truncate" >
                                                                                                <span className="fw-medium">&nbsp; {u.firstName}</span>
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="text-truncate d-flex align-items-center">
                                                                                        <span className="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2">
                                                                                            <i className="bx bx-pie-chart-alt bx-xs" />
                                                                                        </span>
                                                                                        {u.lastName}
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    {/* <Link to={`/AdminDashboard/UpdateGroup/${u.group.id}`}>Edit</Link> */}
                                                                                    <div className="d-inline-block text-nowrap">
                                                                                        <Link to={`/AdminDashboard/UpdateGroup2/${u.id}`} title="Edit User" style={{ color: '#697a8d' }} id="myButton">
                                                                                            <i className="bx bx-edit me-0 me-sm-1"></i>
                                                                                        </Link>
                                                                                        <button className="btn btn-sm btn-icon delete-record">
                                                                                            <i className="bx bx-trash" onClick={() => { getgroupDelete(u.id) }} />
                                                                                        </button>

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
