import React from 'react';
import BannerOne from './BannerOne';
import BannerTwo from './BannerTwo';
import Footer from './Footer';

import Trust from './Trust';

const Home = () => {
    return (
        <div>
            <hr class=" bg-red-600 py-1"></hr> 
            <BannerOne></BannerOne>
            <BannerTwo></BannerTwo>
            <Trust></Trust>
            <Footer></Footer>
        </div>
    );
};

export default Home;