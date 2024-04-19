import React from 'react';
import logo1 from "../assets/logo1.png";
import { Link } from 'react-router-dom';
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
        text: "My Menu",
        icon: null,
        isTitle: true
    },
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
        text: "My Activity",
        icon: null,
        isTitle: true
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
        text: "My Settings",
        icon: null,
        isTitle: true
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

const Sidebar = () => {
    return (
        <div className='side'>
            <div className='logo'>
                <img src={logo1} alt="logo" />
            </div>
            <div className='nav-link'>
                {navItems.map(({ text, icon, link, isTitle }) => {
                    if (isTitle) {
                        return <h5 key={text} className='sidebar-menu'>{text}</h5>;
                    }
                    return (
                        <div key={text} className='sidebar-menu'>
                            <div className='sidebar-icon'>
                                {icon}
                            </div>
                            <div className='sidebar-link'>
                                {link ? <Link to={link}>{text}</Link> : text}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Sidebar;
