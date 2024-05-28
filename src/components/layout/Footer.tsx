import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import '../../Styles/FooterStyles.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='p-4 pb-0'>
        <section className='mb-4'>
          <button className='icon-btn FBIcon' aria-label="Facebook">
            <FacebookIcon />
          </button>
          <button className='icon-btn TwTIcon' aria-label="Twitter">
            <TwitterIcon />
          </button>
          <button className='icon-btn IGIcon' aria-label="Instagram">
            <InstagramIcon />
          </button>
          <button className='icon-btn YTIcon' aria-label="YouTube">
            <YouTubeIcon />
          </button>
        </section>
      </div>
      <div className='text-center txt p-3'>
        <CopyrightIcon /> {currentYear} GameZone | Todos los derechos reservados
      </div>
    </footer>
  );
};
