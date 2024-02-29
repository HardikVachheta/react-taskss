import { Form } from '@formio/react'
import React, { useEffect, useState } from 'react'
import { AdminSideNav } from './AdminSideNav'
import "./formcss2.css"
import axios from 'axios'
export const NewForm = () => {

    const formConfig = {
        "display": "form",
        "components": [
            {
                "label": "Select",
                "widget": "html5",
                "tableView": true,
                "dataSrc": "url",
                "data": {
                    "url": "http://localhost:8090/categories",
                    "headers": [
                        {
                            "key": "cate    gory",
                            "value": "category"
                        }
                    ]
                },
                "key": "select",
                "type": "select",
                "input": true,
                "disableLimit": false,
                "noRefreshOnScroll": false
            }
        ]
    };
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8090')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
                console.log(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

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
                                    <div class="row">
                                        <div class="col-xl" >
                                            <div class="card mb-4">


                                                {/* <h1>Users</h1>
                                {loading ? (
                                    <p>Loading...</p>
                                ) : error ? (
                                    <p>Error: {error}</p>
                                ) : (
                                    <Form form={users.components} />
                                )} */}
                                                <div class="card-header d-flex justify-content-center align-items-center">
                                                    <h3 class="mb-0">Basic Form</h3>
                                                </div>
                                                {/* <h1>My Form</h1> */}
                                                <div className='card-body'>
                                                    <Form
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
                                                                    "key": "number1",
                                                                    "type": "number",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Category",
                                                                    "widget": "html5",
                                                                    "placeholder": "Select any one",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "Clothing",
                                                                                "value": "clothing"
                                                                            },
                                                                            {
                                                                                "label": "Electronics",
                                                                                "value": "electronics"
                                                                            },
                                                                            {
                                                                                "label": "Books",
                                                                                "value": "books"
                                                                            },
                                                                            {
                                                                                "label": "Home Decor",
                                                                                "value": "homeDecor"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "dataType": "auto",
                                                                    "key": "category",
                                                                    "type": "select",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Sub category",
                                                                    "widget": "html5",
                                                                    "placeholder": "Select sub category",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "Smartphones",
                                                                                "value": "smartphones"
                                                                            },
                                                                            {
                                                                                "label": "Laptops",
                                                                                "value": "laptops"
                                                                            },
                                                                            {
                                                                                "label": "Cameras",
                                                                                "value": "cameras"
                                                                            },
                                                                            {
                                                                                "label": "T-shirts",
                                                                                "value": "tShirts"
                                                                            },
                                                                            {
                                                                                "label": "Jeans",
                                                                                "value": "jeans"
                                                                            },
                                                                            {
                                                                                "label": "Dresses",
                                                                                "value": "dresses"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "key": "subCategory",
                                                                    "type": "select",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Contact",
                                                                    "placeholder": "Enter your contact number",
                                                                    "applyMaskOn": "change",
                                                                    "mask": false,
                                                                    "tableView": false,
                                                                    "delimiter": false,
                                                                    "requireDecimal": false,
                                                                    "inputFormat": "plain",
                                                                    "truncateMultipleSpaces": false,
                                                                    "key": "contact",
                                                                    "type": "number",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Contact type",
                                                                    "widget": "html5",
                                                                    "placeholder": "Select the type of contact you have provided",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "Home",
                                                                                "value": "home"
                                                                            },
                                                                            {
                                                                                "label": "Office",
                                                                                "value": "office"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "key": "contactType",
                                                                    "type": "select",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Stutas",
                                                                    "widget": "html5",
                                                                    "placeholder": "Select one",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "Online",
                                                                                "value": "online"
                                                                            },
                                                                            {
                                                                                "label": "offline",
                                                                                "value": "offline"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "key": "stutas",
                                                                    "type": "select",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Subject",
                                                                    "placeholder": "Enter subject",
                                                                    "applyMaskOn": "change",
                                                                    "tableView": true,
                                                                    "key": "subject",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Priority",
                                                                    "widget": "html5",
                                                                    "placeholder": "Select level",
                                                                    "tableView": true,
                                                                    "data": {
                                                                        "values": [
                                                                            {
                                                                                "label": "High",
                                                                                "value": "high"
                                                                            },
                                                                            {
                                                                                "label": "Low",
                                                                                "value": "low"
                                                                            },
                                                                            {
                                                                                "label": "Medium",
                                                                                "value": "medium"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "key": "priority",
                                                                    "type": "select",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Impact",
                                                                    "applyMaskOn": "change",
                                                                    "tableView": true,
                                                                    "key": "impact",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Impact Area",
                                                                    "applyMaskOn": "change",
                                                                    "tableView": true,
                                                                    "key": "impactArea",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Urgency",
                                                                    "applyMaskOn": "change",
                                                                    "tableView": true,
                                                                    "key": "urgency",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Status reasion",
                                                                    "applyMaskOn": "change",
                                                                    "tableView": true,
                                                                    "key": "statusReasion",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Location",
                                                                    "applyMaskOn": "change",
                                                                    "tableView": true,
                                                                    "key": "location",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Description",
                                                                    "applyMaskOn": "change",
                                                                    "autoExpand": false,
                                                                    "tableView": true,
                                                                    "key": "description",
                                                                    "type": "textarea",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "Register",
                                                                    "showValidations": false,
                                                                    "tableView": false,
                                                                    "key": "submit1",
                                                                    "type": "button",
                                                                    "input": true,
                                                                    "saveOnEnter": false
                                                                },
                                                                {
                                                                    "label": "Cancel",
                                                                    "showValidations": false,
                                                                    "theme": "danger",
                                                                    "leftIcon": "fa fa-remove",
                                                                    "tableView": false,
                                                                    "key": "cancel",
                                                                    "type": "button",
                                                                    "input": true,
                                                                    "saveOnEnter": false
                                                                }
                                                            ]
                                                        }} />
                                                    {/* <Form form={{
                                    display: 'form',
                                    components: [
                                        {
                                            "label": "Category",
                                            "widget": "html5",
                                            "tableView": true,
                                            "dataSrc": "url",
                                            "data": {
                                              "url": "http://localhost:8090",
                                              "headers": [
                                                {
                                                  "key": "category",
                                                  "value": "category"
                                                }
                                              ]
                                            },
                                            "key": "cat",
                                            "type": "select",
                                            "input": true,
                                            "disableLimit": false,
                                            "noRefreshOnScroll": false
                                          }
                                        ,
                                    ]
                                }} /> */}
                                                    {/* <Form form={{
                                    display: 'form',
                                    components: [
                                        {
                                            "type": "number",
                                            "key": "number",
                                            "label": "Number",
                                            "required": true
                                        },
                                        {
                                            "type": "select",
                                            "key": "category",
                                            "label": "Category",
                                            "placeholder": "Select your Category",
                                            "required": true,
                                            "options": [
                                                { "label": "Sales", "value": "sales" },
                                                { "label": "Support", "value": "support" },
                                                { "label": "Marketing", "value": "marketing" }
                                            ]
                                        },
                                        {
                                            "type": "select",
                                            "key": "subcategory",
                                            "label": "Sub category",
                                            "placeholder": "Select your Sub category",
                                            "required": true,
                                            "options": [
                                                { "label": "Sales", "value": "sales" },
                                                { "label": "Support", "value": "support" },
                                                { "label": "Marketing", "value": "marketing" }
                                            ]
                                        },
                                        {
                                            "label": "Priority",
                                            "widget": "html5",
                                            "tableView": true,
                                            "data": {
                                                "values": [
                                                    {
                                                        "label": "High",
                                                        "value": "high"
                                                    },
                                                    {
                                                        "label": "Medium",
                                                        "value": "medium"
                                                    },
                                                    {
                                                        "label": "Low",
                                                        "value": "low"
                                                    }
                                                ]
                                            },
                                            "key": "priority",
                                            "type": "select",
                                            "input": true
                                        },
                                        {
                                            "type": "number",
                                            "key": "contact",
                                            "label": "Contact",
                                            "required": true
                                        },
                                        {
                                            "type": "textfield",
                                            "key": "firstName",
                                            "label": "First Name",
                                            "placeholder": "Enter your first name",
                                            "required": true
                                        },
                                        {
                                            "label": "Email",
                                            "tableView": true,
                                            "key": "email",
                                            "type": "email",
                                            "input": true
                                        },
                                        {
                                            "label": "Password",
                                            "tableView": false,
                                            "key": "password",
                                            "type": "password",
                                            "input": true,
                                            "protected": true
                                        },
                                    ]
                                }} /> */}
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
