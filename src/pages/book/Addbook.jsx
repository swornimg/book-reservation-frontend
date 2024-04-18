import React, { useState } from 'react';
import './addbook.css';

const Addbook = () => {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        images: [],
    });

    const handleInputChange = (e) => {
        setBookData({
            ...bookData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setBookData({
            ...bookData,
            images: files,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to submit the book data and images here
        console.log(bookData);
    };

    return (
        <div className='AddBookContainer'>
            <div className='AddBookImageSide'>
                {bookData.images.map((image, index) => (
                    <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt={`Book Image ${index + 1}`}
                        style={{ width: '400px', height: '600px', marginRight: '10px', borderRadius: '10px' }}
                    />
                ))}
            </div>
            <div className='AddBookFormSide'>
                <h1>Add Book</h1>
                <form onSubmit={handleSubmit} className='AddBookForm'>
                    <div className='AddBook'>
                        <label>Title : &nbsp;</label>
                        <input
                            type="text"
                            name="title"
                            value={bookData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Authors : &nbsp;</label>
                        <input
                            type="text"
                            name="authors"
                            value={bookData.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Publication Date : &nbsp;</label>
                        <input
                            type="date"
                            name="publication_date"
                            value={bookData.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Description : &nbsp;</label>
                        <textarea
                            type="text"
                            name="description"
                            value={bookData.author}
                            onChange={handleInputChange}
                            rows={2}
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Language : &nbsp;</label>
                        <input
                            type="text"
                            name="language"
                            value={bookData.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Number of Page : &nbsp;</label>
                        <input
                            type="text"
                            name="num_pages"
                            value={bookData.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Genre : &nbsp;</label>
                        <input
                            type="text"
                            name="genre_id"
                            value={bookData.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Cover Images :</label>
                        <input
                            type="file"
                            name="cover_image"
                            multiple
                            onChange={handleImageUpload}
                        />
                    </div>
                    <div className='AddBookFormButtons'>
                        <button type="submit" className='btn btn-success'>Submit</button>
                        <button type="button" className='btn btn-danger'>Cancel</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Addbook;