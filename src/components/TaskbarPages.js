import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { Form } from '@formio/react';
import { Navbar } from './Navbar';
import { Taskbar2 } from './Taskbar2';
import axios from 'axios';
import { useFormik } from 'formik';
import { commentSchema } from '../schemas';
import '../data/xp.css';
import { MainBpmn } from './MainBpmn';

export const TaskbarPages = () => {


  var id = useParams().id

  const [checkData, setCheckData] = useState('');
  const [commentData, setCommentsData] = useState([]);
  const [historyData, setHistoryData] = useState({});
  const [formData, setFormData] = useState({});
  const [formDetails, setFormDetails] = useState({});
  const [getDiaId, setDiaId] = useState([])

  const handleFormSubmit = (submission) => {
    console.log('Form Data submitted :', submission.data);

  };

  useEffect(() => {
    if (id) {
      getFormData()
      getHistoryData()
      getCommentsData()
      getDiagramData()
    }
    console.log("---------TaskbarPages---------")
  }, [id, checkData])
  // ============================================================================
  // var task_id = id
  // var task_key = taskDefinitionKey


  const [proid, setProcessDefinitionId] = useState(null);

  // Callback function to receive values from the child
  const handleChildData = (receivedProcessDefinitionId) => {
    setProcessDefinitionId(receivedProcessDefinitionId);
  };

  // const dateTimeString = "2023-10-31T15:45:08.067+0530";
  // const dateTime = new Date(dateTimeString);

  const formattedDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  const formattedTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  const getDiagramData = () => {

    var userId = localStorage.getItem("userId");
    axios.get(`http://localhost:3000/api/tasks?assignee=${userId}`)
      .then((response) => {
        // console.log("Diagram Data :- ", response.data);

        var diagramvalue = response.data?.filter((u) => {
          return u.id === id 
        })

        console.log("Diagram value :-", diagramvalue[0].processDefinitionId)
        setDiaId(diagramvalue[0].processDefinitionId)

      }).catch(error => {
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
  }

  const getCommentsData = () => {

    axios.get(`http://localhost:3000/api/task/comment?taskId=${id}`)
      .then(response => {
        console.log("Comments Data get", response.data)
        // var x = response.data.updatedData.form_def;
        // setFormData(x)
        setCommentsData(response.data)
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 404) {
            console.log('Comment get Data :- Resource not found');
          } else {
            console.log('Server returned an error:', error.response.status);
          }
        } else if (error.request) {
          console.log('No response received from the server');
        } else {
          console.log('Error:', error.message);
        }
      });

  }


  const initialValues = {
    comment: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: commentSchema,
    onSubmit: (values, action) => {

      axios.post(`http://localhost:3000/api/task/comment?taskId=${id}`, values)
        .then(response => {
          console.log("Comments Data post", response.data)
          setCheckData(response.data)
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status === 404) {
              console.log('Comment post Data :- Resource not found');
            } else {
              console.log('Server returned an error:', error.response.status);
            }
          } else if (error.request) {
            console.log('No response received from the server');
          } else {
            console.log('Error:', error.message);
          }
        });


      action.resetForm()
    }
  })

  const getHistoryData = () => {

    axios.get(`http://localhost:3000/api/history/tasks?taskId=${id}`)
      .then(response => {
        console.log("History Data", response.data)
        // var x = response.data.updatedData.form_def;
        // setFormData(x)
        setHistoryData(response.data)
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 404) {
            console.log('History Data :- Resource not found');
          } else {
            console.log('Server returned an error:', error.response.status);
          }
        } else if (error.request) {
          console.log('No response received from the server');
        } else {
          console.log('Error:', error.message);
        }
      });

  }

  const getFormData = () => {

    axios.get(`http://localhost:3000/api/task?taskInstanceId=${id}`)
      .then(response => {
        console.log("Task Form", response.data)
        var x = response.data.updatedData.form_def;
        setFormData(x)
        setFormDetails(response.data)
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 404) {
            console.log('Task Form :- Resource not found');
          } else {
            console.log('Server returned an error:', error.response.status);
          }
        } else if (error.request) {
          console.log('No response received from the server');
        } else {
          console.log('Error:', error.message);
        }
      });

  }

  const [activeButton, setActiveButton] = useState("Form");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const items = Array.from({ length: 550 }, (_, i) => `Item ${i + 1}`);
  const [containerHeight, setContainerHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setContainerHeight(window.innerHeight);
  };


  return (
    <div>
      {/* <Navbar_u /> */}

      <div className="layout-wrapper layout-content-navbar" >
        <Helmet>
          <title>Task Lists</title>

          <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
          <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" />
          <link rel="stylesheet" href="../assets_pro/vendor/css/rtl/theme-semi-dark.css" className="template-customizer-theme-css" />
          <link rel="stylesheet" href="../assets/css/demo.css" />
          <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
          <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />

        </Helmet>

        <div className="layout-container" >
          <Navbar />
          <Taskbar2 sendDataToParent={handleChildData} />
          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                {!id ?
                  <div style={{ outlineStyle: "solid", padding: "25px", borderRadius: "0.375rem", color: "#32333754" }} >
                    <div className="me-3" style={{
                      position: "relative",
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "stretch",
                      width: "100%",
                      color: "#697a8de0"
                    }}>
                      <i className='bx bxs-info-circle'></i>
                      <div className="text-body" style={{ marginLeft: "10px" }}>
                        Select a task in the list.
                      </div>
                    </div>
                  </div>
                  : <>
                    <h4 className="py-3 mb-4" style={{ textAlign: "start" }}>
                      {formDetails.taskDetail?.name}
                    </h4>

                    <div className="row">
                      <div className="col-md-12">

                        <ul className="nav nav-pills flex-column flex-md-row mb-3">
                          <li className="nav-item">
                            <Link
                              to="#"
                              className={`nav-link ${activeButton === 'Form' ? 'active' : ''}`}
                              onClick={() => handleButtonClick('Form')}
                            >
                              <i className="bx bx-detail me-1"></i> Form
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="#"
                              className={`nav-link ${activeButton === 'History' ? 'active' : ''}`}
                              onClick={() => handleButtonClick('History')}
                            >
                              <i className="bx bx-history me-1"></i> History
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="#"
                              className={`nav-link ${activeButton === 'Diagram' ? 'active' : ''}`}
                              onClick={() => handleButtonClick('Diagram')}
                            >
                              <i className="bx bx-id-card me-1"></i> Diagram
                              {/* <i className="bx bx-link-alt me-1"></i> Diagram */}
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="#"
                              className={`nav-link ${activeButton === 'Comments' ? 'active' : ''}`}
                              onClick={() => handleButtonClick('Comments')}
                            >
                              <i className="bx bx-chat me-1"></i> Comments
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="#"
                              className={`nav-link ${activeButton === 'Document' ? 'active' : ''}`}
                              onClick={() => handleButtonClick('Document')}
                            >
                              <i className="bx bx-link-alt me-1"></i> Document
                            </Link>
                          </li>
                        </ul>
                        <hr />
                        {activeButton === 'Form' && (
                          <div className='card' style={{ padding: "30px" }}>
                            {/* {id ? */}

                            <Form key={id} placeholder="enter name" form={formData} onSubmit={handleFormSubmit} />

                            {/* : ''} */}
                          </div>
                        )}

                        {activeButton === 'History' && (
                          historyData?.map((his) => {
                            return (
                              <div>Content for History Page goes here :- {his?.taskDefinitionKey}</div>
                            )
                          })
                        )}

                        {activeButton === 'Diagram' && (
                          <div style={{ height: "60vh" }}>
                            <MainBpmn style={{ height: "60vh" }} getDiaId={getDiaId} />
                          </div>

                        )}
                        {activeButton === 'Comments' && (
                          <>
                            <div className="chat-history-footer">
                              <form className="form-send-message d-flex justify-content-between align-items-center " onSubmit={handleSubmit}>
                                <label className="col-sm-2 col-form-label" htmlFor="basic-default-name">Add Comments </label>
                                <input className="form-control message-input border-0 me-3 shadow-none"
                                  name='comment'
                                  value={values.comment}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  placeholder="Enter Your Comments here..." />
                                <div className="message-actions d-flex align-items-center">
                                  <button className="btn btn-primary d-flex send-msg-btn" type='submit'>
                                    <i className="bx bx-paper-plane me-md-1 me-0"></i>
                                    <span className="align-middle d-md-inline-block d-none">Send</span>
                                  </button>
                                </div>


                              </form>
                            </div>

                            {errors.comment && touched.comment ? (
                              <div className="form-error" style={{ color: "red" }}>{errors.comment}</div>
                            ) : null}
                            
                            <div className="d-flex justify-content-center col w-100"
                              style={{ height: `${containerHeight - 245}px`, overflow: 'auto' }}>
                              <div className="toast-container position-relative w-90">
                                {
                                  commentData?.map((u) => {
                                    return (
                                      // <p className="mb-0">{u.message}</p>
                                      <div className="bs-toast toast fade show" style={{ margin: "5px" , width:"650px" }} >
                                        <div className="toast-header">
                                          <i className="bx bx-bell me-2" style={{ marginBottom: "5px" }}></i>
                                          <div className="me-auto fw-medium" style={{ marginBottom: "5px" }} >{u.message}</div>
                                          <small style={{ marginBottom: "5px" }}>{formattedDate(u.time)}</small>&emsp;
                                          <small style={{ marginBottom: "5px" }}>{formattedTime(u.time)}</small>
                                          {/* <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button> */}
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </div>
                            </div>
                            {/* </div> */}
                          </>
                        )}
                        {activeButton === 'Document' && (
                          <div>
                            Content for Document Page goes here.
                          </div>
                        )}
                      </div>
                    </div>
                    </>}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
  // var x = formData.form_def.components
  // console.log("formData", x)
  // ============================================================================
  // var formData
  // const schema = {
  //   title: formData.title,
  //   type: formData.type,
  //   required: formData.required,
  //   properties: Object.fromEntries(
  //     formData.properties.map((property) => [
  //       property.name,
  //       {
  //         type: property.type,
  //         title: property.label,
  //         minLength: property.minLength,
  //         maxLength: property.maxLength,
  //         format: property.format,
  //         enum: property.enum,
  //         placeholder: property.placeholder,

  //       },
  //     ])
  //   ),
  // };
  // const schema = {
  //   title: 'Your Form ',
  //   type: object,
  //   properties: Object.fromEntries(
  //     formData.properties.map((property) => [
  //       property.name,
  //       {
  //         type: property.type,
  //         title: property.label,
  //         // minLength: property.minLength,
  //         // maxLength: property.maxLength,
  //         // format: property.format,
  //         // enum: property.enum,
  //         // placeholder: property.placeholder,

  //       },
  //     ])
  //   ),
  // };
  // const schema = {
  //   type: 'object',
  //   fproperties: Object.fromEntries(
  //     formData.components.map(field => [field.name, { type: field.type, title: field.label }])
  //   ),
  //   // required: formData..map(field => field.name),
  // };

  // const onSubmit = ({ formData }) => {
  //   // Handle form submission here
  //   console.log('Form data submitted:', formData);
  // };
  // const jsonSchema = formData.form_def.components;
  // console.log(jsonSchema)

  // const uiSchema = {
  //   // classNames: "form-control",
  // };

  // const getPlaceholder = (propertyName) => {
  //   const property = formData.properties.find((property) => property.name === propertyName);
  //   return property ? property.placeholder : "";
  // };

  // Object.keys(jsonSchema.properties).forEach((propertyName) => {
  //   uiSchema[propertyName] = { 
  //     "ui:placeholder": getPlaceholder(propertyName),
  //   };
  // });


  // const onSubmit = ({ formData }) => {
  //   console.log(formData);
  // };


  // ============================================================================
  //  const setValue = () =>{

  //  }

}
