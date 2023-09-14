import React from 'react'

const navStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
};

const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
};


export const Navbar2 = () => {
    return (
        // <div>
        <aside id="layout-menu" className='layout-menu menu-vertical menu bg-menu-theme'>
            <ul className="menu-inner py-1">
                <li className='menu-item'>
                    <a href="/" >Home</a>
                </li>
                <li>
                    <a href="/about" >About</a>
                </li>
                <li>
                    <a href="/services" >Services</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </aside>
        // </div>
    )
}
