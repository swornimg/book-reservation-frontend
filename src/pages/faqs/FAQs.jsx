import React, { useState } from 'react';
import "./FAQs.css";
import faq from '../../assets/faq.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faq2 from '../../assets/faq1.png';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            id: 1,
            question: 'How do I create an account?',
            answer: 'Visit our website and click on register to read. You will be prompted to enter your email address, password, and possibly some additional information like your name.',
        },
        {
            id: 2,
            question: 'How do I search for a book?',
            answer: 'You can search for books by title, author, genre, or keyword. Most systems will have a search bar at the top of the homepage.',
        },
        {
            id: 3,
            question: 'Can I see if a book is available ?',
            answer: 'Yes, the reservation system will display the availability of each book in real-time. Look for an "Available" or "In Stock" indicator on the books detail page.',
        },
        {
            id: 4,
            question: 'How do I reserve a book?',
            answer: 'Once you find a book you want, click on the "Reserve" button. You may need to be logged in to your account to proceed.',
        },
        {
            id: 5,
            question: 'How long can I hold a reservation?',
            answer: 'The reservation period will vary depending on the library or system. You will typically see the hold duration displayed on the books detail page or during the reservation process.',
        },
        {
            id: 6,
            question: 'How do I pick up my reserved book?',
            answer: 'You will receive a notification when your book is ready for pickup. This notification might come via email or the library app. Bring the notification or your library card to the library to collect your book.',
        },
        {
            id: 7,
            question: 'Can I renew my reservation?',
            answer: 'In some cases, you may be able to renew your reservation online if no one else has placed a hold on the book. Check the system for a "Renew" button or option.',
        },
    ];

    return (
        <div className='FAQContainer'>
            <div className='FAQImageSide'>
                <img src={faq2} alt="FAQ2" />

                <img src={faq} alt="FAQ pics" />
            </div>
            <div className='FAQDiscriptionSide'>
                <h1>Frequently Asked Questions (FAQs)</h1>
                {faqs.map((faq, index) => (
                    <div key={index} className='FAQQandA'>
                        <div className='FAQQuestions'>
                            <button onClick={() => handleToggle(index)}>
                                {faq.question}
                            </button>
                            <ExpandMoreIcon />
                        </div>
                        <hr />
                        {activeIndex === index && <div className='FAQAns'>{faq.answer}</div>}
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;