import React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Slider from 'react-slick';
import { GamesI } from '../interfaces/GamesI';
import StarRating from './StartRating';


interface GameCardProps {
  games: GamesI[];
  title: string;
  description: string;
  showOfferPrice?: boolean;
}

export const SliderGameCard: React.FC<GameCardProps> = ({ games, title, description, showOfferPrice }) => {
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
    <>
      <Typography className="title" variant='h2'>{title}</Typography>
      <Typography variant="body1" className='description'>
        {description}
      </Typography>
      <Slider {...settings}>
        {games.map((card: GamesI) => (
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
                {showOfferPrice && (
                  <div className="price">
                    <span className="original-price">${card.price}</span>
                    <span className="offer-price">${card.offerPrice}</span>
                  </div>
                )}
                {!showOfferPrice && (
                  <Typography className="price" variant="h6" component="div">
                    ${card.price}
                  </Typography>
                )}
                <Button className='Btn'>
                  Ver más
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </>
  );
};
