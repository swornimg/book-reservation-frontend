import React from 'react'
import Sidebar from './Sidebar.jsx';
import './layout.css';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';

const Layout = () => {
    return (

        <div className='layoutContainer'>
            <div className='sidebarCol'>
                <Sidebar />
            </div>
            <div className='mainpagecol'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>

    )
}

export default Layout