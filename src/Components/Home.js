import React from 'react';
import MySwiper from '../utils/Swiper';
import ContentDetails from './ContentDetails';
import Stats from './Stats';

const Home = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content text-left flex-col lg:flex-row md:flex-row items-start">
                <div className='sticky top-20'>
                    <MySwiper />

                    {/*  */}

                    <div className='hidden lg:block md:block'>
                        <Stats />
                    </div>
                </div>
                <div className='lg:px-24'>
                    <ContentDetails />
                </div>
            </div>
        </div>
    );
};

export default Home;