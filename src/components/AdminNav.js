import React, { useState } from 'react';
import menuData from '../data/nav2.json';
import { Helmet } from 'react-helmet';

const AdminNav = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMenuEnter = (menuId) => {
    setOpenMenu(menuId);
  };

  const handleMenuLeave = () => {
    setOpenMenu(null);
  };

  const handleMenuClick = (menuId) => {
    setActiveMenu((prevActiveMenu) => (prevActiveMenu === menuId ? null : menuId));
  };

  const handleSubmenuClick = (submenuId) => {
    setActiveSubmenu(submenuId);
  };

  const generateSubMenu = (submenu) => {
    return (
      <ul className="menu-sub">
        {submenu.map((item) => (
          <li
            key={item.id}
            className={`menu-item ${activeSubmenu === item.id ? 'active' : ''}`}
            onClick={() => handleSubmenuClick(item.id)}
          >
            <a href={item.link} className="menu-link">
              <i className={`menu-icon tf-icons ${item.icon}`} />
              <div data-i18n={item.label}>{item.label}</div>
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const generateMenu = () => {
    return (
      <ul className="menu-inner" style={{ marginLeft: 0 }}>
        {menuData.menu.map((menuItem) => (
          <li
            key={menuItem.id}
            className={`menu-item ${activeMenu === menuItem.id ? 'active' : ''} ${openMenu === menuItem.id ? 'open' : ''}`}
            onMouseEnter={() => handleMenuEnter(menuItem.id)}
            onMouseLeave={handleMenuLeave}
            onClick={() => handleMenuClick(menuItem.id)}
          >
            <a href="javascript:void(0)" className="menu-link menu-toggle">
              <i className={`menu-icon tf-icons ${menuItem.icon}`} />
              <div data-i18n={menuItem.label}>{menuItem.label}</div>
            </a>
            {menuItem.submenu && generateSubMenu(menuItem.submenu)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <aside
      id="layout-menu"
      className="layout-menu-horizontal menu menu-horizontal container-fluid flex-grow-0 bg-menu-theme"
      data-bg-class="bg-menu-theme"
      style={{
        touchAction: "none",
        userSelect: "none",
        WebkitUserDrag: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
      }}
    >
        <Helmet>
        <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" type="text/css" href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />

        </Helmet>
      {generateMenu()}
      {/* ... other code ... */}
    </aside>
  );
};

export default AdminNav;
