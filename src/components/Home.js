import React from 'react';
import BannerOne from './BannerOne';
import BannerTwo from './BannerTwo';
import Stat from './Stat';
import Trust from './Trust';

const Home = () => {
    return (
        <div>
            <hr class=" bg-red-600 py-1"></hr> 
            <BannerOne></BannerOne>
            <BannerTwo></BannerTwo>
            <Stat></Stat>
            <Trust></Trust>
        </div>
    );
};

export default Home;