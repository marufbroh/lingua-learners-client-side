import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.webp'
import banner4 from '../../assets/banner4.webp'

const Banner = () => {
    return (
        <Carousel autoPlay>
            <div>
                <img src={banner4} />
            </div>
            <div>
                <img src={banner2} />
            </div>
            <div>
                <img src={banner3} />
            </div>
            <div>
                <img src={banner1} />
            </div>
        </Carousel>
    );
};

export default Banner;