import React from 'react'
import Sidebar from './Sidebar.jsx';
import './layout.css';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Trending from './Trending.jsx';
import TopTextbook from './TopTextbook.jsx';
import Text from './Text.jsx';


const Layout = () => {
    return (
        <div className='container'>
            <div className='sidebarCol'>
                <Sidebar />
            </div>
            <div className='mainpageCol'>
                <Navbar />
                <div className='midpagecol'>
                    <Text />
                    <Trending />
                    <TopTextbook />
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Layout