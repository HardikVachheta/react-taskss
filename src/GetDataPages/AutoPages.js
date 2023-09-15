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
    // console.log("Taskbar page id :----", id)

    const [users, setUsers] = useState('')
    // const { register, handleSubmit } = useForm()

    useEffect(() => {
        getdata1()
    });

    const getdata1 = () => {
        console.log("auto page",data)
        var mainid = data.filter((u) => {
            return u.task_id == id
        })
        setUsers(mainid[0])
        console.log("auto main id", mainid)
    }


    const onSubmit = (data) => {
        console.log("submit data :-------", data)
    }



    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: autoPage1Schema,
        onSubmit: (field, action) => {
            console.log(field)

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

            action.resetForm()
        }
    })




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
                    <h5 class="mb-0">{users?.task_name}</h5>
                </div>
                <div class="card-body">
                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    <form onSubmit={handleSubmit}>
                    
                        {formData.fields.map((field) => (
                            
                            <div class="mb-3" key={field.name}>
                                <label class="form-label d-flex justify-content-between" for="basic-icon-default-fullname" htmlFor={field.name}>{field.label}</label>
                                {
                                // field.type === 'select' ? (
                                //     <select class="select2 form-select" id={field.name}
                                //         name={field.name}
                                //         // {...register(field.name)}
                                //         value={values.field.name}
                                //         onChange={handleChange}
                                //         onBlur={handleBlur}
                                //         required>
                                //         {field.options.map((option) => (
                                //             <option key={option} value={option}>
                                //                 {option}
                                //             </option>
                                //         ))}
                                //     </select> ) : (
                                // ) : field.type === 'textarea' ? (
                                //     <textarea
                                //         id={field.name}
                                //         name={field.name}
                                //         placeholder={field.placeholder}
                                //         // {...register(field.name)}
                                //         value={values+field.name}
                                //         onChange={handleChange}
                                //         onBlur={handleBlur}
                                //         required></textarea>
                                // ) : (
                                    <input
                                        class="form-control"
                                        type={field.type}
                                        id={field.name}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        // {...register(field.name)}

                                        value={values.firstname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required/>
                                // )
                                }
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
