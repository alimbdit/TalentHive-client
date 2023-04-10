import React from 'react';
import './Home.css';
import HomeBanner from '../HomeBanner/HomeBanner';
import CategoryList from '../CategoryList/CategoryList';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CategoryList></CategoryList>
        </div>
    );
};

export default Home;