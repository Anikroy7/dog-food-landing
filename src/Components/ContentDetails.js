import React from 'react';
import About from './About';
import Brands from './Brands';
import Ratings from './Ratings';

const ContentDetails = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Pedigree Complete Nutrition Adult Dry Dog Food Roasted Chicken, Rice & Vegetable Flavor Dog Kibble, 30 lb. Bag</h1>
            {/*    <p className="py-6">
                <span className='mr-2'>⭐⭐⭐⭐⭐</span>
                <span>
                    <a href="
                        ">10,819 ratings</a>
                </span>
            </p> */}
            {/*   <p className='mb-2'>Style: <b>Dry food</b></p>
            <div className='flex items-center'>
                <button className="border-2 p-1 px-5">Bundle dry + wet food</button>
                <button className="border-2 ml-2 p-1 px-5">Dry food</button>
            </div> */}
            <p className='mt-3'>We are working hard to be back in stock as soon as possible.</p>
            <Brands />
            <hr className='p-3' />
            <About />
            <Ratings />
        </div >
    );
};

export default ContentDetails;