import React from 'react'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import image1 from '../assets/books/7.jpg';
import image2 from '../assets/books/8.jpg';
import image3 from '../assets/books/9.jpg';
import image4 from '../assets/books/10.jpg';
import image5 from '../assets/books/11.jpg';
import './other.css'
import { Link } from 'react-router-dom';

const Trendingbooks = [
    {
        id: 1,
        title: 'Dysphagia E-Book',
        author: 'Michael E. Groher',
        image: image1,
        publishedDate: '2020'
    },
    {
        id: 2,
        title: 'Language Disorders...',
        author: 'Rhea Paul',
        image: image2,
        publishedDate: '2017'
    },
    {
        id: 3,
        title: 'The Healthcare Quality...',
        author: 'Elizabeth R. Ransom',
        image: image3,
        publishedDate: '2022'
    },
    {
        id: 4,
        title: 'Basic Immunology',
        author: 'Abul K. Abbas',
        image: image4,
        publishedDate: '2023'
    },
    {
        id: 5,
        title: 'Books',
        author: 'Larry McMurtry',
        image: image5,
        publishedDate: '2010'
    }
];

const TopTextbook = () => {
    return (
        <div className='TrendingBooks' style={{ paddingBottom: '2rem' }}>
            <div className='TrendingBooks-Title'>
                <LocalFireDepartmentOutlinedIcon /> &nbsp; Top Textbooks (This Month)
            </div>
            <Link to='/another-page' id='trending-books-link'>
                <div className='TrendingBooks-ul'>
                    {Trendingbooks.map((book, index) => (
                        <li key={index} className='TrendingBooks-li'>
                            <Link to={`/book/${book.id}`} id={`book-${book.id}`}>
                                <img src={book.image} alt={book.title} />
                                <div className="TrendignBooksDetails">
                                    <h5>{book.title}</h5>
                                    <div>
                                        {book.author} | {book.publishedDate}
                                    </div>

                                </div>
                            </Link>
                        </li>
                    ))}
                </div>
            </Link>
        </div>
    )
}

export default TopTextbook;