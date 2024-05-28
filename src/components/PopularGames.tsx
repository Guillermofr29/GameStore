import React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Slider from 'react-slick';
import { popularGms } from '../Data/PopularGamesData';
import { GamesI } from '../interfaces/GamesI';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/PopularGames.css';
import StarRating from './StarRating';

export const PopularGames: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="PopularGames-Container p-5" id='populars'>
      <div className="content">
        <Typography className="title" variant='h2'>Populares</Typography>
        <Typography variant="body1" className='description'>
      Estos son los juegos más populares del momento. Vea qué títulos están capturando la atención de los jugadores de todo el mundo y únete a la diversión.
    </Typography>
        <Slider {...settings}>
          {popularGms.map((card: GamesI) => (
            <div key={card.id} className='slider-card'>
              <Card className='card-item'>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.imgSrc}
                  alt={card.title}
                />
                <CardContent className='card-content'>
                  <Typography className='name' variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography className='text'>
                    {card.developer}
                  </Typography>
                  <StarRating rating={card.rating} />
                  <Typography className="price" variant="h6" component="div">
                    ${card.price}
                  </Typography>
                  <Button className='Btn'>
                    Ver más
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
