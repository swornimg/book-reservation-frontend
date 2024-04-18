import React from 'react'
import "./profile.css"

const Profile = () => {
    return (
        <div className='ProfileContainer'>
            <div className='ProfileImageSide'>
                <img src='https://www.w3schools.com/howto/img_avatar.png' alt='Profile' />
            </div>
            <div className='ProfileFormSide'>
                <form className='AddBookForm'>
                    <div className='AddBook'>
                        <label>Email : &nbsp;</label>
                        <input
                            type="email"
                            name="email"
                        />
                    </div>
                    <div className='AddBook'>
                        <label>First Name : &nbsp;</label>
                        <input
                            type="text"
                            name="first_name"
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Last Name : &nbsp;</label>
                        <input
                            type="text"
                            name="last_name"
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Cover Images :</label>
                        <input
                            type="file"
                            name="cover_image"
                            multiple
                        />
                    </div>
                    <div className='AddBookFormButtons'>
                        <button type="submit" className='btn btn-success'>Submit</button>
                        <button type="button" className='btn btn-danger'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile