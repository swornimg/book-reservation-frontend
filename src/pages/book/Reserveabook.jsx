import React from 'react'
import "./reserveabook.css"
import reservebook from '../../assets/reservebook.png';
import { Link } from 'react-router-dom';

const Reserveabook = () => {
    return (
        <div className='ReserveBookContainer'>
            <div className="ReserveabookImgSide">
                <img src={reservebook} alt="reservebook" />
            </div>
            <form className='AddBookForm'>
                <div className='AddBook'>
                    <label>Title : &nbsp;</label>
                    <input
                        type="text"
                        name="title"
                    />
                </div>
                <div className='AddBook'>
                    <label>Authors : &nbsp;</label>
                    <input
                        type="text"
                        name="authors"
                    />
                </div>
                <div className='AddBook'>
                    <label>From Date : &nbsp;</label>
                    <input
                        type="date"
                        name="from_date"
                    />
                </div>
                <div className='AddBook'>
                    <label>To Date : &nbsp;</label>
                    <input
                        type="date"
                        name="to_date"
                    />
                </div>
                <div className='AddBook'>
                    <label>Message : &nbsp;</label>
                    <textarea
                        type="text"
                        name="description"

                        rows={2}
                    />
                </div>


                <div className='AddBookFormButtons'>
                    <button type="submit" className='btn btn-success'>Submit</button>
                    <Link to="/discover" type="button" className='btn btn-danger'>Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default Reserveabook