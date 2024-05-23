import React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Slider from 'react-slick';
import { cardsData } from '../Data/NewGamesData';
import '../Styles/NewGamesStyles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/NewGamesStyles.css';

export const NewGames: React.FC = () => {
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
    <div className="NewGame-Container p-5" id='populars'>
      <Typography className="title" variant='h2'>Novedades</Typography>
      <Slider {...settings}>
        {cardsData.map((card) => (
          <div key={card.id} className='slider-card'>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={card.imgSrc}
                alt={card.title}
              />
              <CardContent>
                <Typography className='name' variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography className='text' variant="body2" color="text.secondary">
                  {card.text}
                </Typography>
                <Button variant="contained" color="primary">
                  Go somewhere
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};
