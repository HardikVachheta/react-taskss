import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Accordion } from 'react-bootstrap';

const TempSideNav = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setActiveSubMenu(null); // Reset sub-menu when a menu is clicked
  };

  const handleSubMenuClick = (subMenu) => {
    setActiveSubMenu(subMenu);
  };

  return (
    <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <Nav.Item>
          <Link
            to="/dashboard"
            className={`nav-link ${activeMenu === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleMenuClick('dashboard')}
          >
            Dashboard
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Accordion>
            <Accordion.Toggle
              as={Nav.Link}
              variant="link"
              eventKey="0"
              className={`nav-link ${activeMenu === 'user' ? 'active' : ''}`}
              onClick={() => handleMenuClick('user')}
            >
              User
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Nav.Item>
                <Link
                  to="/create-user"
                  className={`nav-link ${activeSubMenu === 'createUser' ? 'active' : ''}`}
                  onClick={() => handleSubMenuClick('createUser')}
                >
                  Create User
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/user-list"
                  className={`nav-link ${activeSubMenu === 'userList' ? 'active' : ''}`}
                  onClick={() => handleSubMenuClick('userList')}
                >
                  User List
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/my-profile"
                  className={`nav-link ${activeSubMenu === 'myProfile' ? 'active' : ''}`}
                  onClick={() => handleSubMenuClick('myProfile')}
                >
                  My Profile
                </Link>
              </Nav.Item>
            </Accordion.Collapse>
          </Accordion>
        </Nav.Item>

        <Nav.Item>
          <Accordion>
            <Accordion.Toggle
              as={Nav.Link}
              variant="link"
              eventKey="1"
              className={`nav-link ${activeMenu === 'group' ? 'active' : ''}`}
              onClick={() => handleMenuClick('group')}
            >
              Group
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Nav.Item>
                <Link
                  to="/create-group"
                  className={`nav-link ${activeSubMenu === 'createGroup' ? 'active' : ''}`}
                  onClick={() => handleSubMenuClick('createGroup')}
                >
                  Create Group
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/group-list"
                  className={`nav-link ${activeSubMenu === 'groupList' ? 'active' : ''}`}
                  onClick={() => handleSubMenuClick('groupList')}
                >
                  Group List
                </Link>
              </Nav.Item>
            </Accordion.Collapse>
          </Accordion>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default TempSideNav;
