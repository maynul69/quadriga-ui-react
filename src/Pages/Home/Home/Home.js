import React from 'react';
import AboutUsText from '../../About/AboutUsText/AboutUsText';
import Cars from '../../Cars/Cars/Cars';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Team from '../../Team/Team';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Cars></Cars>
            <AboutUsText></AboutUsText>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;