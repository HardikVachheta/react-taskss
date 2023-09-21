import { useFormik } from 'formik';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/dumpdata.json';
import { autoPage1Schema } from '../schemas';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
// import data from '../data/dumpdata.json';

const initialValues = {
    name: "",
    email: "",
    password: "",
};

const AutoPages = ({ formData }) => {
    
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

    // const [formValues, setFormValues] = useState({});

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     e.target.reset();
    //     console.log('Form data submitted:', formValues);
    // };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({
    //         ...formValues,
    //         [name]: value,
    //     });
    // };



    // const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    //     initialValues: initialValues,
    //     validationSchema: autoPage1Schema,
    //     onSubmit: (field, action) => {
    //         console.log(field)

    // if (values.name && values.email && values.password) {

    //     localStorage.setItem("name", values.name)
    //     localStorage.setItem("email", values.email)
    //     localStorage.setItem("password", values.password)
    //     localStorage.setItem("confirm_password", values.confirm_password)

    //     Swal.fire({
    //         title: 'Registration Successful',
    //         icon: 'success',
    //         timer: 1500
    //     });


    //     navigate("/login")

    // } else {
    //     Swal.fire({
    //         title: 'Enter Data',
    //         icon: 'error',
    //         timer: 1500
    //     });
    // }

    //         action.resetForm()
    //     }
    // })




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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <form onSubmit={handleSubmit} onClick={getdata1}> */}

                        {formData.fields.map((field) => (

                            <div class="mb-3">
                                <label class="form-label d-flex justify-content-between" for="basic-icon-default-fullname" htmlFor={field.name}>{field.label}</label>
                                {
                                    field.type === 'select' ? (
                                        <select class="select2 form-select" id={field.name}
                                            name={field.name}
                                            {...register(field.name)}
                                            // onChange={handleInputChange}
                                            // value={formValues[field.name] || ''}
                                            required>
                                            {field.options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    ) : field.type === 'textarea' ? (
                                        <textarea
                                            id={field.name}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            {...register(field.name)}
                                            // onChange={handleInputChange}
                                            // value={formValues[field.name] || ''}
                                            required></textarea>
                                    ) : field.type === 'hidden' ? (
                                        <input
                                            class="form-control"
                                            type={field.type}
                                            // id={field.name}
                                            // name={field.name}
                                            // placeholder={field.placeholder}
                                            {...register(field.name)}
                                            value={field.value}
                                            // onChange={handleInputChange}
                                            // value={formValues[field.name] || ''}
                                            required />
                                    ) : (
                                        <input
                                            class="form-control"
                                            type={field.type}
                                            id={field.name}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            {...register(field.name)}
                                            // onChange={handleInputChange}
                                            // value={formValues[field.name] || ''}
                                            required />
                                    )
                                }
                                {/* <input
                                    type="hidden"
                                    // onChange={handleInputChange}
                                    // value={formValues[field.users?.task_name] || ''} />
                                    {...register("task_name")} value={users.task_name} /> */}
                            </div>
                        ))}




                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
    // }
}

export default AutoPages;
