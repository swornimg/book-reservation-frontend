import React from 'react'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const Navbar = () => {
    return (
        <div className='navbar'>
            <input placeholder='search' />
            <div className="navbar-icons">
                <ForumOutlinedIcon style={{ fontSize: '30px', padding: '0rem 0.6rem 0rem 1rem' }} />
                <NotificationsActiveOutlinedIcon style={{ fontSize: '30px', padding: '0rem 1rem 0rem 0.6rem' }} />
            </div>

            <div className='navbar-identity'>
                <div className="navbar-name">
                    <p>Krishna </p>
                    <p>Administrator</p>
                </div>
                <div className='navbar-img'>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
                </div>
            </div>
        </div>
    )
}

export default Navbar