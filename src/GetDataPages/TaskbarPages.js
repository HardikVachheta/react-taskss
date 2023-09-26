import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/dumpdata.json';
import { Helmet } from 'react-helmet';
import { Navbar_u } from '../Pages/Navbar_u';
import { Taskbar } from '../Pages/Taskbar';
import { Navbar } from '../Pages/Navbar';
import formData2 from '../data/table2.json'
import formData1 from '../data/table1.json'
import AutoPages from './AutoPages';
import { Formio } from 'formiojs';
import { Taskbar2 } from '../Pages/Taskbar2';
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
        // maxHeight: "92vh",
        overflowX: "hidden",
        overflowY: "auto",
        behavior: 'smooth',
    }

    return (
        <div>
            {/* <Navbar_u /> */}

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
                    {/* <Taskbar /> */}
                    <Taskbar2 />
                    <div class="layout-page">

                        <div class="content-wrapper">
                            <div class="container-xxl flex-grow-1 container-p-y" style={scroll1}>
                                <div class="row">
                                    {/* {
                                        users.task_id == 1 ? <AutoPages formData={formData1} /> :
                                            users.task_id == 2 ? <AutoPages formData={formData2} /> : null
                                    } */}

 
                                    
                                    {/* {
                                        users.task_id == 1 ? <Test1 formData={formData1} /> :
                                            users.task_id == 2 ? <Test1 formData={formData2} /> : null
                                    } */}
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
