import React from 'react'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import image1 from '../assets/books/1.jpg';
import image2 from '../assets/books/2.jpg';
import image3 from '../assets/books/3.jpg';
import image4 from '../assets/books/4.jpg';
import image5 from '../assets/books/5.jpg';
import './other.css'

const books = [
    {
        title: 'Book 1',
        author: 'Author 1',
        image: image1,
        publishedDate: '2022-01-01'
    },
    {
        title: 'Book 2',
        author: 'Author 2',
        image: image2,
        publishedDate: '2022-02-01'
    },
    {
        title: 'Book 3',
        author: 'Author 3',
        image: image3,
        publishedDate: '2022-03-01'
    },
    {
        title: 'Book 3',
        author: 'Author 3',
        image: image4,
        publishedDate: '2022-03-01'
    },
    {
        title: 'Book 3',
        author: 'Author 3',
        image: image5,
        publishedDate: '2022-03-01'
    }
];

const Trending = () => {
    return (
        <div className='TrendingBooks'>
            <div className='TrendingBooks-Title'>
                <LocalFireDepartmentOutlinedIcon /> <p>Trending</p>
            </div>

            <ul className='TrendingBooks-ul'>
                {books.map((book, index) => (
                    <li key={index} className='TrendingBooks-li'>
                        <img src={book.image} alt={book.title} />
                        <div>
                            <h3>{book.title}</h3>
                            <p>Author: {book.author}</p>
                            <p>Published Date: {book.publishedDate}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Trending;