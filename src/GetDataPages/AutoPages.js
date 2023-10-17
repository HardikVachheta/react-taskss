import { useFormik } from 'formik';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/dumpdata.json';
import { autoPage1Schema } from '../schemas';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import Form from '@rjsf/core';
// import data from '../data/dumpdata.json';

const initialValues = {
    name: "",
    email: "",
    password: "",
};

const AutoPages = ({ formData }) => {

    console.log("----------------", formData)
    var id = useParams().id
    const [users, setUsers] = useState('')
    // console.log("Taskbar page id :----", id)

    const { register, handleSubmit } = useForm({})

    useEffect(() => {
        getdata1()
    });

    const getdata1 = () => {
        console.log("auto page", data)
        var mainid = data.filter((u) => {
            return u.task_id == id
        })
        setUsers(mainid[0])
        console.log("auto main id", mainid)
    }
    var temp = users.task_id
    const onSubmit = (data, e) => {
        console.log("submit data :-------", data)
        e.target.reset()
    }

    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    // const formik = useFormik({
    //     initialValues: Object.fromEntries(
    //         formData.map((field) => [field.name])
    //     ),
    //     onSubmit: (values) => {
    //         console.log(values);
    //     },
    // });

    return (
        <div class="col-xl">
            <Helmet>
                <link rel="stylesheet"
                    href="../assets_pro/vendor/css/rtl/theme-semi-dark.css"
                    class="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />

            </Helmet>
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">{users?.task_name} {users?.task_id}</h5>
                </div>
                <div class="card-body">
                    <form>
                        {
                            formData.map((u) => {
                                return (
                                    <>
                                        <label>{u.label}</label>
                                        <input name={u.label} />
                                    </>
                                )
                            })
                        }

                    </form>
                    {/* <form onSubmit={formik.handleSubmit}>

                        {formData.map((field) => (

                            <div class="mb-3" key={field.name}>
                                <label class="form-label d-flex justify-content-between"
                                    for="basic-icon-default-fullname" htmlFor={field.name}>{field.label}</label>
                                {
                                    field.type === 'select' ? (
                                        <select class="select2 form-select" id={field.name}
                                            type={field.type}
                                            name={field.name}
                                            value={formik.values[field.name]}
                                            onChange={formik.handleChange}
                                            placeholder={field.placeholder}
                                            required>
                                            {field.options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                    ) : field.type === 'textarea' ? (
                                        <textarea
                                            class="form-control"
                                            type={field.type}
                                            id={field.name}
                                            name={field.name}
                                            value={formik.values[field.name]}
                                            onChange={formik.handleChange}
                                            placeholder={field.placeholder}
                                            required></textarea>

                                    ) : field.type === 'password' ? (
                                        <div class="input-group input-group-merge">
                                            <input
                                                class="form-control"
                                                type={passwordType}
                                                id={field.name}
                                                name={field.name}
                                                value={formik.values[field.name]}
                                                onChange={formik.handleChange}
                                                placeholder={field.placeholder}
                                                required />
                                            <span class="input-group-text cursor-pointer" onClick={togglePassword}>
                                                {passwordType === "password" ?
                                                    <i className="bx bx-hide"></i> : <i className="bx bx-show"></i>}
                                            </span>
                                        </div>
                                    ) : field.type === 'password' ? (
                                        <input
                                            type='hidden'
                                            name={field.name}
                                             />
                                    ) : (
                                        <input
                                            class="form-control"
                                            type={field.type}
                                            id={field.name}
                                            name={field.name}
                                            value={formik.values[field.name]}
                                            placeholder={field.placeholder}
                                            onChange={formik.handleChange}
                                            required />
                                    )
                                }
                            </div>
                        ))}

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form> */}
                </div>
            </div>
        </div>
    );
    // }
}

export default AutoPages;
