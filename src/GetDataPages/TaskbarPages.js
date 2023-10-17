import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/dumpdata.json';
import { Helmet } from 'react-helmet';
import Form from "react-jsonschema-form";
// import Form from '@rjsf/core';
// import '@rjsf/core/dist/react-jsonschema-form.css';

import { Navbar } from '../Pages/Navbar';
import formData2 from '../data/table2.json'
import formData1 from '../data/table1.json'
import AutoPages from './AutoPages';
import { Taskbar2 } from '../Pages/Taskbar2';
import formDataMain from '../data/mixtable.json'
import Temp from '../Pages/Temp';
import axios from 'axios';
// import formData from '../data/task_customer_details.json'


export const TaskbarPages = () => {

  var id = useParams().id
  console.log("Taskbar page id :----", id)

  const [formValue, setFormValues] = useState([])
  const [users, setUsers] = useState('')
  const [formData, setData] = useState(formDataMain[0])

  useEffect(() => {
    getNewData()
  }, [])

  useEffect(() => {
    getdata()
    getform()
  })
  // ============================================================================
  var task_id = 123, task_key = 123
  const getNewData = () => {

    axios.get(`http://localhost:3000/api/task-detail/${task_key}/${task_id}`)
      .then(response => {
        console.log("tilak data ++++++++++++++++++++++++", response.data.formData.form_def.components)
        const x = response.data.formData.form_def.components
        setFormValues(x)
        // console.log(response.data);
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 404) {
            console.log('Resource not found');
          } else {
            console.log('Server returned an error:', error.response.status);
          }
        } else if (error.request) {
          console.log('No response received from the server');
        } else {
          console.log('Error:', error.message);
        }
      });






    // axios.get(`http://localhost:3000/api/task-detail/${task_key}/${task_id}`).then((res) => {
      // console.log("tilak data++++++++++++++++++++++++", res.data.formData.form_def.components)
      // const x = res.data.formData.form_def.components
      // setFormValues(x)

    // })
  }

  // ============================================================================
  const getform = () => {

    var formDataid = formDataMain.filter((u) => {
      return u.field_id == id
    })

    setData(formDataid[0])
    console.log("form data get", formDataid)
  }
  // ============================================================================
  const getdata = () => {
    console.log(data)
    var mainid = data.filter((u) => {
      return u.task_id == id
    })
    setUsers(mainid[0])
    console.log("main id", mainid)
  }
  // console.log(formData)
  // ============================================================================

  // ============================================================================

  const schema = {
    title: formData.title,
    type: formData.type,
    required: formData.required,
    properties: Object.fromEntries(
      formData.properties.map((property) => [
        property.name,
        {
          type: property.type,
          title: property.label,
          minLength: property.minLength,
          maxLength: property.maxLength,
          format: property.format,
          enum: property.enum,
          placeholder: property.placeholder,

        },
      ])
    ),
  };

  const uiSchema = {
    // classNames: "form-control",
  };

  const getPlaceholder = (propertyName) => {
    const property = formData.properties.find((property) => property.name === propertyName);
    return property ? property.placeholder : "";
  };

  Object.keys(schema.properties).forEach((propertyName) => {
    uiSchema[propertyName] = {
      "ui:placeholder": getPlaceholder(propertyName),
    };
  });


  const onSubmit = ({ formData }) => {
    console.log(formData);
  };
  // }

  // ============================================================================
  return (
    <div>
      {/* <Navbar_u /> */}

      <div class="layout-wrapper layout-content-navbar" >
        <Helmet>
          <title>Taskbar Pages</title>

          <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
          <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
          <link rel="stylesheet" href="../assets_pro/vendor/css/rtl/theme-semi-dark.css" class="template-customizer-theme-css" />
          <link rel="stylesheet" href="../assets/css/demo.css" />
          <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
          <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />

        </Helmet>
        <div class="layout-container" >
          <Navbar />
          <Taskbar2 />
          <div class="layout-page">

            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                  {/* <div class="card mb-4">
                    <div class="card-body">
                      <div class="mb-3"> */}
                  {/* <Temp/> */}
                  {/* <Form
                          classNames="form-control"
                          schema={schema}
                          formData={{}}
                          onSubmit={onSubmit}
                          uiSchema={uiSchema}
                        /> */}
                  {/* </div>
                    </div>
                  </div> */}

                  {/* {
                    users.task_id === 1 ? <AutoPages formData={formData1} key={users.task_id} /> :
                      users.task_id === 2 ? <AutoPages formData={formData2} key={users.task_id} /> : null
                  } */}
                  <AutoPages formData={formValue} key={users.task_id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
