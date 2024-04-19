

import React, { useState } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';

const navItem = [
    {
        text: "Home",
        icon: <HomeOutlinedIcon />,
        link: '/',
    },
    {
        text: "Discover",
        icon: <ExploreOutlinedIcon />,
        link: '/discover',
    },
    {
        text: "Reading",
        icon: <RemoveRedEyeOutlinedIcon />,
        link: '/reading',
    },
    {
        text: "Want to Read",
        icon: <BookmarkAddOutlinedIcon />,
        link: '/wanttoread',
    },
    {
        text: "Completed",
        icon: <TaskAltOutlinedIcon />,
        link: '/completed',
    },
    {
        text: "My Profile",
        icon: <PersonOutlineOutlinedIcon />,
        link: '/myprofile',
    },
    {
        text: "FAQs",
        icon: <LiveHelpOutlinedIcon />,
        link: '/faqs',
    },
    {
        text: "Contact us",
        icon: <PhoneForwardedOutlinedIcon />,
        link: '/contactus',
    },
];

const Navbar = () => {

    return (
        <div className='navbar'>
            <input placeholder='Search' />

            <div className="navbar-icons">
                <ForumOutlinedIcon style={{ fontSize: '30px' }} />
                <NotificationsActiveOutlinedIcon style={{ fontSize: '30px' }} />
            </div>

            <div className='navbar-identity'>
                <Link to="/login"><p>Login</p></Link>
                <Link to="/register">
                    <button type="button" className="btn btn-primary">Register to read</button>
                </Link>
            </div>


        </div>
    );
};

export default Navbar;