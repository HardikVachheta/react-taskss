import { Form } from '@formio/react'
import React, { useEffect, useState } from 'react'
import { AdminSideNav } from './AdminSideNav'
import "./formcss2.css"
import axios from 'axios'
import { Helmet } from 'react-helmet'
export const NewForm = () => {

    const [subCategories, setSubCategories] = useState([]);
    // const [selectedCategory, setSelectedCategory] = useState('');
    const [debouncedCategory, setDebouncedCategory] = useState('');

    // const handleCategoryChange = (event) => {
    //     const categoryId = event?.data?.category;
    //     // console.log("categoryId", categoryId)
    //     setDebouncedCategory(categoryId);
    // };
    // console.log("categoryId", debouncedCategory)

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         // Handle category change after debounce time
    //         console.log("Debounced categoryId:", debouncedCategory);

    //         // Fetch subcategories based on the selected category ID
    //         const response = axios.get(`http://192.168.1.4:8087/subcategories/category/${setDebouncedCategory}/sub-categories`);
    //         const categoryData = response?.data;
    //         console.log("subcategory", categoryData)
    //         // Update the subCategories state with the fetched subcategories
    //         setSubCategories(categoryData || []);
    //         // setSelectedCategory(categoryId); // Update the selected category

    //     }, 3000); // Adjust debounce time as needed

    //     return () => {
    //         clearTimeout(timer); // Clear previous timer on component unmount or category change
    //     };
    // }, [debouncedCategory]);
    const handleCategoryChange = async (event) => {
        const categoryId = event.data?.category; // Extract category ID from event
        console.log("categoryId", categoryId)

        try {
            if (categoryId) {
                // Fetch subcategories based on the selected category ID
                const response = await axios.get(`http://192.168.1.4:8087/subcategories/category/${categoryId}/sub-categories`);
                const categoryData = response?.data;
                console.log("subcategory", categoryData)
                // Update the subCategories state with the fetched subcategories
                setSubCategories(categoryData || []);
                // setSelectedCategory(categoryId); // Update the selected category
            }
        } catch (error) {
            console.error('Error fetching subcategory data:', error);
        }

    };


    // Function to handle form submission
    const handleFormSubmit = (submission) => {
        // setFormData(submission.data);
        console.log("Submitted Data:", submission);
    };

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://192.168.1.4:8087/categories');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleCategoryChange3 = async (event) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue);

        try {
            const response = await fetch(`http://192.168.1.4:8087/subcategories/category/${selectedValue}/sub-categories`);
            const data = await response.json();
            setSubcategories(data);
        } catch (error) {
            console.error('Error fetching subcategories:', error);
        }
    };

    return (
        <div lang="en" className="light-style layout-menu-fixed layout-compact" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="vertical-menu-template-free">
            <Helmet>
                {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" />
                <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' />
                <link rel='stylesheet' href='https://cdn.form.io/formiojs/formio.full.min.css' />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/formiojs@4.18.2/dist/formio.full.min.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css" />
                <script src="https://cdn.form.io/formiojs/formio.embed.min.js?src=https://examples.form.io/example"></script>
                <script src="https://cdn.form.io/js/formio.embed.js"></script>
                <script src='https://cdn.form.io/formiojs/formio.full.min.js'></script> */}
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
                                    <div class="row">
                                        <div class="col-xl" >
                                            <div class="card mb-4">
                                                <>
                                                    {/* <h1>Users</h1>
                                {loading ? (
                                    <p>Loading...</p>
                                ) : error ? (
                                    <p>Error: {error}</p>
                                ) : (
                                    <Form form={users.components} />
                                )} */}
                                                </>
                                                <div class="card-header d-flex justify-content-center align-items-center">
                                                    <h3 class="mb-0">Basic Form</h3>
                                                </div>

                                                
                                                <div className='card-body'>
                                                    <Form
                                                       
                                                        onSubmit={handleFormSubmit}
                                                        className="form-container"
                                                        form={{
                                                            display: 'form',
                                                            components: [
                                                               
                                                                {
                                                                    "label": "Number",
                                                                    "placeholder": "Enter number",
                                                                    "applyMaskOn": "change",
                                                                    "mask": false,
                                                                    "tableView": false,
                                                                    "delimiter": false,
                                                                    "requireDecimal": false,
                                                                    "inputFormat": "plain",
                                                                    "truncateMultipleSpaces": false,
                                                                    "key": "number",
                                                                    "type": "number",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Submit",
                                                                    "showValidations": false,
                                                                    "tableView": false,
                                                                    "key": "submit",
                                                                    "type": "button",
                                                                    "input": true,
                                                                    "saveOnEnter": false
                                                                }
                                                            ]
                                                        }}
                                                    />
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
