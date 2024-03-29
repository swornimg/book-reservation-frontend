import React from 'react'
import logo from "../assets/logo.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import './sidebar.css';

const navItems = [
    {
        text: "Menu",
        icon: null
    },
    {
        text: "Home",
        icon: <HomeOutlinedIcon />
    },
    {
        text: "Discover",
        icon: <ExploreOutlinedIcon />
    },
    {
        text: "My Activity",
        icon: null
    },
    {
        text: "Reading",
        icon: <RemoveRedEyeOutlinedIcon />
    },
    {
        text: "Want to Read",
        icon: <BookmarkAddOutlinedIcon />
    },
    {
        text: "Completed",
        icon: <TaskAltOutlinedIcon />
    },
    {
        text: "Settings",
        icon: null
    },
    {
        text: "My Profile",
        icon: <PersonOutlineOutlinedIcon />
    },
    {
        text: "FAQs",
        icon: <LiveHelpOutlinedIcon />
    },
    {
        text: "Contact us",
        icon: <PhoneForwardedOutlinedIcon />
    },


];

const Sidebar = () => {
    return (
        <div className='side'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='nav-link'>
                {navItems.map(({ text, icon }) => {
                    return (
                        <div key={text} className='sidebar-menu' style={{ fontSize: icon ? '22px' : '30px', padding: icon ? '0.2rem 0rem 0.2rem 0rem' : '0.8rem 0rem 0.8rem 0rem ' }}>
                            <div className='sidebar-icon'>
                                {icon}
                            </div>
                            <div className='sidebar-link'>
                                {text}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar;