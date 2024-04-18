import React from 'react';
import "./book.css";
import image1 from '../../assets/books/1.jpg';
import image2 from '../../assets/books/2.jpg';
import image3 from '../../assets/books/3.jpg';
import image4 from '../../assets/books/4.jpg';
import image5 from '../../assets/books/5.jpg';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

const books = [
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

const Book = () => {
    return (
        <div className='BookContainer'>
            <div className='BookImageSide'>
                <div className='BookImage'>
                    <img src={image3} alt='Book 1' />
                </div>
                <div>
                    <Link to="/reserveabook" className='btn btn-info' style={{
                        padding: '12px 18px 12px 18px', color: 'white', fontSize: '20px', textDecoration: 'none', marginBottom: '4px'
                    }}>
                        Reserve this book
                    </Link>
                </div>
                <div className='BookImageTOC'>
                    <h1>Table of Contents</h1>
                    <ul>
                        <li>Chapter 1</li>
                        <li>Chapter 2</li>
                        <li>Chapter 3</li>
                        <li>Chapter 4</li>
                        <li>Chapter 5</li>
                    </ul>
                </div>
            </div>
            <div className='BookDiscriptionSide'>
                <h1> Prima Facie Prima Facie Prima Facie</h1>
                <h2>Authors : Suzie Miller</h2>
                <div className='EditBook'>
                    <h4>Published Date: 2022-01-01</h4>
                    <div className='EditBookButtons'>
                        <Link type="button" className="btn btn-success">
                            <EditIcon style={{ color: 'white' }} />Edit
                        </Link>
                        <Link type="button" className="btn btn-danger">
                            <DeleteOutlineIcon style={{ color: 'white' }} />Delete
                        </Link>

                    </div>
                </div>

                <div className="discription">
                    <h1>Writer’s Note  </h1>
                    <h2>Suzie Miller Prima Facie</h2>
                    A (Latin) legal term meaning: On the face of it. The idea behind Prima Facie has
                    been playing out in my mind since my law school days, years before
                    I was a playwright. It was there waiting for me to find the courage to write,
                    and for the right social environment to provide a space for it. In light of the
                    #MeToo movement, the play, Prima Facie, was finally able to be realised. Years of
                    practising as a human rights and criminal defence lawyer increased my feminist
                    questioning and interrogation of the legal system, because while I firmly believe
                    that ‘innocent until proven guilty’ is the bedrock of human rights, it always felt
                    that its application in sexual assault cases served to undermine rather than to
                    uphold any real fairness.
                    <h2 style={{ paddingTop: '4px' }}>Part Two</h2>
                    Yet significantly, research has shown that women giving evidence
                    in sexual assault cases are just not believed! Even by other women.
                    To report the crime, endure all the court delays, show up for a prosecution,
                    be cross-examined and publicly written about in the media takes
                    extraordinary courage. It is not a short process either, and ironically
                    indicates an immense faith that the system will be fair. But does the
                    legal system deserve this faith? Or does it silence women further?
                    How can society and therefore the law evolve to reform this area of law?
                    When Prima Facie was first staged at the Griffin Theatre – Australia’s
                    playwrights’ theatre, a night was sold specially to women in the law.
                    The audience was made up of women judges, QCs, SCs, barristers,
                    solicitors and female politicians from both state and federal parliaments.

                </div>
            </div>
        </div >
    )
}

export default Book