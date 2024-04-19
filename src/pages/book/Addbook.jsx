import React, { useState } from 'react';
import './addbook.css';
import img1 from '../../assets/books/3.jpg';

const Addbook = () => {

    const [title, setTitle] = useState("");
    const [authors, setAuthors] = useState("");
    const [publication_date, setPublication_date] = useState("");
    const [description, setDescription] = useState("");
    const [language, setLanguage] = useState("");
    const [num_pages, setNum_pages] = useState("");
    const [genre_id, setGenre_id] = useState("");
    const [isbn, setIsbn] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [publisher, setPublisher] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !authors || publisher || !publication_date || !description || !language || !num_pages || !genre_id || !isbn) {
            alert('All fields are required');
            return;
        }
        const formdata = new FormData();
        formdata.append("title", title);
        formdata.append("authors", authors);
        formdata.append("publication_date", publication_date);
        formdata.append("description", description);
        formdata.append("language", language);
        formdata.append("num_pages", num_pages);
        formdata.append("genre_id", genre_id);
        formdata.append("isbn", isbn);
        formdata.append("publisher", publisher);
        formdata.append("cover_image", document.querySelector('input[type="file"]').files[0]);

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        };

        fetch("http://139.59.168.208:1337/add-book", requestOptions)
            .then((response) => {
                response.json();
                if (response.status === 400) {
                    alert("Book already exists");
                    setSuccess(false);
                } else if (response.status === 200 || 201) {
                    setError("");
                    setSuccess(true);
                    setTitle("");
                    setAuthors("");
                    setPublication_date("");
                    setDescription("");
                    setLanguage("");
                    setNum_pages("");
                    setGenre_id("");
                    setIsbn("");
                    setPublisher("");
                } else {
                    alert("An error occurred");
                    setSuccess(false);
                }
            })
            .then((result) => {
                console.log(result);
                if (result.error) {
                    setError(result.error);
                } else {
                    setError("");
                }
            })
            .catch((error) => console.log("error", error));
    };

    return (
        <div className='AddBookContainer'>
            <div className='AddBookImageSide'>
                <img src={img1} alt="Add Book" style={{ width: '330px', height: '500px', borderRadius: '10px' }} />
            </div>
            <div className='AddBookFormSide'>
                <h1>Add Book</h1>
                <p className='error'> {error}</p>
                <form onSubmit={handleSubmit} className='AddBookForm'>
                    <div className='AddBook'>
                        <label>Title : &nbsp;</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Authors : &nbsp;</label>
                        <input
                            type="text"
                            name="authors"
                            value={authors}
                            onChange={(e) => setAuthors(e.target.value)}
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Publication Date : &nbsp;</label>
                        <input
                            type="date"
                            name="publication_date"
                            value={publication_date}
                            onChange={(e) => setPublication_date(e.target.value)}
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Publisher : &nbsp;</label>
                        <input
                            type="text"
                            name="publisher"
                            value={publisher}
                            onChange={(e) => setPublisher(e.target.value)}
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Description : &nbsp;</label>
                        <textarea
                            type="text"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={2}
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Language : &nbsp;</label>
                        <input
                            type="text"
                            name="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        />
                    </div>
                    <div className='AddBook'>
                        <label>Number of Page : &nbsp;</label>
                        <input
                            type="text"
                            name="num_pages"
                            value={num_pages}
                            onChange={(e) => setNum_pages(e.target.value)}
                        />
                    </div>
                    <div className='AddBookother'>
                        <label>Genre : &nbsp;</label>
                        <input
                            type="number"
                            name="genre_id"
                            value={genre_id}
                            onChange={(e) => setGenre_id(e.target.value)}
                        />
                        <label>Isbn : &nbsp;</label>
                        <input
                            type="text"
                            name="isbn"
                            value={isbn}
                            onChange={(e) => setIsbn(e.target.value)}
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
    );
};

export default Addbook;