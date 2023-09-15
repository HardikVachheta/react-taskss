import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/dumpdata.json';
import { Helmet } from 'react-helmet';
import { Navbar_u } from '../Pages/Navbar_u';
import { Taskbar } from '../Pages/Taskbar';
import { Navbar } from '../Pages/Navbar';
import formData2 from '../data/table2.json'
import formData1 from '../data/teble1.json'
import AutoPages from './AutoPages';
import { Formio } from 'formiojs';
import Test1 from './Test1';
// import Formio from 'formiojs';



export const TaskbarPages = () => {

    
    <script type="text/javascript">
  window.onload = function() {
    Formio.createForm(document.getElementById('formio'), 'https://qzpamhxbjnprhqk.form.io/localuser')
  };
</script>
    var id = useParams().id
    console.log("Taskbar page id :----", id)

    const [users, setUsers] = useState('')

    useEffect(() => {
        getdata()
    })

    const getdata = () => {
        console.log(data)
        var mainid = data.filter((u) => {
            return u.task_id == id
        })
        setUsers(mainid[0])
        console.log("main id", mainid)
    }

    var scroll1 =
    {
        maxHeight: "92vh",
        overflowX: "hidden",
        overflowY: "auto",
        behavior: 'smooth',
    }

    return (
        <div>
            <Navbar_u />

            <div class="layout-wrapper layout-content-navbar" >
                <Helmet>
                    <title>Dashboard </title>


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
                    <Taskbar />
                    <div class="layout-page">

                        <div class="content-wrapper">
                            <div class="container-xxl flex-grow-1 container-p-y" style={scroll1}>
                                <div class="row">
                                    {
                                        users.task_id == 1 ? <AutoPages formData={formData1} /> :
                                            users.task_id == 2 ? <AutoPages formData={formData2} /> : null
                                    }
                                    {/* {
                                        users.task_id == 1 ? <Test1 formData={formData1} /> :
                                            users.task_id == 2 ? <Test1 formData={formData2} /> : null
                                    } */}
                                    {/* <Test1 formData={formData1}/> */}

                                    {/* <div id="formio"></div> */}
                                    {/* <AutoPages formData={formData2} /> */}
                                    {/* <div class="col-xl">
                                        <div class="card mb-4">
                                            <div class="card-header d-flex justify-content-between align-items-center">
                                                <h5 class="mb-0">{users?.task_name}</h5>
                                            </div>
                                            <div class="card-body">
                                                <form>
                                                    <div class="mb-3">
                                                        <label class="form-label d-flex justify-content-between" for="basic-icon-default-fullname">Full Name</label>
                                                        <div class="input-group input-group-merge">
                                                            <span id="basic-icon-default-fullname2" class="input-group-text"><i class="bx bx-user"></i></span>
                                                            <input type="text" class="form-control" id="basic-icon-default-fullname" placeholder="Username" aria-label="John Doe" aria-describedby="basic-icon-default-fullname2" />
                                                        </div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label d-flex justify-content-between" for="basic-icon-default-company">Company</label>
                                                        <div class="input-group input-group-merge">
                                                            <span id="basic-icon-default-company2" class="input-group-text"><i class="bx bx-buildings"></i></span>
                                                            <input type="text" id="basic-icon-default-company" class="form-control" placeholder="ACME Inc." aria-label="ACME Inc." aria-describedby="basic-icon-default-company2" />
                                                        </div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label d-flex justify-content-between" for="basic-icon-default-email">Email</label>
                                                        <div class="input-group input-group-merge">
                                                            <span class="input-group-text"><i class="bx bx-envelope"></i></span>
                                                            <input type="text" id="basic-icon-default-email" class="form-control" placeholder="abc@gmail.com" aria-describedby="basic-icon-default-email2" />
                                                            <span id="basic-icon-default-email2" class="input-group-text">@example.com</span>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label d-flex justify-content-between" for="basic-icon-default-phone">Phone No</label>
                                                        <div class="input-group input-group-merge">
                                                            <span id="basic-icon-default-phone2" class="input-group-text"><i class="bx bx-phone"></i></span>
                                                            <input type="text" id="basic-icon-default-phone" class="form-control phone-mask" placeholder="658 799 8941" aria-label="658 799 8941" aria-describedby="basic-icon-default-phone2" />
                                                        </div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label d-flex justify-content-between" for="basic-icon-default-message">Message</label>
                                                        <div class="input-group input-group-merge">
                                                            <span id="basic-icon-default-message2" class="input-group-text"><i class="bx bx-comment"></i></span>
                                                            <textarea id="basic-icon-default-message" class="form-control" placeholder="Hi, Do you have a moment to talk Joe?" aria-label="Hi, Do you have a moment to talk Joe?" aria-describedby="basic-icon-default-message2"></textarea>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary">Send</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
