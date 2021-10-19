import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstImage from './images/1.jpg';
import secondImage from './images/2.jpg';
import thirdImage from './images/3.jpg';
import './banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={firstImage}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Kushtia Health Center</h3>
                <p>Welcome to Kushtia Health Center</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={secondImage}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Best Health Services</h3>
                <p>Trustworthy and professinals near at your hand</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={thirdImage}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Supreme facilities</h3>
                <p>We are offering highest possible facilities in our country</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;