import React from 'react';
import { Star, StarHalf, StarBorder } from '@mui/icons-material';
import '../App.css';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <Star key={index} className="gold-star"/>
      ))}
      {halfStar && <StarHalf className="gold-star" />}
      {[...Array(emptyStars)].map((_, index) => (
        <StarBorder key={index} className="gold-star" />
      ))}
    </div>
  );
};

export default StarRating;
