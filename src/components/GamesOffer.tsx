import React from 'react';
import { offerGames } from '../Data/GamesOfferData';
import {SliderGameCard} from '../components/SliderCard';
import '../Styles/GamesOfferStyle.css';


export const GamesOffer: React.FC = () => {
  return (
    <div className='GamesOffer-Container p-5' id='offerts'>
      <SliderGameCard
        games={offerGames}
        title="Ofertas"
        description="Aprovecha las mejores ofertas y descuentos en videojuegos, encuentra precios irresistibles en una selección especial de títulos."
        showOfferPrice={true}
      />
    </div>
  );
};

