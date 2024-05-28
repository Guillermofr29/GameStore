import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { carouselItems } from '../Data/BannersData';
import Button from 'react-bootstrap/Button';
import '../Styles/BannerStyles.css'

export const Banner: React.FC = () => {
    return (
        <Carousel className='banner' style={{ height: 'auto', width: '100%' }} id='home'>
            {carouselItems.map((item, index) => (
                <Carousel.Item key={index} style={{ height: '100%' }}>
                    <img src={item.image} alt={item.text} style={{ objectFit: 'cover', width: '100%', height: '100vh', opacity: 0.3 }} />
                    <Carousel.Caption style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 10px 5rem 10px'}}>
                        <h1>{item.text}</h1>
                        <p>{item.captionText}</p>
                        <Button className='Details'>Ver más</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};
