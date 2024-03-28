import React from 'react'
import logo from "../assets/logo.png";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Sidebar;