import React from 'react';
import { Typography } from '@mui/material';
import pcIcon from '../assets/img/pc.png';
import playIcon from '../assets/img/playstation.png';
import xboxIcon from '../assets/img/xbox.png';
import switchIcon from '../assets/img/switch.png';

const platforms = [
  { name: 'PC', icon: pcIcon },
  { name: 'PlayStation', icon: playIcon },
  { name: 'Xbox', icon: xboxIcon },
  { name: 'Switch', icon: switchIcon },
];

export const Platforms: React.FC = () => {
  return (
    <div className="platforms-container p-5">
      <Typography className="subtitle" variant='h2'>Plataformas</Typography>
      <div className="platforms-icons">
        {platforms.map(platform => (
          <div key={platform.name} className="platform-icon">
            <img src={platform.icon} alt={platform.name} />
            <span>{platform.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

