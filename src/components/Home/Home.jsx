import React from 'react';
import './Home.css';
import HomeBanner from '../HomeBanner/HomeBanner';
import CategoryList from '../CategoryList/CategoryList';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CategoryList></CategoryList>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;