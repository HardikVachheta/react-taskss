import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AdminNav2 = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [activeMenu, setActiveMenu] = useState('dashboards');
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const handleMenuEnter = (menuId) => {
        setOpenMenu(menuId);
    };

    const handleMenuLeave = () => {
        setOpenMenu(null);
    };

    const handleMenuClick = (menuId) => {
        setActiveMenu((prevActiveMenu) => (prevActiveMenu === menuId ? null : menuId));
        // setActiveMenu(menuId);
    };

    const handleSubmenuClick = (submenuId) => {
        setActiveSubmenu(submenuId);
    };
    return (
        <aside
            id="layout-menu"
            className="layout-menu-horizontal menu menu-horizontal container-fluid flex-grow-0 bg-menu-theme"
            data-bg-class="bg-menu-theme"

            style={{
                touchAction: "none",
                userSelect: "none",
                position: "fixed",
                WebkitUserDrag: "none",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
            }}
        >
            <div className="container-xxl d-flex h-100">
                <a href="#" className="menu-horizontal-prev d-none" />
                <div className="menu-horizontal-wrapper">
                    <ul className="menu-inner" style={{ marginLeft: 0 }}>
                        <li className='menu-item me-4'>
                            <Link to="/AdminDashboard" className="app-brand-text demo menu-text fw-bold" style={{ fontSize: "180%" }}>Hardik</Link>
                        </li>
                        {/* <li className={`menu-item ${activeMenu === 'dashboards' ? 'active' : ''} ${openMenu === 'dashboards' ? 'open' : ''}`}
                            onMouseEnter={() => handleMenuEnter('dashboards')}
                            onMouseLeave={handleMenuLeave}
                            onClick={() => handleMenuClick('dashboards')}>
                            <Link to="/AdminDashboard" className="menu-link" >
                                <i className="menu-icon tf-icons bx bx-home-circle" />
                                <div data-i18n="Dashboards">Dashboards</div>
                            </Link>
                        </li> */}
                        <li className={`menu-item ${openMenu === 'User' ? 'open' : ''}`}
                            onMouseEnter={() => handleMenuEnter('User')}
                            onMouseLeave={handleMenuLeave}>
                            <Link to="" className="menu-link menu-toggle" >
                                <i className="menu-icon tf-icons bx bx-layout" />
                                <div data-i18n="Layouts">User</div>
                            </Link>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <Link to="/AdminDashboard/CreateUser" className="menu-link">
                                        <i className="menu-icon tf-icons bx bx-menu" />
                                        <div data-i18n="Without menu">User Create</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/AdminDashboard/ListUser" className="menu-link">
                                        <i className="menu-icon tf-icons bx bx-vertical-center" />
                                        <div data-i18n="Without menu">List User</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`menu-item ${openMenu === 'Group' ? 'open' : ''}`}
                            onMouseEnter={() => handleMenuEnter('Group')}
                            onMouseLeave={handleMenuLeave}>
                            <Link to="" className="menu-link menu-toggle" >
                                <i className="menu-icon tf-icons bx bx-layout" />
                                <div data-i18n="Layouts">Group</div>
                            </Link>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <Link to="/AdminDashboard/CreateGroup" className="menu-link">
                                        <i className="menu-icon tf-icons bx bx-menu" />
                                        <div data-i18n="Without menu">Group Create</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/AdminDashboard/ListGroup" className="menu-link">
                                        <i className="menu-icon tf-icons bx bx-vertical-center" />
                                        <div data-i18n="Without menu">List Group</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <a href="#" className="menu-horizontal-next disabled d-none" />
            </div>
        </aside>
    )
}
