import React from 'react';
import { Rating } from '../../shared/enums/rating.enum';

const getBtnClasses = (btnType, rateType, color) => {
  const classes = ['btn', 'btn-lg', 'btn-block'];

  if (rateType === btnType) {
    classes.push(`btn-${color}`);
  } else {
    classes.push(`btn-outline-${color}`);
  }

  return classes.join(' ');
};

function RatingButtons({ onClick, selectedRate }) {
  return (
    <>
      <button
        onClick={onClick}
        className={getBtnClasses('Lame', selectedRate, 'danger')}
        id='Lame'
      >
        {Rating.Lame}
      </button>
      <button
        onClick={onClick}
        className={getBtnClasses('Meh', selectedRate, 'warning')}
        id='Meh'
      >
        {Rating.Meh}
      </button>
      <button
        onClick={onClick}
        className={getBtnClasses('Great', selectedRate, 'success')}
        id='Great'
      >
        {Rating.Great}
      </button>
    </>
  );
}

export default RatingButtons;
