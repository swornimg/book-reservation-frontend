import React from 'react';
import "./home.css";
import Trending from '../../components/Trending.jsx';
import TopTextbook from '../../components/TopTextbook.jsx';

const Home = () => {
    return (
        <div>
            <div className='HomeContainer'>
                <Trending />
                <TopTextbook />
            </div>
        </div>
    )
}

export default Home