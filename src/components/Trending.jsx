import React from 'react'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import image1 from '../assets/books/1.jpg';
import image2 from '../assets/books/2.jpg';
import image3 from '../assets/books/3.jpg';
import image4 from '../assets/books/4.jpg';
import image5 from '../assets/books/5.jpg';
import './other.css'
import { Link } from 'react-router-dom';

const Trendingbooks = [
    {
        id: 1,
        title: 'The Decision Book',
        author: 'Mikael Krogerus',
        image: image1,
        publishedDate: '2017'
    },
    {
        id: 2,
        title: 'Western Philosophy',
        author: 'Bertrand Russell',
        image: image2,
        publishedDate: '1946'
    },
    {
        id: 3,
        title: 'Prima Facie',
        author: 'Suzie Miller',
        image: image3,
        publishedDate: '2019'
    },
    {
        id: 4,
        title: 'The Miracle Morning',
        author: 'Hal Elrod',
        image: image4,
        publishedDate: '2012'
    },
    {
        id: 5,
        title: 'A Memoir of the Craft',
        author: 'Stephen Hawking',
        image: image5,
        publishedDate: '2000'
    }
];

const Trending = () => {
    return (
        <div className='TrendingBooks'>
            <div className='TrendingBooks-Title'>
                <LocalFireDepartmentOutlinedIcon /> &nbsp; Trending Books
            </div>
            <div className='TrendingBooks-ul'>
                {Trendingbooks.map((book, index) => (
                    <li key={index} className='TrendingBooks-li'>
                        <Link to={`/book/${book.id}`} id={`book-${book.id}`}>
                            <img src={book.image} alt={book.title} />

                            <div className="TrendignBooksDetails">
                                <h5>{book.title}</h5>
                                <div>
                                    {book.author} |  {book.publishedDate}
                                </div>
                            </div>
                        </Link>

                    </li>
                ))}
            </div>
        </div>
    )
}

export default Trending;