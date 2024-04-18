import React from 'react';
import './contactus.css';
import contactus from '../../assets/contactus.png';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PinDropIcon from '@mui/icons-material/PinDrop';

const Contactme = [
    {
        id: 1,
        icon: <PhoneForwardedIcon />,
        title: 'Telephone',
        detail: '+91 123 456 7890',
    },
    {
        id: 2,
        icon: <ForwardToInboxIcon />,
        title: 'E-mail',
        detail: 'Reserveyourbook@gmail.com',
    },
    {
        id: 3,
        icon: <PinDropIcon />,
        title: 'Location',
        detail: 'TW13 45D Feltham, England',
    },
]

const Contactus = () => {
    return (
        <div className="ContactusContainer">
            <div className='ContactusDetailDownSide'>
                {Contactme.map((item) => (
                    <div className='ContactusDetail' key={item.id}>
                        <div className='ContactusDetailIcon'>
                            {item.icon}
                        </div>
                        <div className="ContactUsDetaildownpart">
                            <h1>{item.title}</h1>
                            <p>{item.detail}</p>
                        </div>
                    </div>
                ))}


            </div>
            <div className='ContactusDetailupSide'>
                <div className='ContactDetail'>
                    <h1>Any other Enquiries ? Contact Us.</h1>
                    <form className="ContactusForm">
                        <label htmlFor="name">Name :</label>
                        <input type="text" id="name" name="name" />

                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" name="email" />

                        <label htmlFor="message">Message :</label>
                        <textarea id="message" name="message" rows="2"></textarea>
                        <div className='ConatctusFormSubmit'>
                            <button type="submit" className='btn btn-success'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='ContactusImgSide'>
                    <img src={contactus} alt="ContactusImg" />
                </div>
            </div>
        </div>
    );
};

export default Contactus;