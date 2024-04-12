import React from 'react';
import "./discover.css";
import img1 from '../../assets/books/1.jpg';
import img2 from '../../assets/books/2.jpg';
import img3 from '../../assets/books/3.jpg';
import img4 from '../../assets/books/4.jpg';
import img5 from '../../assets/books/5.jpg';
import img6 from '../../assets/books/6.jpg';

const books = [
    {
        id: 1,
        title: "Book 1",
        picture: img1,
        author: "Author 3",
        publishedDate: "2022-01-01",
        detail: "Short detail about Book 3"
    },
    {
        id: 2,
        title: "Book 2",
        picture: img2,
        author: "Author 5",
        publishedDate: "2022-02-01",
        detail: "Short detail about Book 4"
    },
    // Add more books here...
    {
        id: 3,
        title: "Book 3",
        picture: img3,
        author: "Author 3",
        publishedDate: "2022-12-01",
        detail: "Short detail about Book 20"
    },
    {
        id: 4,
        title: "Book 4",
        picture: img4,
        author: "Author 3",
        publishedDate: "2022-12-01",
        detail: "Short detail about Book 20"
    }, {
        id: 5,
        title: "Book 5",
        picture: img5,
        author: "Author 3",
        publishedDate: "2022-12-01",
        detail: "Short detail about Book 20"
    }, {
        id: 6,
        title: "Book 6",
        picture: img6,
        author: "Author 3",
        publishedDate: "2022-12-01",
        detail: "Short detail about Book 20"
    }, {
        id: 6,
        title: "Book 6",
        picture: img6,
        author: "Author 3",
        publishedDate: "2022-12-01",
        detail: "Short detail about Book 20"
    }, {
        id: 6,
        title: "Book 6",
        picture: img6,
        author: "Author 3",
        publishedDate: "2022-12-01",
        detail: "Short detail about Book 20"
    }

]

const Discover = () => {
    return (
        <div className='DiscoverContainer'>
            <h1>Discover</h1>
            <div className='DiscoverBooks'>
                {books.map((book, index) => (
                    <div className="Discovercard" style={{ width: '18rem' }} key={index}>
                        <img src={book.picture} className="card-img-top" alt={book.title} />
                        <div className="Discovercard-body">
                            <p className="Discovercard-text"> <h3>{book.title}</h3>
                                <p>Author: {book.author}</p>
                                <p>Published Date: {book.publishedDate}</p>
                                <p>{book.detail}</p>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Discover 