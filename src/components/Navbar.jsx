import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const Navbar = () => {
    return (
        <div className='navbar'>
            <input placeholder='search' />
            <div className="navbar-icons">
                <ForumOutlinedIcon style={{ fontSize: '30px' }} />
                <NotificationsActiveOutlinedIcon style={{ fontSize: '30px' }} />
            </div>

            <div className='navbar-identity'>
                <Link to="/login"><p>Login</p></Link>
                <Link to="/register" >
                    <button type="button" className="btn btn-primary">Register to read</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar