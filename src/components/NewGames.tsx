import React from 'react';
import { newGames } from '../Data/NewGamesData';
import {SliderGameCard} from '../components/SliderCard';
import '../Styles/NewGamesStyles.css';


export const NewGames: React.FC = () => {
  return (
    <div className='NewGame-Container p-5' id='news'>
      <SliderGameCard
        games={newGames}
        title="Novedades"
        description="Descubre las últimas novedades en el mundo de los videojuegos. Mantente al día con los lanzamientos más recientes y no te pierdas ningún título nuevo."
      />
    </div>
  );
};

