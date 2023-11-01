import React from 'react'

export const NavbarNew = () => {
    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" data-bg-className="bg-menu-theme">


            <div className="app-brand demo ">
                <a href="index.html" className="app-brand-link">

                    <span className="app-brand-text demo menu-text fw-bold ms-2">Sneat</span>
                </a>

                <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>



            <ul className="menu-inner py-1 overflow-auto">

                {/*<!-- Dashboards -->*/}
                <li className="menu-item active open">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Dashboards">Dashboards</div>
                        <div className="badge bg-danger rounded-pill ms-auto">5</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/dashboards-crm.html" target="_blank" className="menu-link">
                                <div data-i18n="CRM">CRM</div><div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                            </a>
                        </li>
                        <li className="menu-item active">
                            <a href="index.html" className="menu-link">
                                <div data-i18n="Analytics">Analytics</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-ecommerce-dashboard.html" target="_blank" className="menu-link">
                                <div data-i18n="eCommerce">eCommerce</div><div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-logistics-dashboard.html" target="_blank" className="menu-link">
                                <div data-i18n="Logistics">Logistics</div><div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-academy-dashboard.html" target="_blank" className="menu-link">
                                <div data-i18n="Academy">Academy</div><div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                            </a>
                        </li>
                    </ul>
                </li>

                {/*<!-- Layouts -->*/}
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-layout"></i>
                        <div data-i18n="Layouts">Layouts</div>
                    </a>

                    <ul className="menu-sub">

                        <li className="menu-item">
                            <a href="layouts-without-menu.html" className="menu-link">
                                <div data-i18n="Without menu">Without menu</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-without-navbar.html" className="menu-link">
                                <div data-i18n="Without navbar">Without navbar</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-container.html" className="menu-link">
                                <div data-i18n="Container">Container</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-fluid.html" className="menu-link">
                                <div data-i18n="Fluid">Fluid</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-blank.html" className="menu-link">
                                <div data-i18n="Blank">Blank</div>
                            </a>
                        </li>
                    </ul>
                </li>

                {/*<!-- Front Pages -->*/}
                <li className="menu-item " >
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-store"></i>
                        <div data-i18n="Front Pages">Front Pages</div>
                        <div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/front-pages/landing-page.html" className="menu-link" target="_blank">
                                <div data-i18n="Landing">Landing</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/front-pages/pricing-page.html" className="menu-link" target="_blank">
                                <div data-i18n="Pricing">Pricing</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/front-pages/payment-page.html" className="menu-link" target="_blank">
                                <div data-i18n="Payment">Payment</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/front-pages/checkout-page.html" className="menu-link" target="_blank">
                                <div data-i18n="Checkout">Checkout</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/front-pages/help-center-landing.html" className="menu-link" target="_blank">
                                <div data-i18n="Help Center">Help Center</div>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">Apps &amp; Pages</span>
                </li>
                {/*<!-- Apps -->*/}
                <li className="menu-item">
                    <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-email.html" target="_blank" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-envelope"></i>
                        <div data-i18n="Email">Email</div><div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-chat.html" target="_blank" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-chat"></i>
                        <div data-i18n="Chat">Chat</div><div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-calendar.html" target="_blank" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-calendar"></i>
                        <div data-i18n="Calendar">Calendar</div><div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-kanban.html" target="_blank" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-grid"></i>
                        <div data-i18n="Kanban">Kanban</div><div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                    </a>
                </li>
                {/*<!-- Pages -->*/}
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-dock-top"></i>
                        <div data-i18n="Account Settings">Account Settings</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="pages-account-settings-account.html" className="menu-link">
                                <div data-i18n="Account">Account</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="pages-account-settings-notifications.html" className="menu-link">
                                <div data-i18n="Notifications">Notifications</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="pages-account-settings-connections.html" className="menu-link">
                                <div data-i18n="Connections">Connections</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
                        <div data-i18n="Authentications">Authentications</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="auth-login-basic.html" className="menu-link" target="_blank">
                                <div data-i18n="Basic">Login</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="auth-register-basic.html" className="menu-link" target="_blank">
                                <div data-i18n="Basic">Register</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="auth-forgot-password-basic.html" className="menu-link" target="_blank">
                                <div data-i18n="Basic">Forgot Password</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-cube-alt"></i>
                        <div data-i18n="Misc">Misc</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="pages-misc-error.html" className="menu-link">
                                <div data-i18n="Error">Error</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="pages-misc-under-maintenance.html" className="menu-link">
                                <div data-i18n="Under Maintenance">Under Maintenance</div>
                            </a>
                        </li>
                    </ul>
                </li>
                {/*<!-- Components -->*/}
                <li className="menu-header small text-uppercase"><span className="menu-header-text">Components</span></li>
                {/*<!-- Cards -->*/}
                <li className="menu-item">
                    <a href="cards-basic.html" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-collection"></i>
                        <div data-i18n="Basic">Cards</div>
                    </a>
                </li>
                {/*<!-- User interface -->*/}
                <li className="menu-item">
                    <a href="javascript:void(0)" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-box"></i>
                        <div data-i18n="User interface">User interface</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="ui-accordion.html" className="menu-link">
                                <div data-i18n="Accordion">Accordion</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-alerts.html" className="menu-link">
                                <div data-i18n="Alerts">Alerts</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-badges.html" className="menu-link">
                                <div data-i18n="Badges">Badges</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-buttons.html" className="menu-link">
                                <div data-i18n="Buttons">Buttons</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-carousel.html" className="menu-link">
                                <div data-i18n="Carousel">Carousel</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-collapse.html" className="menu-link">
                                <div data-i18n="Collapse">Collapse</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-dropdowns.html" className="menu-link">
                                <div data-i18n="Dropdowns">Dropdowns</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-footer.html" className="menu-link">
                                <div data-i18n="Footer">Footer</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-list-groups.html" className="menu-link">
                                <div data-i18n="List Groups">List groups</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-modals.html" className="menu-link">
                                <div data-i18n="Modals">Modals</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-navbar.html" className="menu-link">
                                <div data-i18n="Navbar">Navbar</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-offcanvas.html" className="menu-link">
                                <div data-i18n="Offcanvas">Offcanvas</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                                <div data-i18n="Pagination &amp; Breadcrumbs">Pagination &amp; Breadcrumbs</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-progress.html" className="menu-link">
                                <div data-i18n="Progress">Progress</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-spinners.html" className="menu-link">
                                <div data-i18n="Spinners">Spinners</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-tabs-pills.html" className="menu-link">
                                <div data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-toasts.html" className="menu-link">
                                <div data-i18n="Toasts">Toasts</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-tooltips-popovers.html" className="menu-link">
                                <div data-i18n="Tooltips &amp; Popovers">Tooltips &amp; popovers</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-typography.html" className="menu-link">
                                <div data-i18n="Typography">Typography</div>
                            </a>
                        </li>
                    </ul>
                </li>

                {/*<!-- Extended components -->*/}
                <li className="menu-item">
                    <a href="javascript:void(0)" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-copy"></i>
                        <div data-i18n="Extended UI">Extended UI</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="extended-ui-perfect-scrollbar.html" className="menu-link">
                                <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="extended-ui-text-divider.html" className="menu-link">
                                <div data-i18n="Text Divider">Text Divider</div>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="menu-item">
                    <a href="icons-boxicons.html" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li>

                {/*<!-- Forms & Tables -->*/}
                <li className="menu-header small text-uppercase"><span className="menu-header-text">Forms &amp; Tables</span></li>
                {/*<!-- Forms -->*/}
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-detail"></i>
                        <div data-i18n="Form Elements">Form Elements</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="forms-basic-inputs.html" className="menu-link">
                                <div data-i18n="Basic Inputs">Basic Inputs</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="forms-input-groups.html" className="menu-link">
                                <div data-i18n="Input groups">Input groups</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-detail"></i>
                        <div data-i18n="Form Layouts">Form Layouts</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="form-layouts-vertical.html" className="menu-link">
                                <div data-i18n="Vertical Form">Vertical Form</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="form-layouts-horizontal.html" className="menu-link">
                                <div data-i18n="Horizontal Form">Horizontal Form</div>
                            </a>
                        </li>
                    </ul>
                </li>
                {/*<!-- Form Validation -->*/}
                <li className="menu-item">
                    <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/form-validation.html" target="_blank" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-list-check"></i>
                        <div data-i18n="Form Validation">Form Validation</div><div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                    </a>
                </li>
                {/*<!-- Tables -->*/}
                <li className="menu-item">
                    <a href="tables-basic.html" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-table"></i>
                        <div data-i18n="Tables">Tables</div>
                    </a>
                </li>
                {/*<!-- Data Tables -->*/}
                <li className="menu-item">
                    <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/tables-datatables-basic.html" target="_blank" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-grid"></i>
                        <div data-i18n="Datatables">Datatables</div><div className="badge bg-label-primary fs-tiny rounded-pill ms-auto">Pro</div>
                    </a>
                </li>
                {/*<!-- Misc -->*/}
                <li className="menu-header small text-uppercase"><span className="menu-header-text">Misc</span></li>
                <li className="menu-item">
                    <a href="https://github.com/themeselection/sneat-html-admin-template-free/issues" target="_blank" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-support"></i>
                        <div data-i18n="Support">Support</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/" target="_blank" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-file"></i>
                        <div data-i18n="Documentation">Documentation</div>
                    </a>
                </li>
            </ul>

        </aside>
    )
}
