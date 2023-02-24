import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.css";
import dog1 from '../assets/images/dog-photo/dg-2.jpg'
// import dog2 from '../assets/images/dog-photo/dg-2.jpg'
import dog3 from '../assets/images/dog-photo/dg-3.jpg'
import dog4 from '../assets/images/dog-photo/dg-4.jpg'
import dog5 from '../assets/images/dog-photo/dg-5.jpg'
import dog6 from '../assets/images/dog-photo/dg-6.jpg'
import dog7 from '../assets/images/dog-photo/dg-7.jpg'
// import dog6 from '../assets/images/dog-photo/new-dog-6.jpg'

// import required modules
import { Pagination } from "swiper";

const MySwiper = () => {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src='https://m.media-amazon.com/images/I/912pIokFrfL._AC_SX679_.jpg' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://m.media-amazon.com/images/I/71ofnzf4UdL._AC_SX679_.jpg' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://m.media-amazon.com/images/I/81eTYRU07CL._AC_SX679_.jpg' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'https://m.media-amazon.com/images/I/81eTYRU07CL._AC_SX679_.jpg'} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'https://m.media-amazon.com/images/I/71ofnzf4UdL._AC_SX679_.jpg'} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'https://m.media-amazon.com/images/I/912pIokFrfL._AC_SX679_.jpg'} alt="" />
                </SwiperSlide>
                {/*  <SwiperSlide>
                    <img src={dog7} alt="" />
                </SwiperSlide> */}
                {/*    <SwiperSlide>
                    <video width="500" height="900" controls >
                        <source src="https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/d73e6995-5a15-4f4d-bd2b-5ebf76f5143b/default.jobtemplate.mp4.480.mp4" />
                    </video>
                </SwiperSlide> */}
            </Swiper>
        </>
    );
}


export default MySwiper;