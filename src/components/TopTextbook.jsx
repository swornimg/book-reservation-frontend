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
        title: 'Book 1',
        author: 'Author 1',
        image: image1,
        publishedDate: '2022-01-01'
    },
    {
        id: 2,
        title: 'Book 2',
        author: 'Author 2',
        image: image2,
        publishedDate: '2022-02-01'
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'Author 3',
        image: image3,
        publishedDate: '2022-03-01'
    },
    {
        id: 4,
        title: 'Book 3',
        author: 'Author 3',
        image: image4,
        publishedDate: '2022-03-01'
    },
    {
        id: 5,
        title: 'Book 3',
        author: 'Author 3',
        image: image5,
        publishedDate: '2022-03-01'
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
                                    <h3>{book.title}</h3>
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