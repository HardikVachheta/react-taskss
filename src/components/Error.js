import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const Error = () => {

    const goBack = () => {
        window.history.back();
    };

    return (
        <div>
            <Helmet>
                <title>Error - Pages </title>

                {/* <script type="text/javascript" async="" src="https://static.hotjar.com/c/hotjar-3067524.js?sv=7"></script> */}
                {/* <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-5DDHKGP"></script> */}
                <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
                <link rel="stylesheet" href="../assets/vendor/css/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" className="template-customizer-theme-css" />
                <link rel="stylesheet" href="../assets/css/demo.css" />
                <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="../assets/vendor/css/pages/page-misc.css" />
                <link rel="stylesheet" href="https://a.omappapi.com/app/js/api.min.css" id="omapi-css" media="all" />

            </Helmet>
            <div className="container-xxl container-p-y">
                <div className="misc-wrapper">
                    <h2 className="mb-2 mx-2">Page Not Found :(</h2>
                    <p className="mb-4 mx-2">Oops! 😖 The requested URL was not found on this server.</p>
                    <Link to="/" className="btn btn-primary">Back to Registration Page</Link>
                    <br/>
                    <Link onClick={goBack} className=""><i className="bx bx-arrow-back"></i> Go Back</Link>
                    {/* <button onClick={goBack}>
                        Go Back
                    </button> */}
                    <div className="mt-3">
                        <img src="../assets/img/illustrations/page-misc-error-light.png" alt="page-misc-error-light" width="500" className="img-fluid" data-app-dark-img="illustrations/page-misc-error-dark.png" data-app-light-img="illustrations/page-misc-error-light.png" />
                    </div>
                </div>
            </div>
        </div >
    )
}
