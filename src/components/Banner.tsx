import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { carouselItems } from '../Data/BannersData';
import Button from 'react-bootstrap/Button';
import '../Styles/BannerStyles.css'

export const Banner: React.FC = () => {
    return (
        <Carousel className='banner' style={{ height: 'auto', width: '100%' }} id='home'>
            {carouselItems.map((item, index) => (
                <Carousel.Item key={index} style={{ height: '100%' }} interval={2000}>
                    <img src={item.image} alt={item.text} style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: 0.3, background: 'linear-gradient(90deg, rgba(2,0,23,1) 0%, rgba(28,1,72,1) 35%, rgba(39,0,38,1) 100%)' }} />
                    <Carousel.Caption style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                        <h1>{item.text}</h1>
                        {/* <h5>{item.captionTitle}</h5> */}
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Button>hola</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};
