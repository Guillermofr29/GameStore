import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { categoriesItems } from '../Data/CategoriesData';
import '../Styles/CatStyles.css';

interface CardProps {
  image: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
    <a href="#" className="card">
      <div className="card__image">
        <img src={image} alt={title} />
      </div>
      <h2 className="card__title">{title}</h2>
    </a>
  );
};

export const Categories = () => {
  return (
    <div className="categories-container p-5" id="categories">
      <Container>
        <Typography className="title" variant='h2'>Categorias</Typography>
        <Grid container spacing={2}>
          {categoriesItems.map((card, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Card image={card.image} title={card.title} text={card.text} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
